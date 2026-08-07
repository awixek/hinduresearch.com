/* ==========================================================================
   yogaData.js — Hindu Research Portal
   Data source for yoga.html (Yoga & Meditation directory)
   Pattern matches the inline `hinduPlaces` array used in places.html,
   pulled into its own file to keep yoga.html lightweight.

   Fields per entry:
     id            -> 1-15 within its own category
     category      -> "Yoga" | "Meditation"
     title_hi      -> Hindi/Sanskrit name
     title_en      -> English name
     desc_hi       -> Hindi description (technique + spiritual context)
     desc_en       -> English description (technique + spiritual context)
     fact_hi       -> Research-backed scientific fact / key benefit (Hindi)
     fact_en       -> Research-backed scientific fact / key benefit (English)
     query         -> Search term used for the "Learn More" outbound link
   ========================================================================== */

const yogaMeditationData = [

  /* ======================= YOGA — 15 ASANAS ======================= */
  {
    id: 1,
    category: "Yoga",
    title_hi: "ताड़ासन (Tadasana)",
    title_en: "Tadasana (Mountain Pose)",
    desc_hi: "यह सभी खड़े आसनों की आधारशिला है — पैरों को जोड़कर, रीढ़ को सीधा रखते हुए, शरीर के भार को समान रूप से संतुलित किया जाता है। यह आसन शरीर की मुद्रा (posture) को ठीक करने और शरीर के प्रति जागरूकता (body awareness) बढ़ाने के लिए वैदिक परंपरा में सिखाया जाता रहा है।",
    desc_en: "The foundation of every standing asana — feet together, spine erect, body weight evenly distributed. Traditionally taught as the first posture to build body awareness before any deeper practice.",
    fact_hi: "शोध बताते हैं कि नियमित ताड़ासन अभ्यास पोस्चरल अलाइनमेंट में सुधार करता है और संतुलन बनाए रखने वाली मांसपेशियों (proprioceptive muscles) को मजबूत करता है।",
    fact_en: "Studies on postural yoga show regular practice improves spinal alignment and strengthens the stabilizer muscles responsible for balance and proprioception.",
    query: "Tadasana Mountain Pose benefits"
  },
  {
    id: 2,
    category: "Yoga",
    title_hi: "वृक्षासन (Vrikshasana)",
    title_en: "Vrikshasana (Tree Pose)",
    desc_hi: "एक पैर पर खड़े होकर दूसरे पैर को जांघ पर टिकाया जाता है, हाथ ऊपर की ओर जुड़े रहते हैं — मानो वृक्ष अपनी जड़ों पर स्थिर हो। यह आसन एकाग्रता (dharana) की पहली सीढ़ी माना जाता है, क्योंकि संतुलन बनाए रखने के लिए मन को एक बिंदु पर केंद्रित करना पड़ता है।",
    desc_en: "Balancing on one leg with the other foot resting on the inner thigh, palms joined overhead — rooted like a tree. Considered an early step toward dharana (concentration), since balance demands a single-pointed mind.",
    fact_hi: "अनुसंधान में पाया गया है कि संतुलन-आधारित आसन जैसे वृक्षासन वृद्ध वयस्कों में गिरने के जोखिम को कम करते हैं और टखनों की स्थिरता बढ़ाते हैं।",
    fact_en: "Balance-based poses like Vrikshasana have been shown in research to reduce fall risk in older adults and improve ankle joint stability.",
    query: "Vrikshasana Tree Pose benefits"
  },
  {
    id: 3,
    category: "Yoga",
    title_hi: "अधोमुख श्वानासन (Adho Mukha Svanasana)",
    title_en: "Adho Mukha Svanasana (Downward-Facing Dog)",
    desc_hi: "हाथ और पैर ज़मीन पर टिकाकर शरीर को उल्टे 'V' आकार में लाया जाता है। यह हठ योग की सबसे प्राचीन और सर्वाधिक अभ्यास की जाने वाली मुद्राओं में से एक है, जो सूर्य नमस्कार क्रम का भी अभिन्न हिस्सा है।",
    desc_en: "Hands and feet grounded, body forming an inverted 'V'. One of the oldest and most widely practiced Hatha Yoga postures, and a core part of the Surya Namaskar sequence.",
    fact_hi: "अध्ययनों में यह आसन रक्त संचार को सिर की ओर बढ़ाकर मानसिक सतर्कता में सुधार और हैमस्ट्रिंग व पिंडलियों के लचीलेपन को बढ़ाता दिखाया गया है।",
    fact_en: "Clinical yoga studies associate this pose with improved circulation toward the brain, increased mental alertness, and greater hamstring and calf flexibility.",
    query: "Adho Mukha Svanasana Downward Dog benefits"
  },
  {
    id: 4,
    category: "Yoga",
    title_hi: "भुजंगासन (Bhujangasana)",
    title_en: "Bhujangasana (Cobra Pose)",
    desc_hi: "पेट के बल लेटकर हाथों के सहारे ऊपरी शरीर को ऊपर उठाया जाता है, जैसे नाग अपना फन उठाता है। यह आसन रीढ़ की लचक बढ़ाने के साथ-साथ मणिपुर चक्र को सक्रिय करने वाला माना जाता है।",
    desc_en: "Lying face-down, the upper body is lifted on the arms like a rising cobra. Traditionally linked to activating the Manipura (solar plexus) chakra while increasing spinal flexibility.",
    fact_hi: "अध्ययन बताते हैं कि भुजंगासन पीठ के निचले हिस्से की मांसपेशियों को मजबूत करता है और हल्के कमर दर्द (lower back pain) में राहत देने में सहायक पाया गया है।",
    fact_en: "Research on therapeutic yoga indicates Bhujangasana strengthens lower-back musculature and has been found helpful in easing mild chronic lower-back pain.",
    query: "Bhujangasana Cobra Pose benefits"
  },
  {
    id: 5,
    category: "Yoga",
    title_hi: "त्रिकोणासन (Trikonasana)",
    title_en: "Trikonasana (Triangle Pose)",
    desc_hi: "पैरों को चौड़ा फैलाकर शरीर को एक ओर झुकाया जाता है, एक हाथ ज़मीन की ओर और दूसरा आकाश की ओर — शरीर एक त्रिकोण का आकार लेता है। यह आसन शरीर के पार्श्व भाग (lateral body) को खोलने के लिए प्रसिद्ध है।",
    desc_en: "With feet wide apart, the torso bends sideways — one hand reaching down, the other up — forming a triangle. Known for opening the lateral body and side muscle chains.",
    fact_hi: "शोध में त्रिकोणासन को पाचन क्रिया उत्तेजित करने, कमर की चर्बी घटाने और रीढ़ की पार्श्विक गतिशीलता (lateral mobility) सुधारने से जोड़ा गया है।",
    fact_en: "Studies link Trikonasana to stimulated digestion, improved lateral spinal mobility, and support for core and oblique muscle toning.",
    query: "Trikonasana Triangle Pose benefits"
  },
  {
    id: 6,
    category: "Yoga",
    title_hi: "सेतुबंधासन (Setu Bandhasana)",
    title_en: "Setu Bandhasana (Bridge Pose)",
    desc_hi: "पीठ के बल लेटकर घुटनों को मोड़ते हुए कूल्हों को ऊपर उठाया जाता है, शरीर एक सेतु (पुल) का आकार लेता है। यह एक हल्का बैकबेंड है जो थायरॉइड ग्रंथि को उत्तेजित करने के लिए जाना जाता है।",
    desc_en: "Lying on the back with knees bent, the hips are lifted to form a bridge shape. A gentle backbend traditionally associated with stimulating the thyroid gland.",
    fact_hi: "अध्ययनों में सेतुबंधासन को रक्तचाप कम करने, तनाव-हार्मोन कॉर्टिसोल घटाने और हल्के अनिद्रा के लक्षणों में सुधार से जोड़ा गया है।",
    fact_en: "Clinical yoga research associates Setu Bandhasana with modest reductions in blood pressure and cortisol levels, along with improvements in mild insomnia symptoms.",
    query: "Setu Bandhasana Bridge Pose benefits"
  },
  {
    id: 7,
    category: "Yoga",
    title_hi: "बालासन (Balasana)",
    title_en: "Balasana (Child's Pose)",
    desc_hi: "घुटनों के बल बैठकर माथा ज़मीन पर टिकाया जाता है, हाथ आगे या शरीर के पास रखे जाते हैं — एक विश्रामदायक मुद्रा जो अभ्यास के बीच शरीर और मन को शांत करने के लिए प्रयोग होती है।",
    desc_en: "Kneeling with the forehead resting on the floor, arms extended or relaxed alongside the body — a restorative pose traditionally used to reset the nervous system between more demanding asanas.",
    fact_hi: "शोध में यह मुद्रा पैरासिम्पेथेटिक तंत्रिका तंत्र को सक्रिय कर हृदय गति धीमी करने और चिंता के स्तर को घटाने में सहायक पाई गई है।",
    fact_en: "Research suggests this restorative pose activates the parasympathetic nervous system, slowing heart rate and lowering measured anxiety levels.",
    query: "Balasana Child's Pose benefits"
  },
  {
    id: 8,
    category: "Yoga",
    title_hi: "पश्चिमोत्तानासन (Paschimottanasana)",
    title_en: "Paschimottanasana (Seated Forward Bend)",
    desc_hi: "पैरों को सामने फैलाकर बैठकर धड़ को आगे झुकाया जाता है और हाथों से पैरों को पकड़ा जाता है। परंपरागत रूप से यह पूरे पश्चिम भाग (पीठ) को खींचने वाला आसन माना गया है, इसलिए नाम 'पश्चिम-उत्तान'।",
    desc_en: "Seated with legs extended, the torso folds forward to reach the feet. Classically named for stretching the entire posterior ('paschima') body — spine, hamstrings and back.",
    fact_hi: "अध्ययनों में यह आसन तनाव को कम करने, पाचन तंत्र को उत्तेजित करने और हैमस्ट्रिंग व पीठ की मांसपेशियों में लचीलापन बढ़ाने से जुड़ा पाया गया है।",
    fact_en: "Studies associate this forward fold with reduced stress markers, stimulated digestion, and measurable gains in hamstring and lower-back flexibility.",
    query: "Paschimottanasana Seated Forward Bend benefits"
  },
  {
    id: 9,
    category: "Yoga",
    title_hi: "धनुरासन (Dhanurasana)",
    title_en: "Dhanurasana (Bow Pose)",
    desc_hi: "पेट के बल लेटकर टखनों को हाथों से पकड़ा जाता है और शरीर को धनुष के आकार में ऊपर उठाया जाता है। यह एक गहरा बैकबेंड है जो पूरे अग्र भाग (पेट, छाती, जांघों) को खींचता है।",
    desc_en: "Lying face-down, the ankles are held by the hands and the body is lifted into a bow shape. A deep backbend that stretches the entire front line of the body — abdomen, chest and thighs.",
    fact_hi: "योग-आधारित शोध में धनुरासन को पाचन अंगों की मालिश, रीढ़ की मजबूती और मुद्रा (posture) सुधार से जोड़ा गया है।",
    fact_en: "Yoga-based studies link Dhanurasana to a natural massaging effect on digestive organs, strengthened spinal muscles, and improved overall posture.",
    query: "Dhanurasana Bow Pose benefits"
  },
  {
    id: 10,
    category: "Yoga",
    title_hi: "सर्वांगासन (Sarvangasana)",
    title_en: "Sarvangasana (Shoulder Stand)",
    desc_hi: "कंधों के बल पूरे शरीर को सीधा ऊपर उठाया जाता है। इसे 'आसनों की रानी' कहा जाता है क्योंकि यह पूरे शरीर ('सर्व-अंग') को एक साथ लाभ पहुंचाता है और थायरॉइड ग्रंथि पर सीधा प्रभाव डालता है।",
    desc_en: "The entire body is inverted and balanced on the shoulders. Traditionally called the 'queen of asanas' because it benefits the whole body ('sarva-anga') at once, with direct effect on the thyroid region.",
    fact_hi: "उलटे (inversion) आसनों पर हुए अध्ययनों में शिरा-वापसी (venous return) में सुधार और मानसिक थकान घटाने के प्रमाण मिले हैं — हालांकि उच्च रक्तचाप वालों को सावधानी बरतनी चाहिए।",
    fact_en: "Studies on inversion postures report improved venous return and reduced mental fatigue, though people with high blood pressure or neck issues are advised caution.",
    query: "Sarvangasana Shoulder Stand benefits"
  },
  {
    id: 11,
    category: "Yoga",
    title_hi: "हलासन (Halasana)",
    title_en: "Halasana (Plow Pose)",
    desc_hi: "सर्वांगासन से आगे बढ़ते हुए पैरों को सिर के पीछे ज़मीन पर टिकाया जाता है — शरीर हल (plough) के आकार में आ जाता है, जो प्राचीन कृषि-आधारित प्रतीकों से प्रेरित नाम है।",
    desc_en: "Extending from Shoulder Stand, the legs are lowered behind the head to touch the floor — the body forming the shape of a plough, a name rooted in agrarian symbolism.",
    fact_hi: "अध्ययनों में हलासन को रीढ़ की लचक बढ़ाने, थायरॉइड कार्य को उत्तेजित करने और तनाव संबंधी लक्षणों को घटाने से जोड़ा गया है।",
    fact_en: "Research associates Halasana with increased spinal flexibility, stimulation of thyroid function, and reductions in self-reported stress symptoms.",
    query: "Halasana Plow Pose benefits"
  },
  {
    id: 12,
    category: "Yoga",
    title_hi: "अर्ध मत्स्येन्द्रासन (Ardha Matsyendrasana)",
    title_en: "Ardha Matsyendrasana (Seated Spinal Twist)",
    desc_hi: "बैठकर रीढ़ को एक ओर मोड़ा जाता है, नाम नाथ योगी 'मत्स्येन्द्रनाथ' के नाम पर रखा गया है। यह आसन रीढ़ की सभी दिशाओं में गति सुनिश्चित करने के लिए हठ योग क्रम में महत्वपूर्ण माना जाता है।",
    desc_en: "A seated spinal twist named after the Nath yogi Matsyendranath. Considered essential in Hatha Yoga sequencing to ensure the spine moves through rotation, not just flexion and extension.",
    fact_hi: "शोध बताते हैं कि रीढ़ की घुमाव-मुद्राएँ (twisting poses) पाचन अंगों को उत्तेजित करती हैं और रीढ़ की जोड़ों की गतिशीलता बनाए रखने में सहायक हैं।",
    fact_en: "Studies suggest spinal-twist postures stimulate the digestive organs and help maintain healthy range of motion in the vertebral joints over time.",
    query: "Ardha Matsyendrasana Spinal Twist benefits"
  },
  {
    id: 13,
    category: "Yoga",
    title_hi: "वीरभद्रासन (Virabhadrasana)",
    title_en: "Virabhadrasana (Warrior Pose)",
    desc_hi: "शिव द्वारा रचित योद्धा 'वीरभद्र' के नाम पर रखा गया यह आसन पैरों को लंबा फैलाकर और घुटने को मोड़कर शक्ति और स्थिरता दोनों का संतुलन सिखाता है।",
    desc_en: "Named after the fierce warrior Virabhadra created by Shiva, this lunging pose builds a balance of strength and stability in the legs, hips and core.",
    fact_hi: "अध्ययनों में योद्धा मुद्राओं को पैरों की मांसपेशियों को मजबूत करने, संतुलन सुधारने और आत्म-विश्वास से जुड़े मानसिक प्रभावों से जोड़ा गया है।",
    fact_en: "Research on warrior-series poses links them to strengthened lower-body muscles, improved balance, and self-reported gains in confidence and focus.",
    query: "Virabhadrasana Warrior Pose benefits"
  },
  {
    id: 14,
    category: "Yoga",
    title_hi: "शवासन (Shavasana)",
    title_en: "Shavasana (Corpse Pose)",
    desc_hi: "पीठ के बल पूरी तरह शिथिल होकर लेटना, शव के समान निश्चल — प्रत्येक योग सत्र का समापन इसी आसन से होता है ताकि शरीर अभ्यास किए गए प्रभावों को आत्मसात कर सके।",
    desc_en: "Lying completely still on the back, motionless like a corpse — traditionally the closing pose of every yoga session, allowing the body to integrate the effects of practice.",
    fact_hi: "अध्ययनों में शवासन को कॉर्टिसोल स्तर घटाने, रक्तचाप नियंत्रित करने और गहरी विश्राम अवस्था (deep relaxation response) उत्पन्न करने के लिए प्रभावी पाया गया है।",
    fact_en: "Clinical studies show Shavasana reliably lowers cortisol, helps regulate blood pressure, and triggers the body's deep relaxation response.",
    query: "Shavasana Corpse Pose benefits"
  },
  {
    id: 15,
    category: "Yoga",
    title_hi: "सूर्य नमस्कार (Surya Namaskar)",
    title_en: "Surya Namaskar (Sun Salutation)",
    desc_hi: "12 आसनों का एक प्रवाहमय क्रम, जो सूर्य देव को नमन करते हुए किया जाता है। यह वैदिक परंपरा में शरीर, श्वास और सूर्य ऊर्जा के तालमेल का सबसे पूर्ण अभ्यास माना जाता है।",
    desc_en: "A flowing sequence of 12 postures performed as a salutation to the sun. Regarded in Vedic tradition as the most complete practice for harmonising body, breath and solar energy.",
    fact_hi: "शोध में सूर्य नमस्कार को हृदय-श्वसन सहनशक्ति (cardio-respiratory fitness) बढ़ाने, कैलोरी व्यय बढ़ाने और लचीलेपन में सर्वांगीण सुधार से जोड़ा गया है।",
    fact_en: "Studies on Surya Namaskar report measurable gains in cardio-respiratory endurance, increased caloric expenditure, and whole-body flexibility improvements.",
    query: "Surya Namaskar Sun Salutation benefits"
  },

  /* ==================== MEDITATION — 15 PRACTICES ==================== */
  {
    id: 1,
    category: "Meditation",
    title_hi: "विपश्यना ध्यान (Vipassana)",
    title_en: "Vipassana Meditation",
    desc_hi: "'जैसा है वैसा देखना' — शरीर में उठने वाली संवेदनाओं को बिना प्रतिक्रिया के केवल साक्षी भाव से देखने की प्राचीन साधना पद्धति, जो भारत की सबसे पुरानी ध्यान-परंपराओं में से एक मानी जाती है।",
    desc_en: "Meaning 'to see things as they truly are', this ancient practice trains the mind to observe bodily sensations with pure equanimity, without reacting — one of India's oldest documented meditation lineages.",
    fact_hi: "10-दिवसीय विपश्यना शिविरों पर हुए अध्ययनों में चिंता, अवसाद के लक्षण घटने और भावनात्मक नियमन (emotional regulation) में सुधार दर्ज किया गया है।",
    fact_en: "Peer-reviewed studies on 10-day Vipassana retreats have recorded reduced anxiety and depressive symptoms alongside measurable improvements in emotional regulation.",
    query: "Vipassana Meditation research benefits"
  },
  {
    id: 2,
    category: "Meditation",
    title_hi: "अनापान ध्यान / प्राणायाम-आधारित साधना",
    title_en: "Anapana (Breath-Awareness Meditation)",
    desc_hi: "श्वास के प्राकृतिक आवागमन — नासिका के पास हवा के स्पर्श — पर मन को केंद्रित करने की तकनीक, जो एकाग्रता (dharana) विकसित करने की पहली सीढ़ी मानी जाती है और अक्सर गहन ध्यान का प्रवेश-द्वार होती है।",
    desc_en: "A technique of focusing the mind purely on the natural sensation of breath at the nostrils. Regarded as the foundational step toward dharana (concentration) and the gateway into deeper meditation practices.",
    fact_hi: "श्वास-केंद्रित ध्यान पर हुए अध्ययनों में तनाव-हार्मोन कॉर्टिसोल में कमी और पैरासिम्पेथेटिक तंत्रिका तंत्र की सक्रियता के प्रमाण मिले हैं।",
    fact_en: "Breath-focused meditation research consistently shows reduced cortisol levels and increased activation of the calming parasympathetic nervous system.",
    query: "Anapana breath awareness meditation benefits"
  },
  {
    id: 3,
    category: "Meditation",
    title_hi: "त्राटक ध्यान (Trataka)",
    title_en: "Trataka (Candle-Gazing Meditation)",
    desc_hi: "बिना पलक झपकाए किसी एक बिंदु — प्रायः दीपक की लौ — पर एकटक दृष्टि जमाए रखने की हठ योग की षट्कर्म (शुद्धिकरण क्रिया) में से एक। यह मन की चंचलता को रोककर एकाग्रता को गहरा करने के लिए प्रयोग होती है।",
    desc_en: "A Hatha Yoga shatkarma (purification technique) involving steady, unblinking gaze at a single point — typically a flame. Used traditionally to still the wandering mind and sharpen deep concentration.",
    fact_hi: "प्रारंभिक अध्ययनों में त्राटक अभ्यास को दृश्य ध्यान (visual attention) और संज्ञानात्मक फोकस में सुधार से जोड़ा गया है।",
    fact_en: "Preliminary research on Trataka practice links it to improved sustained visual attention and gains in cognitive focus during attention-demanding tasks.",
    query: "Trataka candle gazing meditation benefits"
  },
  {
    id: 4,
    category: "Meditation",
    title_hi: "योग निद्रा (Yoga Nidra)",
    title_en: "Yoga Nidra (Yogic Sleep)",
    desc_hi: "'मनोवैज्ञानिक नींद' कही जाने वाली यह विधि जागरण और निद्रा के बीच की अवस्था में शरीर को पूर्ण शिथिल रखते हुए मन को सजग बनाए रखती है — तंत्र परंपरा में इसे गहन आंतरिक यात्रा का साधन माना गया है।",
    desc_en: "Often called 'psychic sleep', this practice keeps the mind subtly aware while the body rests in complete stillness between waking and sleep — regarded in Tantric tradition as a gateway to deep inner exploration.",
    fact_hi: "अध्ययनों में योग निद्रा को अनिद्रा के लक्षण घटाने, तनाव कम करने और गहरी विश्राम अवस्था के दौरान मस्तिष्क तरंगों (alpha/theta waves) में परिवर्तन से जोड़ा गया है।",
    fact_en: "Studies associate Yoga Nidra with reduced insomnia symptoms, lowered perceived stress, and measurable shifts toward alpha and theta brainwave states during deep rest.",
    query: "Yoga Nidra benefits research"
  },
  {
    id: 5,
    category: "Meditation",
    title_hi: "चक्र ध्यान (Chakra Meditation)",
    title_en: "Chakra Meditation",
    desc_hi: "शरीर के सात मुख्य ऊर्जा-केंद्रों (मूलाधार से सहस्रार तक) पर क्रमशः ध्यान केंद्रित करने की साधना, जो तंत्र और योग शास्त्रों में शरीर के भीतर सूक्ष्म ऊर्जा (प्राण) प्रवाह को संतुलित करने के लिए वर्णित है।",
    desc_en: "A practice of sequentially focusing awareness on the body's seven primary energy centres — from Muladhara to Sahasrara — described in Tantric and Yogic texts as a method to balance the subtle flow of prana.",
    fact_hi: "प्रारंभिक शोध में चक्र-केंद्रित ध्यान को शरीर-जागरूकता (interoceptive awareness) बढ़ाने और आत्म-रिपोर्टेड भावनात्मक संतुलन में सुधार से जोड़ा गया है।",
    fact_en: "Early research links chakra-focused meditation to heightened interoceptive body awareness and self-reported improvements in emotional balance.",
    query: "Chakra meditation guide benefits"
  },
  {
    id: 6,
    category: "Meditation",
    title_hi: "मंत्र ध्यान / ॐ जप (Mantra Meditation)",
    title_en: "Mantra Meditation (Om Chanting)",
    desc_hi: "एक पवित्र ध्वनि या शब्द — विशेषकर प्रणव 'ॐ' — के निरंतर, लयबद्ध जप के माध्यम से मन को एकाग्र करने की वैदिक पद्धति, जो सबसे प्राचीन दस्तावेज़ीकृत ध्यान तकनीकों में गिनी जाती है।",
    desc_en: "A Vedic method of concentrating the mind through the continuous, rhythmic repetition of a sacred sound — most notably the pranava 'Om' — counted among the oldest documented meditation techniques in the world.",
    fact_hi: "अनुसंधान में ॐ जप के दौरान मस्तिष्क-स्कैन में लिम्बिक तंत्र (भावनाओं से जुड़े क्षेत्र) की सक्रियता में परिवर्तन और गहरी विश्रांति की स्थिति दर्ज की गई है।",
    fact_en: "Brain-imaging studies during Om chanting have recorded measurable changes in limbic system activity and a state consistent with deep relaxation.",
    query: "Om chanting mantra meditation benefits"
  },
  {
    id: 7,
    category: "Meditation",
    title_hi: "ट्रान्सेंडेंटल मेडिटेशन (TM)",
    title_en: "Transcendental Meditation (TM)",
    desc_hi: "20वीं सदी में महर्षि महेश योगी द्वारा प्राचीन वैदिक जप-परंपरा को सरल बनाकर लोकप्रिय बनाई गई एक तकनीक, जिसमें एक व्यक्तिगत मंत्र को मौन रूप से दोहराते हुए मन को सहजता से गहन विश्राम की अवस्था में ले जाया जाता है।",
    desc_en: "Popularised in the 20th century by Maharishi Mahesh Yogi from ancient Vedic mantra-repetition traditions, this technique involves silently repeating a personal mantra to effortlessly settle the mind into deep rest.",
    fact_hi: "TM पर हुए दशकों के शोध में रक्तचाप घटाने, हृदय संबंधी जोखिम कारकों में सुधार और चिंता के स्तर में उल्लेखनीय कमी के प्रमाण मिले हैं।",
    fact_en: "Decades of published research on TM report reductions in blood pressure, improved cardiovascular risk markers, and notable decreases in anxiety levels.",
    query: "Transcendental Meditation TM research benefits"
  },
  {
    id: 8,
    category: "Meditation",
    title_hi: "माइंडफुलनेस ध्यान (Mindfulness Meditation)",
    title_en: "Mindfulness Meditation",
    desc_hi: "वर्तमान क्षण के प्रति बिना निर्णय (non-judgmental) जागरूकता विकसित करने की साधना, जिसकी जड़ें प्राचीन बौद्ध विपश्यना परंपरा में हैं और जिसे आधुनिक विज्ञान ने सबसे अधिक शोध किया गया ध्यान रूप बना दिया है।",
    desc_en: "A practice of cultivating non-judgmental awareness of the present moment, rooted in ancient Buddhist Vipassana lineages and now the most extensively studied form of meditation in modern clinical science.",
    fact_hi: "MBSR (Mindfulness-Based Stress Reduction) कार्यक्रमों पर सैकड़ों अध्ययनों में चिंता, दीर्घकालिक दर्द और अवसाद के लक्षणों में सांख्यिकीय रूप से महत्वपूर्ण कमी पाई गई है।",
    fact_en: "Hundreds of clinical trials on MBSR (Mindfulness-Based Stress Reduction) programs report statistically significant reductions in anxiety, chronic pain and depressive symptoms.",
    query: "Mindfulness meditation science benefits"
  },
  {
    id: 9,
    category: "Meditation",
    title_hi: "कुण्डलिनी ध्यान (Kundalini Meditation)",
    title_en: "Kundalini Meditation",
    desc_hi: "मूलाधार चक्र में सुप्त मानी जाने वाली आध्यात्मिक ऊर्जा 'कुण्डलिनी शक्ति' को श्वास, मुद्रा और मंत्र के संयोजन से जागृत कर सुषुम्ना नाड़ी के माध्यम से ऊपर प्रवाहित करने की तांत्रिक-योगिक साधना।",
    desc_en: "A Tantric-Yogic practice combining breath, mudra and mantra to awaken the dormant spiritual energy said to rest at the base of the spine, guiding it upward through the central Sushumna channel.",
    fact_hi: "प्रारंभिक अध्ययनों में कुण्डलिनी योग अभ्यास को चिंता विकारों में कमी और मूड से जुड़े मस्तिष्क क्षेत्रों में सक्रियता के परिवर्तन से जोड़ा गया है।",
    fact_en: "Preliminary clinical studies associate Kundalini yoga/meditation practice with reductions in anxiety-disorder symptoms and altered activity in mood-related brain regions.",
    query: "Kundalini meditation mind alignment benefits"
  },
  {
    id: 10,
    category: "Meditation",
    title_hi: "नाड़ी शोधन प्राणायाम (Alternate Nostril Breathing)",
    title_en: "Nadi Shodhana Pranayama",
    desc_hi: "बारी-बारी से एक नासिका को बंद करते हुए श्वास लेने-छोड़ने की तकनीक, जिसका उद्देश्य शरीर की सूक्ष्म नाड़ियों (इड़ा और पिंगला) को शुद्ध कर मन-शरीर में संतुलन स्थापित करना है — साधना और प्राणायाम अभ्यास का केंद्रीय स्तंभ।",
    desc_en: "A technique of alternately breathing through each nostril to purify the subtle energy channels (Ida and Pingala), traditionally aimed at balancing mind and body — a central pillar of pranayama practice.",
    fact_hi: "शोध में नाड़ी शोधन प्राणायाम को हृदय गति परिवर्तनशीलता (HRV) में सुधार, रक्तचाप में कमी और तनाव के शारीरिक चिह्नकों में सुधार से जोड़ा गया है।",
    fact_en: "Research links Nadi Shodhana practice to improved heart rate variability (HRV), reduced blood pressure, and better physiological markers of stress resilience.",
    query: "Nadi Shodhana alternate nostril breathing benefits"
  },
  {
    id: 11,
    category: "Meditation",
    title_hi: "मैत्री ध्यान (Loving-Kindness Meditation)",
    title_en: "Loving-Kindness Meditation (Metta)",
    desc_hi: "स्वयं से आरंभ कर क्रमशः प्रियजनों, अजनबियों और अंततः समस्त प्राणियों के प्रति करुणा और शुभकामना की भावना का विस्तार करने की साधना, जिसकी जड़ें प्राचीन भारतीय आध्यात्मिक परंपराओं में गहराई से जुड़ी हैं।",
    desc_en: "A practice of systematically extending compassion and goodwill — beginning with oneself, then loved ones, strangers, and finally all beings — rooted deeply in ancient Indian contemplative traditions.",
    fact_hi: "फंक्शनल MRI अध्ययनों में मैत्री ध्यान को सहानुभूति से जुड़े मस्तिष्क क्षेत्रों की सक्रियता बढ़ाने और नकारात्मक भावनाओं में कमी से जोड़ा गया है।",
    fact_en: "Functional MRI studies show loving-kindness meditation increases activity in empathy-related brain regions and reduces self-reported negative affect.",
    query: "Loving kindness Metta meditation benefits"
  },
  {
    id: 12,
    category: "Meditation",
    title_hi: "बॉडी स्कैन ध्यान (Body Scan Meditation)",
    title_en: "Body Scan Meditation",
    desc_hi: "शरीर के प्रत्येक भाग पर क्रमिक रूप से ध्यान ले जाकर वहाँ की संवेदनाओं को महसूस करने की तकनीक — जो योग निद्रा की परंपरा से प्रेरित है और शरीर-मन के गहरे संबंध को अनुभव कराती है।",
    desc_en: "A technique of systematically bringing attention through each part of the body to notice sensations without judgment — drawing directly from the Yoga Nidra tradition to deepen the mind-body connection.",
    fact_hi: "अध्ययनों में बॉडी स्कैन अभ्यास को दीर्घकालिक दर्द की अनुभूति में कमी और शारीरिक जागरूकता (interoception) में सुधार से जोड़ा गया है।",
    fact_en: "Studies link body scan practice to reduced perceived chronic pain intensity and measurable improvements in interoceptive body awareness.",
    query: "Body scan meditation benefits research"
  },
  {
    id: 13,
    category: "Meditation",
    title_hi: "साक्षी भाव ध्यान (Witness Consciousness / Sakshi Bhava)",
    title_en: "Witness-Consciousness Meditation (Sakshi Bhava)",
    desc_hi: "विचारों, भावनाओं और संवेदनाओं को बिना उनसे जुड़े केवल एक साक्षी की भाँति देखने का अभ्यास — अद्वैत वेदांत दर्शन में इसे आत्मा के वास्तविक स्वरूप को पहचानने का प्रमुख मार्ग माना गया है।",
    desc_en: "The practice of observing thoughts, emotions and sensations as a detached witness rather than identifying with them — central to Advaita Vedanta philosophy as a path toward recognising the true nature of the Self.",
    fact_hi: "मेटा-कॉग्निशन (अपने विचारों को देखने की क्षमता) पर हुए अध्ययनों में साक्षी-भाव जैसी तकनीकों को नकारात्मक विचार-चक्रों (rumination) घटाने से जोड़ा गया है।",
    fact_en: "Research on metacognitive awareness links witness-style observation techniques to reduced rumination and lower reactivity to distressing thoughts.",
    query: "Sakshi Bhava witness consciousness meditation"
  },
  {
    id: 14,
    category: "Meditation",
    title_hi: "गमन ध्यान (Walking Meditation)",
    title_en: "Walking Meditation",
    desc_hi: "प्रत्येक कदम, पैरों के ज़मीन से स्पर्श और शरीर की गति के प्रति सजग रहते हुए धीमी गति से चलने का अभ्यास — बौद्ध और योगिक दोनों परंपराओं में गतिशील ध्यान (moving meditation) के रूप में प्रचलित।",
    desc_en: "A slow, deliberate walking practice with full awareness of each step, the contact of feet with ground, and bodily movement — practiced in both Buddhist and Yogic traditions as a form of moving meditation.",
    fact_hi: "अध्ययनों में गमन ध्यान को मूड में सुधार, रक्तचाप नियमन और बैठे रहकर किए जाने वाले ध्यान के समान चिंता-कम करने वाले प्रभावों से जोड़ा गया है।",
    fact_en: "Studies show walking meditation improves mood, helps regulate blood pressure, and offers anxiety-reducing effects comparable to seated meditation.",
    query: "Walking meditation benefits research"
  },
  {
    id: 15,
    category: "Meditation",
    title_hi: "त्रिकुटी / आज्ञा चक्र ध्यान (Third Eye Meditation)",
    title_en: "Third-Eye Meditation (Ajna Chakra)",
    desc_hi: "भौंहों के मध्य स्थित आज्ञा चक्र (तीसरी आँख) पर ध्यान केंद्रित करने की साधना, जिसे योग-परंपरा में अंतर्ज्ञान (intuition) और आंतरिक दृष्टि जागृत करने का केंद्र माना गया है।",
    desc_en: "A practice of focusing attention at the point between the eyebrows — the Ajna chakra or 'third eye' — regarded in Yogic tradition as the seat of intuition and inner vision.",
    fact_hi: "प्रारंभिक शोध में भ्रूमध्य-केंद्रित ध्यान को एकाग्रता की अवधि (sustained attention span) बढ़ाने और मानसिक शांति की व्यक्तिपरक अनुभूति में सुधार से जोड़ा गया है।",
    fact_en: "Preliminary research links eyebrow-centre focused meditation to increased sustained attention span and improved subjective reports of mental calm.",
    query: "Third eye Ajna chakra meditation benefits"
  },
];
