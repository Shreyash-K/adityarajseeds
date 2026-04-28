import companyLogo from "@/assets/sundram-seeds-logo.jpeg";
import productImage from "@/assets/sundram-36.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Sundram36 = () => {
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
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
            SUNDRAM-36 - Research Guar Seeds
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-devanagari">
            એકતડી ગવાર | एकतडी ग्वार
          </p>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src={productImage}
              alt="SUNDRAM-36 Research Guar Seeds Package"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Gujarati Content */}
      <section className="bg-background py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 font-devanagari">
              ગમ ગવારની ખેતી પદ્ધતિ
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. આબોહવા અને જમીન:</h4>
                <p className="text-sm">ગવાર ગમ માટે ગરમ અને સૂકું હવામાન શ્રેષ્ઠ છે. તે વિવિધ પ્રકારની જમીનમાં ઉગી શકે છે, પરંતુ સારી નિતારવાળી ગોરાડુ જમીન સૌથી યોગ્ય છે. જમીનનું pH 7.0 થી 8.5 ની વચ્ચે હોવું જોઈએ.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. જાતોની પસંદગી:</h4>
                <p className="text-sm">ગવાર ગમ માટે એવી જાતો પસંદ કરવી જોઈએ જેમાં ગમનું પ્રમાણ વધુ હોય. ગુજરાતમાં ગમ માટેની કેટલીક ભલામણ કરેલ જાતોનું વાવેતર કરવું. સ્થાનિક કૃષિ યુનિવર્સિટી અથવા કૃષિ વિભાગ પાસેથી નવીનતમ ભલામણો તપાસવી હિતાવહ છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. વાવણીનો સમય:</h4>
                <p className="text-sm">ગવાર ગમ માટેની વાવણીનો શ્રેષ્ઠ સમય ચોમાસાની શરૂઆત એટલે કે જૂન-જુલાઈ મહિનો છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. જમીનની તૈયારી અને વાવણી:</h4>
                <p className="text-sm">ખેતરને ૨-૩ વાર ખેડીને સમતળ કરો. હેક્ટર દીઠ ૧૦ થી ૧૫ ટન સારું કહોવાયેલું છાણિયું ખાતર આપવું. હાર વચ્ચે ૪૫-૬૦ સેમી અને છોડ વચ્ચે 15-20 સેમીનું અંતર રાખવું. બીજને ૨-૩ સેમીની ઊંડાઈએ વાવવા જોઈએ. પ્રતિ હેક્ટર 10-15 કિલોગ્રામ બીજની જરૂર પડે છે. બીજને વાવતા પહેલાં રાઇઝોબિયમ કલ્ચર અને ફૂગનાશક દવાથી માવજત આપવી જોઈએ.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. ખાતર અને પોષણ:</h4>
                <p className="text-sm">ગવાર ગમ પાકને સામાન્ય રીતે ઓછી ખાતરની જરૂર પડે છે. જમીન પરીક્ષણના આધારે ભલામણ કરેલ ખાતરનો ઉપયોગ કરવો જોઈએ. સામાન્ય રીતે વાવણી સમયે 20 કિલો નાઇટ્રોજન અને 40 કિલો ફોસ્ફરસ પ્રતિ હેક્ટર આપવામાં આવે છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. સિંચાઈ:</h4>
                <p className="text-sm">ગવાર ગમ સામાન્ય રીતે વરસાદ આધારિત પાક છે. જો કે, લાંબા સમય સુધી વરસાદ ન આવે તો જરૂર મુજબ સિંચાઈ કરવી જોઈએ. ફૂલ આવવાના અને શીંગો વિકાસના સમયે પાણીની ખેંચ ન પડવા દેવી જોઈએ.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. નીંદણ નિયંત્રણ:</h4>
                <p className="text-sm">વાવણીના 20-25 અને 40-45 દિવસ પછી બે વખત હાથથી નીંદણ કરવું પૂરતું છે. રાસાયણિક નીંદણ નિયંત્રણ માટે, પાકની વાવણી પહેલાં પેન્ડિમેથાલિન 0.75 કિગ્રા/હેક્ટર અને વાવણીના 20-25 દિવસ પછી ઇમેઝેથાપાયર 40 ગ્રામ/હેક્ટરનો ઉપયોગ કરી શકાય છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. જીવાત અને રોગો:</h4>
                <p className="text-sm">ગવાર ગમમાં મોલો, સફેદ માખી અને પાન કથીરી જેવી જીવાતો જોવા મળે છે. પાવડરી માઇલ્ડ્યુ અને બેક્ટેરિયલ બ્લાઇટ જેવા રોગો પણ થઈ શકે છે. જીવાતો અને રોગોના નિયંત્રણ માટે યોગ્ય દવાઓનો ઉપયોગ કરવો જોઈએ.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">9. લણણી:</h4>
                <p className="text-sm">ગવાર ગમ માટે પાકની લણણી ત્યારે કરવામાં આવે છે જ્યારે શીંગો સંપૂર્ણપણે પાકી જાય અને સૂકાઈ જાય. છોડના પાંદડા પીળા થવા લાગે છે અને શીંગો ભૂરા રંગની થવા લાગે છે. લણણી પછી શીંગોને તડકામાં સૂકવવામાં આવે છે અને પછી થ્રેસરની મદદથી બીજ કાઢવામાં આવે છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">10. ઉત્પાદન:</h4>
                <p className="text-sm">સારી ખેતી પદ્ધતિઓ અપનાવીને ગવાર ગમ માટે પ્રતિ હેક્ટર 10-15 ક્વિન્ટલ બીજનું ઉત્પાદન મેળવી શકાય છે, જેમાં ગમનું પ્રમાણ લગભગ 25-30% હોય છે.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">ખાસ નોંધ:</h4>
                <p className="text-sm text-yellow-700">આ એક સામાન્ય પદ્ધતિ છે. સ્થાનિક કૃષિ વિભાગ પાસેથી વિશિષ્ટ સલાહ અને નવીનતમ માહિતી મેળવવી હંમેશાં ઉપયોગી છે. જો આપને કોઈ વધુ પ્રશ્નો હોય તો નિઃસંકોચ પૂછી શકો છો. વધુ માહિતી માટે સ્થાનિક કૃષિ વિભાગ અથવા કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Hindi Content */}
      <section className="bg-background py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 font-devanagari">
              ग्वार गम की खेती पद्धति
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. जलवायु और मिट्टी:</h4>
                <p className="text-sm">ग्वार गम के लिए गर्म और शुष्क मौसम सर्वोत्तम है। यह विभिन्न प्रकार की मिट्टी में उग सकता है, लेकिन अच्छी जल निकासी वाली बलुई दोमट मिट्टी सबसे उपयुक्त है। मिट्टी का pH मान 7.0 से 8.5 के बीच होना चाहिए।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. किस्मों का चयन:</h4>
                <p className="text-sm">ग्वार गम के लिए ऐसी किस्में चुननी चाहिए जिनमें गम की मात्रा अधिक हो। गुजरात में गम के लिए कुछ अनुशंसित किस्मों का इस्तेमाल कर सकते हैं। नवीनतम अनुशंसाओं के लिए स्थानीय कृषि विश्वविद्यालय या कृषि विभाग से जांच करना उचित है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. बुवाई का समय:</h4>
                <p className="text-sm">ग्वार गम के लिए बुवाई का सर्वोत्तम समय मानसून की शुरुआत यानी जून-जुलाई का महीना है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. खेत की तैयारी और बुवाई:</h4>
                <p className="text-sm">खेत को २-३ बार जुताई करके समतल करें। प्रति हेक्टेयर १० से १५ टन अच्छी तरह से सड़ी हुई गोबर की खाद डालें। पंक्तियों के बीच ४५-६० सेमी और पौधों के बीच 15-20 सेमी की दूरी रखें। बीज को २-३ सेमी की गहराई पर बोना चाहिए। प्रति हेक्टेयर 10-15 किलोग्राम बीज की आवश्यकता होती है। बीज को बोने से पहले राइजोबियम कल्चर और फफूंदनाशक दवा से उपचारित करना चाहिए।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. खाद और पोषण:</h4>
                <p className="text-sm">ग्वार गम की फसल को आमतौर पर कम उर्वरक की आवश्यकता होती है। मिट्टी परीक्षण के आधार पर अनुशंसित उर्वरक का उपयोग करना चाहिए। सामान्य तौर पर बुवाई के समय 20 किलोग्राम नाइट्रोजन और 40 किलोग्राम फास्फोरस प्रति हेक्टेयर दिया जाता है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. सिंचाई:</h4>
                <p className="text-sm">ग्वार गम आमतौर पर वर्षा आधारित फसल है। हालांकि, लंबे समय तक वर्षा न होने पर आवश्यकतानुसार सिंचाई करनी चाहिए। फूल आने और फलियों के विकास के समय पानी की कमी नहीं होनी चाहिए।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. खरपतवार नियंत्रण:</h4>
                <p className="text-sm">बुवाई के 20-25 और 40-45 दिनों के बाद दो बार हाथ से निराई करना पर्याप्त है। रासायनिक खरपतवार नियंत्रण के लिए, फसल की बुवाई से पहले पेंडीमेथालिन 0.75 किग्रा/हेक्टेयर और बुवाई के 20-25 दिनों के बाद इमेजेथापायर 40 ग्राम/हेक्टेयर का उपयोग किया जा सकता है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. कीट और रोग:</h4>
                <p className="text-sm">ग्वार गम में माहू (एफिड), सफेद मक्खी और माइट जैसे कीट देखे जाते हैं। पाउडरी मिल्ड्यू और बैक्टीरियल ब्लाइट जैसे रोग भी हो सकते हैं। कीटों और रोगों के नियंत्रण के लिए उचित दवाओं का उपयोग करना चाहिए।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">9. कटाई:</h4>
                <p className="text-sm">ग्वार गम के लिए फसल की कटाई तब की जाती है जब फलियाँ पूरी तरह से पक जाएं और सूख जाएं। पौधे के पत्ते पीले होने लगते हैं और फलियाँ भूरे रंग की होने लगती हैं। कटाई के बाद फलियों को धूप में सुखाया जाता है और फिर थ्रेशर की मदद से बीज निकाला जाता है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">10. उपज:</h4>
                <p className="text-sm">अच्छी खेती की विधियाँ अपनाकर ग्वार गम के लिए प्रति हेक्टेयर 10-15 क्विंटल बीज की उपज प्राप्त की जा सकती है, जिसमें गम की मात्रा लगभग 25-30% होती है।</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">विशेष नोट:</h4>
                <p className="text-sm text-yellow-700">यह खेती की सामान्य पैकेज ऑफ प्रैक्टिसेज है। स्थानीय परिस्थितियों, मिट्टी के प्रकार और मौसम के अनुसार इसमें कुछ बदलाव किए जा सकते हैं। नवीनतम जानकारी और विशिष्ट सलाह के लिए अपने क्षेत्र के कृषि विशेषज्ञ या कृषि विश्वविद्यालय से संपर्क करें।</p>
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

export default Sundram36;
