// api/chat.js — Vercel serverless function
// Uses Groq's free API (OpenAI-compatible) via the NEW Groq account's key
// (separate from the one used by Rishi AI, so quotas don't share).
// Also enforces a per-user daily message limit using Upstash Redis.
//
// Client (ramanujanbot.html) does NOT need to change — same request/
// response shape as before: POST { messages: [...] } -> { reply: "..." }
// If the daily limit is hit, this returns HTTP 429 with { error: "..." }
// which the client already shows as a chat message.

const DAILY_LIMIT = 20; // messages per visitor per day — change as you like

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'GROQ_API_KEY not set in Vercel environment variables' });
  }

  try {
    const { messages } = req.body;
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    // ===== Per-user daily limit (only runs if Upstash is configured) =====
    if (UPSTASH_URL && UPSTASH_TOKEN) {
      const ip =
        (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
        req.socket?.remoteAddress ||
        'unknown';

      const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
      const key = `ramanujan:usage:${ip}:${today}`;

      const incrRes = await fetch(`${UPSTASH_URL}/incr/${encodeURIComponent(key)}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
      });
      const incrData = await incrRes.json();
      const count = incrData.result;

      if (count === 1) {
        // ~26h TTL so the key always outlives "today" regardless of timezone
        await fetch(`${UPSTASH_URL}/expire/${encodeURIComponent(key)}/93600`, {
          headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
        });
      }

      if (count > DAILY_LIMIT) {
        return res.status(429).json({
          error: `Aaj ke liye Ramanujan se baat karne ki limit (${DAILY_LIMIT} messages) poori ho gayi hai. Kal phir aana!`
        });
      }
    }

    // ===== Call Groq (OpenAI-compatible chat completions) =====
    const MODEL = 'openai/gpt-oss-120b'; // good quality, fast, free-tier friendly

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages, // same [{role, content}, ...] shape the client already sends
        temperature: 0.8,
        max_tokens: 220
      })
    });

    if (!groqRes.ok) {
      const errData = await groqRes.json().catch(() => ({}));
      throw new Error((errData.error && errData.error.message) || `HTTP ${groqRes.status}`);
    }

    const data = await groqRes.json();
    const reply =
      data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content.trim()
        : 'Sorry, I had trouble forming a reply.';

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Groq API error:', err);
    return res.status(500).json({ error: err.message });
  }
}
