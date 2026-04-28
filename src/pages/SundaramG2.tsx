import companyLogo from "@/assets/sundram-seeds-logo.jpeg";
import productImage from "@/assets/sundram-g2.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SundaramG2 = () => {
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

      {/* Product Title Section */}
      <section className="bg-background py-6 md:py-8 border-b border-border/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
            Sundaram G-2 - Research Sesamum Seeds
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-devanagari">
            સંશોધિત તલ | संशोधित तिल
          </p>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src={productImage}
              alt="Sundaram G-2 - Research Sesamum Seeds Package"
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
              તલની ખેતી પદ્ધતિ
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. જમીન અને આબોહવા:</h4>
                <p className="text-sm">તલના પાકને ગોરાડુ, રેતાળ ગોરાડુ અને મધ્યમ કાળી જમીન સૌથી વધુ અનુકૂળ આવે છે. સારા નિતારવાળી જમીન તલના પાક માટે ખૂબ જ જરૂરી છે, કારણ કે પાણી ભરાઈ રહેવાથી છોડને નુકસાન થાય છે. તલના પાકને ગરમ અને સૂકી આબોહવા માફક આવે છે. વાવણી સમયે તાપમાન 25-30° સેલ્સિયસ અને પાકની વૃદ્ધિ માટે 30-35° સેલ્સિયસ આદર્શ ગણાય છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. ખેતરની તૈયારી:</h4>
                <p className="text-sm">ખેતરને 2-3 વાર હળથી ખેડીને જમીનને ભરભરી બનાવો. પાછલા પાકના અવશેષો અને નીંદણને દૂર કરો. જમીનની ફળદ્રુપતા વધારવા માટે હેક્ટર દીઠ 5-10 ટન છાણિયું ખાતર અથવા કમ્પોસ્ટ ખાતર નાખો અને ખેડતી વખતે જમીનમાં ભેળવી દો. ઉનાળુ તલ માટે ખેતરમાં ભેજ જાળવી રાખવા માટે વાવણી પહેલાં હળવું પિયત આપવું ફાયદાકારક છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. વાવણી:</h4>
                <p className="text-sm">ખરીફ પાક: જૂન-જુલાઈ મહિનામાં જ્યારે સારો વરસાદ થાય ત્યારે વાવણી કરવી જોઈએ. રવિ પાક: ઓક્ટોબર-નવેમ્બર મહિનામાં જ્યારે ઠંડીની શરૂઆત થાય ત્યારે વાવણી કરવામાં આવે છે. ઉનાળુ પાક: ફેબ્રુઆરી-માર્ચ મહિનામાં વાવણી કરી શકાય છે. બીજની માત્રા હેક્ટર દીઠ 5-6 (ઉનાળુ), 2-2.5 (ચોમાસુ) કિલોગ્રામ રાખવી જોઈએ. બે હાર વચ્ચેનું અંતર 45-60 સેન્ટીમીટર અને બે છોડ વચ્ચેનું અંતર 15-20 સેન્ટીમીટર રાખો. બીજને 1-2 સેન્ટીમીટર ઊંડાઈએ વાવો.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. ખાતર અને પોષણ:</h4>
                <p className="text-sm">જમીન પરીક્ષણના આધારે ખાતર આપવું વધુ સારું છે. સામાન્ય રીતે હેક્ટર દીઠ 40-60 કિલોગ્રામ નાઇટ્રોજન, 20-30 કિલોગ્રામ ફોસ્ફરસ અને 20 કિલોગ્રામ પોટાશની જરૂર પડે છે. નાઇટ્રોજનનો અડધો ભાગ અને ફોસ્ફરસ તથા પોટાશનો પૂરો ભાગ વાવણી વખતે પાયાના ખાતર તરીકે આપો.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. સિંચાઈ:</h4>
                <p className="text-sm">તલના પાકને ઓછી સિંચાઈની જરૂર પડે છે, પરંતુ કટોકટીના સમયે પાણીની ખેંચ ન પડવી જોઈએ. વાવણી પછી તરત જ હળવું પિયત આપો. ત્યારબાદ જમીનમાં ભેજની જરૂરત મુજબ 15-20 દિવસના અંતરે પિયત આપતા રહો. ફૂલ આવવાના અને ડોડવા બેસવાના સમયે પિયતની ખેંચ ન પડવા દો.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. નીંદણ નિયંત્રણ:</h4>
                <p className="text-sm">તલના પાકમાં શરૂઆતના 30-40 દિવસ સુધી નીંદણ મુક્ત રાખવું ખૂબ જ જરૂરી છે, કારણ કે આ સમયગાળા દરમિયાન નીંદણ પાકની વૃદ્ધિને અવરોધે છે. હાથથી અથવા આંતરખેડ કરીને નીંદણ દૂર કરી શકાય છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. જીવાત અને રોગ નિયંત્રણ:</h4>
                <p className="text-sm">તલના પાકમાં મોલોમશી, સફેદ માખી, પાન ખાનારી ઇયળ અને ડોડવા કોરી ખાનારી ઇયળ જેવી જીવાતોનો ઉપદ્રવ થઈ શકે છે. પાનના ટપકાં, ભૂકી છારો અને મૂળનો સડો જેવા રોગો પણ તલના પાકને નુકસાન પહોંચાડી શકે છે. રોગના નિયંત્રણ માટે રોગપ્રતિકારક જાતોની વાવણી કરવી અને યોગ્ય ફૂગનાશક દવાઓનો ઉપયોગ કરવો જરૂરી છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. કાપણી:</h4>
                <p className="text-sm">જ્યારે પાકના પાંદડા પીળા થવા લાગે અને ડોડવા પીળાશ પડતા લીલા રંગના થાય ત્યારે કાપણી કરવી જોઈએ. વધુ પડતી પાકવા દેવાથી ડોડવા ફાટી જાય છે અને દાણા ખરી પડે છે. છોડને જમીન નજીકથી કાપી લો અને નાના ઢગલા બનાવીને 2-3 દિવસ તડકામાં સૂકવો.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">ખાસ નોંધ:</h4>
                <p className="text-sm text-yellow-700">આ સામાન્ય તલની ખેતી પદ્ધતિ છે. તમારા વિસ્તારની આબોહવા, જમીનના પ્રકાર અને ઋતુ અનુસાર તેમાં થોડો ફેરફાર થઈ શકે છે. વધુ માહિતી માટે તમારા નજીકના કૃષિ સલાહકાર કે કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.</p>
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
          <p>© 2024 Adityaraj Agri Genetics Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default SundaramG2;
