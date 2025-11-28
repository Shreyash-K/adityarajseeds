import companyLogo from "@/assets/company-logo.jpeg";
import seedPacketImage from "@/assets/virat-11-seeds.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Company Header */}
      <section className="bg-card border-b border-border/50">
        <div className="container max-w-4xl mx-auto px-4 py-6 md:py-8">
          {/* Logo and Company Name */}
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
                <p className="mt-1.5">Customer Care: 94263 50163</p>
                <p>Email: adityarajagrigenetics@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Title Section */}
      <section className="bg-background py-6 md:py-8 border-b border-border/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground font-devanagari leading-tight">
            FODDER BAJRA - ઇજડી બાજરી - रजका बाजरा
          </h2>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Our Varieties</h3>
          <div className="flex justify-center">
            <img
              src={seedPacketImage}
              alt="VIRAT-11 Research Hybrid Bajara Seeds Package"
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Gujarati Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              બાજરા ની ખેતી પદ્ધતિ
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <p className="mb-4">
                  બાજરો એક મહત્વપૂર્ણ ધાન્ય પાક છે જે ભારતના ઘણા ભાગોમાં ઉગાડવામાં આવે છે, ખાસ કરીને સૂકા અને અધણ-સૂકા વિસ્તારોમાં. ગુજરાતમાં પણ તેની ખેતી ખરીફ અને ઉનાળુ બાંને ઋતુઓમાં કરવામાં આવે છે. તેની ખેતીની પદ્ધતિ નીચે મુજબ છે:
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૧. જાતોની પસંદગી:</h2>
                <p>
                  ગુજરાત માટે બાજરાની ઘણી સુધારેલી અને સાંકર જાતો ઉપલબ્ધ છે. તમારી સ્થાનિક આબોહવા અને બજારની માંગ અનુસાર યોગ્ય જાતની પસંદગી કરવી. સાંકર જાતો સામાન્ય રીતે વધુ ઉપજ આપે છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૨. આબોહવા અને જમીન:</h2>
                <p>
                  બાજરો ગરમ અને સૂકી આબોહવામાં સારી રીતે ઉગે છે. તે વિવિધ પ્રકારની જમીનમાં ઉગાડી શકાય છે, પરંતુ સારા નિતારવાળી ગોરાડુ અને કાળી જમીન સૌથી યોગ્ય છે. આ પાક પાણી ભરાઈ રહેતી જમીનને સહન કરી શકતો નથી. જમીનનું pH મૂલ્ય ૬.૫ થી ૭.૫ ની વચ્ચે હોવું જોઈએ.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૩. વાવણીનો સમય:</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>ખરીફ પાક:</strong> જૂન-જુલાઈ, ચોમાસાની શરૂઆત સાથે.</li>
                  <li><strong>ઉનાળુ પાક:</strong> ફેબ્રુઆરી-માચર્ણ (સિંચાઈની સગવડ હોય તેવા વિસ્તારોમાં).</li>
                  <li>ગુજરાતના કેટલાક ભાગોમાં રવિ પાક (નવેમ્બર-ફેબ્રુઆરી) તરીકે પણ ઉગાડવામાં આવે છે, પરંતુ તે પ્રમાણમાં ઓછું હોય છે.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૪. જમીનની તૈયારી અને વાવણી:</h2>
                <p>
                  ખેતરને ૨-૩ વાર ખેડીને ભરભરુું બનાવી લો. ખેતરને સમતળ કરો જેથી પાણીનો નિકાલ સારી રીતે થઈ શકે. હાર વચ્ચે ૪૫-૬૦ સેમી અને છોડ વચ્ચે ૧૦-૧૫ સેમીનું અંતર રાખીને વાવણી કરો. સૂકા વિસ્તારોમાં હારથી હારનું અંતર ૬૦ સેમી સુધી રાખી શકાય છે અને છોડની સંખ્યા પ્રતિ હેક્ટર ૧ થી ૧.૨૫ લાખ રાખવામાં આવે છે. બીજને ૨-૩ સેમીની ઊંડાઈએ વાવો. પ્રતિ હેક્ટર ૮ થી ૯ કિલોગ્રામ બીજની જરૂર પડે છે. વાવણી પહેલાં બીજને ફૂગનાશક (જેમ કે મેટાલેક્સિલ) થી માવજત આપો જેથી શરૂઆતના રોગોથી બચાવ થઈ શકે. એઝોસ્પિરિલમ અને ફોસ્ફોબેક્ટેરિયાથી પણ બીજને માવજત આપી શકાય છે જેથી નાઇટ્રોજન અને ફોસ્ફરસની ઉપલબ્ધતા વધે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૫. ખાતર અને પોષણ:</h2>
                <p>
                  જમીન પરીક્ષણના આધારે ખાતરનો ઉપયોગ કરવો જોઈએ. સામાન્ય રીતે, વરસાદ આધારિત ખેતી માટે ૪૦ કિલોગ્રામ નાઇટ્રોજન અને ૨૦ કિલોગ્રામ ફોસ્ફરસ પ્રતિ હેક્ટર, અને સિંચાઈવાળા વિસ્તારો માટે ૬૦ કિલોગ્રામ નાઇટ્રોજન અને ૩૦ કિલોગ્રામ ફોસ્ફરસ પ્રતિ હેક્ટર પાયાના ખાતર તરીકે વાવણી સમયે આપો. નાઇટ્રોજનની બાકીની અડધી માત્રા વાવણીના ૨૫-૩૦ દિવસ પછી પહેલી નિંદામણ સમયે આપો. ઝીંકની ઉણપવાળી જમીનમાં ૧૦ કિલોગ્રામ ઝીંક સલ્ફેટ પ્રતિ હેક્ટર નાખો. ઊભા પાકમાં ઝીંકની ઉણપ દૂર કરવા માટે ૦.૨% ઝીંક સલ્ફેટનો છાંટકાવ કરો. સેન્દ્રિય ખાતર (જેમ કે છાણનું ખાતર) નો ઉપયોગ જમીનની ફળદ્રુપતા વધારવામાં મદદ કરે છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૬. સિંચાઈ:</h2>
                <p>
                  બાજરો સૂકા સહન કરતો પાક છે અને સામાન્ય રીતે વરસાદ આધારિત ખેતી કરવામાં આવે છે. જો કે, મહત્વપૂર્ણ વિકાસ તબક્કાઓ (વધુ કૂંપળો ફૂટવા, ફૂલ આવવા અને દાણા ભરાવા) દરમિયાન સિંચાઈ કરવાથી ઉપજમાં નોંધપાત્ર વધારો થઈ શકે છે. પાણી ભરાવાથી બચો, કારણ કે તેનાથી મૂળ સડી શકે છે. ટપક સિંચાઈ પાણી બચાવવાનો એક અસરકારક માર્ગ છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૭. નીંદણ નિયંત્રણ:</h2>
                <p>
                  વાવણીના પહેલા ૩૦-૪૦ દિવસ નીંદણ નિયંત્રણ માટે મહત્વપૂર્ણ છે. નિંદામણ કરીને અથવા રાસાયણિક નીંદણનાશક (જેમ કે એટ્રાઝિન) નો ઉપયોગ કરીને નીંદણને નિયંત્રિત કરો. વિક આવરણ (મલ્ચિંગ) પણ નીંદણને દબાવવામાં મદદ કરી શકે છે અને જમીનમાં ભેજ જાળવી શકે છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૮. જીવાત અને રોગો:</h2>
                <p className="mb-3">
                  <strong>જીવાતો:</strong> થડની માખી, થડ વેધક, મોલો, લશ્કરી ઇયળ.
                </p>
                <p className="mb-3">
                  <strong>રોગો:</strong> ડાઉની માઇલ્ડયુ (લીલો કંસલો), અગોટ, પાનનો સુકારો, કાળો ગેરુ.
                </p>
                <p>
                  જીવાતો અને રોગોના નિયંત્રણ માટે યોગ્ય જંતુનાશક અને ફૂગનાશક દવાઓનો ઉપયોગ કરો. રોગ પ્રતિકારક જાતોની પસંદગી કરવી પણ મહત્વપૂર્ણ છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૯. લણણી:</h2>
                <p>
                  બાજરાની લણણી ત્યારે કરવામાં આવે છે જ્યારે દાણા સખત થઈ જાય અને તેમાં ભેજનું પ્રમાણ ઓછું થઈ જાય. પાંદડા પીળા પડવા લાગે છે અને સૂકાવા લાગે છે. લણણી સામાન્ય રીતે ફૂલ આવ્યાના લગભગ ૬૫-૮૦ દિવસ પછી કરવામાં આવે છે. પહેલા કંસલાં કાપવામાં આવે છે અને પછી ડાળીઓ. કાપેલા કંસલાંને તડકામાં સૂકવવામાં આવે છે અને પછી થ્રેસરની મદદથી દાણા અલગ કરવામાં આવે છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૧૦. ઉપજ:</h2>
                <p>
                  સારી જાતો અને યોગ્ય વ્યવસ્થાપન તકનીકો સાથે, વરસાદ આધારિત ખેતીમાં પ્રતિ હેક્ટર ૨૦-૩૫ ક્વિન્ટલ અને સિંચાઈવાળા વિસ્તારોમાં તેનાથી વધુ ઉપજ મળી શકે છે.
                </p>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-accent mb-2">ખાસ નોંધ:</p>
                <p>
                  આ એક સામાન્ય પદ્ધતિ છે. સ્થાનિક કૃષિ વિભાગ પાસેથી વિશિષ્ટ સલાહ અને નવીનતમ માહિતી મેળવવી હંમેશાં ઉપયોગી છે. જો આપને કોઈ વધુ પ્રશ્નો હોય તો નિઃસંકોચ પૂછી શકો છો. વધુ માહિતી માટે સ્થાનિક કૃષિ વિભાગ અથવા કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે. એ નોંધવું અગત્યનું છે કે સ્થાનિક કૃષિ વિભાગ અને કૃષિ યુનિવર્સિટીઓ આરા જારી કરવામાં આવેલી નવીનતમ ભલામણોનું પાલન કરવું હંમેશાં શ્રેષ્ઠ હોય છે.
                </p>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Hindi Content */}
          <Card className="p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              बाजरा की खेती पद्धति
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1. किस्मों का चयन:</h2>
                <p>
                  गुजरात के लिए बाजरा की कई उन्नत और संकर किस्में उपलब्ध हैं। अपनी स्थानीय जलवायु और बाजार की मांग के अनुसार उपयुक्त किस्म का चयन करें। संकर किस्में आमतौर पर अधिक उपज देती हैं।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2. जलवायु और मिट्टी:</h2>
                <p>
                  बाजरा गर्म और शुष्क जलवायु में अच्छी तरह से बढ़ता है। यह विभिन्न प्रकार की मिट्टी में उगाया जा सकता है, लेकिन अच्छी जल निकासी वाली बलुई दोमट और काली मिट्टी सबसे उपयुक्त होती है। यह फसल जलजमाव वाली मिट्टी को सहन नहीं कर सकती। मिट्टी का pH मान ६.५ से ७.५ के बीच होना चाहिए।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3. बुवाई का समय:</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>खरीफ की फसल:</strong> जून-जुलाई, मानसून की शुरुआत के साथ।</li>
                  <li><strong>ग्रीष्मकालीन फसल:</strong> फरवरी-मार्च (सिंचाई की सुविधा वाले क्षेत्रों में)।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4. खेत की तैयारी और बुवाई:</h2>
                <p>
                  खेत को २-३ बार जुताई करके भुरभुरा बना लें। खेत को समतल करें ताकि जल निकासी अच्छी हो। पंक्तियों के बीच ४५-६० सेमी और पौधों के बीच १०-१५ सेमी की दूरी रखते हुए बुवाई करें। शुष्क क्षेत्रों में पंक्ति से पंक्ति की दूरी ६० सेमी तक रखी जा सकती है और पौधों की संख्या प्रति हेक्टेयर १ से १.२५ लाख रखी जाती है। बीज को २-३ सेमी की गहराई पर बोएँ। प्रति हेक्टेयर 8-९ किलोग्राम बीज की आवश्यकता होती है। बुवाई से पहले बीज को फफूंदनाशक (जैसे कि मेटालैक्सिल) से उपचारित करें ताकि शुरुआती रोगों से बचाया जा सके। एजोस्पिरिलम और फॉस्फोबैक्टीरिया से भी बीज उपचारित किया जा सकता है ताकि नाइट्रोजन और फास्फोरस की उपलब्धता बढ़े।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5. खाद और उर्वरक:</h2>
                <p>
                  मिट्टी परीक्षण के आधार पर उर्वरकों का उपयोग करना चाहिए। सामान्य तौर पर, वर्षा आधारित खेती के लिए ४० किलोग्राम नाइट्रोजन और २० किलोग्राम फास्फोरस प्रति हेक्टेयर, और सिंचित क्षेत्रों के लिए ६० किलोग्राम नाइट्रोजन और ३० किलोग्राम फास्फोरस प्रति हेक्टेयर आधार खाद के रूप में बुवाई के समय दें। नाइट्रोजन की शेष आधी मात्रा बुवाई के २५-३० दिन बाद पहली निराई-गुड़ाई के समय दें। जिंक की कमी वाली मिट्टी में १० किलोग्राम जिंक सल्फेट प्रति हेक्टेयर डालें। खड़ी फसल में जिंक की कमी दूर करने के लिए ०.२% जिंक सल्फेट का छिड़काव करें। जैविक खाद (जैसे गोबर की खाद) का उपयोग मिट्टी की उर्वरता बढ़ाने में मदद करता है।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6. सिंचाई:</h2>
                <p>
                  बाजरा सूखा-सहिष्णु फसल है और आमतौर पर वर्षा आधारित खेती की जाती है। हालांकि, महत्वपूर्ण विकास चरणों (अधिकतम कल्ले फूटना, फूल आना और दाना भरना) के दौरान सिंचाई करने से उपज में काफी वृद्धि हो सकती है। जलजमाव से बचें, क्योंकि यह जड़ों के सड़ने का कारण बन सकता है। टपक सिंचाई पानी बचाने का एक प्रभावी तरीका है।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7. खरपतवार नियंत्रण:</h2>
                <p>
                  बुवाई के पहले ३०-४० दिन खरपतवार नियंत्रण के लिए महत्वपूर्ण हैं। निराई-गुड़ाई करके या रासायनिक खरपतवारनाशी का उपयोग करके खरपतवारों को नियंत्रित करें। जैविक मल्चिंग भी खरपतवारों को दबाने में मदद कर सकती है और मिट्टी की नमी बनाए रख सकती है।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8. कीट और रोग:</h2>
                <p className="mb-3">
                  <strong>कीट:</strong> तना मक्खी, तना छेदक, एफिड, आर्मीवर्म।
                </p>
                <p className="mb-3">
                  <strong>रोग:</strong> डाउनी मिल्ड्यू (हरित बाली रोग), अरगट, पत्ती झुलसा, रस्ट।
                </p>
                <p>
                  कीटों और रोगों के नियंत्रण के लिए उचित कीटनाशक और फफूंदनाशक दवाओं का उपयोग करें। रोग प्रतिरोधी किस्मों का चयन करना भी महत्वपूर्ण है।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9. कटाई:</h2>
                <p className="mb-3">
                  बाजरा की कटाई तब की जाती है जब दाने सख्त हो जाएं और उनमें नमी की मात्रा कम हो जाए।
                </p>
                <p className="mb-3">
                  पत्तियां पीली पड़ने लगती हैं और सूखने लगती हैं।
                </p>
                <p className="mb-3">
                  कटाई आमतौर पर फूल आने के लगभग ६५-८० दिनों के बाद की जाती है।
                </p>
                <p className="mb-3">
                  पहले बालियों को काटा जाता है और फिर डंठलों को।
                </p>
                <p>
                  कटाई के बाद बालियों को धूप में सुखाया जाता है और फिर मड़ाई करके दाने अलग किए जाते हैं।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">10. उपज:</h2>
                <p>
                  अच्छी किस्मों और उचित प्रबंधन तकनीकों के साथ, वर्षा आधारित खेती में प्रति हेक्टेयर 20-35 क्विंटल और सिंचित क्षेत्रों में इससे अधिक उपज प्राप्त की जा सकती है।
                </p>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-accent mb-2">विशेष नोट:</p>
                <p>
                  यह खेती की सामान्य पैकेज ऑफ प्रैक्टिसेज है। स्थानीय परिस्थितियों, मिट्टी के प्रकार और मौसम के अनुसार इसमें कुछ बदलाव किए जा सकते हैं। नवीनतम जानकारी और विशिष्ट सलाह के लिए अपने क्षेत्र के कृषि विशेषज्ञ या कृषि विश्वविद्यालय से संपर्क करें।
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Index;
