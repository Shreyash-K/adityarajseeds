import dantiwadaHeader from "@/assets/dantiwada-header.jpeg";
import gch7Image from "@/assets/dantiwada-gch7-castor.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Gch7Castor = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Dantiwada Header Banner */}
      <section className="bg-card border-b border-border/50">
        <div className="container max-w-4xl mx-auto px-4 py-6 md:py-8">
          <div className="flex justify-center">
            <img
              src={dantiwadaHeader}
              alt="Dantiwada Seeds Company Header"
              className="w-full max-w-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Product Title Section */}
      <section className="bg-background py-6 md:py-8 border-b border-border/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
            GCH-7 - Research Castor Seeds
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-devanagari">
            દાંતીવાડા-૭ (જીસીએચ-૭) | संशोधित अरंडी
          </p>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src={gch7Image}
              alt="GCH-7 Research Castor Seeds Package"
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
              દિવેલાની ખેતી પદ્ધતિ
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. જાતોની પસંદગી:</h4>
                <p className="text-sm">ગુજરાતમાં દિવેલાની ઘણી સુધારેલી અને સાંકર જાતો ઉપલબ્ધ છે. વધુ ઉત્પન્ન આપતી જાતો અને સૂકારા સામે પ્રતિસાદક જાત વાવેતર માટે પસંદ કરવી. તમારી સ્થાનીક આબોહવા અને જરૂરિયાત અનુસાર યોગ્ય જાતની પસંદગી કરવી.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. આબોહવા અને જમીન:</h4>
                <p className="text-sm">દિવેલાને ગરમ અને સૂકાં હવામાન માફક આવે છે. તે સારા નિતારવાળી મધ્યમ કાળી, ગોરાડુ અને રેતાળ જમીનમાં સારી રીતે ઉગી શકે છે. પાણી ભરાઈ રહેતું હોય તેવી ભારે કાળી અને ક્ષારીય જમીન આ પાક માટે યોગ્ય નથી. જમીનનું pH મૂલ્ય ૬.૦ થી ૮.૫ ની વચ્ચે હોવું જોઈએ.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. વાવણીનો સમય:</h4>
                <p className="text-sm">બિનસિંચાઈ પાક: ચોમાસાનો વાવણીલાયક વરસાદ થયા પછી તરત જ વાવણી કરવી. સામાન્ય રીતે જૂન-જુલાઈમાં વાવણી શ્રેષ્ઠ છે. સિંચાઈ પાક: ઓગસ્ટમાં વાવણી કરવી વધુ સારું છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. જમીનની તૈયારી અને વાવણી:</h4>
                <p className="text-sm">ખેતરને ૨-૩ વાર ખેડીને સમતળ કરો. હેક્ટર દીઠ ૧૦ થી ૧૨ ટન સારું કહોવાયેલું છાણિયું ખાતર અથવા ૧ ટન દિવેલી ખોળ આપવો. હાર વચ્ચે ૯૦-૧૨૦ સેમી અને છોડ વચ્ચે ૪૫-૬૦ સેમીનું અંતર રાખવું. સિંચાઈ પાક માટે ચાસમાં બે છોડ વચ્ચે ૬૦ સેમીનું અંતર રાખવું. બીજને ૩-૫ સેમીની ઊંડાઈમાં વાવો. હેક્ટર દીઠ ૫ થી ૬ કિલોગ્રામ બીજની જરૂર પડે છે. બીજને વાવતા પહેલા થાયરમ અથવા કાબેન્ડાઝિમ ફૂગનાશકથી માવજત આપવી.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. ખાતર:</h4>
                <p className="text-sm">જમીન પરીક્ષણના આધારે ખાતરની માત્રા નક્કી કરવી જોઈએ. સામાન્ય રીતે, પાયાના ખાતર તરીકે ૨૦ કિલો નાઇટ્રોજન અને ૪૦ કિલો ફોસ્ફરસ હેક્ટર દીઠ આપવું જોઈએ. સિંચાઈ પાક માટે નાઇટ્રોજનનો બીજો હપ્તો વાવણીના ૩૦-૪૫ દિવસ પછી આપવો.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. સિંચાઈ:</h4>
                <p className="text-sm">દિવેલા એ સામાન્ય રીતે ઓછાં પાણી માગતો પાક છે. જો વરસાદ ન હોય તો જરૂર મુજબ સિંચાઈ આપવું. પહેલું સિંચાઈ વાવણીના ૩૦-૪૦ દિવસ પછી અને ત્યારબાદ ૧૫-૨૦ દિવસના અંતરે આપવું. ટપક સિંચાઈ પદ્ધતિ પાણીની બચત અને વધુ ઉત્પન્ન માટે સારી છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. નીંદણ નિયંત્રણ:</h4>
                <p className="text-sm">વાવણીના શરૂઆતના ૪૫-૬૦ દિવસ સુધી ખેતરને નીંદણમુક્ત રાખવું. ૨-૩ વખત આંતરખેડ અને ૧-૨ વખત હાથથી નીંદણ કામ કરવું. રાસાયણિક નીંદણ નિયંત્રણ માટે ફલુક્લોરાલિન અથવા પેન્ડિમિથાલિન જેવા દવાઓનો ઉપયોગ કરી શકાય છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. જીવાત અને રોગો:</h4>
                <p className="text-sm">જીવાતો: મોલો, તિતલીઓ, સફેદ માખી, પાન કથીરી, કોપરી ખાનાર ઇયળ, ઘોડિયા ઇયળ. રોગો: સુકારો (વિલ્ટ), મૂળનો કોહવારો, ઝાળ (બ્લાઇટ). જીવાતો અને રોગોના નિયંત્રણ માટે યોગ્ય જંતુનાશક અને ફૂગનાશક દવાઓનો ઉપયોગ કરવો જોઈએ. રોગ પ્રતિકારક જાતોની પસંદગી કરવી અને પાકની ફેરબદલી કરવી પણ મહત્વપૂર્ણ છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">9. આંતરપાક:</h4>
                <p className="text-sm">દિવેલાના બે હાર વચ્ચે મગ અથવા અડદ જેવા કઠોળ પાકોનું આંતરપાક લઈ શકાય છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">10. લણણી:</h4>
                <p className="text-sm">વાવણીના ૯૦-૧૨૦ દિવસ પછી મુખ્ય માળ પીળી પડવા લાગે છે અને બોડવા પાકવા માંડે છે. જ્યારે અડધા બોડવા પાકી જાય અને બાકીના પીળા પડે ત્યારે માળ કાપણી માટે તૈયાર છે. કાપણી લગભગ ચાર મહિના સુધી ચાલે છે. કાપણી કરેલા માળોને ખળામાં સૂકવીને બળદ અથવા થ્રેશરની મદદથી દાણા છૂટા પાડવામાં આવે છે.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">11. ઉત્પાદન:</h4>
                <p className="text-sm">સારી જાત, જમીનની ફળદ્રુપતા અને અનુકૂળ હવામાન મુજબ સિંચાઈ પાકમાં હેક્ટરે ૩૦૦૦ કિલોગ્રામ અને બિનસિંચાઈ પાકમાં હેક્ટરે ૧૨૦૦ થી ૧૫૦૦ કિલોગ્રામ ઉત્પાદન મળી શકે છે.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">ખાસ નોંધ:</h4>
                <p className="text-sm text-yellow-700">આ એક સામાન્ય પદ્ધતિ છે. સ્થાનિક કૃષિ વિભાગ પાસેથી વિશિષ્ટ સલાહ અને નવીનતમ માહિતી મેળવવી હંમેશાં ઉપયોગી છે. વધુ માહિતી માટે સ્થાનિક કૃષિ વિભાગ અથવા કૃષિ યુનિવર્સિટીનો સંપર્ક કરવો હિતાવહ છે.</p>
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
              अरंडी की खेती की पद्धति
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. किस्मों का चयन:</h4>
                <p className="text-sm">भारत में अरंडी की कई उन्नत और संकर किस्में उपलब्ध हैं। अपनी स्थानीय जलवायु और आवश्यकता के अनुसार उपयुक्त किस्म का चयन करें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. जलवायु और मिट्टी:</h4>
                <p className="text-sm">अरंडी को गर्म और शुष्क मौसम अनुकूल आता है। यह अच्छी जल निकासी वाली मध्यम काली, बलुई और रेतीली मिट्टी में अच्छी तरह से उग सकता है। पानी भरा रहने वाली भारी काली और भारी मिट्टी इस फसल के लिए उपयुक्त नहीं है। मिट्टी का pH मान ६.० से ८.५ के बीच होना चाहिए।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. बुवाई का समय:</h4>
                <p className="text-sm">बारानी फसल: मानसून की बुवाई योग्य वर्षा होने के तुरंत बाद बुवाई करें। आमतौर पर जून-जुलाई के पहले पखवाड़े में बुवाई सर्वोत्तम होती है। सिंचित फसल: अगस्त के पहले सप्ताह में बुवाई करना बेहतर है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. खेत की तैयारी और बुवाई:</h4>
                <p className="text-sm">खेत को २-३ बार जुताई करके समतल करें। प्रति हेक्टेयर १० से १२ टन अच्छी तरह से सड़ी हुई गोबर की खाद या १ टन अरंडी की खली डालें। पंक्तियों के बीच ९०-१२० सेमी और पौधों के बीच ४५-६० सेमी की दूरी रखें। सिंचित फसल के लिए कतारों में दो पौधों के बीच ६० सेमी की दूरी रखें। बीज को ५-६ सेमी की गहराई पर बोएँ। प्रति हेक्टेयर ५-६ किलोग्राम बीज की आवश्यकता होती है। बीज को बोने से पहले थायरम या काबेन्डाजिम जैसी फफूंदनाशक दवा से उपचारित करें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. खाद:</h4>
                <p className="text-sm">मिट्टी परीक्षण के आधार पर उर्वरक की मात्रा निर्धारित करनी चाहिए। सामान्य तौर पर, आधार खाद के रूप में २० किलोग्राम नाइट्रोजन और ४० किलोग्राम फास्फोरस प्रति हेक्टेयर दें। सिंचित फसल के लिए नाइट्रोजन की दूसरी खुराक बुवाई के ३०-४५ दिनों के बाद दें।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. सिंचाई:</h4>
                <p className="text-sm">अरंडी आमतौर पर कम पानी चाहने वाली फसल है। यदि वर्षा न हो तो आवश्यकतानुसार सिंचाई करें। पहली सिंचाई बुवाई के ३०-४० दिनों के बाद और उसके बाद १५-२० दिनों के अंतराल पर करें। टपक सिंचाई विधि पानी की बचत और अच्छी उपज के लिए अच्छी है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. खरपतवार नियंत्रण:</h4>
                <p className="text-sm">बुवाई के शुरूआती ४५-६० दिनों तक खेत को खरपतवार मुक्त रखें। २-३ बार अंतराकर्षण और १-२ बार हाथ से निराई करें। रासायनिक खरपतवार नियंत्रण के लिए फ्लूक्लोरालिन या पेंडिमेथालिन जैसी दवाओं का उपयोग किया जा सकता है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. कीट और रोग:</h4>
                <p className="text-sm">कीट: माहू (एफिड), फुदका (जैसिड), सफेद मक्खी, माइट, फली छेदक, सेमीलूपर। रोग: उकठा (विल्ट), जड़ सड़न, झुलसा (ब्लाइट)। कीटों और रोगों के नियंत्रण के लिए उचित कीटनाशक और फफूंदनाशक दवाओं का उपयोग करना चाहिए। रोग प्रतिरोधी किस्मों का चयन करना और फसल चक्र अपनाना भी महत्वपूर्ण है। उकठा रोग के नियंत्रण के लिए मक्का, ज्वार या बाजरा के साथ फसल चक्र अपनाएँ।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">9. अंतर फसल:</h4>
                <p className="text-sm">अरंडी की दो पंक्तियों के बीच मूंग या उड़द जैसी दलहनी फसलों की अंतरफसल ली जा सकती है।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">10. कटाई:</h4>
                <p className="text-sm">बुवाई के ९०-१२० दिनों के बाद मुख्य मंजरी पीली पड़ने लगती है और फलियाँ पकने लगती हैं। जब आधी फलियाँ पक जाएँ और बाकी पीली पड़ जाएँ तो मंजरी कटाई के लिए तैयार है। कटाई लगभग चार महीने तक चलती है। काटी हुई मंजरियों को खलिहान में सुखाकर बैलों या थ्रेशर की मदद से दाने अलग किए जाते हैं।</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">11. उपज:</h4>
                <p className="text-sm">अच्छी किस्म, मिट्टी की उर्वरता और अनुकूल मौसम के अनुसार सिंचित फसल में प्रति हेक्टेयर ३००० से ४००० किलोग्राम और बारानी फसल में प्रति हेक्टेयर १५०० से १८०० किलोग्राम उपज मिल सकती है।</p>
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
          <p>© 2024 Dantiwada Seeds Company. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Gch7Castor;