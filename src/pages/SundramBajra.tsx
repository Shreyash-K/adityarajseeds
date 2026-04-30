import companyLogo from "@/assets/sundram-seeds-logo.jpeg";
import sundram9588 from "@/assets/sundram-9588.jpeg";
import sundram9561 from "@/assets/sundram-9561.jpeg";
import sundram9595 from "@/assets/sundram-9595.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SundramBajra = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Company Header */}
      <section className="bg-card border-b border-border/50">
        <div className="container max-w-4xl mx-auto px-4 py-6 md:py-8">
          <div className="flex items-start gap-4 md:gap-6 mb-4">
            <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 bg-muted/50 rounded-2xl overflow-hidden shadow-md">
              <img
                src={companyLogo}
                alt="Sundram Seeds Logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex-1 pt-1">
              <h1 className="text-xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                SUNDRAM SEEDS
              </h1>
              <div className="space-y-0.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                <p>Milkat No. 2560, Survey No. 2102.002, Old Milkat No.32,</p>
                <p>Kumbhalmer-Chandisar Road, At. & Po.-Kumbhasan,</p>
                <p>Ta. Palanpur, Dist. B.K. (Gujarat)</p>
                <p className="mt-1.5">Customer Care: +91 8238092000</p>
                <p>Email: sundramseeds7108@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Title Section */}
      <section className="bg-background py-6 md:py-8 border-b border-border/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight text-center">
            SUNDRAM 9588, 9561 & 9595 - Hybrid Bajra Seeds
          </h2>
          <p className="text-lg text-muted-foreground mt-2 text-center font-devanagari">
            સંશોધિત હા. બાજરા બીજ | संशोधित हा. बाजरा बीज
          </p>
        </div>
      </section>

      {/* Seed Packet Images Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="text-center">
              <img
                src={sundram9588}
                alt="Sundram 9588 Hybrid Bajra Seeds Package"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold text-primary mt-4">SUNDRAM 9588</h3>
            </div>
            <div className="text-center">
              <img
                src={sundram9561}
                alt="Sundram 9561 Hybrid Bajra Seeds Package"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold text-primary mt-4">SUNDRAM 9561</h3>
            </div>
            <div className="text-center">
              <img
                src={sundram9595}
                alt="Sundram 9595 Research Hy. Bajra Seeds Package"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold text-primary mt-4">SUNDRAM 9595</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-4">

          {/* Gujarati Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-lg border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              🌾 ખેતી ની પદ્ધતિ 🌾
            </h1>
            <p className="text-center text-muted-foreground mb-8 font-devanagari">
              બાજરો એક મહત્વપૂર્ણ ધાન્ય પાક છે જે ભારતના ઘણા ભાગોમાં ઉગાડવામાં આવે છે, ખાસ કરીને સૂકા અને અધણ-સૂકા વિસ્તારોમાં. ગુજરાતમાં પણ તેની ખેતી ખરીફ અને ઉનાળુ બાંને ઋતુઓમાં કરવામાં આવે છે.
            </p>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૧. જાતોની પસંદગી:</h2>
                <p className="ml-4">
                  ગુજરાત માટે બાજરાની ઘણી સુધારેલી અને સાંકર જાતો ઉપલબ્ધ છે. તમારી સ્થાનિક આબોહવા અને બજારની માંગ અનુસાર યોગ્ય જાતની પસંદગી કરવી. સાંકર જાતો સામાન્ય રીતે વધુ ઉપજ આપે છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૨. આબોહવા અને જમીન:</h2>
                <p className="ml-4">
                  બાજરો ગરમ અને સૂકી આબોહવામાં સારી રીતે ઉગે છે. તે વિવિધ પ્રકારની જમીનમાં ઉગાડી શકાય છે, પરંતુ સારા નિતારવાળી ગોરાડુ અને કાળી જમીન સૌથી યોગ્ય છે. આ પાક પાણી ભરાઈ રહેતી જમીનને સહન કરી શકતો નથી. જમીનનું pH મૂલ્ય ૬.૫ થી ૭.૫ ની વચ્ચે હોવું જોઈએ.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૩. વાવણીનો સમય:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>ખરીફ પાક:</strong> જૂન-જુલાઈ, ચોમાસાની શરૂઆત સાથે.</li>
                  <li><strong>ઉનાળુ પાક:</strong> ફેબ્રુઆરી-માચર્ણ (સિંચાઈની સગવડ હોય તેવા વિસ્તારોમાં).</li>
                  <li>ગુજરાતના કેટલાક ભાગોમાં રવિ પાક (નવેમ્બર-ફેબ્રુઆરી) તરીકે પણ ઉગાડવામાં આવે છે, પરંતુ તે પ્રમાણમાં ઓછું હોય છે.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૪. જમીનની તૈયારી અને વાવણી:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>ખેતરને ૨-૩ વાર ખેડીને ભરભરુું બનાવી લો.</li>
                  <li>ખેતરને સમતળ કરો જેથી પાણીનો નિકાલ સારી રીતે થઈ શકે.</li>
                  <li>હાર વચ્ચે ૪૫-૬૦ સેમી અને છોડ વચ્ચે ૧૦-૧૫ સેમીનું અંતર રાખીને વાવણી કરો.</li>
                  <li>સૂકા વિસ્તારોમાં હારથી હારનું અંતર ૬૦ સેમી સુધી રાખી શકાય છે અને છોડની સંખ્યા પ્રતિ હેક્ટર ૧ થી ૧.૨૫ લાખ રાખવામાં આવે છે.</li>
                  <li>બીજને ૨-૩ સેમીની ઊંડાઈએ વાવો. પ્રતિ હેક્ટર ૮ થી ૯ કિલોગ્રામ બીજની જરૂર પડે છે.</li>
                  <li>વાવણી પહેલાં બીજને ફૂગનાશક (જેમ કે મેટાલેક્સિલ) થી માવજત આપો જેથી શરૂઆતના રોગોથી બચાવ થઈ શકે.</li>
                  <li>એઝોસ્પિરિલમ અને ફોસ્ફોબેક્ટેરિયાથી પણ બીજને માવજત આપી શકાય છે જેથી નાઇટ્રોજન અને ફોસ્ફરસની ઉપલબ્ધતા વધે.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૫. ખાતર અને પોષણ:</h2>
                <p className="ml-4 mb-2">
                  જમીન પરીક્ષણના આધારે ખાતરનો ઉપયોગ કરવો જોઈએ. સામાન્ય રીતે:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>વરસાદ આધારિત ખેતી માટે ૪૦ કિલોગ્રામ નાઇટ્રોજન અને ૨૦ કિલોગ્રામ ફોસ્ફરસ પ્રતિ હેક્ટર.</li>
                  <li>સિંચાઈવાળા વિસ્તારો માટે ૬૦ કિલોગ્રામ નાઇટ્રોજન અને ૩૦ કિલોગ્રામ ફોસ્ફરસ પ્રતિ હેક્ટર પાયાના ખાતર તરીકે વાવણી સમયે આપો.</li>
                  <li>નાઇટ્રોજનની બાકીની અડધી માત્રા વાવણીના ૨૫-૩૦ દિવસ પછી પહેલી નિંદામણ સમયે આપો.</li>
                  <li>ઝીંકની ઉણપવાળી જમીનમાં ૧૦ કિલોગ્રામ ઝીંક સલ્ફેટ પ્રતિ હેક્ટર નાખો.</li>
                  <li>ઊભા પાકમાં ઝીંકની ઉણપ દૂર કરવા માટે ૦.૨% ઝીંક સલ્ફેટનો છાંટકાવ કરો.</li>
                  <li>સેન્દ્રિય ખાતર (જેમ કે છાણનું ખાતર) નો ઉપયોગ જમીનની ફળદ્રુપતા વધારવામાં મદદ કરે છે.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૬. સિંચાઈ:</h2>
                <p className="ml-4">
                  બાજરો સૂકા સહન કરતો પાક છે અને સામાન્ય રીતે વરસાદ આધારિત ખેતી કરવામાં આવે છે. જો કે, મહત્વપૂર્ણ વિકાસ તબક્કાઓ (વધુ કૂંપળો ફૂટવા, ફૂલ આવવા અને દાણા ભરાવા) દરમિયાન સિંચાઈ કરવાથી ઉપજમાં નોંધપાત્ર વધારો થઈ શકે છે. પાણી ભરાવાથી બચો, કારણ કે તેનાથી મૂળ સડી શકે છે. ટપક સિંચાઈ પાણી બચાવવાનો એક અસરકારક માર્ગ છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૭. નીંદણ નિયંત્રણ:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>વાવણીના પહેલા ૩૦-૪૦ દિવસ નીંદણ નિયંત્રણ માટે મહત્વપૂર્ણ છે.</li>
                  <li>નિંદામણ કરીને અથવા રાસાયણિક નીંદણનાશક (જેમ કે એટ્રાઝિન) નો ઉપયોગ કરીને નીંદણને નિયંત્રિત કરો.</li>
                  <li>વિક આવરણ (મલ્ચિંગ) પણ નીંદણને દબાવવામાં મદદ કરી શકે છે અને જમીનમાં ભેજ જાળવી શકે છે.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૮. જીવાત અને રોગો:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>જીવાતો:</strong> થડની માખી, થડ વેધક, મોલો, લશ્કરી ઇયળ.</li>
                  <li><strong>રોગો:</strong> ડાઉની માઇલ્ડયુ (લીલો કંસલો), અગોટ, પાનનો સુકારો, કાળો ગેરુ.</li>
                  <li>જીવાતો અને રોગોના નિયંત્રણ માટે યોગ્ય જંતુનાશક અને ફૂગનાશક દવાઓનો ઉપયોગ કરો.</li>
                  <li>રોગ પ્રતિકારક જાતોની પસંદગી કરવી પણ મહત્વપૂર્ણ છે.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૯. લણણી:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>બાજરાની લણણી ત્યારે કરવામાં આવે છે જ્યારે દાણા સખત થઈ જાય અને તેમાં ભેજનું પ્રમાણ ઓછું થઈ જાય.</li>
                  <li>પાંદડા પીળા પડવા લાગે છે અને સૂકાવા લાગે છે.</li>
                  <li>લણણી સામાન્ય રીતે ફૂલ આવ્યાના લગભગ ૬૫-૮૦ દિવસ પછી કરવામાં આવે છે.</li>
                  <li>પહેલા કંસલાં કાપવામાં આવે છે અને પછી ડાળીઓ.</li>
                  <li>કાપેલા કંસલાંને તડકામાં સૂકવવામાં આવે છે અને પછી થ્રેસરની મદદથી દાણા અલગ કરવામાં આવે છે.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">૧૦. ઉપજ:</h2>
                <p className="ml-4">
                  સારી જાતો અને યોગ્ય વ્યવસ્થાપન તકનીકો સાથે, વરસાદ આધારિત ખેતીમાં પ્રતિ હેક્ટર ૨૦-૩૫ ક્વિન્ટલ અને સિંચાઈવાળા વિસ્તારોમાં તેનાથી વધુ ઉપજ મળી શકે છે.
                </p>
              </div>

              <div className="bg-accent/20 p-6 rounded-lg border-l-4 border-accent">
                <h2 className="text-xl md:text-2xl font-bold text-accent-foreground mb-3">ખાસ નોંધ:</h2>
                <p className="ml-4">
                  આ એક સામાન્ય પદ્ધતિ છે. સ્થાનિક કૃષિ વિભાગ પાસેથી વિશિષ્ટ સલાહ અને નવીનતમ માહિતી મેળવવી હંમેશાં ઉપયોગી છે. વધુ માહિતી માટે સ્થાનિક કૃષિ વિભાગ અથવા કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.
                </p>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Hindi Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-lg border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              🌾 खेती की पद्धति 🌾
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1. किस्मों का चयन:</h2>
                <p className="ml-4">
                  गुजरात के लिए बाजरा की कई उन्नत और संकर किस्में उपलब्ध हैं। अपनी स्थानीय जलवायु और बाजार की मांग के अनुसार उपयुक्त किस्म का चयन करें। संकर किस्में आमतौर पर अधिक उपज देती हैं।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2. जलवायु और मिट्टी:</h2>
                <p className="ml-4">
                  बाजरा गर्म और शुष्क जलवायु में अच्छी तरह से बढ़ता है। यह विभिन्न प्रकार की मिट्टी में उगाया जा सकता है, लेकिन अच्छी जल निकासी वाली बलुई दोमट और काली मिट्टी सबसे उपयुक्त होती है। यह फसल जलजमाव वाली मिट्टी को सहन नहीं कर सकती। मिट्टी का pH मान ६.५ से ७.५ के बीच होना चाहिए।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3. बुवाई का समय:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>खरीफ की फसल:</strong> जून-जुलाई, मानसून की शुरुआत के साथ।</li>
                  <li><strong>ग्रीष्मकालीन फसल:</strong> फरवरी-मार्च (सिंचाई की सुविधा वाले क्षेत्रों में)।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4. खेत की तैयारी और बुवाई:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>खेत को २-३ बार जुताई करके भुरभुरा बना लें।</li>
                  <li>खेत को समतल करें ताकि जल निकासी अच्छी हो।</li>
                  <li>पंक्तियों के बीच ४५-६० सेमी और पौधों के बीच १०-१५ सेमी की दूरी रखते हुए बुवाई करें।</li>
                  <li>बीज को २-३ सेमी की गहराई पर बोएँ। प्रति हेक्टेयर 8-९ किलोग्राम बीज की आवश्यकता होती है।</li>
                  <li>बुवाई से पहले बीज को फफूंदनाशक (जैसे कि मेटालैक्सिल) से उपचारित करें।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5. खाद और उर्वरक:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>वर्षा आधारित खेती के लिए ४० किलोग्राम नाइट्रोजन और २० किलोग्राम फास्फोरस प्रति हेक्टेयर।</li>
                  <li>सिंचित क्षेत्रों के लिए ६० किलोग्राम नाइट्रोजन और ३० किलोग्राम फास्फोरस प्रति हेक्टेयर आधार खाद के रूप में बुवाई के समय दें।</li>
                  <li>नाइट्रोजन की शेष आधी मात्रा बुवाई के २५-३० दिन बाद पहली निराई-गुड़ाई के समय दें।</li>
                  <li>जिंक की कमी वाली मिट्टी में १० किलोग्राम जिंक सल्फेट प्रति हेक्टेयर डालें।</li>
                  <li>जैविक खाद का उपयोग मिट्टी की उर्वरता बढ़ाने में मदद करता है।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6. सिंचाई:</h2>
                <p className="ml-4">
                  बाजरा सूखा-सहिष्णु फसल है। महत्वपूर्ण विकास चरणों (अधिकतम कल्ले फूटना, फूल आना और दाना भरना) के दौरान सिंचाई करने से उपज में काफी वृद्धि हो सकती है। जलजमाव से बचें।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7. खरपतवार नियंत्रण:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>बुवाई के पहले ३०-४० दिन खरपतवार नियंत्रण के लिए महत्वपूर्ण हैं।</li>
                  <li>निराई-गुड़ाई करके या रासायनिक खरपतवारनाशी का उपयोग करके खरपतवारों को नियंत्रित करें।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8. कीट और रोग:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>कीट:</strong> तना मक्खी, तना छेदक, एफिड, आर्मीवर्म।</li>
                  <li><strong>रोग:</strong> डाउनी मिल्ड्यू, अरगट, पत्ती झुलसा, रस्ट।</li>
                  <li>रोग प्रतिरोधी किस्मों का चयन करना भी महत्वपूर्ण है।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9. कटाई:</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>बाजरा की कटाई तब की जाती है जब दाने सख्त हो जाएं और उनमें नमी की मात्रा कम हो जाए।</li>
                  <li>कटाई आमतौर पर फूल आने के लगभग ६५-८० दिनों के बाद की जाती है।</li>
                  <li>कटाई के बाद बालियों को धूप में सुखाया जाता है और फिर मड़ाई करके दाने अलग किए जाते हैं।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">10. उपज:</h2>
                <p className="ml-4">
                  अच्छी किस्मों और उचित प्रबंधन तकनीकों के साथ, वर्षा आधारित खेती में प्रति हेक्टेयर 20-35 क्विंटल और सिंचित क्षेत्रों में इससे अधिक उपज प्राप्त की जा सकती है।
                </p>
              </div>

              <div className="bg-accent/20 p-6 rounded-lg border-l-4 border-accent">
                <h2 className="text-xl md:text-2xl font-bold text-accent-foreground mb-3">विशेष नोट:</h2>
                <p className="ml-4">
                  यह खेती की सामान्य पैकेज ऑफ प्रैक्टिसेज है। नवीनतम जानकारी और विशिष्ट सलाह के लिए अपने क्षेत्र के कृषि विशेषज्ञ या कृषि विश्वविद्यालय से संपर्क करें।
                </p>
              </div>
            </div>
          </Card>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Sundram Seeds. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default SundramBajra;