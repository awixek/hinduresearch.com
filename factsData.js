// ===== SANATAN / VEDIC RESEARCH — DAILY FACTS DATA =====
// This file is the single source of truth for the homepage facts slider.
// Add new facts by copying the {source, text:{en, hi}} pattern below —
// the slider and language toggle both read from this array automatically.
const factsData = [
  {
    source: "Hanuman Chalisa",
    text: {
      en: "A verse of the Hanuman Chalisa gives a startlingly accurate scientific estimate of the distance between the Sun and Earth — \"Jug sahastra yojan par Bhanu\" — remarkably close to today's measured distance.",
      hi: "हनुमान चालीसा की एक चौपाई में सूर्य और पृथ्वी के बीच की दूरी का बेहद सटीक वैज्ञानिक अनुमान दिया गया है — \"जुग सहस्र योजन पर भानु\" — जो आज मापी गई दूरी के काफी करीब है।"
    }
  },
  {
    source: "Rigveda",
    text: {
      en: "A verse in the Rigveda describes the speed of light, which some scholars connect to the modern measured speed of light.",
      hi: "ऋग्वेद के एक श्लोक में प्रकाश की गति का उल्लेख मिलता है, जिसे कुछ विद्वान आधुनिक 'स्पीड ऑफ लाइट' के अनुमान से जोड़ते हैं।"
    }
  },
  {
    source: "Yajurveda",
    text: {
      en: "The Yajurveda contains a detailed number system that names very large numbers (powers of ten) — considered one of the world's oldest decimal systems.",
      hi: "यजुर्वेद में संख्या प्रणाली का विस्तृत उल्लेख है, जिसमें बड़ी संख्याओं (जैसे दस की शक्तियाँ) को नाम दिए गए थे — जिसे दुनिया की सबसे पुरानी दशमलव प्रणाली माना जाता है।"
    }
  },
  {
    source: "Sushruta Samhita",
    text: {
      en: "The Sushruta Samhita describes over 300 surgical procedures and more than 120 surgical instruments, forming the foundation of ancient surgery.",
      hi: "सुश्रुत संहिता में 300 से ज़्यादा शल्य चिकित्सा (सर्जिकल) प्रक्रियाओं और 120 से ज़्यादा सर्जिकल उपकरणों का वर्णन मिलता है, जिसे प्राचीन शल्य चिकित्सा का आधार माना जाता है।"
    }
  },
  {
    source: "Surya Siddhanta",
    text: {
      en: "The Surya Siddhanta text gives an estimate of Earth's diameter that closely matches modern measurements — without the use of a telescope.",
      hi: "सूर्य सिद्धांत ग्रंथ में पृथ्वी के व्यास (diameter) का अनुमान दिया गया है, जो आधुनिक मापों से काफी मेल खाता है — बिना किसी दूरबीन (टेलीस्कोप) के।"
    }
  },
  {
    source: "Baudhayana Sulba Sutra",
    text: {
      en: "The Pythagorean theorem was written down in the Baudhayana Sulba Sutra centuries before Pythagoras was born, used to construct precise fire altars.",
      hi: "पाइथागोरस प्रमेय (Pythagorean theorem) पाइथागोरस के जन्म से सदियों पहले बौधायन शुल्ब सूत्र में लिखी जा चुकी थी, जिसका उपयोग सटीक यज्ञ वेदियाँ बनाने में होता था।"
    }
  },
  {
    source: "Aryabhatiya",
    text: {
      en: "Aryabhata calculated the value of pi to four decimal places (3.1416) around 500 CE and stated it was an approximation, an unusually advanced insight for his time.",
      hi: "आर्यभट ने लगभग 500 ईस्वी में पाई (π) का मान चार दशमलव स्थानों तक (3.1416) निकाला और यह भी कहा कि यह एक सन्निकट (approximate) मान है — उस समय के लिए यह असाधारण समझ थी।"
    }
  },
  {
    source: "Aryabhatiya",
    text: {
      en: "Aryabhata stated that the Earth rotates on its own axis, causing day and night, over a thousand years before this was widely accepted in Europe.",
      hi: "आर्यभट ने बताया था कि पृथ्वी अपनी धुरी पर घूमती है, जिससे दिन और रात होते हैं — यह यूरोप में व्यापक रूप से स्वीकार किए जाने से एक हज़ार साल से भी पहले की बात है।"
    }
  },
  {
    source: "Kerala School of Mathematics",
    text: {
      en: "Madhava of Sangamagrama and the Kerala school derived infinite series for pi and trigonometric functions roughly 250 years before Newton and Leibniz developed calculus in Europe.",
      hi: "संगमग्राम के माधव और केरल स्कूल के गणितज्ञों ने पाई (π) और त्रिकोणमितीय फलनों (trigonometric functions) के लिए अनंत श्रृंखला (infinite series) लगभग 250 साल पहले निकाल ली थी, जब यूरोप में न्यूटन और लाइबनिज़ ने कैलकुलस विकसित किया।"
    }
  },
  {
    source: "Sushruta Samhita",
    text: {
      en: "Sushruta performed rhinoplasty (nose reconstruction) using a forehead skin flap around 600 BCE — the same core technique is still referenced in modern plastic surgery as the \"Indian method.\"",
      hi: "सुश्रुत ने लगभग 600 ईसा पूर्व माथे की त्वचा का फ्लैप उपयोग करके नाक की पुनर्निर्माण सर्जरी (rhinoplasty) की थी — यही मूल तकनीक आज भी आधुनिक प्लास्टिक सर्जरी में 'इंडियन मेथड' के नाम से प्रयोग होती है।"
    }
  },
  {
    source: "Sushruta Samhita",
    text: {
      en: "Ancient Indian surgeons are recorded to have used the strong mandibles of large black ants to stitch wounds shut, letting the ant's head act as a natural suture staple.",
      hi: "प्राचीन भारतीय शल्य चिकित्सकों के बारे में दर्ज है कि वे बड़ी काली चींटियों के मज़बूत जबड़ों का उपयोग घाव बंद करने के लिए करते थे — चींटी का सिर एक प्राकृतिक टांके की तरह काम करता था।"
    }
  },
  {
    source: "Charaka Samhita",
    text: {
      en: "The Charaka Samhita describes \"madhumeha\" (sweet urine disease) — recognisable as diabetes — noting that ants were attracted to the urine of affected patients, centuries before blood sugar testing existed.",
      hi: "चरक संहिता में 'मधुमेह' (sweet urine disease) का वर्णन मिलता है — जो आज की डायबिटीज़ जैसी है — इसमें बताया गया है कि रोगी के मूत्र की ओर चींटियाँ आकर्षित होती थीं, जो ब्लड शुगर टेस्ट के आविष्कार से सदियों पहले की बात है।"
    }
  },
  {
    source: "Panini's Ashtadhyayi",
    text: {
      en: "Panini's Sanskrit grammar, the Ashtadhyayi, is structured so precisely and algorithmically that modern computer scientists have compared its rule system to a formal programming language.",
      hi: "पाणिनि का संस्कृत व्याकरण ग्रंथ 'अष्टाध्यायी' इतनी सटीकता और क्रमबद्धता (algorithmic tarike) से लिखा गया है कि आधुनिक कंप्यूटर वैज्ञानिकों ने इसके नियमों की तुलना एक औपचारिक प्रोग्रामिंग भाषा से की है।"
    }
  },
  {
    source: "Iron Pillar of Delhi",
    text: {
      en: "The Iron Pillar of Delhi has stood in open air for over 1,600 years without rusting, thanks to a unique protective phosphorus-rich oxide layer that ancient metalworkers achieved without modern technology.",
      hi: "दिल्ली का लौह स्तंभ 1,600 साल से खुले आसमान में खड़ा है और आज तक जंग नहीं लगी — इसका कारण फास्फोरस-युक्त एक विशेष सुरक्षा परत (protective layer) है, जिसे प्राचीन धातुकर्मियों ने बिना आधुनिक तकनीक के हासिल किया था।"
    }
  },
  {
    source: "Wootz Steel",
    text: {
      en: "Ancient India produced high-carbon \"wootz\" crucible steel that was exported and forged into the legendary Damascus swords, prized for a strength and sharpness Europe couldn't replicate for centuries.",
      hi: "प्राचीन भारत उच्च-कार्बन 'वूट्ज़' (wootz) क्रूसिबल स्टील बनाता था, जिसे निर्यात कर मशहूर 'दमिश्क तलवारों' (Damascus swords) में ढाला जाता था — इनकी मज़बूती और धार यूरोप सदियों तक दोहरा नहीं पाया।"
    }
  },
  {
    source: "Kanada's Vaisheshika Sutra",
    text: {
      en: "The philosopher Kanada proposed that all matter is made of indivisible particles called \"anu\" (atoms) around the 6th century BCE — a strikingly early philosophical precursor to atomic theory.",
      hi: "दार्शनिक कणाद ने लगभग छठी शताब्दी ईसा पूर्व में यह विचार दिया था कि सारा पदार्थ अविभाज्य कणों — 'अणु' — से बना है, जो परमाणु सिद्धांत (atomic theory) का एक चौंकाने वाला प्रारंभिक दार्शनिक रूप है।"
    }
  },
  {
    source: "Lothal",
    text: {
      en: "The Harappan port city of Lothal had an engineered tidal dockyard around 2400 BCE, showing an understanding of tides and hydraulic engineering thousands of years before modern ports.",
      hi: "हड़प्पा सभ्यता के बंदरगाह शहर लोथल में लगभग 2400 ईसा पूर्व एक इंजीनियर्ड ज्वारीय गोदी (tidal dockyard) थी, जो आधुनिक बंदरगाहों से हज़ारों साल पहले ही ज्वार-भाटा और हाइड्रोलिक इंजीनियरिंग की समझ दिखाती है।"
    }
  },
  {
    source: "Mohenjo-daro",
    text: {
      en: "The Great Bath of Mohenjo-daro, built around 2500 BCE, was waterproofed with a layer of natural tar and fed by a well and covered drains — one of the earliest known public water structures.",
      hi: "मोहनजोदड़ो का 'ग्रेट बाथ' लगभग 2500 ईसा पूर्व बनाया गया था, जिसे प्राकृतिक तारकोल (tar) की परत से वाटरप्रूफ किया गया था और एक कुएँ व ढकी नालियों से पानी मिलता था — यह अब तक ज्ञात सबसे पुरानी सार्वजनिक जल संरचनाओं में से एक है।"
    }
  },
  {
    source: "Brahmagupta",
    text: {
      en: "The mathematician Brahmagupta was the first to lay out formal rules for arithmetic with zero — including addition, subtraction, and multiplication — treating it as a true number rather than just a placeholder.",
      hi: "गणितज्ञ ब्रह्मगुप्त पहले व्यक्ति थे जिन्होंने शून्य के साथ जोड़, घटाव और गुणा जैसे औपचारिक अंकगणितीय नियम दिए — उन्होंने शून्य को सिर्फ एक जगह भरने वाला चिन्ह नहीं, बल्कि एक वास्तविक संख्या माना।"
    }
  },
  {
    source: "Indian Numeral System",
    text: {
      en: "The decimal place-value system with zero, invented in India, travelled through the Arab world into Europe and became what the world now calls \"Arabic numerals\" — the foundation of modern mathematics and computing.",
      hi: "भारत में जन्मी शून्य सहित दशमलव स्थानीय मान प्रणाली (decimal place-value system) अरब जगत से होते हुए यूरोप पहुँची और वही आज दुनिया में 'अरबी अंकों' (Arabic numerals) के नाम से जानी जाती है — यही आधुनिक गणित और कंप्यूटिंग की नींव है।"
    }
  },
  {
    source: "Jain Mathematics",
    text: {
      en: "Ancient Jain texts classified numbers into countable, uncountable, and infinite categories — an early philosophical treatment of different \"sizes\" of infinity, centuries before Georg Cantor's set theory.",
      hi: "प्राचीन जैन ग्रंथों में संख्याओं को गणनीय (countable), अगणनीय (uncountable) और अनंत (infinite) श्रेणियों में बाँटा गया था — यह अनंत की अलग-अलग 'मात्राओं' पर एक प्रारंभिक दार्शनिक विचार था, जो जॉर्ज कैंटर के सेट थ्योरी से सदियों पहले का है।"
    }
  },
  {
    source: "Ujjain Observatory",
    text: {
      en: "Ancient Indian astronomers treated Ujjain as their prime meridian — the reference zero-longitude line for calculating time and planetary positions across the subcontinent.",
      hi: "प्राचीन भारतीय खगोलशास्त्री उज्जैन को अपना प्रधान मध्याह्न रेखा (prime meridian) मानते थे — यानी पूरे उपमहाद्वीप में समय और ग्रहों की स्थिति गणना करने की शून्य-देशांतर रेखा।"
    }
  },
  {
    source: "Vedanga Jyotisha",
    text: {
      en: "The Vedanga Jyotisha, among the oldest known astronomical texts in the world, was composed to precisely time Vedic rituals using observations of the sun and moon's cycles.",
      hi: "'वेदांग ज्योतिष', दुनिया के सबसे पुराने ज्ञात खगोलीय ग्रंथों में से एक है, जिसे सूर्य और चंद्रमा के चक्रों के अवलोकन से वैदिक अनुष्ठानों का सटीक समय निर्धारित करने के लिए रचा गया था।"
    }
  },
  {
    source: "Bhaskaracharya II",
    text: {
      en: "In the Lilavati and Siddhanta Shiromani, Bhaskaracharya II worked with ideas resembling infinitesimal calculus — describing instantaneous motion of planets centuries before Newton's calculus.",
      hi: "'लीलावती' और 'सिद्धांत शिरोमणि' में भास्कराचार्य द्वितीय ने अत्यंत सूक्ष्म परिवर्तनों (infinitesimal calculus जैसे विचार) पर काम किया — उन्होंने ग्रहों की तात्क्षणिक गति का वर्णन न्यूटन के कैलकुलस से सदियों पहले किया।"
    }
  },
  {
    source: "Bhaskaracharya II",
    text: {
      en: "Bhaskaracharya II calculated the time taken for Earth to orbit the Sun as approximately 365.2588 days — remarkably close to the modern accepted value of 365.2563 days.",
      hi: "भास्कराचार्य द्वितीय ने पृथ्वी के सूर्य की परिक्रमा में लगने वाला समय लगभग 365.2588 दिन निकाला था — जो आज के मान्य मान 365.2563 दिन के बेहद करीब है।"
    }
  },
  {
    source: "Kumbhalgarh Fort",
    text: {
      en: "The wall of Kumbhalgarh Fort in Rajasthan stretches roughly 38 kilometres, making it one of the longest continuous fortification walls on Earth, second only to the Great Wall of China.",
      hi: "राजस्थान के कुंभलगढ़ किले की दीवार लगभग 38 किलोमीटर लंबी है, जो इसे चीन की महान दीवार के बाद दुनिया की सबसे लंबी निरंतर किलेबंदी दीवारों में से एक बनाती है।"
    }
  },
  {
    source: "Brihadeeswarar Temple",
    text: {
      en: "The 13-storey tower of the Brihadeeswarar Temple in Thanjavur is capped by a single granite block weighing around 80 tonnes, believed to have been hauled up a specially built earthen ramp nearly 6 km long — with no cranes.",
      hi: "तंजावुर के बृहदीश्वर मंदिर के 13 मंज़िला शिखर के ऊपर लगभग 80 टन वज़नी एक ही ग्रेनाइट पत्थर रखा गया है — माना जाता है कि इसे बिना किसी क्रेन के, लगभग 6 किमी लंबी विशेष मिट्टी की ढलान बनाकर ऊपर चढ़ाया गया था।"
    }
  },
  {
    source: "Konark Sun Temple",
    text: {
      en: "The Konark Sun Temple was built in the shape of a giant stone chariot with 24 intricately carved wheels — each wheel doubles as a functioning sundial accurate enough to tell time.",
      hi: "कोणार्क सूर्य मंदिर को एक विशाल पत्थर के रथ के आकार में बनाया गया है जिसमें 24 बारीकी से नक्काशीदार पहिए हैं — हर पहिया एक काम करने वाली धूपघड़ी (sundial) की तरह भी है, जो समय बता सकता है।"
    }
  },
  {
    source: "Hampi Stone Chariot",
    text: {
      en: "The iconic stone chariot at Hampi's Vittala Temple was carved so precisely that its large stone wheels could originally be rotated on their axles.",
      hi: "हम्पी के विट्ठल मंदिर का प्रसिद्ध पत्थर का रथ इतनी बारीकी से तराशा गया है कि इसके बड़े पत्थर के पहिए मूल रूप से अपनी धुरी पर घुमाए जा सकते थे।"
    }
  },
  {
    source: "Kailasa Temple, Ellora",
    text: {
      en: "The Kailasa Temple at Ellora was not built brick by brick — it was carved top-down out of a single mountain of solid rock, with an estimated 200,000 tonnes of stone removed by hand.",
      hi: "एलोरा का कैलाश मंदिर ईंट-दर-ईंट नहीं बनाया गया था — इसे एक पूरे ठोस पहाड़ से ऊपर से नीचे की ओर तराशा गया था, जिसमें अनुमानतः 2,00,000 टन पत्थर हाथों से हटाया गया।"
    }
  },
  {
    source: "Rani ki Vav",
    text: {
      en: "Rani ki Vav, an intricately carved multi-storey stepwell in Gujarat, functioned as both a temple and a sophisticated groundwater harvesting system nearly a thousand years ago.",
      hi: "गुजरात की 'रानी की वाव' एक बहुमंज़िला बारीकी से नक्काशीदार बावड़ी है, जो लगभग एक हज़ार साल पहले एक मंदिर और एक उन्नत भूजल संग्रहण प्रणाली दोनों के रूप में काम करती थी।"
    }
  },
  {
    source: "Chand Baori",
    text: {
      en: "Chand Baori in Rajasthan descends 13 storeys with roughly 3,500 narrow steps in a precise geometric pattern, making it one of the deepest and largest stepwells ever built.",
      hi: "राजस्थान की 'चांद बावड़ी' 13 मंज़िल गहरी है और इसमें लगभग 3,500 संकरी सीढ़ियाँ एक सटीक ज्यामितीय पैटर्न में बनी हैं — यह अब तक बनी सबसे गहरी और सबसे बड़ी बावड़ियों में से एक है।"
    }
  },
  {
    source: "Dholavira",
    text: {
      en: "The Harappan city of Dholavira had an elaborate network of reservoirs and channels carved into rock to harvest and store rainwater in one of the driest regions of the subcontinent.",
      hi: "हड़प्पाकालीन नगर धोलावीरा में उपमहाद्वीप के सबसे शुष्क क्षेत्रों में से एक में वर्षा जल एकत्र और संग्रहीत करने के लिए चट्टान में तराशे गए जलाशयों और नहरों का विस्तृत नेटवर्क था।"
    }
  },
  {
    source: "Harappan Civilization",
    text: {
      en: "The Indus Valley Civilization used a remarkably standardized system of weights and measures across a region spanning over a million square kilometres, thousands of years before modern standardization bodies existed.",
      hi: "सिंधु घाटी सभ्यता दस लाख वर्ग किलोमीटर से भी बड़े क्षेत्र में एक उल्लेखनीय रूप से मानकीकृत (standardized) माप-तौल प्रणाली का उपयोग करती थी — यह आधुनिक मानकीकरण संस्थाओं के बनने से हज़ारों साल पहले की बात है।"
    }
  },
  {
    source: "Panchatantra",
    text: {
      en: "The Panchatantra, a collection of ancient Indian animal fables, became one of the most widely translated non-religious texts in world history — travelling through Persian and Arabic translations to eventually shape European fable traditions like Aesop's.",
      hi: "'पंचतंत्र', प्राचीन भारतीय पशु-कथाओं का संग्रह, विश्व इतिहास में सबसे अधिक अनुवादित गैर-धार्मिक ग्रंथों में से एक बन गया — फारसी और अरबी अनुवादों से होते हुए यह यूरोपीय कथा परंपराओं जैसे 'ईसप की कहानियों' तक को प्रभावित किया।"
    }
  },
  {
    source: "Chaturanga",
    text: {
      en: "The modern game of chess traces its roots to \"Chaturanga,\" a strategy game that originated in India around the 6th century CE and spread to Persia before evolving into the chess played worldwide today.",
      hi: "आधुनिक शतरंज की जड़ें भारत में लगभग छठी शताब्दी ईस्वी में उत्पन्न हुए रणनीति खेल 'चतुरंग' से जुड़ी हैं — यह फारस पहुँचा और फिर धीरे-धीरे आज दुनिया भर में खेली जाने वाली शतरंज में विकसित हुआ।"
    }
  },
  {
    source: "Moksha Patam",
    text: {
      en: "The board game now known worldwide as \"Snakes and Ladders\" originated in India as \"Moksha Patam,\" designed to teach children about karma — ladders for virtue, snakes for vice.",
      hi: "आज दुनिया भर में मशहूर बोर्ड गेम 'साँप-सीढ़ी' का उद्गम भारत में 'मोक्षपटम्' के रूप में हुआ था — इसे बच्चों को कर्म का पाठ पढ़ाने के लिए बनाया गया था: सीढ़ियाँ पुण्य के लिए, साँप पाप के लिए।"
    }
  },
  {
    source: "Nalanda University",
    text: {
      en: "Nalanda University, established around the 5th century CE, housed an estimated 10,000 students and 2,000 teachers from across Asia, making it one of the world's earliest residential international universities.",
      hi: "लगभग पाँचवीं शताब्दी ईस्वी में स्थापित नालंदा विश्वविद्यालय में एशिया भर से अनुमानतः 10,000 छात्र और 2,000 शिक्षक रहते थे — यह दुनिया के सबसे पुराने आवासीय अंतरराष्ट्रीय विश्वविद्यालयों में से एक था।"
    }
  },
  {
    source: "Nalanda University",
    text: {
      en: "According to historical accounts, Nalanda's library complex was so vast that when it was set ablaze in the 12th century, the manuscripts reportedly kept burning for several months.",
      hi: "ऐतिहासिक विवरणों के अनुसार, नालंदा का पुस्तकालय परिसर इतना विशाल था कि 12वीं शताब्दी में जब इसे जलाया गया, तो कहा जाता है कि पांडुलिपियाँ कई महीनों तक जलती रहीं।"
    }
  },
  {
    source: "Takshashila",
    text: {
      en: "Takshashila (Taxila) is considered one of the earliest centres of higher learning in the world, teaching subjects ranging from medicine and mathematics to archery and politics as early as the 6th century BCE.",
      hi: "तक्षशिला को दुनिया के सबसे पुराने उच्च शिक्षा केंद्रों में से एक माना जाता है, जहाँ छठी शताब्दी ईसा पूर्व में ही चिकित्सा, गणित से लेकर धनुर्विद्या और राजनीति तक के विषय पढ़ाए जाते थे।"
    }
  },
  {
    source: "Muslin Cloth",
    text: {
      en: "Ancient Bengal produced a cotton fabric called muslin so fine that an entire sari could reportedly be pulled through a finger ring — a weaving skill that has never been fully replicated since.",
      hi: "प्राचीन बंगाल एक ऐसा सूती कपड़ा 'मलमल' (muslin) बनाता था जो इतना बारीक होता था कि पूरी साड़ी को एक अंगूठी से निकाला जा सकता था — यह बुनाई कला आज तक पूरी तरह से दोबारा हासिल नहीं की जा सकी है।"
    }
  },
  {
    source: "Golconda Mines",
    text: {
      en: "For centuries, the Golconda mines in India were the only known source of diamonds on Earth, producing legendary stones such as the Kohinoor before diamonds were discovered elsewhere in the world.",
      hi: "सदियों तक भारत की गोलकुंडा खदानें पृथ्वी पर हीरों का एकमात्र ज्ञात स्रोत थीं, जिन्होंने कोहिनूर जैसे प्रसिद्ध हीरे दिए — यह तब तक चला जब तक दुनिया में कहीं और हीरे नहीं मिले थे।"
    }
  },
  {
    source: "Rasashastra",
    text: {
      en: "Ancient Indian alchemical medicine, \"Rasashastra,\" developed detailed methods to purify and use mercury and metals therapeutically, centuries before Western alchemy pursued similar goals.",
      hi: "प्राचीन भारतीय रसायन चिकित्सा 'रसशास्त्र' में पारे (mercury) और धातुओं को शुद्ध करके औषधीय रूप से उपयोग करने की विस्तृत विधियाँ विकसित की गई थीं — यह पश्चिमी अल्केमी के इसी लक्ष्य को अपनाने से सदियों पहले की बात है।"
    }
  },
  {
    source: "Charaka Samhita",
    text: {
      en: "The Charaka Samhita describes the concept of \"Agni\" (digestive fire) governing how the body transforms food into energy — a framework that maps closely onto the modern scientific idea of metabolism.",
      hi: "चरक संहिता में 'अग्नि' (digestive fire) की अवधारणा दी गई है, जो यह बताती है कि शरीर भोजन को ऊर्जा में कैसे बदलता है — यह ढांचा आधुनिक विज्ञान की 'मेटाबॉलिज़्म' की अवधारणा से काफी मेल खाता है।"
    }
  },
  {
    source: "Ayurveda",
    text: {
      en: "Ancient Ayurvedic texts describe microscopic organisms called \"krimi\" as a cause of certain diseases, centuries before the invention of the microscope made germ theory possible in the West.",
      hi: "प्राचीन आयुर्वेदिक ग्रंथों में कुछ रोगों के कारण के रूप में सूक्ष्म जीवों — 'कृमि' — का वर्णन मिलता है, जो पश्चिम में सूक्ष्मदर्शी (microscope) के आविष्कार और जर्म थ्योरी के बनने से सदियों पहले की बात है।"
    }
  },
  {
    source: "Yoga Sutras of Patanjali",
    text: {
      en: "The Yoga Sutras of Patanjali laid out an eight-limbed systematic framework for mental discipline and self-observation roughly two thousand years before the modern field of psychology was formalized.",
      hi: "पतंजलि के योग सूत्रों में मानसिक अनुशासन और आत्म-निरीक्षण के लिए अष्टांग (आठ-चरण) प्रणाली दी गई थी — यह आधुनिक मनोविज्ञान (psychology) के एक विषय के रूप में स्थापित होने से लगभग दो हज़ार साल पहले की बात है।"
    }
  },
  {
    source: "Modern Yoga Research",
    text: {
      en: "Peer-reviewed studies have found regular yoga practice associated with measurable reductions in stress markers and improvements in cardiovascular indicators — validating a practice that is thousands of years old.",
      hi: "समकक्ष-समीक्षित (peer-reviewed) अध्ययनों में पाया गया है कि नियमित योगाभ्यास तनाव के मापने योग्य संकेतकों में कमी और हृदय-संबंधी स्वास्थ्य में सुधार से जुड़ा है — यह हज़ारों साल पुरानी प्रथा को वैज्ञानिक पुष्टि देता है।"
    }
  },
  {
    source: "Rigveda — Nasadiya Sukta",
    text: {
      en: "The Rigveda's \"Nasadiya Sukta\" (Hymn of Creation) openly questions whether even the gods know how the universe began — a rare moment of philosophical skepticism embedded directly in ancient scripture.",
      hi: "ऋग्वेद का 'नासदीय सूक्त' (सृष्टि का भजन) खुलकर यह सवाल उठाता है कि क्या देवता भी जानते हैं कि सृष्टि कैसे शुरू हुई — यह प्राचीन धर्मग्रंथ में सीधे तौर पर दर्शाया गया एक दुर्लभ दार्शनिक संशयवाद (skepticism) है।"
    }
  },
  {
    source: "Bhagavad Gita",
    text: {
      en: "After witnessing the first successful nuclear weapons test in 1945, physicist J. Robert Oppenheimer recalled a verse from the Bhagavad Gita — a widely documented moment linking ancient Indian philosophy to the dawn of the atomic age.",
      hi: "1945 में पहले सफल परमाणु परीक्षण को देखने के बाद, भौतिक विज्ञानी जे. रॉबर्ट ओपेनहाइमर को भगवद्गीता का एक श्लोक याद आया था — यह एक व्यापक रूप से दर्ज घटना है जो प्राचीन भारतीय दर्शन को परमाणु युग की शुरुआत से जोड़ती है।"
    }
  },
  {
    source: "Indus Script",
    text: {
      en: "The script used on thousands of Indus Valley seals remains undeciphered to this day, making it one of archaeology's greatest unsolved puzzles despite decades of research.",
      hi: "सिंधु घाटी की हज़ारों मुहरों पर मिली लिपि आज तक अनसुलझी है — दशकों के शोध के बावजूद यह पुरातत्व की सबसे बड़ी अनसुलझी पहेलियों में से एक बनी हुई है।"
    }
  },
  {
    source: "Kumbh Mela",
    text: {
      en: "The Kumbh Mela draws tens of millions of pilgrims to a single site within weeks, making it the largest peaceful gathering of human beings on Earth — large enough to be visible in satellite imagery.",
      hi: "कुंभ मेले में कुछ ही हफ़्तों में एक ही स्थान पर करोड़ों श्रद्धालु पहुँचते हैं, जिससे यह धरती पर मनुष्यों का सबसे बड़ा शांतिपूर्ण जमावड़ा बन जाता है — इतना बड़ा कि यह सैटेलाइट तस्वीरों में भी दिखाई देता है।"
    }
  },
  {
    source: "Sanskrit & Computing",
    text: {
      en: "In a widely cited 1985 paper, NASA researcher Rick Briggs argued that Sanskrit's highly structured, unambiguous grammar could make it well-suited for natural language processing in artificial intelligence.",
      hi: "1985 के एक व्यापक रूप से उद्धृत शोधपत्र में, नासा के शोधकर्ता रिक ब्रिग्स ने तर्क दिया था कि संस्कृत की अत्यंत संरचित और स्पष्ट (unambiguous) व्याकरण इसे कृत्रिम बुद्धिमत्ता (AI) में प्राकृतिक भाषा प्रसंस्करण (natural language processing) के लिए उपयुक्त बना सकती है।"
    }
  },
  {
    source: "Vastu Shastra",
    text: {
      en: "Vastu Shastra, the ancient Indian science of architecture, encoded directional and orientation principles for buildings that closely parallel modern passive-cooling and solar-orientation design logic.",
      hi: "प्राचीन भारतीय वास्तुकला विज्ञान 'वास्तु शास्त्र' में भवनों की दिशा और अभिविन्यास (orientation) के सिद्धांत दिए गए थे, जो आधुनिक 'पैसिव कूलिंग' और सौर-अभिविन्यास डिज़ाइन तर्क से काफी मिलते-जुलते हैं।"
    }
  },
  {
    source: "Great Living Chola Temples",
    text: {
      en: "The Chola dynasty's temple builders achieved such structural precision in massive granite towers that several of their temples, built a thousand years ago, still stand as UNESCO World Heritage Sites today.",
      hi: "चोल राजवंश के मंदिर निर्माताओं ने विशाल ग्रेनाइट शिखरों में इतनी संरचनात्मक सटीकता हासिल की थी कि हज़ार साल पहले बने उनके कई मंदिर आज भी यूनेस्को विश्व धरोहर स्थलों के रूप में खड़े हैं।"
    }
  },
  {
    source: "Aihole & Pattadakal",
    text: {
      en: "The temple towns of Aihole and Pattadakal served as an architectural \"laboratory\" where builders experimented with different temple styles for centuries — directly shaping the temple architecture seen across India today.",
      hi: "ऐहोल और पट्टडकल के मंदिर नगर एक स्थापत्य 'प्रयोगशाला' के रूप में कार्य करते थे, जहाँ निर्माता सदियों तक अलग-अलग मंदिर शैलियों पर प्रयोग करते रहे — इन्होंने ही आज पूरे भारत में दिखने वाली मंदिर वास्तुकला को आकार दिया।"
    }
  },
  {
    source: "Kalidasa",
    text: {
      en: "The German poet Goethe was so moved by Kalidasa's Sanskrit drama \"Abhijnanashakuntalam\" that he reportedly wished he could place it \"on his head\" in admiration — a testament to ancient Indian literature's reach into world culture.",
      hi: "जर्मन कवि गोएठे कालिदास के संस्कृत नाटक 'अभिज्ञानशाकुंतलम्' से इतने प्रभावित हुए थे कि कहा जाता है उन्होंने इसे प्रशंसा में 'अपने सिर पर रखने' की इच्छा जताई थी — यह प्राचीन भारतीय साहित्य की विश्व संस्कृति तक पहुँच का प्रमाण है।"
    }
  },
  {
    source: "Charaka Samhita",
    text: {
      en: "The Charaka Samhita defines health not just as the absence of disease but as a balanced state of body, mind, and spirit — a holistic definition strikingly similar to the World Health Organization's modern definition of health.",
      hi: "चरक संहिता स्वास्थ्य को केवल रोग की अनुपस्थिति नहीं, बल्कि शरीर, मन और आत्मा के संतुलित होने की अवस्था के रूप में परिभाषित करती है — यह समग्र परिभाषा विश्व स्वास्थ्य संगठन (WHO) की आधुनिक स्वास्थ्य परिभाषा से चौंकाने वाली रूप से मिलती-जुलती है।"
    }
  },
  {
    source: "Bhaskaracharya II",
    text: {
      en: "Bhaskaracharya II designed a conceptual perpetual-motion wheel and explored its mechanics in his writings — an idea that, while ultimately physically impossible, shows remarkably advanced mechanical thinking for the 12th century.",
      hi: "भास्कराचार्य द्वितीय ने अपने लेखन में एक काल्पनिक 'सतत गति चक्र' (perpetual-motion wheel) की अवधारणा और उसकी यांत्रिकी पर विचार किया था — यह भौतिक रूप से असंभव होते हुए भी, 12वीं सदी के लिए असाधारण रूप से उन्नत यांत्रिक सोच दिखाता है।"
    }
  },
  {
    source: "Panini",
    text: {
      en: "Linguist Paul Kiparsky and other scholars have compared Panini's rule-ordering system in the Ashtadhyayi to the Backus-Naur Form used to define modern programming language syntax.",
      hi: "भाषाविद् पॉल किपार्स्की और अन्य विद्वानों ने अष्टाध्यायी में पाणिनि की नियम-क्रम प्रणाली की तुलना 'बैकस-नौर फॉर्म' (Backus-Naur Form) से की है, जिसका उपयोग आधुनिक प्रोग्रामिंग भाषाओं का सिंटैक्स परिभाषित करने में होता है।"
    }
  },
  {
    source: "Vimana Shastra",
    text: {
      en: "Ancient Indian texts referred to as \"Vimana Shastra\" describe flying vehicles in mythological and technical language — a subject historians and scientists continue to debate the literal versus symbolic meaning of.",
      hi: "'विमान शास्त्र' के नाम से जाने जाने वाले प्राचीन भारतीय ग्रंथों में उड़ने वाले यानों का पौराणिक व तकनीकी भाषा में वर्णन मिलता है — इतिहासकार और वैज्ञानिक आज भी इसके शाब्दिक बनाम प्रतीकात्मक अर्थ पर बहस करते हैं।"
    }
  },
  {
    source: "Charaka Samhita",
    text: {
      en: "The Charaka Samhita lists ethical guidelines for physicians resembling an early code of medical conduct — including confidentiality and the physician's duty to the patient over personal gain, well before the modern Hippocratic-style codes were formalized in many regions.",
      hi: "चरक संहिता में चिकित्सकों के लिए नैतिक दिशा-निर्देश दिए गए हैं जो एक प्रारंभिक चिकित्सा आचार संहिता जैसे हैं — जिसमें गोपनीयता और रोगी के प्रति चिकित्सक के कर्तव्य को व्यक्तिगत लाभ से ऊपर रखा गया है, यह कई क्षेत्रों में आधुनिक हिप्पोक्रेटिक-शैली संहिताओं के औपचारिक रूप लेने से बहुत पहले की बात है।"
    }
  },
  {
    source: "Ancient Indian Astronomy",
    text: {
      en: "Ancient Indian astronomers tracked planetary motion and eclipses with enough precision to compile detailed almanacs (panchangs) still used for religious and agricultural timing today.",
      hi: "प्राचीन भारतीय खगोलशास्त्री ग्रहों की गति और ग्रहणों को इतनी सटीकता से ट्रैक करते थे कि वे विस्तृत पंचांग तैयार कर पाते थे — जिनका उपयोग आज भी धार्मिक और कृषि संबंधी समय-निर्धारण के लिए किया जाता है।"
    }
  },
  {
    source: "Charaka Samhita",
    text: {
      en: "Charaka described the concept of individualized treatment based on a person's unique constitution (prakriti) — an idea that closely mirrors the modern medical movement toward personalized medicine.",
      hi: "चरक ने व्यक्ति की अनूठी प्रकृति (constitution) के आधार पर व्यक्तिगत उपचार की अवधारणा दी थी — यह विचार आधुनिक चिकित्सा में 'व्यक्तिगत चिकित्सा' (personalized medicine) की ओर बढ़ते रुझान से काफी मिलता-जुलता है।"
    }
  },
  {
    source: "Ancient Water Management",
    text: {
      en: "Archaeologists have found step-tank and canal systems across ancient Indian sites so extensive that some scholars regard early Indian water engineering as among the most advanced anywhere in the ancient world.",
      hi: "पुरातत्वविदों को प्राचीन भारतीय स्थलों में सीढ़ीदार तालाब और नहर प्रणालियाँ इतने बड़े पैमाने पर मिली हैं कि कुछ विद्वान प्रारंभिक भारतीय जल इंजीनियरिंग को प्राचीन विश्व की सबसे उन्नत प्रणालियों में मानते हैं।"
    }
  },
  {
    source: "Ancient Metallurgy",
    text: {
      en: "Zinc distillation — extracting pure zinc metal by vapour condensation — was industrially practised in Rajasthan's Zawar mines centuries before Europe independently developed the same process.",
      hi: "ज़िंक डिस्टिलेशन (वाष्प संघनन द्वारा शुद्ध जस्ता निकालना) राजस्थान की जावर खदानों में औद्योगिक स्तर पर सदियों पहले किया जाता था — यूरोप ने यही प्रक्रिया स्वतंत्र रूप से इसके बहुत बाद विकसित की।"
    }
  },
  {
    source: "Sushruta Samhita",
    text: {
      en: "Sushruta classified surgical instruments into blunt and sharp categories and described techniques for cataract surgery using a curved needle to dislodge the clouded lens — a procedure with echoes in modern cataract surgery.",
      hi: "सुश्रुत ने शल्य चिकित्सा उपकरणों को कुंद और तीक्ष्ण श्रेणियों में बाँटा था और मोतियाबिंद (cataract) की सर्जरी के लिए एक घुमावदार सुई से धुंधले लेंस को हटाने की तकनीक बताई थी — यह प्रक्रिया आधुनिक मोतियाबिंद सर्जरी से मिलती-जुलती है।"
    }
  },
  {
    source: "Rigveda",
    text: {
      en: "The Rigveda contains a hymn describing the universe as boundless and continuously expanding — an idea some commentators find strikingly reminiscent of the modern expanding-universe model in cosmology.",
      hi: "ऋग्वेद में एक ऐसा सूक्त मिलता है जो ब्रह्मांड को असीम और लगातार विस्तारित होता हुआ बताता है — कुछ टीकाकारों को यह विचार आधुनिक ब्रह्मांड-विज्ञान के 'विस्तारित होते ब्रह्मांड' मॉडल की याद दिलाता है।"
    }
  },
  {
    source: "Ancient Indian Chemistry",
    text: {
      en: "Texts on Rasashastra describe methods for preparing herbo-mineral compounds through repeated purification and calcination cycles — processes that parallel modern pharmaceutical techniques for stabilizing metal-based medicines.",
      hi: "रसशास्त्र के ग्रंथों में बार-बार शुद्धिकरण और कैल्सिनेशन (calcination) की प्रक्रियाओं द्वारा हर्बो-मिनरल यौगिक तैयार करने की विधियाँ दी गई हैं — यह प्रक्रियाएँ धातु-आधारित औषधियों को स्थिर करने की आधुनिक औषधि-निर्माण तकनीकों से मेल खाती हैं।"
    }
  },
  {
    source: "Ancient Board Games",
    text: {
      en: "The strategy game \"Chaturanga\" divided its pieces into four divisions of the army — infantry, cavalry, elephantry, and chariotry — a structure historians trace directly into the modern chess pieces of pawn, knight, bishop, and rook.",
      hi: "रणनीति खेल 'चतुरंग' में मोहरों को सेना के चार अंगों में बाँटा गया था — पैदल सेना, घुड़सवार सेना, हाथी सेना और रथ सेना — इतिहासकार इस संरचना को सीधे आधुनिक शतरंज के प्यादा, घोड़ा, ऊँट और हाथी मोहरों तक जोड़ते हैं।"
    }
  },
  {
    source: "Ancient Indian Astronomy",
    text: {
      en: "Aryabhata correctly explained solar and lunar eclipses as the result of shadows cast by the Earth and Moon, offering a scientific explanation at a time when eclipses were widely understood only through mythological accounts.",
      hi: "आर्यभट ने सूर्य और चंद्र ग्रहणों को सही ढंग से पृथ्वी और चंद्रमा की परछाइयों का परिणाम बताया था, जो उस समय एक वैज्ञानिक व्याख्या थी जब ग्रहणों को अधिकतर पौराणिक कथाओं के माध्यम से ही समझा जाता था।"
    }
  }
];

// Exposes factsData globally for pages that load this file via a
// classic <script src="factsData.js"> tag (no ES module import needed).
if (typeof window !== "undefined") {
  window.factsData = factsData;
}
