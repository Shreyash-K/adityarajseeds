import asianSeedsLogo from "@/assets/asian-seeds-logo.png";
import asianGoldImage from "@/assets/asian-gold-guwar.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AsianGold = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={asianSeedsLogo}
              alt="Asian Seeds Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow-md bg-white"
            />
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                ASIAN SEEDS
              </h1>
              <div className="space-y-0.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold">Produced, Packed &amp; Marketed By:</p>
                <p>Shop No.12, Siddhi Vinayak Complex,</p>
                <p>Banas Dairy Road, Opp. Jahanara Baugh,</p>
                <p>Palanpur-385001. Dist.: B.K. (Gujarat)</p>
                <p className="mt-1.5">Customer Care No.: 99793 09448</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Product Title Section */}
      <section className="bg-background py-6 md:py-8 border-b border-border/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
            Gold - Research Guwar Seeds
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
              src={asianGoldImage}
              alt="Asian Seeds Gold - Research Guwar Seeds Package"
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
              तिल की खेती की पद्धति
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. जलवायु और मिट्टी:</h4>
                <p className="text-sm">तिल की खेती के लिए गर्म और आर्द्र जलवायु उपयुक्त होती है। अंकुरण के लिए 25-30°C और अच्छी वृद्धि के लिए 25-35°C तापमान आदर्श है। 50-75 सेमी वार्षिक वर्षा वाले क्षेत्र इसकी खेती के लिए अच्छे होते हैं। तिल के लिए अच्छी जल निकासी वाली बलुई दोमट या हल्की काली मिट्टी सर्वोत्तम होती है। मिट्टी का पीएच 5.5 से 8.0 के बीच होना चाहिए।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. खेत की तैयारी:</h4>
                <p className="text-sm">खेत को 2-3 बार जुताई करके अच्छी तरह से भुरभुरा बना लें। एक जुताई के बाद पाटा अवश्य लगाएं ताकि मिट्टी समतल हो जाए और नमी बनी रहे। खरपतवार नियंत्रण के लिए पहली जुताई के समय हैरो का प्रयोग करें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. उन्नत किस्में:</h4>
                <p className="text-sm">अपने क्षेत्र की परिस्थितियों के अनुसार उपयुक्त किस्म का चयन करें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. बीज उपचार और बुवाई:</h4>
                <p className="text-sm">बुवाई से पहले बीज को फफूंदनाशक (काबेन्डाजिम या थायरम 2-3 ग्राम/किलोग्राम बीज) से उपचारित करें। खरीफ: जून का अंतिम सप्ताह से जुलाई का मध्य। रबी: जनवरी से फरवरी। जायद: मार्च से अप्रैल। पंक्ति से पंक्ति की दूरी 45-60 सेमी और पौधे से पौधे की दूरी 15-20 सेमी रखें। बीज को 2-3 सेमी की गहराई पर बोना चाहिए। बीज दर 5-6 (ग्रीष्म) और 2-2.5 (खरीफ) किग्रा/हेक्टेयर पर्याप्त होती है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. खाद एवं उर्वरक:</h4>
                <p className="text-sm">मिट्टी परीक्षण के आधार पर उर्वरकों का प्रयोग करें। सामान्य तौर पर, 40-60 किग्रा नाइट्रोजन, 40-60 किग्रा फास्फोरस और 20-40 किग्रा पोटाश प्रति हेक्टेयर की आवश्यकता होती है। नाइट्रोजन की आधी मात्रा और फास्फोरस तथा पोटाश की पूरी मात्रा बुवाई के समय डालें। नाइट्रोजन की शेष आधी मात्रा बुवाई के 30 दिन बाद डालें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. सिंचाई:</h4>
                <p className="text-sm">तिल की फसल को कम पानी की आवश्यकता होती है। बुवाई के तुरंत बाद हल्की सिंचाई करें। बाद में आवश्यकतानुसार सिंचाई करें, खासकर फूल आने और फली बनने की अवस्था में नमी की कमी नहीं होनी चाहिए। अत्यधिक सिंचाई से बचें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. खरपतवार नियंत्रण:</h4>
                <p className="text-sm">बुवाई के 20-30 दिन बाद पहली निराई-गुडाई करें। आवश्यकतानुसार दूसरी निराई-गुडाई 40-50 दिन बाद करें। खरपतवार नियंत्रण के लिए विविध खरपतवारनाशकों का प्रयोग बुवाई से पहले किया जा सकता है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. रोग एवं कीट प्रबंधन:</h4>
                <p className="text-sm">पत्ती धब्बा रोग: मैंकोजेब या कॉपर ऑक्सीक्लोराइड का छिड़काव करें। जड़ सड़न: जल निकासी का उचित प्रबंध करें और बीज उपचार करें। माहू (एफिड): इमिडाक्लोप्रिड या डायमेथोएट का छिड़काव करें। पत्ती खाने वाली इल्ली: क्विनालफॉस या क्लोरपाइरीफॉस का छिड़काव करें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">9. कटाई और उपज:</h4>
                <p className="text-sm">जब पत्तियां पीली पड़ने लगें और फलियां सूख जाएं, तब कटाई करें। कटाई में देरी से बीज झड़ने का खतरा रहता है। पौधों को काटकर छोटे-छोटे गट्ठों में बांधकर खेत में या खलिहान में सुखाएं। अच्छी तरह सूखने के बाद डंडों से पीटकर या थ्रेशर की सहायता से बीज निकाल लें।</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">विशेष नोट:</h4>
                <p className="text-sm text-yellow-700">यह तिल की खेती की एक सामान्य पद्धति है। स्थानीय कृषि विभाग से विशिष्ट सलाह और नवीनतम जानकारी प्राप्त करना हमेशा उपयोगी होता है। यदि आपके कोई और प्रश्न हों तो बेझिझक पूछें।</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Asian Seeds. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default AsianGold;