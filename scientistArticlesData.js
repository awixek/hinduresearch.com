/* ==========================================================================
   scientistArticlesData.js — Hindu Research Portal
   Detailed, bilingual (Hindi/English) article content for 10 great Hindu/
   Vedic scientists, used by articles.html.

   Two of the ten (Aryabhata, Sushruta) already have full standalone deep-
   dive pages on the site — for those, `externalUrl` points to that page and
   the card's "Read Full Article" button navigates there instead of
   expanding inline. The other eight expand in place with 3 sections each.

   Fields:
     id            -> 1-10
     slug          -> used for search matching / anchors
     name_hi/en    -> scientist's name
     field_hi/en   -> their area of contribution
     era_hi/en     -> approximate period
     image         -> filename in /images (existing site images reused where
                       available; onerror hides the <img> if missing)
     summary_hi/en -> short teaser shown on the collapsed card
     externalUrl   -> optional; if present, "Read Full Article" links out
                       to an existing dedicated page instead of expanding
     sections      -> array of { heading_hi, heading_en, body_hi, body_en }
                       rendered when the card is expanded (skipped if
                       externalUrl is present)
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
    externalUrl: "aryabhata-zero-pi-discovery.html"
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "भास्कराचार्य (या भास्कर द्वितीय) का जन्म सन् ११९४ ई. में विज्जडवीड (आधुनिक कर्नाटक) में हुआ था। वे उज्जैन की प्रसिद्ध खगोलीय वेधशाला के प्रमुख रहे और भारतीय गणित के इतिहास में सबसे प्रभावशाली विद्वानों में गिने जाते हैं। उनका सबसे प्रसिद्ध ग्रंथ 'सिद्धांत शिरोमणि' चार भागों में विभाजित है — लीलावती (अंकगणित), बीजगणित, ग्रहगणित और गोलाध्याय।",
        body_en: "Bhaskaracharya (also known as Bhaskara II) was born in 1114 CE in Vijjadavida (modern-day Karnataka). He headed the renowned astronomical observatory at Ujjain and is counted among the most influential scholars in the history of Indian mathematics. His most celebrated text, the 'Siddhanta Shiromani', is divided into four parts — Lilavati (arithmetic), Bijaganita (algebra), Grahaganita (planetary mathematics) and Goladhyaya (spherical astronomy)."
      },
      {
        heading_hi: "गुरुत्वाकर्षण की खोज",
        heading_en: "The Discovery of Gravity",
        body_hi: "'सिद्धांत शिरोमणि' के गोलाध्याय भाग में भास्कराचार्य ने स्पष्ट रूप से लिखा कि पृथ्वी में वस्तुओं को अपनी ओर खींचने की एक शक्ति है — ठीक वैसी ही अवधारणा जिसे आइजैक न्यूटन ने लगभग पांच सौ वर्ष बाद प्रस्तुत किया। उन्होंने बताया कि यही कारण है कि आकाश में उछाली गई कोई भी वस्तु वापस पृथ्वी पर गिरती है।",
        body_en: "In the Goladhyaya section of the 'Siddhanta Shiromani', Bhaskaracharya explicitly wrote that the Earth possesses a force that draws objects toward it — essentially the same concept that Isaac Newton would present nearly five centuries later. He explained that this is precisely why any object thrown into the sky falls back to Earth."
      },
      {
        heading_hi: "बीजगणित और लीलावती में योगदान",
        heading_en: "Contributions to Algebra and Lilavati",
        body_hi: "'लीलावती' — जो कथित तौर पर उनकी बेटी के नाम पर रचा गया अंकगणित का ग्रंथ है — आज भी अपनी सरल, कथात्मक शैली के लिए प्रसिद्ध है, जिसमें गणितीय समस्याओं को कहानियों के रूप में प्रस्तुत किया गया। 'बीजगणित' खंड में उन्होंने द्विघात, त्रिघात और अनिश्चित समीकरणों (indeterminate equations) को हल करने के उन्नत तरीके दिए, जो आधुनिक बीजगणित के पूर्वज माने जाते हैं।",
        body_en: "'Lilavati' — reportedly composed and named for his daughter — is an arithmetic text still celebrated today for its simple, narrative style, presenting mathematical problems as stories. In the 'Bijaganita' section, he provided advanced methods for solving quadratic, cubic and indeterminate equations, considered forerunners of modern algebra."
      }
    ]
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "आचार्य चरक को आयुर्वेद चिकित्सा पद्धति के सबसे बड़े प्रणेताओं में गिना जाता है। उनका ग्रंथ 'चरक संहिता' आयुर्वेद के तीन आधार ग्रंथों (बृहत्त्रयी) में से एक है और इसमें औषध विज्ञान (Internal Medicine) पर सबसे विस्तृत प्राचीन विवरण मिलता है।",
        body_en: "Acharya Charak is counted among the greatest founding figures of Ayurvedic medicine. His text, the 'Charak Samhita', is one of Ayurveda's three foundational texts (Brihattrayi), and contains the most detailed ancient account of internal medicine known to have survived."
      },
      {
        heading_hi: "शरीर विज्ञान और रोग निदान",
        heading_en: "Physiology and Diagnosis",
        body_hi: "चरक संहिता में शरीर की संरचना, पाचन अग्नि (Metabolism), दोष-सिद्धांत (वात, पित्त, कफ) और रोगों के मूल कारणों का विस्तृत वर्णन है। इसमें बताया गया है कि रोग केवल शारीरिक लक्षण नहीं बल्कि शरीर के आंतरिक संतुलन के बिगड़ने का परिणाम है — यह अवधारणा आधुनिक 'होलिस्टिक मेडिसिन' के सिद्धांतों से मेल खाती है।",
        body_en: "The Charak Samhita provides a detailed description of body structure, digestive fire (metabolism), the doctrine of the three doshas (Vata, Pitta, Kapha), and the root causes of disease. It explains that disease is not merely a physical symptom but the result of an internal imbalance — a concept that closely parallels principles of modern holistic medicine."
      },
      {
        heading_hi: "आज की प्रासंगिकता",
        heading_en: "Relevance Today",
        body_hi: "चरक संहिता में वर्णित निवारक चिकित्सा (Preventive Medicine), संतुलित आहार और दिनचर्या के सिद्धांत आज भी वैश्विक स्तर पर वैकल्पिक व पूरक चिकित्सा (complementary medicine) के रूप में अपनाए जाते हैं। WHO सहित कई संस्थान आयुर्वेदिक सिद्धांतों पर आधुनिक शोध कर रहे हैं।",
        body_en: "The principles of preventive medicine, balanced diet and daily routine described in the Charak Samhita continue to be adopted globally as complementary and alternative medicine today. Institutions including the WHO are conducting modern research grounded in Ayurvedic principles."
      }
    ]
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "आचार्य कणाद वैशेषिक दर्शन के संस्थापक थे — भारत के छह प्रमुख दार्शनिक स्कूलों (षड्दर्शन) में से एक। उनका मूल नाम 'कश्यप' बताया जाता है, और 'कणाद' नाम उन्हें इस बात के लिए मिला कि वे पदार्थ के सूक्ष्मतम कणों (कण) के अध्ययन में लीन रहते थे।",
        body_en: "Acharya Kanad was the founder of Vaisheshika philosophy — one of India's six major schools of philosophy (Shad-darshana). His original name is said to have been 'Kashyapa', and he earned the name 'Kanad' because of his deep absorption in the study of the minutest particles ('kana') of matter."
      },
      {
        heading_hi: "परमाणु सिद्धांत",
        heading_en: "Atomic Theory",
        body_hi: "अपने ग्रंथ 'वैशेषिक सूत्र' में कणाद ने प्रतिपादित किया कि संसार की प्रत्येक वस्तु अणुओं (अविभाज्य कणों) से मिलकर बनी है, जिन्हें आगे विभाजित नहीं किया जा सकता। उन्होंने यह भी बताया कि इन अणुओं के संयोजन (द्वयणुक, त्र्यणुक) से ही विभिन्न पदार्थ बनते हैं — यह विचार आधुनिक आणविक रसायन विज्ञान (molecular chemistry) की मूल अवधारणा से आश्चर्यजनक रूप से मेल खाता है।",
        body_en: "In his text, the 'Vaisheshika Sutra', Kanad proposed that every object in the universe is composed of atoms (indivisible particles) that cannot be divided further. He also explained that different substances are formed through combinations of these atoms (dyanuka, tryanuka) — an idea that strikingly parallels the foundational concept of modern molecular chemistry."
      },
      {
        heading_hi: "पश्चिमी विज्ञान से तुलना",
        heading_en: "Comparison with Western Science",
        body_hi: "पश्चिम में परमाणु सिद्धांत का श्रेय आमतौर पर ग्रीक दार्शनिक डेमोक्रिटस (Democritus, ५वीं शताब्दी ईसा पूर्व) को दिया जाता है, लेकिन कई इतिहासकार मानते हैं कि कणाद का कार्य उससे भी पुराना है। कणाद का सिद्धांत केवल दार्शनिक अटकल नहीं था — उन्होंने पदार्थ की गति, ऊष्मा और रासायनिक परिवर्तनों को भी अणु-सिद्धांत से समझाने का प्रयास किया।",
        body_en: "In the West, atomic theory is generally credited to the Greek philosopher Democritus (5th century BCE), but many historians consider Kanad's work to predate it. Kanad's theory was not merely philosophical speculation — he also attempted to explain motion, heat and chemical change through the framework of atomic theory."
      }
    ]
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "सर जगदीश चंद्र बोस का जन्म १८५८ में बंगाल में हुआ। वे भौतिक विज्ञानी, जीव विज्ञानी और वनस्पति वैज्ञानिक — तीनों भूमिकाओं में अग्रणी रहे, और भारत में आधुनिक विज्ञान अनुसंधान की नींव रखने वालों में से एक माने जाते हैं। उन्होंने कोलकाता में बोस इंस्टीट्यूट की स्थापना की, जो भारत की सबसे पुरानी अनुसंधान संस्थाओं में से एक है।",
        body_en: "Sir Jagadish Chandra Bose was born in Bengal in 1858. He was a pioneer in three fields at once — physics, biology and botany — and is regarded as one of the founders of modern scientific research in India. He established the Bose Institute in Kolkata, one of India's oldest research institutions."
      },
      {
        heading_hi: "पौधों में जीवन की खोज",
        heading_en: "Discovering Life in Plants",
        body_hi: "बोस ने 'क्रेस्कोग्राफ' नामक एक अत्यंत संवेदनशील उपकरण का आविष्कार किया, जो पौधों की वृद्धि और उत्तेजनाओं के प्रति प्रतिक्रिया को माप सकता था। उन्होंने प्रयोगों द्वारा दिखाया कि पौधे भी उत्तेजना, दर्द और थकान महसूस करते हैं, ठीक जीव-जंतुओं की तरह — यह खोज उस समय वैज्ञानिक जगत के लिए क्रांतिकारी थी।",
        body_en: "Bose invented an extremely sensitive device called the 'crescograph', capable of measuring plant growth and their response to stimuli. Through experiments, he demonstrated that plants also experience stimulation, pain and fatigue, much like animals — a discovery that was revolutionary for the scientific world of his time."
      },
      {
        heading_hi: "वायरलेस संचार में योगदान",
        heading_en: "Contribution to Wireless Communication",
        body_hi: "1895 में, गुग्लielmो मार्कोनी के प्रसिद्ध प्रदर्शन से पहले ही, बोस ने कोलकाता में सार्वजनिक रूप से वायरलेस सिग्नल भेजकर एक घंटी बजाई और बारूद में विस्फोट किया — बिना किसी तार के। हालांकि उन्होंने व्यावसायिक पेटेंट के प्रति रुचि नहीं दिखाई, आधुनिक इतिहासकार उन्हें रेडियो विज्ञान के सच्चे अग्रदूतों में गिनते हैं।",
        body_en: "In 1895, before Guglielmo Marconi's famous demonstration, Bose publicly transmitted wireless signals in Kolkata to ring a bell and ignite gunpowder — without any wires. Though he showed little interest in commercial patents, modern historians count him among the true pioneers of radio science."
      }
    ]
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "महर्षि पतंजलि का जीवनकाल निश्चित रूप से ज्ञात नहीं है, लेकिन विद्वान इन्हें लगभग दूसरी शताब्दी ईसा पूर्व के आसपास रखते हैं। उनका 'योगसूत्र' चार अध्यायों और कुल १९६ सूत्रों में विभाजित है, जो योग दर्शन का सबसे व्यवस्थित और प्रामाणिक ग्रंथ माना जाता है।",
        body_en: "Maharshi Patanjali's exact dates are not definitively known, but scholars place him around the 2nd century BCE. His 'Yoga Sutras' are divided into four chapters comprising 196 aphorisms, and are regarded as the most systematic and authoritative text on yoga philosophy."
      },
      {
        heading_hi: "अष्टांग योग: आठ अंगों का विज्ञान",
        heading_en: "Ashtanga Yoga: The Science of Eight Limbs",
        body_hi: "पतंजलि ने योग को आठ क्रमिक चरणों (अष्टांग) में व्यवस्थित किया — यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान और समाधि। यह ढांचा शरीर, श्वास और मन को क्रमिक रूप से अनुशासित करते हुए गहरी आत्म-जागरूकता की ओर ले जाता है — जो आज माइंडफुलनेस और स्ट्रेस मैनेजमेंट के आधुनिक विज्ञान का भी आधार बना है।",
        body_en: "Patanjali organised yoga into eight sequential stages (Ashtanga) — Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana and Samadhi. This framework progressively disciplines the body, breath and mind, leading toward deep self-awareness — and forms the basis for much of today's modern science of mindfulness and stress management."
      },
      {
        heading_hi: "आज की प्रासंगिकता",
        heading_en: "Relevance Today",
        body_hi: "आधुनिक न्यूरोसाइंस और मनोविज्ञान में हुए शोध पतंजलि के अनेक सिद्धांतों — जैसे ध्यान से मस्तिष्क में परिवर्तन और श्वास-नियंत्रण से तनाव में कमी — की पुष्टि कर रहे हैं। संयुक्त राष्ट्र द्वारा मान्यता प्राप्त 'अंतरराष्ट्रीय योग दिवस' पतंजलि की इसी विरासत का वैश्विक सम्मान है।",
        body_en: "Research in modern neuroscience and psychology continues to validate many of Patanjali's principles — such as meditation's effects on the brain and breath-control's role in reducing stress. The United Nations-recognised 'International Day of Yoga' is a global tribute to this very legacy."
      }
    ]
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "बौधायन एक वैदिक ऋषि और गणितज्ञ थे, जिनका 'शुल्बसूत्र' यज्ञ वेदियों के सटीक निर्माण के लिए ज्यामितीय नियमों का संग्रह है। यज्ञ अनुष्ठानों में वेदियों का आकार और माप अत्यंत सटीक होना आवश्यक था, और यही आवश्यकता उन्नत रेखागणित के विकास का स्रोत बनी।",
        body_en: "Baudhayana was a Vedic sage and mathematician whose 'Shulba Sutra' is a collection of geometric rules for the precise construction of yajna (fire ritual) altars. The exacting size and shape requirements of these altars became the very source that drove the development of advanced geometry."
      },
      {
        heading_hi: "बौधायन प्रमेय (पाइथागोरस प्रमेय)",
        heading_en: "The Baudhayana Theorem (Pythagorean Theorem)",
        body_hi: "बौधायन शुल्बसूत्र में एक ऐसा नियम मिलता है जो आज 'पाइथागोरस प्रमेय' के नाम से जाना जाता है — किसी समकोण त्रिभुज के कर्ण का वर्ग शेष दो भुजाओं के वर्गों के योग के बराबर होता है। यह विवरण यूनानी गणितज्ञ पाइथागोरस (जो ६ठी शताब्दी ईसा पूर्व में हुए) से लगभग दो-तीन सौ वर्ष पहले का माना जाता है।",
        body_en: "The Baudhayana Shulba Sutra contains a rule now known as the 'Pythagorean theorem' — that the square of the hypotenuse of a right-angled triangle equals the sum of the squares of the other two sides. This statement is believed to predate the Greek mathematician Pythagoras (6th century BCE) by two to three centuries."
      },
      {
        heading_hi: "अन्य ज्यामितीय योगदान",
        heading_en: "Other Geometric Contributions",
        body_hi: "बौधायन ने वर्ग को वृत्त में बदलने (circling the square) और वृत्त को वर्ग में बदलने की सन्निकट विधियां भी दीं, साथ ही √2 का बेहद सटीक सन्निकट मान भी दिया, जो पांच दशमलव स्थान तक शुद्ध है। ये उपलब्धियां दर्शाती हैं कि वैदिक काल में व्यावहारिक और सैद्धांतिक गणित दोनों का उच्च स्तर मौजूद था।",
        body_en: "Baudhayana also provided approximate methods for circling the square and squaring the circle, along with a remarkably accurate approximation of √2, correct to five decimal places. These achievements show that both practical and theoretical mathematics reached a high level of sophistication in the Vedic period."
      }
    ]
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "आचार्य वराहमिहिर उज्जैन के प्रसिद्ध विद्वान थे और उन्हें भारत के 'नवरत्नों' में से एक माना जाता है। उनका सबसे प्रसिद्ध ग्रंथ 'पंचसिद्धांतिका' अपने समय के पांच प्रमुख खगोलीय सिद्धांतों का सार-संग्रह है, जो प्राचीन भारतीय खगोलशास्त्र की तुलनात्मक समझ के लिए एक अमूल्य स्रोत है।",
        body_en: "Acharya Varahamihira was a celebrated scholar of Ujjain and is counted among India's legendary 'Navaratnas' (nine gems of the court). His most famous text, the 'Panchasiddhantika', is a comparative summary of five major astronomical treatises of his era, and remains an invaluable source for understanding ancient Indian astronomy."
      },
      {
        heading_hi: "खगोलीय गति की समझ",
        heading_en: "Understanding of Celestial Motion",
        body_hi: "वराहमिहिर ने स्पष्ट रूप से लिखा कि चंद्रमा पृथ्वी की परिक्रमा करता है और पृथ्वी सूर्य की परिक्रमा करती है — यह समझ उस समय के लिए असाधारण थी। उन्होंने ग्रहों की स्थिति, ग्रहणों की गणना और कैलेंडर निर्माण से जुड़े गणितीय सूत्र भी दिए, जो सदियों तक भारतीय पंचांग परंपरा का आधार बने रहे।",
        body_en: "Varahamihira explicitly wrote that the Moon orbits the Earth and the Earth orbits the Sun — an extraordinary understanding for his era. He also provided mathematical formulas for planetary positions, eclipse calculations and calendar construction, which remained the foundation of the Indian panchang (almanac) tradition for centuries."
      },
      {
        heading_hi: "भूकंप की भविष्यवाणी",
        heading_en: "Earthquake Prediction",
        body_hi: "अपने ग्रंथ 'बृहत्संहिता' में वराहमिहिर ने वनस्पतियों, पशु व्यवहार और भूजल परिवर्तनों को देखकर आने वाले भूकंप का पूर्वानुमान लगाने की विधियां वर्णित कीं। यह प्राचीन दृष्टिकोण आधुनिक 'earthquake precursor' अनुसंधान से आश्चर्यजनक समानता रखता है, जिसमें आज भी पशु व्यवहार में असामान्य बदलावों का अध्ययन किया जाता है।",
        body_en: "In his text 'Brihat Samhita', Varahamihira described methods for forecasting earthquakes by observing vegetation, animal behaviour and changes in groundwater. This ancient approach bears a striking resemblance to modern 'earthquake precursor' research, which still studies unusual changes in animal behaviour today."
      }
    ]
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
    sections: [
      {
        heading_hi: "परिचय",
        heading_en: "Introduction",
        body_hi: "रसायन-शास्त्री नागार्जुन (जिन्हें बौद्ध दार्शनिक नागार्जुन से भिन्न माना जाता है) भारतीय रसायन विज्ञान — जिसे 'रसशास्त्र' कहा जाता है — के सबसे बड़े प्रवर्तकों में गिने जाते हैं। उनका ग्रंथ 'रसरत्नाकर' धातु-विज्ञान और औषध-रसायन का एक विस्तृत संग्रह है।",
        body_en: "The alchemist-chemist Nagarjuna (considered distinct from the Buddhist philosopher of the same name) is counted among the greatest pioneers of Indian chemistry — known as 'Rasashastra'. His text 'Rasaratnakara' is an extensive compendium of metallurgy and medicinal chemistry."
      },
      {
        heading_hi: "पारे का शुद्धिकरण और भस्म विज्ञान",
        heading_en: "Mercury Purification and the Science of Bhasma",
        body_hi: "नागार्जुन ने पारे (mercury) को शुद्ध और स्थिर करने की जटिल प्रक्रियाएं विकसित कीं, जिन्हें आयुर्वेद में 'रस-शोधन' कहा जाता है। उन्होंने धातुओं और खनिजों को बार-बार भस्म (ऑक्साइड रूप में परिवर्तित राख) में बदलने की विधियां दीं, जिनका उपयोग असाध्य रोगों की चिकित्सा में किया जाता था — यह प्रक्रिया आधुनिक रसायन विज्ञान की भस्मीकरण (calcination) तकनीक से मिलती-जुलती है।",
        body_en: "Nagarjuna developed intricate processes for purifying and stabilising mercury, known in Ayurveda as 'rasa-shodhana'. He gave methods for repeatedly converting metals and minerals into bhasma (an ash-like oxide form) used to treat otherwise incurable diseases — a process closely resembling the calcination techniques of modern chemistry."
      },
      {
        heading_hi: "धातु रूपांतरण के प्रयोग",
        heading_en: "Experiments in Metal Transmutation",
        body_hi: "अपने ग्रंथों में नागार्जुन ने धातुओं के गुणधर्म बदलने और एक धातु को दूसरी में रूपांतरित करने के प्रयोगों का वर्णन किया — यूरोप की मध्यकालीन 'कीमिया' (alchemy) परंपरा से सदियों पहले। यद्यपि उनकी सभी विधियां आधुनिक कसौटी पर खरी नहीं उतरतीं, फिर भी उनका व्यवस्थित प्रयोगात्मक दृष्टिकोण भारतीय रसायन विज्ञान की समृद्ध परंपरा को दर्शाता है।",
        body_en: "In his texts, Nagarjuna described experiments in altering the properties of metals and transmuting one metal into another — centuries before Europe's medieval alchemical tradition. While not all his methods hold up under modern scrutiny, his systematic, experimental approach reflects the rich tradition of Indian chemical science."
      }
    ]
  }

];
