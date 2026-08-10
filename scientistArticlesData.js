/* ==========================================================================
   scientistArticlesData.js — Hindu Research Portal
   Detailed, bilingual (Hindi/English) article data for 10 great Hindu/
   Vedic scientists, used by articles.html.

   All ten scientists now link directly to their dedicated standalone
   deep-dive HTML pages via `externalUrl`.

   Fields:
     id            -> 1-10
     slug          -> used for search matching / anchors
     name_hi/en    -> scientist's name
     field_hi/en   -> their area of contribution
     era_hi/en     -> approximate period
     image         -> filename in /images
     summary_hi/en -> short teaser shown on the collapsed card
     externalUrl   -> dedicated standalone article page
   ========================================================================== */

const scientistArticlesData = [

  {
    id: 1,
    slug: "aryabhata",
    name_hi: "आर्यभट्ट",
    name_en: "Aryabhata",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "जन्म ४७६ ई.",
    era_en: "b. 476 CE",
    image: "Aryabhata.png",
    summary_hi: "शून्य की अवधारणा, पाई (π) का सटीक मान और पृथ्वी के अपनी धुरी पर घूमने की खोज — मात्र २३ वर्ष की आयु में लिखी गई 'आर्यभटीय' की पूरी कहानी।",
    summary_en: "The concept of zero, an accurate value of Pi (π), and the discovery that the Earth rotates on its axis — the full story of the 'Aryabhatiya', written at just 23 years of age.",
    externalUrl: "aryabhata-zero-pi-discoveries.html"
  },

  {
    id: 2,
    slug: "sushruta",
    name_hi: "आचार्य सुश्रुत",
    name_en: "Acharya Sushruta",
    field_hi: "शल्य चिकित्सा (Surgery)",
    field_en: "Surgery",
    era_hi: "लगभग ६०० ईसा पूर्व",
    era_en: "c. 600 BCE",
    image: "Sushruta.png",
    summary_hi: "दुनिया के पहले सर्जन — 300 से अधिक शल्य प्रक्रियाओं और 120 उपकरणों का वर्णन करने वाली 'सुश्रुत संहिता' की पूरी कहानी।",
    summary_en: "The world's first surgeon — the full story of the 'Sushruta Samhita', describing over 300 surgical procedures and 120 instruments.",
    externalUrl: "sushruta-father-of-surgery.html"
  },

  {
    id: 3,
    slug: "bhaskaracharya",
    name_hi: "भास्कराचार्य",
    name_en: "Bhaskaracharya",
    field_hi: "गणित एवं गुरुत्वाकर्षण",
    field_en: "Mathematics & Gravitation",
    era_hi: "जन्म १११४ ई.",
    era_en: "b. 1114 CE",
    image: "Bhaskaracharya.png",
    summary_hi: "आइजैक न्यूटन से पांच शताब्दियों पहले गुरुत्वाकर्षण के नियम को समझाने वाले महान गणितज्ञ, जिन्होंने बीजगणित और कैलकुलस की नींव भी रखी।",
    summary_en: "The great mathematician who explained the law of gravity five centuries before Isaac Newton, and who also laid foundational groundwork in algebra and calculus.",
    externalUrl: "bhaskaracharya-gravity-calculus.html"
  },

  {
    id: 4,
    slug: "charak",
    name_hi: "आचार्य चरक",
    name_en: "Acharya Charak",
    field_hi: "आयुर्वेद (Medicine)",
    field_en: "Ayurveda (Medicine)",
    era_hi: "लगभग ३०० ईसा पूर्व",
    era_en: "c. 300 BCE",
    image: "Charaka.png",
    summary_hi: "आयुर्वेद के महागुरु, जिन्होंने 'चरक संहिता' में शरीर रचना, पाचन क्रिया और रोग निदान का वैज्ञानिक तरीका दिया — जिसे आज भी आधुनिक चिकित्सा का पूरक माना जाता है।",
    summary_en: "The great master of Ayurveda, who in the 'Charak Samhita' gave a scientific approach to anatomy, digestion and diagnosis — still regarded as a valuable complement to modern medicine today.",
    externalUrl: "charaka-father-of-medicine.html"
  },

  {
    id: 5,
    slug: "kanad",
    name_hi: "आचार्य कणाद",
    name_en: "Acharya Kanad",
    field_hi: "परमाणु विज्ञान (Atomic Theory)",
    field_en: "Atomic Theory",
    era_hi: "लगभग ६ठी शताब्दी ईसा पूर्व",
    era_en: "c. 6th century BCE",
    image: "Kanada.png",
    summary_hi: "आधुनिक विज्ञान से 2,500 वर्ष पहले 'वैशेषिक सूत्र' में परमाणु सिद्धांत देने वाले दार्शनिक — हर पदार्थ सूक्ष्मतम अविभाज्य कणों से बना है, यह विचार सबसे पहले उन्होंने ही रखा।",
    summary_en: "The philosopher who presented atomic theory in the 'Vaisheshika Sutra' 2,500 years before modern science — the first to propose that all matter is made of indivisible particles.",
    externalUrl: "kanada-atomic-theory.html"
  },

  {
    id: 6,
    slug: "jc-bose",
    name_hi: "सर जे.सी. बोस",
    name_en: "Sir J.C. Bose",
    field_hi: "वनस्पति एवं वायरलेस विज्ञान",
    field_en: "Botany & Wireless Science",
    era_hi: "१८५८ – १९३७",
    era_en: "1858 – 1937",
    image: "Bose.png",
    summary_hi: "'क्रेस्कोग्राफ' के आविष्कारक जिन्होंने साबित किया कि पौधों में भी जीवन है, और मार्कोनी से पहले वायरलेस रेडियो तरंगों का प्रदर्शन किया।",
    summary_en: "Inventor of the 'crescograph' who proved that plants have life, and who demonstrated wireless radio wave transmission before Marconi.",
    externalUrl: "jc-bose-crescograph-radio.html"
  },

  {
    id: 7,
    slug: "patanjali",
    name_hi: "महर्षि पतंजलि",
    name_en: "Maharshi Patanjali",
    field_hi: "योग एवं मानसिक विज्ञान",
    field_en: "Yoga & Mental Science",
    era_hi: "लगभग २री शताब्दी ईसा पूर्व",
    era_en: "c. 2nd century BCE",
    image: "Patanjali.png",
    summary_hi: "'योगसूत्र' के प्रणेता, जिन्होंने मानव मन और चेतना को नियंत्रित करने का अष्टांग योग मार्ग व्यवस्थित रूप से प्रस्तुत किया — आज वैश्विक स्तर पर मान्यता प्राप्त विज्ञान।",
    summary_en: "Author of the 'Yoga Sutras', who systematically presented the eight-limbed (Ashtanga) path of yoga for controlling the human mind and consciousness — a science recognised worldwide today.",
    externalUrl: "patanjali-yoga-mind-science.html"
  },

  {
    id: 8,
    slug: "baudhayana",
    name_hi: "ऋषि बौधायन",
    name_en: "Rishi Baudhayana",
    field_hi: "रेखागणित (Geometry)",
    field_en: "Geometry",
    era_hi: "लगभग ८वीं शताब्दी ईसा पूर्व",
    era_en: "c. 8th century BCE",
    image: "Baudhayana.png",
    summary_hi: "यूनानी गणितज्ञ पाइथागोरस से सैकड़ों वर्ष पहले 'बौधायन शुल्बसूत्र' में रेखागणित के कड़े नियम और प्रमेय की खोज करने वाले वैदिक ऋषि।",
    summary_en: "The Vedic sage who discovered rigorous rules of geometry and a key theorem in the 'Baudhayana Shulba Sutra', centuries before the Greek mathematician Pythagoras.",
    externalUrl: "baudhayana-pythagoras-theorem.html"
  },

  {
    id: 9,
    slug: "varahamihira",
    name_hi: "आचार्य वराहमिहिर",
    name_en: "Acharya Varahamihira",
    field_hi: "खगोल एवं भूकंप विज्ञान",
    field_en: "Astronomy & Seismology",
    era_hi: "५०५ – ५८७ ई.",
    era_en: "505 – 587 CE",
    image: "Varahamihira.png",
    summary_hi: "'पंचसिद्धांतिका' के रचयिता, जिन्होंने सिद्ध किया कि चंद्रमा पृथ्वी का और पृथ्वी सूर्य का चक्कर लगाती है, साथ ही पौधों के व्यवहार से भूकंप का पूर्वानुमान लगाने की विधि खोजी।",
    summary_en: "Author of the 'Panchasiddhantika', who established that the Moon orbits the Earth and the Earth orbits the Sun, and who also discovered a method to forecast earthquakes from plant behaviour.",
    externalUrl: "varahamihira-astronomy-hydrology.html"
  },

  {
    id: 10,
    slug: "nagarjuna",
    name_hi: "नागार्जुन",
    name_en: "Nagarjuna",
    field_hi: "रसायन विज्ञान (Chemistry)",
    field_en: "Chemistry",
    era_hi: "लगभग १०वीं शताब्दी ई.",
    era_en: "c. 10th century CE",
    image: "Nagarjuna.png",
    summary_hi: "प्राचीन भारत के सबसे बड़े रसायनज्ञ, जिन्होंने पारे को शुद्ध करने, धातुओं का रूपांतरण करने और जीवन रक्षक भस्म-औषधियां बनाने की जटिल विधियां खोजीं।",
    summary_en: "Ancient India's greatest chemist, who discovered complex methods for purifying mercury, transmuting metals, and creating life-saving ash-based (bhasma) medicines.",
    externalUrl: "nagarjuna-chemistry-alchemy.html"
  }

];
