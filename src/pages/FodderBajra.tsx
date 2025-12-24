import companyLogo from "@/assets/company-logo.jpeg";
import fodderBajraImage from "@/assets/fodder-bajra.jpeg";

const FodderBajra = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={companyLogo}
              alt="Adityaraj Agri Genetics Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow-md"
            />
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Adityaraj Agri Genetics
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Product Image and Title */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <img
              src={fodderBajraImage}
              alt="Fodder Bajra - Jumbo Green"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              FODDER BAJRA - રજકા બાજરી - रजका बाजरा
            </h2>
          </div>

          {/* Gujarati Content */}
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2">
              ઘાસચારા બાજરી પાકની ખેતી પધ્ધતિ
            </h3>
            
            <div className="space-y-4 text-foreground">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">જમીન</h4>
                  <p className="text-sm">સારા નીતાર અને ઓર્ગેનિક કાર્ગન વાળી ગોરાડુ, બેસર અને મધ્યમ કાળી.</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">વાવણી સમય</h4>
                  <p className="text-sm">ચોમાસું : જુન - જુલાઇ.</p>
                  <p className="text-sm">ઉનાળુ : ફેબ્રુઆરી – માર્ચ.</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">બીજ દર કિ.ગ્રા. પ્રતિ હેકટર</h4>
                  <p className="text-sm">૧૦-૧૨</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">રોપણી અંતર (સે.મી.)</h4>
                  <p className="text-sm">૩૦-૪૫</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">જમીન ની તૈયારી</h4>
                <p className="text-sm">વાવણી પહેલા ઊંડી ખેડ કરવી.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">બીજ માવજત</h4>
                <p className="text-sm">બાયોપેસ્ટીસાઇડ (ટ્રાઇકોડર્મા હર્ઝિયાનમ @૪ ગ્રામ કિગ્રા) અથવા થાયરમ ૭૫% પાવડર @૩ ગ્રામ/કિગ્રા બીજ સાથે બીજ માવજત કરવાથી જમીનજન્ય રોગો સામે મદદ મળશે. ૩૦૦-મેશ સલ્ફર પાવડર @૪ ગ્રામ/કિગ્રા બીજ સાથે બીજ માવજત કરવાથી સ્મટ રોગનું નિયંત્રણ થાય છે.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">વાવણી પધ્ધતિ</h4>
                <p className="text-sm">સામાન્ય રીતે ઓરીને વાવેતર કરવામાં આવે છે. રવિ પાક પછી ઉનાળુ બાજરીનું વાવેતર કરવું હોય તો, ધરૂ કરી ફેરરોપણી કરવી</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">સેન્દ્રિય ખાતર (ટન/હેકટર)</h4>
                  <p className="text-sm">૫ ટન છાણીયુ ખાતર</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">રસાયણિક ખાતર (કિ.ગ્રા./ હેકટર)</h4>
                  <p className="text-sm">કુલ : ૧૦:૦૦:૦૦ (NPK)</p>
                  <p className="text-sm">પાયામાં:- ૫૦:૫૦:૦૦ (NPK)</p>
                  <p className="text-sm">પ્રથમ કાપણીએ:- ૫૦:૦૦:૦૦ (NPK)</p>
                  <p className="text-sm text-muted-foreground">(દરેક વધારાની કાપણીએ વધારાનો ૫૦ કિલો નાઈટ્રોજન/હેકટર આપવો)</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">પિયત</h4>
                <p className="text-sm">પ્રથમ પિયત વાવણી પછી તરત આપવું. ચોમાસામાં જમીન અને આબોહવા પ્રમાણે પિયત કરવું. ઉનાળુ બાજરીને ૧૦ થી ૧૫ દિવસના અંતરે પાણી આપવું</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">નિંદામણ</h4>
                <p className="text-sm">નીંદણનાં નિયંત્રણ માટે એટ્રાજિન ૫૦%, ૧-૧.૫ કી.ગ્રા. પ્રતિ એકર નાં દરથી ૧૦ લિટર પાણીમાં ૨૦-૨૫ ગ્રામ મિલાવી વાવણી બાદ ઉગ્યાં પહેલા એક સમાન છંટકાવ કરવો</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">રોગ નિયંત્રણ</h4>
                <p className="text-sm">ડાઉની માઇલ્ડ્યુના નિયંત્રણ માટે વાવણીના ૨૧ દિવસ પછી રીડોમિલ ૨૫ WP (100 ppm) નો છંટકાવ કરવો. રસ્ટના નિયંત્રણ માટે ૧૫ દિવસના અંતરે ૦.૨% મેન્કોઝેબના બે છંટકાવ.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">જીવાત નિયંત્રણ</h4>
                <p className="text-sm">શૂટ ફ્લાયના નિયંત્રણ માટે અંકુરણ પછી ૧૦ અને ૨૦ દિવસે પાક પર ૦.૦૭% એન્ડોસલ્ફાનનો છંટકાવ કરો. ખડમાકડીમાં નિયંત્રણ માટે પાકને ૪% એન્ડોસલ્ફાન અથવા ફેનવેલરેટ WP@ ૨૫ કિગ્રા/હેક્ટરથી છાંટો.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">કાપણી / લણણી</h4>
                <p className="text-sm">પ્રથમ કાપણી ૪૫-૫૦ દિવસે કરી શકાય. ત્યારબાદ બીજી કાપણી ૩૦-૩૫ દિવસે કરવી. કાપણી જમીનથી છોડની ૮ થી ૧૦ સે.મી. એ કરવી.</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">ખાસ નોંધ :</h4>
                <p className="text-sm text-yellow-700">ઉપરોક્ત વિગત કંપનીના રીસર્ચ કેન્દ્રો ઉપરના ટેસ્ટીંગ આધારીત છે. ખેતીકામ, પાણી, જમીન, હવામાન વગેરે પરીબળો અનુસાર તેમાં વધ ઘટ થઈ શકે છે</p>
              </div>
            </div>
          </div>

          {/* Hindi Content */}
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2">
              घासचारा बाजरा फसल कि खेती पद्धति
            </h3>
            
            <div className="space-y-4 text-foreground">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">भूमि</h4>
                  <p className="text-sm">सफेद, बेज और मध्यम काले रंग की, अच्छे जल निकास और ऑर्गेनिक कार्बन पदार्थ वाली।</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">बुआई का समय</h4>
                  <p className="text-sm">मानसूनः जून-जुलाई ।</p>
                  <p className="text-sm">ग्रीष्मकालः फरवरी – मार्च</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">बीज कि.ग्रा./ हेकटर</h4>
                  <p className="text-sm">१०-१२</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">रोपण दूरी (सेमी)</h4>
                  <p className="text-sm">3०-४५ (सेमी)</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">भूमि की तैयारी</h4>
                <p className="text-sm">बुवाई से पहले गहरी जुताई करें।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">बीजोपचार</h4>
                <p className="text-sm">जैव कीटनाशक (ट्राइकोडर्मा हरजियानम @ ४ ग्राम/ किग्रा) या थायरम ७५% पाउडर @ 3 ग्राम/ किग्रा बीज से बीज उपचार करने से मृदा जनित रोगों से बचाव में मदद मिलेगी । 3०० मेश सल्फर पाउडर @ ४ ग्राम/ किलोग्राम बीज से बीज उपचार करने से स्मट रोग नियंत्रित होता है।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">बुआई की विधि</h4>
                <p className="text-sm">बाजरा आमतौर पर पेरनी से लगाया जाता है। यदि आप रबी की फसल के बाद ग्रीष्मकालीन बाजरा बोना चाहते हैं, तो आपको हैरो चलाकर पुनः रोपाई करनी चाहिए।</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">जैविक खाध (टन/ हेकटर)</h4>
                  <p className="text-sm">5 टन खाद</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">रासायनिक खाध (कि.ग्रा./ हेकटर)</h4>
                  <p className="text-sm">कुलः १००:००:०० (एनपीके)</p>
                  <p className="text-sm">आधार मेंः- ५०:००:०० (एनपीके)</p>
                  <p className="text-sm">पहली कटाई परः- ५०:००:०० (एनपीके)</p>
                  <p className="text-sm text-muted-foreground">(प्रत्येक अतिरिक्त कटाई से प्रति हेक्टेयर ५० किलोग्राम अतिरिक्त नाइट्रोजन प्राप्त होगा)</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">पियत</h4>
                <p className="text-sm">बुवाई के तुरंत बाद पहली सिंचाई करें। मानसून के दौरान मिट्टी और जलवायु के अनुसार सिंचाई करें। ग्रीष्मकालीन बाजरे को १० से १५ दिनों के अंतराल पर पानी दें।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">निराई</h4>
                <p className="text-sm">खरपतवार नियंत्रण हेतु एट्राजीन ५०%, १-१.५ किग्रा. २०-२५ ग्राम को १००० ग्राम प्रति एकड़ की दर से १० लीटर पानी में मिलाकर बुवाई के बाद और अंकुरण से पहले समान रूप से छिड़काव करें।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">रोग नियंत्रण</h4>
                <p className="text-sm">डाउनी मिलड्यू को नियंत्रित करने के लिए बुवाई के २१ दिन बाद रिडोमिल २५ WP(१०० PPM) का छिड़काव करें। जंग को नियंत्रित करने के लिए १५ दिनों के अंतराल पर ०.२% मैन्कोजेब का दो बार छिड़काव करें।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">कीट नियंत्रण</h4>
                <p className="text-sm">तना मक्खी को नियंत्रित करने के लिए अंकुरण के १० और २० दिन बाद फसल पर ०.०७% एंडोसल्फान का छिड़काव करें। टिड्डी नियंत्रण के लिए फसल पर ४% एंडोसल्फान या फेनवेलरेट WP @ २५ किग्रा/ हेक्टेयर का छिड़काव करें।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">कटाई</h4>
                <p className="text-sm">पहली कटाई ४५-५० दिनों में की जा सकती है। फिर, दूसरी कटाई 30-35 दिन बाद करनी चाहिए। कटाई जमीन से ८ से १० सेमी ऊपर करनी चाहिए।</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">नोट :</h4>
                <p className="text-sm text-yellow-700">उपर की जानकारी कंपनी के रीसर्च सन्टर म हुए टेस्टींग के आधार पर है, खेतकाम, पानी, जमीन और मौसम जस कारणो स कम - ज्यादा हो सकता है ।</p>
              </div>
            </div>
          </div>

          {/* Marathi Content */}
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2">
              गवत, चारा, बाजरी पिकाची लागवड पद्धत
            </h3>
            
            <div className="space-y-4 text-foreground">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">जमीन</h4>
                  <p className="text-sm">पांढरी काळी आणि मध्यम निचरा आणि सेंद्रिय कार्बन असलेली जमीन निवडावी.</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">पेरणीची वेळ</h4>
                  <p className="text-sm">खरीप : जून-जुलै</p>
                  <p className="text-sm">उन्हाळा : फेब्रुवारी – मार्च</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">बियाण कि ग्रा / हेक्टरी</h4>
                  <p className="text-sm">१०-१२</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">लागवडीचे अंतर</h4>
                  <p className="text-sm">30-45 (सें.मी.)</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">जमिनीची तयारी</h4>
                <p className="text-sm">पेरणीपूर्वी खोल नांगरणी करावी.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">बियाण उपचार</h4>
                <p className="text-sm">जैवकीटकनाशक (ट्रायकोडर्मा हर्झियानम @४ ग्रॅम/किग्रा ) किंवा थायरम ७५% पावडर @ 3 ग्रॅम/कि ग्रा बियाण वापरून बियाण उपचार केल्यास मातीतील रोग रोखण्यास मदत होते. 3०० गंधक पावडर @ ४ ग्रॅम प्रति किलो बियाण वापरून बीजोपचार केल्यास मूळ कुज रोगावर नियंत्रण येते.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">पेरणी पद्धत</h4>
                <p className="text-sm">बाजरीची लागवड सहसा पेरणीच्य वेळी केली जाते. रब्बी काढणीनंतर उन्हाळी बाजरीची पेरणी करायची असेल तर नगराटी करून पुनर्लागवड करावी.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">सेंद्रिय खत (टन/कि ग्रा हेक्टर)</h4>
                  <p className="text-sm">५ टन खाद</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">रासायनिक खते (कि ग्रा) / हेक्टर</h4>
                  <p className="text-sm">एकूण : १००:००:०० (एनपीके)</p>
                  <p className="text-sm">मुख्य डोस :- ५०:००:०० (एनपीके)</p>
                  <p className="text-sm">काढणीची पहिली वेळ :- ५०:००:०० (एनपीके)</p>
                  <p className="text-sm text-muted-foreground">(प्रत्येक अतिरिक्त कापणीतून हेक्टरी अतिरिक्त ५० किलो नायट्रोजन द्यावे)</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">सिंचाई</h4>
                <p className="text-sm">पेरणीनंतर लगेच प्रथम पाणी द्यावे. पावसाळ्यात माती व हवामानानुसार सिंचन करावे. उन्हाळी बाजरीला १० ते १५ दिवसांच्या अंतराने पाणी द्यावे.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">तण काढण</h4>
                <p className="text-sm">तण नियंत्रणासाठी ॲट्राझिन ५०%, १-१.५ किलो. एकरी २०-२५ ग्रॅम १००० ग्रॅम १० लिटर पाण्यात मिसळून पेरणीनंतर व उगवण्यापूर्वी समप्रमाणात फवारणी करावी.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">रोग नियंत्रण</h4>
                <p className="text-sm">पेरणीनंतर २१ दिवसांनी रिडोमिल २५ WP (१०० PPM) फवारणी करावी. लाल्या नियंत्रणासाठी ०.२% मॅन्कोझब १५ दिवसांच्या अंतराने दोनवेळा फवारणी करावी.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">कीड नियंत्रण</h4>
                <p className="text-sm">खोडमाशीच्या नियंत्रणासाठी उगवणीनंतर १० ते २० दिवसांनी पिकावर ०.०७% एंडोसल्फानची फवारणी करावी. टोळधाड नियंत्रणासाठी पिकावर ४% एंडोसल्फान किंवा फेनव्हॅलेरेट WP @ २५ किलो/हेक्टर फवारणी करावी.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">कटिंग</h4>
                <p className="text-sm">पहिली काढणी ४५-५० दिवसांत करता येते. त्यानंतर दुसरी काढणी 30-35 दिवसांनी करावी. काढणी जमिनीपासून ८ ते १० सेंमी उंचीवर करावी.</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">नोट :</h4>
                <p className="text-sm text-yellow-700">या माहितीचा वापर करून तुम्ही तुमच्या शतात ची यशस्वी लागवड करू शकता. अधिक माहितीसाठी तुमच्या भागातील कृषी सहाय्यक किंवा कृषी तज्ञांचा सल्ला घ्या.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FodderBajra;
