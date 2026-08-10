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
  },

{
    id: 11,
    slug: "brahmagupta",
    name_hi: "ब्रह्मगुप्त",
    name_en: "Brahmagupta",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "५९८ – लगभग ६६८ ई.",
    era_en: "598 – c. 668 CE",
    image: "Brahmagupta.png",
    summary_hi: "शून्य के साथ अंकगणित के नियमों को व्यवस्थित करने वाले महान गणितज्ञ, जिनका ब्रह्मस्फुटसिद्धांत भारतीय गणित के इतिहास की महत्वपूर्ण कृति है।",
    summary_en: "The great mathematician who systematically formulated arithmetic rules involving zero and whose Brahmasphutasiddhanta became a major work in Indian mathematics.",
    externalUrl: "brahmagupta-zero-negative-numbers.html"
  },

{
    id: 12,
    slug: "bhaskara-i",
    name_hi: "भास्कर प्रथम",
    name_en: "Bhaskara I",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग ६०० – ६८० ई.",
    era_en: "c. 600 – 680 CE",
    image: "Bhaskara-I.png",
    summary_hi: "आर्यभट्ट की गणितीय और खगोलीय परंपरा के प्रमुख व्याख्याकार, जिन्होंने साइन के लिए एक प्रसिद्ध सन्निकटन सूत्र दिया।",
    summary_en: "A major commentator on Aryabhata's mathematical and astronomical tradition, known for a notable approximation formula for the sine function.",
    externalUrl: "bhaskara-i-sine-approximation.html"
  },

{
    id: 13,
    slug: "sridhara",
    name_hi: "श्रीधराचार्य",
    name_en: "Sridhara",
    field_hi: "गणित",
    field_en: "Mathematics",
    era_hi: "लगभग ८वीं–९वीं शताब्दी ई.",
    era_en: "c. 8th–9th century CE",
    image: "Sridhara.png",
    summary_hi: "अंकगणित और बीजगणित के महत्वपूर्ण आचार्य, जिनके नाम से द्विघात समीकरण के प्रसिद्ध सूत्र की परंपरा जुड़ी है।",
    summary_en: "An important Indian mathematician associated with arithmetic and algebra, traditionally linked with a celebrated method for solving quadratic equations.",
    externalUrl: "sridhara-quadratic-equation.html"
  },

{
    id: 14,
    slug: "mahavira-mathematician",
    name_hi: "महावीराचार्य",
    name_en: "Mahavira",
    field_hi: "गणित",
    field_en: "Mathematics",
    era_hi: "लगभग ९वीं शताब्दी ई.",
    era_en: "c. 9th century CE",
    image: "Mahavira.png",
    summary_hi: "गणितसारसंग्रह के रचयिता, जिन्होंने भिन्नों, अनुपातों, क्षेत्रमिति और बीजगणितीय समस्याओं को व्यवस्थित रूप से प्रस्तुत किया।",
    summary_en: "Author of Ganita Sara Sangraha, who systematized work on fractions, ratios, geometry and algebraic problems.",
    externalUrl: "mahavira-ganita-sara-sangraha.html"
  },

{
    id: 15,
    slug: "prithudakasvami",
    name_hi: "पृथूदकस्वामी",
    name_en: "Prithudakasvami",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग ९वीं शताब्दी ई.",
    era_en: "c. 9th century CE",
    image: "Prithudakasvami.png",
    summary_hi: "ब्रह्मगुप्त की गणितीय परंपरा के महत्वपूर्ण व्याख्याकार, जिन्होंने बीजगणित और अंकगणितीय नियमों की व्याख्या की।",
    summary_en: "An important commentator in the Brahmagupta mathematical tradition who helped explain algebraic and arithmetic rules.",
    externalUrl: "prithudakasvami-brahmagupta-commentary.html"
  },

{
    id: 16,
    slug: "aryabhata-ii",
    name_hi: "आर्यभट्ट द्वितीय",
    name_en: "Aryabhata II",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग १०वीं शताब्दी ई.",
    era_en: "c. 10th century CE",
    image: "Aryabhata-II.png",
    summary_hi: "आर्यभट्ट नाम की बाद की खगोलीय परंपरा के प्रमुख गणितज्ञ, जिन्होंने गणितीय खगोलशास्त्र पर स्वतंत्र ग्रंथ लिखा।",
    summary_en: "A later mathematician-astronomer of the Aryabhata tradition who produced an independent work on mathematical astronomy.",
    externalUrl: "aryabhata-ii-astronomy-mathematics.html"
  },

{
    id: 17,
    slug: "sripati",
    name_hi: "श्रीपति",
    name_en: "Sripati",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग १०१९ – १०६६ ई.",
    era_en: "c. 1019 – 1066 CE",
    image: "Sripati.png",
    summary_hi: "भारतीय गणितीय खगोलशास्त्र के आचार्य, जिन्होंने ज्योतिष और गणित पर महत्वपूर्ण ग्रंथों की रचना की।",
    summary_en: "A notable Indian mathematical astronomer who wrote influential works on astronomy and mathematics.",
    externalUrl: "sripati-mathematics-astronomy.html"
  },

{
    id: 18,
    slug: "hemachandra",
    name_hi: "आचार्य हेमचंद्र",
    name_en: "Acharya Hemachandra",
    field_hi: "गणित, व्याकरण एवं साहित्य",
    field_en: "Mathematics, Grammar & Literature",
    era_hi: "१०८९ – ११७२ ई.",
    era_en: "1089 – 1172 CE",
    image: "Hemachandra.png",
    summary_hi: "बहु-विषयी आचार्य जिन्होंने छंदों की गणना में ऐसी recurrence परंपरा दी जिसे आधुनिक फिबोनाची अनुक्रम से जोड़ा जाता है।",
    summary_en: "A polymath whose study of poetic metres included a recurrence pattern often connected with the Fibonacci sequence.",
    externalUrl: "hemachandra-fibonacci-sequence.html"
  },

{
    id: 19,
    slug: "narayana-pandita",
    name_hi: "नारायण पंडित",
    name_en: "Narayana Pandita",
    field_hi: "गणित",
    field_en: "Mathematics",
    era_hi: "लगभग १४वीं शताब्दी ई.",
    era_en: "c. 14th century CE",
    image: "Narayana-Pandita.png",
    summary_hi: "गणितीय संयोजन, क्रमचय और संख्या-पद्धतियों पर उल्लेखनीय कार्य करने वाले भारतीय गणितज्ञ।",
    summary_en: "An Indian mathematician known for important work involving combinatorics, permutations and numerical methods.",
    externalUrl: "narayana-pandita-combinatorics.html"
  },

{
    id: 20,
    slug: "madhava-sangamagrama",
    name_hi: "संगमग्राम के माधव",
    name_en: "Madhava of Sangamagrama",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग १३४० – १४२५ ई.",
    era_en: "c. 1340 – 1425 CE",
    image: "Madhava.png",
    summary_hi: "केरल गणितीय विद्यालय के महान गणितज्ञ, जिनके कार्यों में π, साइन और कोसाइन के अनंत श्रेणी विस्तारों की प्रारंभिक परंपरा दिखाई देती है।",
    summary_en: "A leading mathematician of the Kerala school whose work included early infinite-series developments for pi, sine and cosine.",
    externalUrl: "madhava-sangamagrama-infinite-series-pi.html"
  },

{
    id: 21,
    slug: "parameshvara",
    name_hi: "परमेश्वर",
    name_en: "Parameshvara",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग १३६० – १४५५ ई.",
    era_en: "c. 1360 – 1455 CE",
    image: "Parameshvara.png",
    summary_hi: "केरल स्कूल के प्रमुख खगोलज्ञ और गणितज्ञ, जिन्होंने प्रेक्षणों, ग्रह-गणना और गणितीय विधियों पर काम किया।",
    summary_en: "A major Kerala-school astronomer and mathematician known for observational astronomy and computational methods.",
    externalUrl: "parameshvara-kerala-school-astronomy.html"
  },

{
    id: 22,
    slug: "nilakantha-somayaji",
    name_hi: "नीलकंठ सोमयाजी",
    name_en: "Nilakantha Somayaji",
    field_hi: "खगोलशास्त्र एवं गणित",
    field_en: "Astronomy & Mathematics",
    era_hi: "१४४४ – लगभग १५४४ ई.",
    era_en: "1444 – c. 1544 CE",
    image: "Nilakantha.png",
    summary_hi: "केरल गणितीय विद्यालय के प्रमुख खगोलज्ञ, जिन्होंने ग्रहों की गति के लिए उन्नत गणितीय मॉडल और तंत्रसंग्रह की रचना की।",
    summary_en: "A leading Kerala-school astronomer who developed sophisticated mathematical models for planetary motion and authored Tantrasangraha.",
    externalUrl: "nilakantha-somayaji-planetary-model.html"
  },

{
    id: 23,
    slug: "jyeshthadeva",
    name_hi: "ज्येष्ठदेव",
    name_en: "Jyeshthadeva",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग १६वीं शताब्दी ई.",
    era_en: "c. 16th century CE",
    image: "Jyeshthadeva.png",
    summary_hi: "युक्‍तिभाषा के रचयिता माने जाने वाले केरल स्कूल के गणितज्ञ, जिन्होंने गणितीय परिणामों के प्रमाण और व्याख्याएँ दीं।",
    summary_en: "A Kerala-school mathematician associated with Yuktibhasa, notable for detailed mathematical explanations and proofs.",
    externalUrl: "jyeshthadeva-yuktibhasa-calculus.html"
  },

{
    id: 24,
    slug: "achyuta-pisharati",
    name_hi: "अच्युत पिशारटि",
    name_en: "Achyuta Pisharati",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग १५५० – १६२१ ई.",
    era_en: "c. 1550 – 1621 CE",
    image: "Achyuta-Pisharati.png",
    summary_hi: "केरल की गणितीय-खगोलीय परंपरा के विद्वान जिन्होंने ग्रह-गणना और गणितीय खगोलशास्त्र में योगदान दिया।",
    summary_en: "A scholar of the Kerala mathematical-astronomical tradition who contributed to planetary computation and mathematical astronomy.",
    externalUrl: "achyuta-pisharati-astronomy.html"
  },

{
    id: 25,
    slug: "ganesa-daivajna",
    name_hi: "गणेश दैवज्ञ",
    name_en: "Ganesa Daivajna",
    field_hi: "गणित एवं खगोलशास्त्र",
    field_en: "Mathematics & Astronomy",
    era_hi: "लगभग १६वीं शताब्दी ई.",
    era_en: "c. 16th century CE",
    image: "Ganesa-Daivajna.png",
    summary_hi: "गणितीय खगोलशास्त्र के प्रसिद्ध विद्वान, जिन्होंने ग्रहों की गणना और पंचांग परंपरा में महत्वपूर्ण कार्य किया।",
    summary_en: "A prominent mathematical astronomer whose work contributed to planetary computation and Indian calendrical astronomy.",
    externalUrl: "ganesa-daivajna-astronomy.html"
  },

{
    id: 26,
    slug: "sawai-jai-singh-ii",
    name_hi: "सवाई जयसिंह द्वितीय",
    name_en: "Sawai Jai Singh II",
    field_hi: "खगोलशास्त्र एवं वेधशालाएँ",
    field_en: "Astronomy & Observatories",
    era_hi: "१६८८ – १७४३ ई.",
    era_en: "1688 – 1743 CE",
    image: "Jai-Singh-II.png",
    summary_hi: "विशाल खगोलीय यंत्रों और जंतर-मंतर वेधशालाओं के निर्माता, जिन्होंने खगोलीय प्रेक्षण और गणना को संस्थागत रूप दिया।",
    summary_en: "Founder of the monumental Jantar Mantar observatories who advanced organized astronomical observation and computation.",
    externalUrl: "jai-singh-ii-jantar-mantar-astronomy.html"
  },

{
    id: 27,
    slug: "udayaditya",
    name_hi: "उदयादित्य",
    name_en: "Udayaditya",
    field_hi: "गणितीय परंपरा",
    field_en: "Mathematical Tradition",
    era_hi: "मध्यकालीन भारत",
    era_en: "Medieval India",
    image: "Udayaditya.png",
    summary_hi: "भारतीय गणितीय परंपरा से जुड़े विद्वान, जिनका उल्लेख संख्या और गणना संबंधी साहित्य के इतिहास में मिलता है।",
    summary_en: "A scholar associated with India's medieval mathematical tradition and the history of numerical and computational literature.",
    externalUrl: "udayaditya-indian-mathematics.html"
  },

{
    id: 30,
    slug: "pingala",
    name_hi: "पिंगल",
    name_en: "Pingala",
    field_hi: "छंदशास्त्र एवं गणित",
    field_en: "Prosody & Combinatorics",
    era_hi: "प्राचीन भारत",
    era_en: "Ancient India",
    image: "Pingala.png",
    summary_hi: "छंदशास्त्र के आचार्य जिनकी परंपरा में द्विआधारी संयोजन, क्रम-विन्यास और मेरु-प्रस्तार जैसी गणनात्मक अवधारणाओं का वर्णन मिलता है।",
    summary_en: "An early authority on prosody whose tradition includes combinatorial methods such as binary patterns and Meru-prastara.",
    externalUrl: "pingala-prosody-binary-combinatorics.html"
  },

{
    id: 32,
    slug: "vagbhata",
    name_hi: "आचार्य वाग्भट",
    name_en: "Acharya Vagbhata",
    field_hi: "आयुर्वेद",
    field_en: "Ayurveda",
    era_hi: "लगभग ६ठी–७वीं शताब्दी ई.",
    era_en: "c. 6th–7th century CE",
    image: "Vagbhata.png",
    summary_hi: "अष्टांगहृदय और अष्टांगसंग्रह से जुड़े आयुर्वेदाचार्य जिन्होंने चिकित्सा के विभिन्न अंगों संक्षिप्त और व्यवस्थित रूप में प्रस्तुत किया।",
    summary_en: "An influential Ayurvedic authority associated with Ashtanga Hridaya and Ashtanga Sangraha, systematizing multiple branches of medicine.",
    externalUrl: "vagbhata-ashtanga-hridaya-ayurveda.html"
  },

{
    id: 33,
    slug: "madhavakara",
    name_hi: "माधवकर",
    name_en: "Madhavakara",
    field_hi: "आयुर्वेद एवं रोग-विज्ञान",
    field_en: "Ayurveda & Clinical Medicine",
    era_hi: "लगभग ७वीं–८वीं शताब्दी ई.",
    era_en: "c. 7th–8th century CE",
    image: "Madhavakara.png",
    summary_hi: "माधवनिदान के रचयिता, जिनका ग्रंथ रोगों के लक्षण और निदान के व्यवस्थित वर्णन के लिए प्रसिद्ध है।",
    summary_en: "Author of Madhava Nidana, an influential Ayurvedic work known for systematic descriptions of disease signs and diagnosis.",
    externalUrl: "madhavakara-madhava-nidana.html"
  },

{
    id: 34,
    slug: "vriddha-vagbhata",
    name_hi: "वृद्ध वाग्भट",
    name_en: "Vriddha Vagbhata",
    field_hi: "आयुर्वेद",
    field_en: "Ayurveda",
    era_hi: "मध्यकालीन प्रारंभिक भारत",
    era_en: "Early Medieval India",
    image: "Vriddha-Vagbhata.png",
    summary_hi: "अष्टांगसंग्रह से संबद्ध आयुर्वेदिक परंपरा के महत्वपूर्ण आचार्य, जिन्होंने चिकित्सा के आठ अंगों को समेकित किया।",
    summary_en: "An important Ayurvedic authority associated with the Ashtanga Sangraha tradition and its synthesis of eight branches of medicine.",
    externalUrl: "vriddha-vagbhata-ashtanga-sangraha.html"
  },

{
    id: 35,
    slug: "shalihotra",
    name_hi: "शालिहोत्र",
    name_en: "Shalihotra",
    field_hi: "पशु चिकित्सा",
    field_en: "Veterinary Medicine",
    era_hi: "प्राचीन भारत",
    era_en: "Ancient India",
    image: "Shalihotra.png",
    summary_hi: "भारतीय पशु चिकित्सा परंपरा के प्राचीन आचार्य, जिनके नाम से घोड़ों की चिकित्सा और देखभाल का साहित्य जुड़ा है।",
    summary_en: "An ancient authority associated with Indian veterinary medicine, especially the care and treatment of horses.",
    externalUrl: "shalihotra-ancient-veterinary-medicine.html"
  },

{
    id: 41,
    slug: "kashyapa-ayurveda",
    name_hi: "कश्यप",
    name_en: "Kashyapa",
    field_hi: "बाल चिकित्सा एवं स्त्री-रोग परंपरा",
    field_en: "Pediatrics & Obstetrics Tradition",
    era_hi: "प्राचीन भारत",
    era_en: "Ancient India",
    image: "Kashyapa.png",
    summary_hi: "काश्यप संहिता की परंपरा से जुड़े आचार्य, जिनका नाम बाल चिकित्सा, प्रसूति और स्त्री स्वास्थ्य संबंधी आयुर्वेदिक ज्ञान से जुड़ा है।",
    summary_en: "An authority associated with the Kashyapa tradition of Ayurveda, especially knowledge concerning pediatrics, childbirth and women's health.",
    externalUrl: "kashyapa-samhita-ayurveda.html"
  },

{
    id: 42,
    slug: "bhoja-engineering",
    name_hi: "राजा भोज",
    name_en: "Raja Bhoja",
    field_hi: "वास्तु, अभियांत्रिकी एवं ज्ञान परंपरा",
    field_en: "Architecture, Engineering & Knowledge",
    era_hi: "लगभग १०१० – १०५५ ई.",
    era_en: "c. 1010 – 1055 CE",
    image: "Raja-Bhoja.png",
    summary_hi: "बहु-विषयी विद्वान शासक जिनसे वास्तु, जल-प्रबंधन, स्थापत्य और विभिन्न ज्ञान-विषयों से जुड़े ग्रंथों की परंपरा जोड़ी जाती है।",
    summary_en: "A polymathic ruler associated with traditions of architecture, water management, engineering and a wide range of scholarly works.",
    externalUrl: "raja-bhoja-architecture-engineering.html"
  },

];
