const translations = {
  en: {
    steps: [
      "Start",
      "Language",
      "Contact Details",
      "Farm Details",
      "Soil Health",
      "Biodiversity",
      "Pest & Inputs",
      "Water & Soil",
      "Livestock",
      "Preview",
      "Success"
    ],
    start: {
      title: "Farmer Scorecard Assessment Input Form",
      button: "Start Assessment"
    },
    language: {
      title: "Select Your Language",
      english: "English",
      hindi: "Hindi",
      marathi: "Marathi",
      telugu: "Telugu",
      kannada: "Kannada",
      oriya: "Oriya",
      next: "Next"
    },
    contact: {
      title: "Farmer Contact Details",
      fullName: "Full Name",
      email: "Email",
      whatsapp: "Whatsapp Number",
      date: "Date of Assessment"
    },
    apartment: {
      title: "About the Farm being Assessed",
      name: "Name of Farm",
      map: "Google Map Link of Farm",
      units: "Number of Plots in the Farm"
    },
    buttons: {
      next: "Next",
      back: "Back",
      finish: "Finish",
      submit: "Submit",
      edit: "Edit your response",
      cancel: "Cancel",
      confirm: "Yes, Submit",
      restart: "Submit Another Form",
      pdf: "Download PDF Report",
      clear: "Clear Form"
    },
    messages: {
      required: "Required",
      invalidEmail: "Invalid email address",
      invalidPhone: "Phone must be exactly 10 digits",
      notApplicable: "Not Applicable",
      previewTitle: "Preview Your Submission",
      confirmSubmit: "Are you sure you want to submit and view your results?",
      thankYou: "Thank you, {name} for completing the assessment!"
    },
    sections: [
      {
        title: "1) Soil Health Assessment",
        questions: [
          {
            label: "1.1 Crop cover and living roots",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Occasional cover" },
              { value: 2, label: "Seasonal cover" },
              { value: 3, label: "Year-round cover" }
            ]
          },
          {
            label: "1.2 Tillage practices",
            options: [
              { value: 0, label: "Intensive tillage" },
              { value: 1, label: "Conventional tillage" },
              { value: 2, label: "Reduced tillage" },
              { value: 3, label: "No-till" }
            ]
          },
          {
            label: "1.3 Soil amendments",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Chemical fertilizers only" },
              { value: 2, label: "Mixed organic & chemical" },
              { value: 3, label: "Organic compost/manure" }
            ]
          }
        ]
      },
      {
        title: "2) Biodiversity & Crop Management",
        questions: [
          {
            label: "2.1 Crop rotation",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "2-year rotation" },
              { value: 2, label: "3-year rotation" },
              { value: 3, label: "Diverse multi-year rotation" }
            ]
          },
          {
            label: "2.2 Indigenous seeds",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Occasional" },
              { value: 2, label: "Regular" },
              { value: 3, label: "Predominant use" }
            ]
          }
        ]
      },
      {
        title: "3) Pest, Disease and Input Management",
        questions: [
          {
            label: "3.1 Chemical pesticides",
            options: [
              { value: 0, label: "High use" },
              { value: 1, label: "Moderate use" },
              { value: 2, label: "Low use" },
              { value: 3, label: "No chemical use" }
            ]
          },
          {
            label: "3.2 Input reliance",
            options: [
              { value: 0, label: "Fully dependent on market inputs" },
              { value: 1, label: "Mostly dependent" },
              { value: 2, label: "Partially self-reliant" },
              { value: 3, label: "Fully self-reliant inputs" }
            ]
          }
        ]
      },
      {
        title: "4) Water & Soil Moisture Management",
        questions: [
          {
            label: "4.1 Rainwater harvesting",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Plans in place" },
              { value: 2, label: "Partially implemented" },
              { value: 3, label: "Fully operational" }
            ]
          },
          {
            label: "4.2 Soil moisture",
            options: [
              { value: 0, label: "No monitoring" },
              { value: 1, label: "Basic checks" },
              { value: 2, label: "Periodic monitoring" },
              { value: 3, label: "Smart sensors" }
            ]
          }
        ]
      },
      {
        title: "5) Integration of Livestock",
        questions: [
          {
            label: "5.1 Livestock integration",
            options: [
              { value: 0, label: "None" },
              { value: 1, label: "Minimal" },
              { value: 2, label: "Moderate" },
              { value: 3, label: "High integration" }
            ]
          },
          {
            label: "5.2 Grazing practices",
            options: [
              { value: 0, label: "Uncontrolled grazing" },
              { value: 1, label: "Occasional control" },
              { value: 2, label: "Rotational grazing" },
              { value: 3, label: "Well-managed sustainable grazing" }
            ]
          }
        ]
      }
    ]
  },

  hi: {
    steps: [
      "शुरू करें",
      "भाषा",
      "संपर्क विवरण",
      "खेत का विवरण",
      "मृदा स्वास्थ्य",
      "जैव विविधता",
      "कीट और इनपुट",
      "जल और मृदा",
      "पशुधन",
      "पूर्वावलोकन",
      "सफलता"
    ],
    start: {
      title: "किसान स्कोरकार्ड मूल्यांकन इनपुट फॉर्म",
      button: "मूल्यांकन प्रारंभ करें"
    },
    language: {
      title: "अपनी भाषा चुनें",
      english: "अंग्रेज़ी",
      hindi: "हिंदी",
      marathi: "मराठी",
      telugu: "तेलुगु",
      kannada: "कन्नड़",
      oriya: "उड़िया",
      next: "आगे"
    },
    contact: {
      title: "किसान संपर्क विवरण",
      fullName: "पूरा नाम",
      email: "ईमेल",
      whatsapp: "व्हाट्सएप नंबर",
      date: "मूल्यांकन की तारीख"
    },
    apartment: {
      title: "जिस खेत का मूल्यांकन किया जा रहा है उसके बारे में",
      name: "खेत का नाम",
      map: "खेत का गूगल मानचित्र लिंक",
      units: "खेत में प्लॉट की संख्या"
    },
    buttons: {
      next: "आगे",
      back: "पीछे",
      finish: "समाप्त",
      submit: "सबमिट करें",
      edit: "अपना उत्तर संपादित करें",
      cancel: "रद्द करें",
      confirm: "हाँ, सबमिट करें",
      restart: "एक और फॉर्म सबमिट करें",
      pdf: "पीडीएफ रिपोर्ट डाउनलोड करें",
      clear: "फॉर्म साफ करें"
    },
    messages: {
      required: "आवश्यक",
      invalidEmail: "अमान्य ईमेल पता",
      invalidPhone: "फ़ोन नंबर 10 अंकों का होना चाहिए",
      notApplicable: "लागू नहीं",
      previewTitle: "अपना सबमिशन देखें",
      confirmSubmit: "क्या आप सबमिट करना और परिणाम देखना चाहते हैं?",
      thankYou: "धन्यवाद, {name} ने मूल्यांकन पूरा किया!"
    },
    sections: [
      {
        title: "1) मृदा स्वास्थ्य मूल्यांकन",
        questions: [
          {
            label: "1.1 फसल आवरण और जीवित जड़ें",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "कभी-कभी आवरण" },
              { value: 2, label: "मौसमी आवरण" },
              { value: 3, label: "साल भर आवरण" }
            ]
          },
          {
            label: "1.2 जुताई के तरीके",
            options: [
              { value: 0, label: "गहन जुताई" },
              { value: 1, label: "पारंपरिक जुताई" },
              { value: 2, label: "कम जुताई" },
              { value: 3, label: "बिना जुताई" }
            ]
          },
          {
            label: "1.3 मृदा संशोधन",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "केवल रासायनिक उर्वरक" },
              { value: 2, label: "मिश्रित जैविक और रासायनिक" },
              { value: 3, label: "जैविक खाद/गोबर" }
            ]
          }
        ]
      },
      {
        title: "2) जैव विविधता और फसल प्रबंधन",
        questions: [
          {
            label: "2.1 फसल चक्रण",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "2-वर्षीय चक्र" },
              { value: 2, label: "3-वर्षीय चक्र" },
              { value: 3, label: "विविध बहुवर्षीय चक्र" }
            ]
          },
          {
            label: "2.2 देशी बीज",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "कभी-कभी" },
              { value: 2, label: "नियमित" },
              { value: 3, label: "मुख्य रूप से उपयोग" }
            ]
          }
        ]
      },
      {
        title: "3) कीट, रोग और इनपुट प्रबंधन",
        questions: [
          {
            label: "3.1 रासायनिक कीटनाशक",
            options: [
              { value: 0, label: "अधिक उपयोग" },
              { value: 1, label: "मध्यम उपयोग" },
              { value: 2, label: "कम उपयोग" },
              { value: 3, label: "कोई रासायनिक उपयोग नहीं" }
            ]
          },
          {
            label: "3.2 इनपुट पर निर्भरता",
            options: [
              { value: 0, label: "पूरी तरह बाजार पर निर्भर" },
              { value: 1, label: "अधिकतर निर्भर" },
              { value: 2, label: "आंशिक रूप से आत्मनिर्भर" },
              { value: 3, label: "पूरी तरह आत्मनिर्भर" }
            ]
          }
        ]
      },
      {
        title: "4) जल और मृदा नमी प्रबंधन",
        questions: [
          {
            label: "4.1 वर्षा जल संचयन",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "योजना बनाई गई" },
              { value: 2, label: "आंशिक रूप से लागू" },
              { value: 3, label: "पूरी तरह संचालित" }
            ]
          },
          {
            label: "4.2 मृदा नमी",
            options: [
              { value: 0, label: "कोई निगरानी नहीं" },
              { value: 1, label: "मूलभूत जांच" },
              { value: 2, label: "नियमित निगरानी" },
              { value: 3, label: "स्मार्ट सेंसर" }
            ]
          }
        ]
      },
      {
        title: "5) पशुधन का एकीकरण",
        questions: [
          {
            label: "5.1 पशुधन एकीकरण",
            options: [
              { value: 0, label: "कोई नहीं" },
              { value: 1, label: "न्यूनतम" },
              { value: 2, label: "मध्यम" },
              { value: 3, label: "उच्च एकीकरण" }
            ]
          },
          {
            label: "5.2 चराई प्रथाएं",
            options: [
              { value: 0, label: "अनियंत्रित चराई" },
              { value: 1, label: "कभी-कभी नियंत्रण" },
              { value: 2, label: "घुमावदार चराई" },
              { value: 3, label: "अच्छी तरह प्रबंधित सतत चराई" }
            ]
          }
        ]
      }
    ]
  },

  mr: {
    steps: [
      "सुरू करा",
      "भाषा",
      "संपर्क तपशील",
      "शेतीचे तपशील",
      "मातीचे आरोग्य",
      "जैवविविधता",
      "कीड व इनपुट",
      "पाणी व माती",
      "पशुधन",
      "पूर्वावलोकन",
      "यशस्वी"
    ],
    start: {
      title: "शेतकरी स्कोरकार्ड मूल्यांकन इनपुट फॉर्म",
      button: "मूल्यांकन सुरू करा"
    },
    language: {
      title: "आपली भाषा निवडा",
      english: "इंग्रजी",
      hindi: "हिंदी",
      marathi: "मराठी",
      telugu: "तेलुगु",
      kannada: "कन्नड",
      oriya: "उडिया",
      next: "पुढे"
    },
    contact: {
      title: "शेतकरी संपर्क तपशील",
      fullName: "पूर्ण नाव",
      email: "ईमेल",
      whatsapp: "व्हॉट्सअॅप क्रमांक",
      date: "मूल्यांकनाची तारीख"
    },
    apartment: {
      title: "ज्या शेतीचे मूल्यांकन केले जात आहे त्याबद्दल",
      name: "शेतीचे नाव",
      map: "शेतीचा गूगल नकाशा दुवा",
      units: "शेतीतील प्लॉटची संख्या"
    },
    buttons: {
      next: "पुढे",
      back: "मागे",
      finish: "पूर्ण",
      submit: "सबमिट करा",
      edit: "तुमचे उत्तर संपादित करा",
      cancel: "रद्द करा",
      confirm: "होय, सबमिट करा",
      restart: "आणखी एक फॉर्म सबमिट करा",
      pdf: "पीडीएफ रिपोर्ट डाउनलोड करा",
      clear: "फॉर्म साफ करा"
    },
    messages: {
      required: "आवश्यक",
      invalidEmail: "अवैध ईमेल पत्ता",
      invalidPhone: "फोन क्रमांक नेमके 10 अंकांचे असावे",
      notApplicable: "लागू नाही",
      previewTitle: "तुमचा सबमिशन पहा",
      confirmSubmit: "तुम्हाला सबमिट करून निकाल पाहायचे आहेत का?",
      thankYou: "धन्यवाद, {name} ने मूल्यांकन पूर्ण केले!"
    },
    sections: [
      {
        title: "1) मातीचे आरोग्य मूल्यांकन",
        questions: [
          {
            label: "1.1 पीक आच्छादन आणि जिवंत मुळे",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "कधीकधी आच्छादन" },
              { value: 2, label: "हंगामी आच्छादन" },
              { value: 3, label: "संपूर्ण वर्षभर आच्छादन" }
            ]
          },
          {
            label: "1.2 नांगरणी पद्धती",
            options: [
              { value: 0, label: "गंभीर नांगरणी" },
              { value: 1, label: "पारंपरिक नांगरणी" },
              { value: 2, label: "कमी नांगरणी" },
              { value: 3, label: "नो-टिल" }
            ]
          },
          {
            label: "1.3 माती सुधारणा",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "फक्त रासायनिक खते" },
              { value: 2, label: "मिश्रित सेंद्रिय आणि रासायनिक" },
              { value: 3, label: "सेंद्रिय कंपोस्ट/शेणखत" }
            ]
          }
        ]
      },
      {
        title: "2) जैवविविधता आणि पीक व्यवस्थापन",
        questions: [
          {
            label: "2.1 पीक फेरपालट",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "2-वर्षीय फेरपालट" },
              { value: 2, label: "3-वर्षीय फेरपालट" },
              { value: 3, label: "विविध बहुवर्षीय फेरपालट" }
            ]
          },
          {
            label: "2.2 स्थानिक बियाणे",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "कधीकधी" },
              { value: 2, label: "नियमित" },
              { value: 3, label: "प्रामुख्याने वापरले जाते" }
            ]
          }
        ]
      },
      {
        title: "3) कीड, रोग आणि इनपुट व्यवस्थापन",
        questions: [
          {
            label: "3.1 रासायनिक कीटकनाशके",
            options: [
              { value: 0, label: "जास्त वापर" },
              { value: 1, label: "मध्यम वापर" },
              { value: 2, label: "कमी वापर" },
              { value: 3, label: "कोणताही रासायनिक वापर नाही" }
            ]
          },
          {
            label: "3.2 इनपुट अवलंबित्व",
            options: [
              { value: 0, label: "पूर्णपणे बाजारावर अवलंबून" },
              { value: 1, label: "बहुतेक अवलंबून" },
              { value: 2, label: "आंशिकपणे आत्मनिर्भर" },
              { value: 3, label: "पूर्णपणे आत्मनिर्भर" }
            ]
          }
        ]
      },
      {
        title: "4) पाणी आणि मातीतील आर्द्रता व्यवस्थापन",
        questions: [
          {
            label: "4.1 पावसाचे पाणी साठवणे",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "योजना तयार आहे" },
              { value: 2, label: "आंशिकपणे अंमलात आणले" },
              { value: 3, label: "पूर्णपणे कार्यरत" }
            ]
          },
          {
            label: "4.2 मातीतील आर्द्रता",
            options: [
              { value: 0, label: "कोणतीही तपासणी नाही" },
              { value: 1, label: "मूलभूत तपासणी" },
              { value: 2, label: "नियमित तपासणी" },
              { value: 3, label: "स्मार्ट सेन्सर" }
            ]
          }
        ]
      },
      {
        title: "5) पशुधन एकत्रीकरण",
        questions: [
          {
            label: "5.1 पशुधन एकत्रीकरण",
            options: [
              { value: 0, label: "काहीही नाही" },
              { value: 1, label: "किमान" },
              { value: 2, label: "मध्यम" },
              { value: 3, label: "जास्त एकत्रीकरण" }
            ]
          },
          {
            label: "5.2 चारण पद्धती",
            options: [
              { value: 0, label: "अनियंत्रित चारण" },
              { value: 1, label: "कधीकधी नियंत्रण" },
              { value: 2, label: "फेरपालट चारण" },
              { value: 3, label: "सुयोग्यरीत्या व्यवस्थापित शाश्वत चारण" }
            ]
          }
        ]
      }
    ]
  },
  te: {
    steps: [
      "ప్రారంభించండి",
      "భాష",
      "సంప్రదింపు వివరాలు",
      "ఫార్మ్ వివరాలు",
      "మట్టి ఆరోగ్యం",
      "జీవ వైవిధ్యం",
      "కీటకాలు మరియు ఇన్‌పుట్స్",
      "నీరు మరియు మట్టి",
      "పశువులు",
      "ప్రివ్యూ",
      "విజయం"
    ],
    start: {
      title: "రైతు స్కోర్కార్డ్ అంచనా ఇన్‌పుట్ ఫారం",
      button: "అంచనాను ప్రారంభించండి"
    },
    language: {
      title: "మీ భాషను ఎంచుకోండి",
      english: "ఇంగ్లీష్",
      hindi: "హిందీ",
      marathi: "మరాఠీ",
      telugu: "తెలుగు",
      kannada: "ಕನ್ನಡ",
      oriya: "ఒడియా",
      next: "తదుపరి"
    },
    contact: {
      title: "రైతు సంప్రదింపు వివరాలు",
      fullName: "పూర్తి పేరు",
      email: "ఈమెయిల్",
      whatsapp: "వాట్సాప్ నంబర్",
      date: "అంచనా తేదీ"
    },
    apartment: {
      title: "అంచనా వేయబడుతున్న ఫార్మ్ గురించి",
      name: "ఫార్మ్ పేరు",
      map: "ఫార్మ్ గూగుల్ మ్యాప్ లింక్",
      units: "ఫార్మ్‌లోని ప్లాట్ల సంఖ్య"
    },
    buttons: {
      next: "తదుపరి",
      back: "వెనుకకు",
      finish: "ముగించు",
      submit: "సమర్పించండి",
      edit: "మీ సమాధానం సవరించండి",
      cancel: "రద్దు చేయి",
      confirm: "అవును, సమర్పించండి",
      restart: "మరొక ఫారం సమర్పించండి",
      pdf: "PDF నివేదిక డౌన్‌లోడ్ చేయండి",
      clear: "ఫారం క్లియర్ చేయి"
    },
    messages: {
      required: "తప్పనిసరి",
      invalidEmail: "చెల్లని ఈమెయిల్ చిరునామా",
      invalidPhone: "ఫోన్ నంబర్ ఖచ్చితంగా 10 అంకెలు ఉండాలి",
      notApplicable: "వర్తించదు",
      previewTitle: "మీ సమర్పణను ప్రివ్యూ చేయండి",
      confirmSubmit: "మీరు సమర్పించి ఫలితాలు చూడాలనుకుంటున్నారా?",
      thankYou: "ధన్యవాదాలు, {name} అంచనాను పూర్తి చేశారు!"
    },
    sections: [
      {
        title: "1) మట్టి ఆరోగ్య అంచనా",
        questions: [
          {
            label: "1.1 పంట కవర్ మరియు జీవించి ఉన్న వేర్లు",
            options: [
              { value: 0, label: "ఏమీ లేదు" },
              { value: 1, label: "అప్పుడప్పుడు కవర్" },
              { value: 2, label: "ఋతువారీ కవర్" },
              { value: 3, label: "సంవత్సరం పొడవునా కవర్" }
            ]
          },
          {
            label: "1.2 దున్నే పద్ధతులు",
            options: [
              { value: 0, label: "తీవ్రమైన దున్నటం" },
              { value: 1, label: "సాంప్రదాయ దున్నటం" },
              { value: 2, label: "తగ్గించిన దున్నటం" },
              { value: 3, label: "నో-టిల్" }
            ]
          },
          {
            label: "1.3 మట్టి సవరణలు",
            options: [
              { value: 0, label: "ఏమీ లేదు" },
              { value: 1, label: "రసాయన ఎరువులు మాత్రమే" },
              { value: 2, label: "మిశ్రమ సేంద్రీయ మరియు రసాయన" },
              { value: 3, label: "సేంద్రీయ కంపోస్ట్/పేడ" }
            ]
          }
        ]
      },
      {
        title: "2) జీవ వైవిధ్యం మరియు పంట నిర్వహణ",
        questions: [
          {
            label: "2.1 పంట రోటేషన్",
            options: [
              { value: 0, label: "ఏమీ లేదు" },
              { value: 1, label: "2 సంవత్సరాల రోటేషన్" },
              { value: 2, label: "3 సంవత్సరాల రోటేషన్" },
              { value: 3, label: "వివిధ బహుళ సంవత్సరాల రోటేషన్" }
            ]
          },
          {
            label: "2.2 స్వదేశీ విత్తనాలు",
            options: [
              { value: 0, label: "ఏమీ లేదు" },
              { value: 1, label: "అప్పుడప్పుడు" },
              { value: 2, label: "నియమితంగా" },
              { value: 3, label: "ప్రధానంగా ఉపయోగం" }
            ]
          }
        ]
      },
      {
        title: "3) కీటకాలు, వ్యాధులు మరియు ఇన్‌పుట్ నిర్వహణ",
        questions: [
          {
            label: "3.1 రసాయన పురుగుమందులు",
            options: [
              { value: 0, label: "ఎక్కువ వాడకం" },
              { value: 1, label: "మోస్తరు వాడకం" },
              { value: 2, label: "తక్కువ వాడకం" },
              { value: 3, label: "రసాయన వాడకం లేదు" }
            ]
          },
          {
            label: "3.2 ఇన్‌పుట్ ఆధారపడటం",
            options: [
              { value: 0, label: "మార్కెట్ ఇన్‌పుట్స్ మీద పూర్తిగా ఆధారపడినవి" },
              { value: 1, label: "ముఖ్యంగా ఆధారపడినవి" },
              { value: 2, label: "భాగంగా స్వయం సమృద్ధి" },
              { value: 3, label: "పూర్తిగా స్వయం సమృద్ధి" }
            ]
          }
        ]
      },
      {
        title: "4) నీరు మరియు మట్టి తేమ నిర్వహణ",
        questions: [
          {
            label: "4.1 వర్షపు నీరు సేకరణ",
            options: [
              { value: 0, label: "ఏమీ లేదు" },
              { value: 1, label: "ప్రణాళికలో ఉంది" },
              { value: 2, label: "భాగంగా అమలు" },
              { value: 3, label: "పూర్తిగా పనిచేస్తుంది" }
            ]
          },
          {
            label: "4.2 మట్టి తేమ",
            options: [
              { value: 0, label: "ఏ పర్యవేక్షణ లేదు" },
              { value: 1, label: "ప్రాథమిక తనిఖీలు" },
              { value: 2, label: "సాధారణ పర్యవేక్షణ" },
              { value: 3, label: "స్మార్ట్ సెన్సార్లు" }
            ]
          }
        ]
      },
      {
        title: "5) పశువుల ఏకీకరణ",
        questions: [
          {
            label: "5.1 పశువుల ఏకీకరణ",
            options: [
              { value: 0, label: "ఏమీ లేదు" },
              { value: 1, label: "తక్కువ" },
              { value: 2, label: "మోస్తరు" },
              { value: 3, label: "అధిక ఏకీకరణ" }
            ]
          },
          {
            label: "5.2 మేత పద్ధతులు",
            options: [
              { value: 0, label: "అనియంత్రిత మేత" },
              { value: 1, label: "అప్పుడప్పుడు నియంత్రణ" },
              { value: 2, label: "రోటేషన్ మేత" },
              { value: 3, label: "బాగా నిర్వహించబడిన స్థిరమైన మేత" }
            ]
          }
        ]
      }
    ]
  },

  kn: {
    steps: [
      "ಪ್ರಾರಂಭಿಸಿ",
      "ಭಾಷೆ",
      "ಸಂಪರ್ಕ ವಿವರಗಳು",
      "ಫಾರ್ಮ್ ವಿವರಗಳು",
      "ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
      "ಜೀವ ವೈವಿಧ್ಯತೆ",
      "ಕೀಟಗಳು ಮತ್ತು ಇನ್‌ಪುಟ್‌ಗಳು",
      "ನೀರು ಮತ್ತು ಮಣ್ಣು",
      "ಪಶುಸಂಗೋಪನೆ",
      "ಪೂರ್ವಾವಲೋಕನ",
      "ಯಶಸ್ಸು"
    ],
    start: {
      title: "ರೈತ ಸ್ಕೋರ್ಕಾರ್ಡ್ ಮೌಲ್ಯಮಾಪನ ಫಾರ್ಮ್",
      button: "ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭಿಸಿ"
    },
    language: {
      title: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      english: "ಇಂಗ್ಲಿಷ್",
      hindi: "ಹಿಂದಿ",
      marathi: "ಮರಾಠಿ",
      telugu: "ತೆಲುಗು",
      kannada: "ಕನ್ನಡ",
      oriya: "ಒರಿಯಾ",
      next: "ಮುಂದೆ"
    },
    contact: {
      title: "ರೈತ ಸಂಪರ್ಕ ವಿವರಗಳು",
      fullName: "ಪೂರ್ಣ ಹೆಸರು",
      email: "ಇಮೇಲ್",
      whatsapp: "ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ",
      date: "ಮೌಲ್ಯಮಾಪನ ದಿನಾಂಕ"
    },
    apartment: {
      title: "ಮೌಲ್ಯಮಾಪನಗೊಳ್ಳುತ್ತಿರುವ ಫಾರ್ಮ್ ಬಗ್ಗೆ",
      name: "ಫಾರ್ಮ್ ಹೆಸರು",
      map: "ಫಾರ್ಮ್ ಗೂಗಲ್ ನಕ್ಷೆ ಲಿಂಕ್",
      units: "ಫಾರ್ಮ್‌ನ ಪ್ಲಾಟ್‌ಗಳ ಸಂಖ್ಯೆ"
    },
    buttons: {
      next: "ಮುಂದೆ",
      back: "ಹಿಂದೆ",
      finish: "ಮುಗಿಸು",
      submit: "ಸಲ್ಲಿಸು",
      edit: "ನಿಮ್ಮ ಉತ್ತರ ಸಂಪಾದಿಸಿ",
      cancel: "ರದ್ದುಗೊಳಿಸಿ",
      confirm: "ಹೌದು, ಸಲ್ಲಿಸಿ",
      restart: "ಮತ್ತೊಂದು ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿ",
      pdf: "PDF ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
      clear: "ಫಾರ್ಮ್ ತೆರವುಗೊಳಿಸಿ"
    },
    messages: {
      required: "ಅಗತ್ಯವಿದೆ",
      invalidEmail: "ಅಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸ",
      invalidPhone: "ಫೋನ್ 10 ಅಂಕಿಗಳಾಗಿರಬೇಕು",
      notApplicable: "ಅನ್ವಯಿಸುವುದಿಲ್ಲ",
      previewTitle: "ನಿಮ್ಮ ಸಲ್ಲಿಕೆಯನ್ನು ಪೂರ್ವಾವಲೋಕನ ಮಾಡಿ",
      confirmSubmit: "ನೀವು ಸಲ್ಲಿಸಿ ಫಲಿತಾಂಶಗಳನ್ನು ನೋಡಲು ಬಯಸುವಿರಾ?",
      thankYou: "ಧನ್ಯವಾದಗಳು, {name} ಮೌಲ್ಯಮಾಪನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದಾರೆ!"
    },
    sections: [
      {
        title: "1) ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನ",
        questions: [
          {
            label: "1.1 ಬೆಳೆ ಮುಚ್ಚಳ ಮತ್ತು ಜೀವಂತ ಬೇರುಗಳು",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಅವಕಾಶೀಯ ಮುಚ್ಚಳ" },
              { value: 2, label: "ಋತುಗತ ಮುಚ್ಚಳ" },
              { value: 3, label: "ವಾರ್ಷಿಕ ಮುಚ್ಚಳ" }
            ]
          },
          {
            label: "1.2 ಹದ ಪದ್ದತಿಗಳು",
            options: [
              { value: 0, label: "ತಿೀವ್ರ ಹದ" },
              { value: 1, label: "ಸಾಂಪ್ರದಾಯಿಕ ಹದ" },
              { value: 2, label: "ಕಡಿತ ಹದ" },
              { value: 3, label: "ನೋ-ಟಿಲ್" }
            ]
          },
          {
            label: "1.3 ಮಣ್ಣಿನ ಪರಿಷ್ಕರಣೆಗಳು",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ರಾಸಾಯನಿಕ ರಸಗೊಬ್ಬರ ಮಾತ್ರ" },
              { value: 2, label: "ಮಿಶ್ರ ಸಸ್ಯಜ ಮತ್ತು ರಾಸಾಯನಿಕ" },
              { value: 3, label: "ಸಸ್ಯಜ ಕಂಪೋಸ್ಟ್/ಗೊಬ್ಬರ" }
            ]
          }
        ]
      },
      {
        title: "2) ಜೀವ ವೈವಿಧ್ಯತೆ ಮತ್ತು ಬೆಳೆ ನಿರ್ವಹಣೆ",
        questions: [
          {
            label: "2.1 ಬೆಳೆ ರೋಟೇಶನ್",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "2 ವರ್ಷದ ರೋಟೇಶನ್" },
              { value: 2, label: "3 ವರ್ಷದ ರೋಟೇಶನ್" },
              { value: 3, label: "ವಿವಿಧ ಬಹುವರ್ಷದ ರೋಟೇಶನ್" }
            ]
          },
          {
            label: "2.2 ಸ್ಥಳೀಯ ಬೀಜಗಳು",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಅವಕಾಶೀಯ" },
              { value: 2, label: "ನಿಯಮಿತ" },
              { value: 3, label: "ಮುಖ್ಯವಾಗಿ ಬಳಕೆ" }
            ]
          }
        ]
      },
      {
        title: "3) ಕೀಟಗಳು, ರೋಗಗಳು ಮತ್ತು ಇನ್‌ಪುಟ್ ನಿರ್ವಹಣೆ",
        questions: [
          {
            label: "3.1 ರಾಸಾಯನಿಕ ಕೀಟನಾಶಕಗಳು",
            options: [
              { value: 0, label: "ಹೆಚ್ಚು ಬಳಕೆ" },
              { value: 1, label: "ಮಧ್ಯಮ ಬಳಕೆ" },
              { value: 2, label: "ಕಡಿಮೆ ಬಳಕೆ" },
              { value: 3, label: "ರಾಸಾಯನಿಕ ಬಳಕೆ ಇಲ್ಲ" }
            ]
          },
          {
            label: "3.2 ಇನ್‌ಪುಟ್ ಅವಲಂಬನೆ",
            options: [
              { value: 0, label: "ಪೂರ್ಣವಾಗಿ ಮಾರುಕಟ್ಟೆ ಅವಲಂಬಿತ" },
              { value: 1, label: "ಬಹುಪಾಲು ಅವಲಂಬಿತ" },
              { value: 2, label: "ಭಾಗಶಃ ಸ್ವಾವಲಂಬಿ" },
              { value: 3, label: "ಸಂಪೂರ್ಣ ಸ್ವಾವಲಂಬಿ" }
            ]
          }
        ]
      },
      {
        title: "4) ನೀರು ಮತ್ತು ಮಣ್ಣಿನ ತೇವಾಂಶ ನಿರ್ವಹಣೆ",
        questions: [
          {
            label: "4.1 ಮಳೆಯ ನೀರಿನ ಸಂಗ್ರಹಣೆ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಯೋಜನೆ ಇದೆ" },
              { value: 2, label: "ಭಾಗಶಃ ಅನುಷ್ಠಾನ" },
              { value: 3, label: "ಸಂಪೂರ್ಣ ಕಾರ್ಯನಿರ್ವಹಣೆ" }
            ]
          },
          {
            label: "4.2 ಮಣ್ಣಿನ ತೇವಾಂಶ",
            options: [
              { value: 0, label: "ಯಾವುದೇ ಮೇಲ್ವಿಚಾರಣೆ ಇಲ್ಲ" },
              { value: 1, label: "ಮೂಲಭೂತ ಪರಿಶೀಲನೆಗಳು" },
              { value: 2, label: "ಸಾಮಾನ್ಯ ಮೇಲ್ವಿಚಾರಣೆ" },
              { value: 3, label: "ಸ್ಮಾರ್ಟ್ ಸೆನ್ಸರ್‌ಗಳು" }
            ]
          }
        ]
      },
      {
        title: "5) ಪಶುಸಂಗೋಪನೆ ಏಕೀಕರಣ",
        questions: [
          {
            label: "5.1 ಪಶುಸಂಗೋಪನೆ ಏಕೀಕರಣ",
            options: [
              { value: 0, label: "ಯಾವುದೂ ಇಲ್ಲ" },
              { value: 1, label: "ಕನಿಷ್ಠ" },
              { value: 2, label: "ಮಧ್ಯಮ" },
              { value: 3, label: "ಹೆಚ್ಚು ಏಕೀಕರಣ" }
            ]
          },
          {
            label: "5.2 ಮೇವು ವಿಧಾನಗಳು",
            options: [
              { value: 0, label: "ಅನಿಯಂತ್ರಿತ ಮೇವು" },
              { value: 1, label: "ಅವಕಾಶೀಯ ನಿಯಂತ್ರಣ" },
              { value: 2, label: "ರೋಟೇಶನಲ್ ಮೇವು" },
              { value: 3, label: "ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಲಾದ ಶಾಶ್ವತ ಮೇವು" }
            ]
          }
        ]
      }
    ]
  },

  or: {
    steps: [
      "ଆରମ୍ଭ",
      "ଭାଷା",
      "ସମ୍ପର୍କ ବିବରଣୀ",
      "ଖେତ ବିବରଣୀ",
      "ମାଟି ସ୍ୱାସ୍ଥ୍ୟ",
      "ଜୀବ ବିବିଧତା",
      "କୀଟପତଙ୍ଗ ଏବଂ ଇନପୁଟ୍",
      "ଜଳ ଏବଂ ମାଟି",
      "ପଶୁଧନ",
      "ପ୍ରିଭ୍ୟୁ",
      "ସଫଳତା"
    ],
    start: {
      title: "ଚାଷୀ ସ୍କୋରକାର୍ଡ ମୂଲ୍ୟାଙ୍କନ ଫର୍ମ",
      button: "ମୂଲ୍ୟାଙ୍କନ ଆରମ୍ଭ କରନ୍ତୁ"
    },
    language: {
      title: "ଆପଣଙ୍କର ଭାଷା ବାଛନ୍ତୁ",
      english: "ଇଂରାଜୀ",
      hindi: "ହିନ୍ଦୀ",
      marathi: "ମରାଠୀ",
      telugu: "ତେଲୁଗୁ",
      kannada: "କନ୍ନଡ",
      oriya: "ଓଡ଼ିଆ",
      next: "ପରବର୍ତ୍ତୀ"
    },
    contact: {
      title: "ଚାଷୀ ସମ୍ପର୍କ ବିବରଣୀ",
      fullName: "ପୂର୍ଣ୍ଣ ନାମ",
      email: "ଇମେଲ୍",
      whatsapp: "ୱାଟସଆପ୍ ନମ୍ବର",
      date: "ମୂଲ୍ୟାଙ୍କନ ତାରିଖ"
    },
    apartment: {
      title: "ମୂଲ୍ୟାଙ୍କନ କରାଯାଉଥିବା ଖେତ ବିଷୟରେ",
      name: "ଖେତର ନାମ",
      map: "ଖେତର ଗୁଗୁଲ୍ ମାପ୍ ଲିଙ୍କ",
      units: "ଖେତରେ ପ୍ଲଟ୍ ସଂଖ୍ୟା"
    },
    buttons: {
      next: "ପରବର୍ତ୍ତୀ",
      back: "ପଛକୁ",
      finish: "ସମାପ୍ତ",
      submit: "ଦାଖଲ କରନ୍ତୁ",
      edit: "ଆପଣଙ୍କର ଉତ୍ତର ସମ୍ପାଦନ କରନ୍ତୁ",
      cancel: "ବାତିଲ କରନ୍ତୁ",
      confirm: "ହଁ, ଦାଖଲ କରନ୍ତୁ",
      restart: "ଆଉ ଗୋଟିଏ ଫର୍ମ ଦାଖଲ କରନ୍ତୁ",
      pdf: "PDF ରିପୋର୍ଟ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
      clear: "ଫର୍ମ ସଫା କରନ୍ତୁ"
    },
    messages: {
      required: "ଆବଶ୍ୟକ",
      invalidEmail: "ଅବ validଳ ଇମେଲ୍ ଠିକଣା",
      invalidPhone: "ଫୋନ୍ 10 ଡିଜିଟ୍ ହେବା ଆବଶ୍ୟକ",
      notApplicable: "ପ୍ରୟୋଜ୍ୟ ନୁହେଁ",
      previewTitle: "ଆପଣଙ୍କର ଦାଖଲକୁ ପ୍ରିଭ୍ୟୁ କରନ୍ତୁ",
      confirmSubmit: "ଆପଣ ଦାଖଲ କରି ଫଳାଫଳ ଦେଖିବାକୁ ଚାହୁଁଛନ୍ତି କି?",
      thankYou: "ଧନ୍ୟବାଦ, {name} ମୂଲ୍ୟାଙ୍କନ ସମାପ୍ତ କରିଛନ୍ତି!"
    },
    sections: [
      {
        title: "1) ମାଟି ସ୍ୱାସ୍ଥ୍ୟ ମୂଲ୍ୟାଙ୍କନ",
        questions: [
          {
            label: "1.1 ପ୍ରୋଡ୍ coverକଭର୍ ଏବଂ ଜୀବିତ ମୂଳ",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ମଧ୍ୟେମେ କଭର୍" },
              { value: 2, label: "seasonalତୁକାଳୀନ କଭର୍" },
              { value: 3, label: "ବର୍ଷ ପୂରା କଭର୍" }
            ]
          },
          {
            label: "1.2 ଦଳିବା ପ୍ରକ୍ରିୟା",
            options: [
              { value: 0, label: "ତୀବ୍ର ଚାଷ" },
              { value: 1, label: "ପାରମ୍ପରିକ ଚାଷ" },
              { value: 2, label: "କମ୍ ଚାଷ" },
              { value: 3, label: "ନୋ-ଟିଲ୍" }
            ]
          },
          {
            label: "1.3 ମାଟିର ସୁଧାର",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "କେବଳ କେମିକାଲ୍ ସାର" },
              { value: 2, label: "ମିଶ୍ରିତ ସଜୀବ & କେମିକାଲ୍" },
              { value: 3, label: "ସଜୀବ କମ୍ପୋଷ୍ଟ/ଖାଦ୍ୟ" }
            ]
          }
        ]
      },
      {
        title: "2) ଜୀବ ବିବିଧତା ଏବଂ ପ୍ରୋଡ୍ ପ୍ରବନ୍ଧନ",
        questions: [
          {
            label: "2.1 ପ୍ରୋଡ୍ ରୋଟେସନ୍",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "2-ବର୍ଷ ରୋଟେସନ୍" },
              { value: 2, label: "3-ବର୍ଷ ରୋଟେସନ୍" },
              { value: 3, label: "ବିବିଧ ବର୍ଷୀୟ ରୋଟେସନ୍" }
            ]
          },
          {
            label: "2.2 ଦେଶଜ ବିଆ",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ମଧ୍ୟେମେ" },
              { value: 2, label: "ନିୟମିତ" },
              { value: 3, label: "ମୁଖ୍ୟ ବ୍ୟବହାର" }
            ]
          }
        ]
      },
      {
        title: "3) କୀଟପତଙ୍ଗ, ରୋଗ ଏବଂ ଇନପୁଟ୍ ପ୍ରବନ୍ଧନ",
        questions: [
          {
            label: "3.1 କେମିକାଲ୍ କୀଟନାଶକ",
            options: [
              { value: 0, label: "ଅଧିକ ବ୍ୟବହାର" },
              { value: 1, label: "ମଧ୍ୟମ ବ୍ୟବହାର" },
              { value: 2, label: "କମ୍ ବ୍ୟବହାର" },
              { value: 3, label: "କୌଣସି କେମିକାଲ୍ ବ୍ୟବହାର ନାହିଁ" }
            ]
          },
          {
            label: "3.2 ଇନପୁଟ୍ ନିର୍ଭରଶୀଳତା",
            options: [
              { value: 0, label: "ବଜାର ଇନପୁଟ୍‌ରେ ସମ୍ପୂର୍ଣ୍ଣ ନିର୍ଭର" },
              { value: 1, label: "ମୁଖ୍ୟତଃ ନିର୍ଭର" },
              { value: 2, label: "ଆଂଶିକ ସ୍ୱୟଂନିର୍ଭର" },
              { value: 3, label: "ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱୟଂନିର୍ଭର" }
            ]
          }
        ]
      },
      {
        title: "4) ଜଳ ଏବଂ ମାଟିର ଆର୍ଦ୍ରତା ପ୍ରବନ୍ଧନ",
        questions: [
          {
            label: "4.1 ବର୍ଷାର ଜଳ ସଂଗ୍ରହ",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ଯୋଜନାରେ ଅଛି" },
              { value: 2, label: "ଆଂଶିକ ରୂପେ ପ୍ରୟୋଗ" },
              { value: 3, label: "ସମ୍ପୂର୍ଣ୍ଣ କାର୍ଯ୍ୟକ୍ଷମ" }
            ]
          },
          {
            label: "4.2 ମାଟିର ଆର୍ଦ୍ରତା",
            options: [
              { value: 0, label: "କୌଣସି ନିରୀକ୍ଷଣ ନାହିଁ" },
              { value: 1, label: "ମୌଳିକ ଯାଞ୍ଚ" },
              { value: 2, label: "ନିୟମିତ ନିରୀକ୍ଷଣ" },
              { value: 3, label: "ସ୍ମାର୍ଟ ସେନସର୍" }
            ]
          }
        ]
      },
      {
        title: "5) ପଶୁଧନ ସମ୍ମିଳନ",
        questions: [
          {
            label: "5.1 ପଶୁଧନ ସମ୍ମିଳନ",
            options: [
              { value: 0, label: "କିଛି ନୁହେଁ" },
              { value: 1, label: "ନ୍ୟୁନତମ" },
              { value: 2, label: "ମଧ୍ୟମ" },
              { value: 3, label: "ଉଚ୍ଚ ସମ୍ମିଳନ" }
            ]
          },
          {
            label: "5.2 ଚାରା ପ୍ରକ୍ରିୟା",
            options: [
              { value: 0, label: "ଅନିୟନ୍ତ୍ରିତ ଚାରା" },
              { value: 1, label: "ମଧ୍ୟେମେ ନିୟନ୍ତ୍ରଣ" },
              { value: 2, label: "ରୋଟେସନାଲ୍ ଚାରା" },
              { value: 3, label: "ଭଲଭାବରେ ପରିଚାଳିତ ସୁସ୍ଥିର ଚାରା" }
            ]
          }
        ]
      }
    ]
  }
};

export default translations;