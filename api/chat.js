// api/chat.js — Vercel serverless function
// Replaces the OpenAI version. Client (ramanujanbot.html) does NOT need
// to change — it still POSTs { messages: [...] } here and reads
// { reply: "..." } back, same as before.

export default async function handler(req, res) {
  // Basic CORS so the browser can call this from your GitHub Pages domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not set in Vercel environment variables' });
  }

  try {
    const { messages } = req.body;
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    // Gemini takes the system prompt separately (systemInstruction),
    // not as a message inside the conversation array.
    const systemMsg = messages.find(m => m.role === 'system');
    const conversation = messages.filter(m => m.role !== 'system');

    // Gemini's format: { role: "user" | "model", parts: [{ text }] }
    // OpenAI's "assistant" role becomes Gemini's "model" role.
    const contents = conversation.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const MODEL = 'gemini-2.0-flash'; // fast + free-tier friendly

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          ...(systemMsg
            ? { systemInstruction: { parts: [{ text: systemMsg.content }] } }
            : {}),
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 220
          }
        })
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json().catch(() => ({}));
      throw new Error((errData.error && errData.error.message) || `HTTP ${geminiRes.status}`);
    }

    const data = await geminiRes.json();
    const reply =
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0] &&
      data.candidates[0].content.parts[0].text
        ? data.candidates[0].content.parts[0].text.trim()
        : 'Sorry, I had trouble forming a reply.';

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(500).json({ error: err.message });
  }
  }
