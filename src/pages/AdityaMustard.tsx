import companyLogo from "@/assets/company-logo.jpeg";
import aditya46 from "@/assets/aditya-46.jpeg";
import aditya99 from "@/assets/aditya-99.jpeg";

const AdityaMustard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Company Header */}
      <section className="bg-card border-b border-border/50">
        <div className="container max-w-4xl mx-auto px-4 py-6 md:py-8">
          <div className="flex items-start gap-4 md:gap-6 mb-4">
            <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 bg-muted/50 rounded-2xl overflow-hidden shadow-md">
              <img
                src={companyLogo}
                alt="Adityaraj Agri Genetics Logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex-1 pt-1">
              <h1 className="text-xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                ADITYARAJ AGRI GENETICS<br />PVT. LTD.
              </h1>
              <div className="space-y-0.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                <p>S-16, Kanku Complex, Opp. Welcome Party Plot,</p>
                <p>Modhera Road, Nagalpur, Mehsana, Gujarat, 384002</p>
                <p className="mt-1.5">Customer Care: +91 99254 41144</p>
                <p>Email: adityarajagrigenetics@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            ADITYA-46 &amp; ADITYA-99 - Mustard Seeds - રાઈ / राई / मोहरी
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <img
                src={aditya46}
                alt="Aditya-46 Hybrid Mustard Seeds Package"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-3 text-lg font-semibold text-green-700">ADITYA-46 - Hybrid Mustard Seeds</p>
            </div>
            <div>
              <img
                src={aditya99}
                alt="Aditya-99 Research Mustard Seeds Package"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-3 text-lg font-semibold text-green-700">ADITYA-99 - Research Mustard Seeds</p>
            </div>
          </div>
        </div>

        {/* Gujarati */}
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">રાઈની ખેતી પદ્ધતિ (ગુજરાતી)</h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">1. જમીન અને તૈયારી</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>રાઈના પાક માટે સારી નિતારવાળી ગોરાડુ જમીન સૌથી અનુકૂળ છે.</li>
                <li>જમીનનું pH મૂલ્ય 6.0 થી 7.5 ની વચ્ચે હોવું જોઈએ.</li>
                <li>ખેતરને 2-3 વખત ખેડીને જમીન ભરભરી બનાવો અને ઢેફાં ભાંગી નાખો.</li>
                <li>છેલ્લી ખેડ વખતે હેક્ટરે 15-20 ટન સારું કોહવાયેલું છાણિયું ખાતર ભેળવો.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">2. બિયારણ અને વાવણી</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>જાતો: વધુ ઉત્પાદન આપતી નવીન જાતોની પસંદગી વિસ્તાર, જમીન અને જરૂરિયાત મુજબ કરવી.</li>
                <li>બીજ દર: હેક્ટરે 5-6 કિલોગ્રામ બિયારણની ભલામણ છે.</li>
                <li>બીજ માવજત: વાવણી પહેલાં 1 કિલો બીજ દીઠ 3 ગ્રામ થાયરમ અથવા કાર્બેન્ડાઝીમનો પટ આપો.</li>
                <li>વાવણી સમય: ઓક્ટોબરના છેલ્લા અઠવાડિયાથી નવેમ્બરના પહેલા અઠવાડિયા સુધી.</li>
                <li>વાવણી પદ્ધતિ: બે હરોળ વચ્ચે 30 સેમી અને બે છોડ વચ્ચે 10-15 સેમી અંતર; બીજ 2-3 સેમી ઊંડાઈએ વાવો.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">3. ખાતર વ્યવસ્થાપન</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>જમીન ચકાસણીના આધારે ખાતરનો ઉપયોગ કરવો.</li>
                <li>સામાન્ય રીતે હેક્ટરે 80 કિ.ગ્રા. નાઇટ્રોજન, 40 કિ.ગ્રા. ફોસ્ફરસ અને 40 કિ.ગ્રા. પોટાશ.</li>
                <li>નાઇટ્રોજનનો અડધો ભાગ તથા ફોસ્ફરસ અને પોટાશ પૂરેપૂરો પાયાના ખાતર તરીકે આપો.</li>
                <li>બાકીનો નાઇટ્રોજન બે હપ્તામાં - વાવણીના 30 દિવસ પછી અને ફૂલ અવસ્થાએ.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">4. પિયત વ્યવસ્થાપન</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>સામાન્ય રીતે 2-3 પિયતની જરૂર પડે છે.</li>
                <li>પ્રથમ પિયત વાવણીના 20-25 દિવસ પછી (મૂળ વિકાસ અવસ્થા).</li>
                <li>બીજું પિયત ફૂલ અવસ્થાએ (40-45 દિવસ પછી).</li>
                <li>ત્રીજું પિયત શીંગોમાં દાણા ભરાવવાની અવસ્થાએ (65-75 દિવસ પછી).</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">5. નીંદણ નિયંત્રણ</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>વાવણીના 20-30 દિવસ સુધી ખેતર નીંદણમુક્ત રાખો.</li>
                <li>હાથથી નીંદામણ અથવા યોગ્ય નીંદણનાશકનો ઉપયોગ કરવો.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">6. જીવાત અને રોગ નિયંત્રણ</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>મોલોમશી, પાન ખાનારી ઇયળ અને સફેદ ગેરુનો ઉપદ્રવ થઈ શકે છે.</li>
                <li>જીવાત માટે યોગ્ય જંતુનાશક અને રોગ માટે ફૂગનાશકનો છંટકાવ કરવો.</li>
                <li>રોગપ્રતિકારક જાતોની પસંદગી કરવી હિતાવહ છે.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">7. કાપણી</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>75% શીંગો પીળી થાય અને દાણા કાળા થવા લાગે ત્યારે કાપણી કરવી.</li>
                <li>પાકને સૂકવીને થ્રેશર દ્વારા દાણા અલગ કરવા.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hindi */}
        <div className="bg-orange-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-orange-800 mb-4">राई की खेती की पद्धति (हिंदी)</h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">1. भूमि और तैयारी</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>अच्छी जल निकासी वाली रेतीली दोमट मिट्टी सबसे उपयुक्त है।</li>
                <li>मिट्टी का pH मान 6.0 से 7.5 के बीच होना चाहिए।</li>
                <li>खेत की 2-3 बार जुताई कर मिट्टी भुरभुरी बनाएं और ढेले तोड़ें।</li>
                <li>आखिरी जुताई के समय प्रति हेक्टेयर 15-20 टन सड़ी गोबर की खाद मिलाएं।</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">2. बीज और बुवाई</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>किस्में: क्षेत्र, मिट्टी और आवश्यकता के अनुसार अधिक उपज देने वाली किस्में चुनें।</li>
                <li>बीज दर: प्रति हेक्टेयर 5-6 किलोग्राम।</li>
                <li>बीज उपचार: 1 किलो बीज हेतु 3 ग्राम थायरम या कार्बेन्डाजिम।</li>
                <li>बुवाई का समय: अक्टूबर के अंतिम सप्ताह से नवंबर के पहले सप्ताह तक।</li>
                <li>बुवाई विधि: पंक्तियों में 30 सेमी और पौधों में 10-15 सेमी दूरी; बीज 2-3 सेमी गहराई पर।</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">3. उर्वरक प्रबंधन</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>मिट्टी परीक्षण के आधार पर उर्वरक का उपयोग करें।</li>
                <li>प्रति हेक्टेयर 80 किग्रा नाइट्रोजन, 40 किग्रा फास्फोरस, 40 किग्रा पोटाश।</li>
                <li>आधा नाइट्रोजन तथा पूरा फास्फोरस व पोटाश बुवाई के समय आधार खाद के रूप में।</li>
                <li>शेष नाइट्रोजन दो किश्तों में - 30 दिन बाद और फूल आने की अवस्था में।</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">4. सिंचाई प्रबंधन</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>सामान्यतः 2-3 सिंचाई की आवश्यकता होती है।</li>
                <li>पहली सिंचाई बुवाई के 20-25 दिन बाद (जड़ विकास अवस्था)।</li>
                <li>दूसरी सिंचाई फूल आने की अवस्था में (40-45 दिन बाद)।</li>
                <li>तीसरी सिंचाई फलियों में दाना भरने की अवस्था में (65-75 दिन बाद)।</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">5. खरपतवार नियंत्रण</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>बुवाई के 20-30 दिनों तक खेत खरपतवार मुक्त रखें।</li>
                <li>हाथ से निराई या रासायनिक खरपतवारनाशी का उपयोग करें।</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">6. कीट और रोग नियंत्रण</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>माहू (एफिड), पत्ता खाने वाली इल्ली और सफेद गेरु का प्रकोप हो सकता है।</li>
                <li>कीटनाशक और फफूंदनाशक दवाओं का उचित छिड़काव करें।</li>
                <li>रोग प्रतिरोधी किस्मों का चयन भी एक अच्छा उपाय है।</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">7. कटाई</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>जब 75% फलियां पीली हो जाएं और दाने काले होने लगें तब कटाई करें।</li>
                <li>फसल सुखाकर थ्रेशर द्वारा दाने अलग करें।</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Marathi */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">मोहरीची शेती करण्याची पद्धत (मराठी)</h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">1. जमीन आणि तयारी</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>चांगल्या निचऱ्याची रेताड चिकणमातीची जमीन सर्वात योग्य आहे.</li>
                <li>जमिनीचा सामू (pH) 6.0 ते 7.5 च्या दरम्यान असावा.</li>
                <li>शेत 2-3 वेळा नांगरून जमीन भुसभुशीत करा आणि ढेकळे फोडा.</li>
                <li>शेवटच्या नांगरणीच्या वेळी प्रति हेक्टर 15-20 टन कुजलेले शेणखत मिसळा.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">2. बियाणे आणि पेरणी</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>जाती: प्रदेश, जमीन आणि गरजेनुसार अधिक उत्पादन देणाऱ्या जातींची निवड करावी.</li>
                <li>बियाणे दर: प्रति हेक्टर 5-6 किलोग्राम.</li>
                <li>बियाणे प्रक्रिया: 1 किलो बियाण्यासाठी 3 ग्रॅम थायरम किंवा कार्बेन्डाझिम.</li>
                <li>पेरणीची वेळ: ऑक्टोबरच्या शेवटच्या आठवड्यापासून नोव्हेंबरच्या पहिल्या आठवड्यापर्यंत.</li>
                <li>पेरणी पद्धत: ओळींमध्ये 30 सेमी, झाडांमध्ये 10-15 सेमी अंतर; बी 2-3 सेमी खोलीवर.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">3. खत व्यवस्थापन</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>जमिनीच्या तपासणीच्या आधारावर खतांचा वापर करावा.</li>
                <li>प्रति हेक्टर 80 किलो नत्र, 40 किलो स्फुरद आणि 40 किलो पालाश.</li>
                <li>अर्धे नत्र आणि पूर्ण स्फुरद व पालाश पेरणीच्या वेळी पायाभूत खत म्हणून द्या.</li>
                <li>उर्वरित नत्र दोन हप्त्यांत - 30 दिवसांनी आणि फुल येण्याच्या अवस्थेत.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">4. सिंचन व्यवस्थापन</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>साधारणपणे 2-3 सिंचनाची आवश्यकता असते.</li>
                <li>पहिले सिंचन पेरणीनंतर 20-25 दिवसांनी (मुळांच्या विकासाच्या अवस्थेत).</li>
                <li>दुसरे सिंचन फुल येण्याच्या अवस्थेत (40-45 दिवसांनी).</li>
                <li>तिसरे सिंचन शेंगांमध्ये दाणे भरण्याच्या अवस्थेत (65-75 दिवसांनी).</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">5. तण नियंत्रण</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>पेरणीनंतर 20-30 दिवसांपर्यंत शेत तणमुक्त ठेवा.</li>
                <li>हाताने तण काढणे किंवा रासायनिक तणनाशकांचा वापर करावा.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">6. कीड आणि रोग नियंत्रण</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>मावा (ऍफिड), पाने खाणारी अळी आणि पांढरा गेरवा यांचा प्रादुर्भाव होऊ शकतो.</li>
                <li>कीटकनाशक व बुरशीनाशक औषधांची योग्य फवारणी करावी.</li>
                <li>रोगप्रतिकारशक्ती असलेल्या जातींची निवड करणे उपयुक्त आहे.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">7. कापणी</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>75% शेंगा पिवळ्या होऊन दाणे काळे होऊ लागल्यावर कापणी करावी.</li>
                <li>पीक वाळवून थ्रेशरद्वारे दाणे वेगळे करावेत.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-800 font-medium">વિશેષ નોંધ / विशेष नोट / विशेष सूचना:</p>
          <p className="text-yellow-700 text-sm mt-2">
            ઉપરોક્ત માહિતી માત્ર માર્ગદર્શન માટે છે. કૃપા કરીને સ્થાનિક કૃષિ નિષ્ણાતોની સલાહ લો.
          </p>
          <p className="text-yellow-700 text-sm">
            उपरोक्त जानकारी केवल मार्गदर्शन के लिए है। कृपया स्थानीय कृषि विशेषज्ञों से सलाह लें।
          </p>
          <p className="text-yellow-700 text-sm">
            वरील माहिती केवळ मार्गदर्शनासाठी आहे. कृपया स्थानिक कृषी तज्ज्ञांचा सल्ला घ्या.
          </p>
        </div>
      </main>

      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Adityaraj Agri Genetics Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdityaMustard;
