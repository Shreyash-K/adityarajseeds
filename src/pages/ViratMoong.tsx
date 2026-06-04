import companyLogo from "@/assets/company-logo.jpeg";
import productImage from "@/assets/virat-moong.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ViratMoong = () => {
  return (
    <main className="min-h-screen bg-background">
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

      {/* Product Title Section */}
      <section className="bg-background py-6 md:py-8 border-b border-border/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
            Virat - Research Green Gram (Moong)
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-devanagari">
            મગ | मूंग
          </p>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src={productImage}
              alt="Virat - Research Green Gram (Moong) Package"
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
              મગની ખેતી પદ્ધતિ
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. જમીન અને આબોહવા:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>ગુજરાતમાં મગનો પાક ખરીફ અને ઉનાળુ સીઝનમાં લેવામાં આવે છે.</li>
                  <li>મગના પાકને રેતાળ ગોરાડ અને મધ્યમ કાળી જમીન સૌથી વધુ માફક આવે છે.</li>
                  <li>જમીનમાં સારા નિતારની વ્યવસ્થા હોવી જરૂરી છે.</li>
                  <li>મગના પાકને ગરમ અને સૂકી આબોહવા અનુકૂળ આવે છે.</li>
                  <li>વાવણી સમયે તાપમાન 25-30° સેલ્સિયસ અને પાકની વૃદ્ધિ માટે 30-35° સેલ્સિયસ આદર્શ ગણાય છે.</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. ખેતરની તૈયારી:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>ખેતરને એક થી બે વાર હળથી ખેડીને જમીનને ભરભરી બનાવો.</li>
                  <li>પાછલા પાકના અવશેષો અને નીંદણને દૂર કરો.</li>
                  <li>જમીનની ફળદ્રુપતા વધારવા માટે હેક્ટર દીઠ 5-10 ટન છાણ ખાતર અથવા કમ્પોસ્ટ ખાતર નાખો અને ખેડતી વખતે જમીનમાં ભેળવી દો.</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. વાવણી:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>ખરીફ પાક: જૂન-જુલાઈ મહિનામાં જ્યારે સારો વરસાદ થાય ત્યારે વાવણી કરવી જોઈએ.</li>
                  <li>ઉનાળુ પાક: ફેબ્રુઆરી-માર્ચ મહિનામાં વાવણી કરી શકાય છે.</li>
                  <li>બીજની માત્રા હેક્ટર દીઠ 15-20 કિલોગ્રામ રાખવી જોઈએ.</li>
                  <li>બે હાર વચ્ચે અંતર 30-45 સેન્ટીમીટર અને બે છોડ વચ્ચે અંતર 10-15 સેન્ટીમીટર રાખો.</li>
                  <li>બીજને 3-4 સેન્ટીમીટર ઊંડાઈએ વાવો.</li>
                  <li>વાવણી પહેલાં બીજને રાઈઝોબિયમ કલ્ચર અને ફૂગનાશક દવાનો પટ આપો. આનાથી છોડમાં નાઇટ્રોજનનું સ્થાપન સારું થાય છે અને રોગોથી રક્ષણ મળે છે.</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. ખાતર અને પોષણ:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>મગનો પાક કઠોળ વર્ગનો હોવાથી તે હવામાંથી નાઇટ્રોજન મેળવી શકે છે. તેમ છતાં, શરૂઆતની વૃદ્ધિ માટે થોડા પ્રમાણમાં ખાતરની જરૂર પડે છે.</li>
                  <li>જમીન પરિક્ષણના આધારે ખાતર આપવું વધુ સારું છે.</li>
                  <li>સામાન્ય રીતે હેક્ટર દીઠ 20 કિલોગ્રામ નાઇટ્રોજન અને 40 કિલોગ્રામ ફોસ્ફરસ વાવણી વખતે પાયાના ખાતર તરીકે આપવું જોઈએ.</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. સિંચાઈ:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>મગના પાકને વધુ પાણીની જરૂર હોતી નથી.</li>
                  <li>વાવણી પછી તરત જ હળવું પિયત આપો.</li>
                  <li>ત્યારબાદ જમીનમાં ભેજની જરૂરિયાત મુજબ 10-15 દિવસના અંતરે પિયત આપતા રહો.</li>
                  <li>ફૂલ આવવાના અને ફળીંગો બેસવાના સમયે પાણીની ખેંચ ન પડવા દો. ઉનાળુ પાકમાં પિયતની જરૂરિયાત વધુ રહે છે.</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. નીંદણ નિયંત્રણ:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>મગના પાકમાં વાવણીના 2-3 અઠવાડિયા સુધી નીંદણ મુક્ત રાખવું જરૂરી છે.</li>
                  <li>હાથથી અથવા આંતરખેડ કરીને નીંદણ દૂર કરી શકાય છે.</li>
                  <li>રાસાયણિક નીંદણનાશક દવાઓનો ઉપયોગ પણ કરી શકાય છે.</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. જીવાત અને રોગ નિયંત્રણ:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>મગના પાકમાં મોલોમશી, સફેદ માખી, પાન ખાનારી ઇયળ અને ફળીંગો કોરી ખાનારી ઇયળ જેવી જીવાતોનો ઉપદ્રવ થઈ શકે છે.</li>
                  <li>તેના નિયંત્રણ માટે યોગ્ય કીટનાશક દવાઓનો ઉપયોગ કરો.</li>
                  <li>પીળો મોઝેક વાયરસ (Yellow Mosaic Virus) મગના પાકનો મુખ્ય રોગ છે. આ રોગ સફેદ માખી દ્વારા ફેલાય છે. તેના નિયંત્રણ માટે રોગ પ્રતિકારક જાતોની વાવણી કરવી અને સફેદ માખીનું નિયંત્રણ કરવું જરૂરી છે.</li>
                  <li>પાનના ટપકા અને ભૂકી છારો જેવા રોગો પણ મગના પાકને નુકસાન પહોંચાડી શકે છે. તેના નિયંત્રણ માટે યોગ્ય ફૂગનાશક દવાઓનો ઉપયોગ કરો.</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. કાપણી:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>જ્યારે 70-80% ફળીંગો પીળી થઈ જાય અને પાંદડા ખરી પડવા લાગે ત્યારે કાપણી કરવી જોઈએ.</li>
                  <li>કાપણીમાં વિલંબ કરવાથી ફળીંગો તૂટી જવાનો અને દાણા ખરી પડવાનો ભય રહે છે.</li>
                  <li>કાપણી કર્યા બાદ છોડને 2-3 દિવસ તડકામાં સૂકવો.</li>
                  <li>ત્યારબાદ થ્રેશરની મદદથી દાણા છૂટા પાડો.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">અગત્યની નોંધ:</h4>
                <p className="text-sm text-yellow-700">આ સામાન્ય મગની ખેતી પદ્ધતિ છે. તમારા વિસ્તારની આબોહવા અને જમીનના પ્રકાર અનુસાર તેમાં થોડો ફેરફાર થઈ શકે છે. વધુ માહિતી માટે તમારા નજીકના કૃષિ સલાહકાર કે કૃષિ વિવિધ સંસ્થાનો સંપર્ક કરવો હિતાવહ છે.</p>
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
              मूंग की खेती की पद्धति
            </h3>
            <Separator className="mb-6" />

            <div className="space-y-4 text-foreground font-devanagari">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. जलवायु और मिट्टी:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>मूंग की खेती के लिए गर्म और शुष्क जलवायु सबसे उपयुक्त होती है।</li>
                  <li>अंकुरण के लिए 25°C और अच्छी वृद्धि के लिए 20-40°C तापमान आदर्श है।</li>
                  <li>60-75 सेमी वार्षिक वर्षा वाले क्षेत्र इसकी खेती के लिए अच्छे होते हैं। फूल और फली बनने के समय अधिक वर्षा हानिकारक हो सकती है।</li>
                  <li>मूंग के लिए अच्छी जल निकासी वाली दोमट या बलुई दोमट मिट्टी सर्वोत्तम होती है।</li>
                  <li>मिट्टी का पीएच मान 6.5 से 7.5 के बीच होना चाहिए।</li>
                  <li>जल जमाव वाली और खारी मिट्टी मूंग की खेती के लिए उपयुक्त नहीं है।</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. खेत की तैयारी:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>खेत को 2-3 बार जुताई करके अच्छी तरह से भुरभुरा बना लें।</li>
                  <li>प्रत्येक जुताई के बाद पाटा अवश्य लगाएं ताकि मिट्टी में नमी बनी रहे।</li>
                  <li>दीमक और अन्य भूमिगत कीटों की रोकथाम के लिए बुवाई से पहले क्विनालफॉस 1.5% चूर्ण 25 किलोग्राम/हेक्टेयर की दर से मिट्टी में मिलाएं।</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. बीज उपचार और बुवाई:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>बुवाई से पहले बीज को फफूंदनाशक (कार्बेंडाजिम या थायरम 2-3 ग्राम/किलो बीज) और कीटनाशक (इमिडाक्लोप्रिड 5 मिली/किलो बीज) से उपचारित करें।</li>
                  <li>बीज को राइजोबियम और पीएसबी (फॉस्फेट सोल्युबिलाइजिंग बैक्टीरिया) कल्चर से भी उपचारित करना लाभकारी होता है।</li>
                  <li>बुवाई का उपयुक्त समय अलग-अलग क्षेत्रों में भिन्न हो सकता है। आमतौर पर खरीफ की फसल के लिए जून का अंतिम सप्ताह से जुलाई का मध्य और गर्मी की फसल के लिए मार्च से अप्रैल का समय सही रहता है।</li>
                  <li>पंक्ति से पंक्ति की दूरी 30-45 सेमी और पौधे से पौधे की दूरी 10 सेमी रखें।</li>
                  <li>बीज को 4-5 सेमी की गहराई पर बोना चाहिए।</li>
                  <li>बीज दर 15-20 किलोग्राम/हेक्टेयर पर्याप्त होती है।</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. खाद एवं उर्वरक:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>मूंग की फसल को अधिक नाइट्रोजन की आवश्यकता नहीं होती क्योंकि यह स्वयं नाइट्रोजन का स्थिरीकरण करती है।</li>
                  <li>बुवाई के समय सिंगल सुपर फॉस्फेट (एसएसपी) 100 किलोग्राम/एकड़ और जिंक सल्फेट 4-6 किलोग्राम/एकड़ देना चाहिए।</li>
                  <li>मिट्टी परीक्षण के आधार पर उर्वरकों का प्रयोग करें।</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. सिंचाई:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>जायद की फसल में बुवाई के तुरंत बाद हल्की सिंचाई करें।</li>
                  <li>फूल आने और फली बनने की अवस्था में सिंचाई आवश्यक है।</li>
                  <li>खेत में जलभराव से बचें।</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. खरपतवार नियंत्रण:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>बुवाई के तुरंत बाद पेंडिमिथालिन 30% का छिड़काव करें।</li>
                  <li>फसल उगने के 15-20 दिन बाद आवश्यकतानुसार खरपतवारनाशी का प्रयोग करें।</li>
                  <li>20-30 दिन बाद एक बार निराई-गुड़ाई करना भी लाभकारी होता है।</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. रोग एवं कीट प्रबंधन:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>पीला मोजेक वायरस: रोग प्रतिरोधी किस्मों का प्रयोग करें और सफेद मक्खी का नियंत्रण करें (इमिडाक्लोप्रिड या थायमेथोक्सम का छिड़काव)। संक्रमित पौधों को उखाड़कर नष्ट कर दें।</li>
                  <li>चूर्णी फफूंदी: कार्बेंडाजिम या घुलनशील गंधक का छिड़काव करें।</li>
                  <li>पत्ती धब्बा रोग: रोगमुक्त बीज का प्रयोग करें और मैकोजेब या कॉपर ऑक्सीक्लोराइड का छिड़काव करें।</li>
                  <li>तना छेदक और फली छेदक: मोनोक्रोटोफॉस या डाइक्लोरवोस का छिड़काव करें।</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. कटाई और उपज:</h4>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>फसल 60-70 दिनों में कटाई के लिए तैयार हो जाती है जब फलियां पीली पड़ने लगें और सूख जाएं।</li>
                  <li>कटाई के बाद फलियों को अच्छी तरह से सुखाकर दाना निकाल लें।</li>
                  <li>औसत उपज 4-5 क्विंटल प्रति एकड़ हो सकती है।</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">विशेष नोट:</h4>
                <p className="text-sm text-yellow-700">यह मूंग की खेती की सामान्य पद्धति है। अपनी विशिष्ट परिस्थितियों के अनुसार इसमें बदलाव किया जा सकता है। यदि आपके कोई और प्रश्न हैं तो बेझिझक पूछें।</p>
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

export default ViratMoong;
