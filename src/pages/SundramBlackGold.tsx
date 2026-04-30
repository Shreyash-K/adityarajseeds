import companyLogo from "@/assets/sundram-seeds-logo.jpeg";
import productImage from "@/assets/sundram-black-gold.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SundramBlackGold = () => {
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
            Black Gold - Research Urid Seeds
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-devanagari">
            અડદ | उड़द
          </p>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src={productImage}
              alt="Black Gold - Research Urid Seeds Package"
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
              અડદની ખેતી પદ્ધતિ
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. જમીન અને આબોહવા:</h4>
                <p className="text-sm">અડદના પાકને રેતાળ ગોરાડુથી માફક આવે છે. જમીનમાં સારા નિતારની વ્યવસ્થા હોવી જરૂરી છે. પાણી ભરાઈ રહેવાથી પાકને નુકસાન થાય છે. અડદના પાકને ગરમ અને ભેજવાળી આબોહવા અનુકૂળ આવે છે. વાવણી સમયે તાપમાન 25-30° સેલ્સિયસ અને પાકની વૃદ્ધિ માટે 30-35° સેલ્સિયસ આદર્શ ગણાય છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. ખેતરની તૈયારી:</h4>
                <p className="text-sm">ખેતરને એક થી બે વાર હળથી ખેડીને જમીનને ભરભરી બનાવો. પાછલા પાકના અવશેષો અને નીંદણને દૂર કરો. જમીનની ફળદ્રુપતા વધારવા માટે હેક્ટર દીઠ 5-10 ટન છાણિયું ખાતર અથવા કમ્પોસ્ટ ખાતર નાખો અને ખેડતી વખતે જમીનમાં ભેળવી દો. ઉનાળુ અડદ માટે ખેતરમાં ભેજ જાળવી રાખવા માટે વાવણી પહેલા હળવું તપયત આપવું ફાયદાકારક છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. વાવણી:</h4>
                <p className="text-sm">ખરીફ પાક: જૂન-જુલાઈ મહિના દરમિયાન જ્યારે સારો વરસાદ થાય ત્યારે વાવણી કરવી જોઈએ. ઉનાળુ પાક: ફેબ્રુઆરી-માર્ચ મહિનામાં વાવણી કરવામાં આવે છે. બીજની માત્રા હેક્ટર દીઠ 15-20 કિલોગ્રામ રાખવી જોઈએ. બે હાર વચ્ચે 30-45 સેન્ટીમીટર અને બે છોડ વચ્ચે 10-15 સેન્ટીમીટર રાખો. બીજને 4-5 સેન્ટીમીટર ઊંડી વાવો. વાવણી પહેલા બીજને રાઈઝોબિયમ કલ્ચર અને થાયરમ અથવા કાર્બેન્ડાઝિમ ફૂગનાશક દવાનો પટ આપો.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. ખાતર અને પોષણ:</h4>
                <p className="text-sm">અડદનો પાક કઠોળ વર્ગનો હોવાથી તે હવામાંથી નાઇટ્રોજન મેળવી શકે છે. તેમ છતાં, પાકની વૃદ્ધિ માટે થોડા પ્રમાણમાં ખાતરની જરૂર પડે છે. જમીન પરીક્ષણના આધારે ખાતર આપવું વધુ સારું છે. સામાન્ય રીતે હેક્ટર દીઠ 20 કિલોગ્રામ નાઇટ્રોજન અને 40 કિલોગ્રામ ફોસ્ફરસ વાવણી વખતે પાયાના ખાતર તરીકે આપવું જોઈએ. પોટાશની જરૂરિયાત જમીનના પ્રકાર પર આધાર રાખે છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. સિંચાઈ:</h4>
                <p className="text-sm">અડદના પાકને વધુ પાણીની જરૂર નથી. વાવણી પછી તરત જ હળવું તપયત આપો. ત્યારબાદ જમીનમાં ભેજની જરૂરિયાત મુજબ 10-15 દિવસના અંતરે તપયત આપતા રહો. ફૂલ આવવાના અને શીંગો બેસવાના સમયે પાણીની ખેંચ ન પડવા દો. ઉનાળુ પાકમાં તપયતની જરૂરિયાત વધુ રહે છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. નીંદણ નિયંત્રણ:</h4>
                <p className="text-sm">અડદના પાકમાં વાવણીના 2-3 અઠવાડિયાં સુધી નીંદણ મુક્ત રાખવું જરૂરી છે. હાથથી અથવા તરખેડીને નીંદણ દૂર કરવામાં આવે છે. રાસાયણિક નીંદણનાશક દવાઓનો ઉપયોગ પણ કરવામાં આવે છે. દવાઓનો ઉપયોગ નીંદણના પ્રકાર અને પાકની અવસ્થાને ધ્યાનમાં રાખીને કરવો જોઈએ.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. જીવાત અને રોગ નિયંત્રણ:</h4>
                <p className="text-sm">અડદના પાકમાં મોલોમશી, સફેદ માખી, પાન ખાનારી ઇયળ અને શીંગો કોરી ખાનારી ઇયળ જેવી જીવાતોનો ઉપદ્રવ થાય છે. તેના નિયંત્રણ માટે યોગ્ય કીટનાશક દવાઓનો ઉપયોગ કરો. પીળો મોઝેક વાયરસ (Yellow Mosaic Virus) અડદના પાકનો મુખ્ય રોગ છે. આ રોગ સફેદ માખી દ્વારા ફેલાય છે. તેના નિયંત્રણ માટે રોગ પ્રતિરોધક જાતોની વાવણી કરવી અને સફેદ માખીનું નિયંત્રણ કરવું જરૂરી છે. પાનના ટપકા અને ભૂકી છારો જેવા રોગો પણ અડદના પાકને નુકસાન પહોંચાડે છે. તેના નિયંત્રણ માટે યોગ્ય ફૂગનાશક દવાઓનો ઉપયોગ કરો.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. કાપણી:</h4>
                <p className="text-sm">જ્યારે 70-80% શીંગો પાકી જાય અને પીળી થવા લાગે ત્યારે કાપણી કરવી જોઈએ. કાપણીમાં વિલંબ કરવાથી શીંગો ફાટી જવાનો અને દાણા પડી જવાનો ભય રહે છે. કાપણી કર્યા બાદ છોડને 2-3 દિવસ તડકામાં સૂકવો. ત્યારબાદ થ્રેસરની મદદથી દાણા છૂટા પાડો.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">અગત્યની નોંધ:</h4>
                <p className="text-sm text-yellow-700">આ સામગ્રી અડદની ખેતી પદ્ધતિ છે. તમારા વિસ્તારની આબોહવા, જમીનના પ્રકાર અને ઋતુ અનુસાર તેમાં થોડો ફેરફાર થઈ શકે છે. વધુ માહિતી માટે તમારા નજીકના કૃષિ સલાહકાર કે કૃષિ યુનિવર્સિટીનો સંપર્ક કરો.</p>
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
              उड़द की खेती की पद्धति
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. जलवायु और मिट्टी:</h4>
                <p className="text-sm">उड़द की खेती के लिए गर्म और आर्द्र जलवायु उपयुक्त होती है। अंकुरण के लिए 25-30°C और अच्छी वृद्धि के लिए 25-35°C तापमान आदर्श है। 60-75 सेमी वार्षिक वर्षा वाले क्षेत्र इसकी खेती के लिए अच्छे होते हैं। फूल आने के समय भारी वर्षा हानिकारक हो सकती है। उड़द के लिए अच्छी जल निकासी वाली बलुई दोमट या हल्की काली मिट्टी सर्वोत्तम होती है। मिट्टी का पीएच मान 6.5 से 7.8 के बीच होना चाहिए। क्षारीय और लवणीय मिट्टी उड़द की खेती के लिए उपयुक्त नहीं है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. खेत की तैयारी:</h4>
                <p className="text-sm">ग्रीष्मकाल (अप्रैल-मई) में खेत की 2-3 बार जुताई करके मिट्टी को भुरभुरा बना लें ताकि नमी संरक्षित रहे और खरपतवार नष्ट हो जाएं। प्रत्येक जुताई के बाद पाटा अवश्य लगाएं ताकि मिट्टी समतल हो जाए। भारी काली मिट्टी में ब्रॉड बेड फरो और लाल मिट्टी में कम्पार्टमेंटल बंडिंग लाभकारी होती है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. बीज उपचार और बुवाई:</h4>
                <p className="text-sm">बुवाई से पहले बीज को फफूंदनाशक (कार्बेन्डाजिम या थायरम 2-3 ग्राम/किलो बीज) से उपचारित करें। बीज को राइजोबियम और पीएसबी (फॉस्फेट सोलुबिलाइजिंग बैक्टीरिया) कल्चर से उपचारित करना लाभकारी होता है। बुवाई का उपयुक्त समय: खरीफ - जून का अंतिम सप्ताह से जुलाई का मध्य; ग्रीष्मकालीन - फरवरी का तीसरा सप्ताह से अप्रैल का पहला सप्ताह। पंक्ति से पंक्ति की दूरी 30-45 सेमी (खरीफ) और 20-25 सेमी (ग्रीष्म) तथा पौधे से पौधे की दूरी 10 सेमी रखें। बीज को 4-5 सेमी की गहराई पर बोना चाहिए। बीज दर 15-20 किग्रा/हेक्टेयर पर्याप्त होती है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. खाद एवं उर्वरक:</h4>
                <p className="text-sm">मिट्टी परीक्षण के आधार पर उर्वरकों का प्रयोग करें। सामान्य तौर पर, 20 किग्रा नाइट्रोजन, 40 किग्रा फास्फोरस और 20 किग्रा पोटाश प्रति हेक्टेयर की आवश्यकता होती है। बुवाई के समय उर्वरकों की पूरी मात्रा बेसल ड्रेसिंग के रूप में दें। जिंक की कमी वाले क्षेत्रों में 25 किग्रा जिंक सल्फेट प्रति हेक्टेयर डालें। फूल आने से पहले 2% डीएपी और 2% केसीएल का छिड़काव उपज बढ़ाने में सहायक होता है। जैविक खाद (गोबर की खाद या कम्पोस्ट) 5-6 टन प्रति हेक्टेयर बुवाई से पहले खेत में मिलाएं।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. सिंचाई:</h4>
                <p className="text-sm">खरीफ की फसल में आमतौर पर सिंचाई की आवश्यकता नहीं होती है। ग्रीष्मकालीन फसल में बुवाई के तुरंत बाद और फिर आवश्यकतानुसार फूल आने और फली बनने की अवस्था में सिंचाई करें। खेत में जलभराव से बचें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. खरपतवार नियंत्रण:</h4>
                <p className="text-sm">बुवाई के 3 दिन बाद पेंडीमेथालिन 0.75 लीटर/हेक्टेयर का पूर्व-उभरन शाकनाशी के रूप में छिड़काव करें, इसके बाद 20-25 दिन बाद एक बार हाथ से निराई या यांत्रिक निराई करें। यदि शाकनाशी का उपयोग नहीं किया गया है, तो बुवाई के 15 और 30 दिन बाद दो बार निराई-गुड़ाई करें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. रोग एवं कीट प्रबंधन:</h4>
                <p className="text-sm">पीला मोजेक वायरस: रोग प्रतिरोधी किस्मों का प्रयोग करें और सफेद मक्खी का नियंत्रण करें (इमिडाक्लोप्रिड या थायमेथोक्सम का छिड़काव)। पत्ती कलम रोग: मेटालसिस्टॉक्स का 10 दिन के अंतराल पर 2-3 बार छिड़काव करें। चूर्णी फफूंदी: घुलनशील गंधक (0.25%) का छिड़काव करें। तना छेदक और फली छेदक: मोनोक्रोटोफॉस या डाइक्लोरवोस का छिड़काव करें। माहू (एफिड) और सफेद मक्खी: इमिडाक्लोप्रिड या डायमेथोएट का छिड़काव करें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. कटाई और उपज:</h4>
                <p className="text-sm">जब अधिकांश फलियाँ काली पड़ने लगें और पौधे सूखने लगें तब कटाई करें। अत्यधिक पकने से फलियाँ फट सकती हैं। कटाई के बाद पौधों को सुखाकर डंडों से पीटकर या थ्रेशर से दाना निकाल लें। औसत उपज किस्म और प्रबंधन पर निर्भर करती है।</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">विशेष नोट:</h4>
                <p className="text-sm text-yellow-700">यह उड़द की खेती की एक सामान्य पद्धति है। स्थानीय कृषि विभाग से विशिष्ट सलाह और नवीनतम जानकारी प्राप्त करना हमेशा उपयोगी होता है। यदि आपके कोई और प्रश्न हैं तो बेझिझक पूछें।</p>
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

export default SundramBlackGold;
