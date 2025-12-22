import companyLogo from "@/assets/company-logo.jpeg";
import okraSeedsImage from "@/assets/okra-seeds.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Okra = () => {
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
            F1 HYBRID OKRA SEEDS - ભીંડા
          </h2>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src={okraSeedsImage}
              alt="Adityaraj F1 Hybrid Okra Seeds Package"
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
              ભીંડા ની ખેતી પદ્ધતિ
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">જમીન:</h2>
                <p>
                  ચાંગલી નિચરા હોણારી, હલકી વાલુમિશ્રિત માતી યોગ્ય આહે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">પેરણીચી વેળ:</h2>
                <p>
                  ગ્રીષ્મ: જૂન-જુલે ઉન્હાળી હંગામ: ફેબ્રુવારી
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">બિયાણે / કિલો હેક્ટર:</h2>
                <p>4-6 લાગવડ, 8-10 પેરણી</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">લાગવડીચે અંતર:</h2>
                <p>માનસૂન: 60 x 30 (સેં.મી.)</p>
                <p>ગ્રીષ્મકાલ: 45 x 20 (સેં.મી.)</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">જમિનીચી તયારી:</h2>
                <p>
                  જમિનીત ગ્રોલવર નાંગરણી કરૂન 2-3 વેળા. પાવસાળ્યાત જમિનીચી ચાંગલી તયાર અસાવી વ પાણ્યાચા નિચરા યોગ્ય પદ્ધતીને ફ્લાવા.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">બિયાણે ઉપચાર:</h2>
                <p>
                  પેરણીપૂવી બિયાણ્યાંવર રાસાયનિક બુરશીનાશકે (ઉદા. થાયરમ કિંવા કાર્બેન્ડાઝિમ 2 તે 3 ગ્રૅમ પ્રતિ કિલો બિયાણે) કિંવા સેંદ્રિય બુરશીનાશકે (ટ્રાયકોડર્મા વ્હિરિડિસ 4 ગ્રૅમ પ્રતિ કિલો બિયાણે) લાવાવે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">પેરણી પદ્ધત:</h2>
                <p>
                  ભેંડીચી પેરણી રાંગેત કિંવા નાંગરાચ્યા નાલ્યાંચ્યા માગે બિયાણે સોડૂન કેલી જાતે. પાવસાળ્યાત ઉતારાવર ત્યાચી પેરણી કરાવી.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">સેંદ્રિય ગ્રાત (તન /કિલો) હેક્ટર:</h2>
                <p>10-12 ટન ગ્રાત</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">રાસાયનિક ગ્રાતે કિલો /હેક્ટર:</h2>
                <p>એકૂણ: 100:50:50 (NPK)</p>
                <p>મુખ્ય ડોસ: 100:50:50 (NPK)</p>
                <p>પરિપૂર્ણતા: 50:00:00 [N]</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">સિંચાઈ:</h2>
                <p>
                  પેરણીનંતર લગેચચ પહિલે સિંચન દિલે જાતે. ઉન્હાળી પિકાંસાઠી 5 તે 8 દિવસ આણિ હિવાળી પિકાંસાઠી 10-12 દિવસાંચ્યા અંતરાને સિંચન થાવે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">તણ કાઢણે:</h2>
                <p>
                  પેરણીનંતર 25 દિવસાંની 2-3 વેળા આંતરશેતી સુરૂ કરાવી વ નંતર 15-20 દિવસાંચ્યા અંતરાને 2-3 વેળા હાતાને તણ કાઢૂન ટાકાવે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">રોગ નિયંત્રણ:</h2>
                <p className="mb-3">
                  <strong>યલો મોઝૅક:</strong> ઉગવણીનંતર 15 વ 30 દિવસાંની ડાયમેથોએટ 0.03% ફવારણી કરૂન રોગવાહક નિયંત્રણ કરતા યેતે. ત્યાવર નિયંત્રણ ઠેવણ્યાસાઠી સર્વ બાધિત ઝાડે ઉખ્રડૂન નષ્ટ કરાવીત
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">કીડ નિયંત્રણ:</h2>
                <p>
                  <strong>માવા તુડતુડે:</strong> ઉગવણીનંતર મૅલૅથિઓન 0.05% વ 25 વ 30 દિવસાંનંતર 0.03% ડાયમેથોએટને ફવારણી કેલ્યાસ માવા તુડતુડે વર પ્રભાવી નિયંત્રણ મિળણ્યાસ મદત હોતે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">કાડણી:</h2>
                <p>
                  સાધારણત: ભેંડીલા જાતીનુસાર 45-50 દિવસાંત ફળે યેણ્યાસ સુરવાત હોતે. દેઠાલા ધક્કૂ ન લાગતા ફિરવૂન ભેંડીચી કાઢણી કેલી જાતે.
                </p>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-accent mb-2">ખાસ નોંધ:</p>
                <p>
                  યા માહિતીચા વાપર કરૂન તુમ્હી તુમચ્યા શેતાત ચી યશસ્વી લાગવડ કરૂ શકતા. અધિક માહિતીસાઠી તુમચ્યા ભાગાતીલ કૃષી સહાય્યક કિંવા કૃષી તજ્ઞાંચા સલ્લા ધ્યા.
                </p>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Hindi Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              भिंडी की खेती पद्धति
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1. जमीन:</h2>
                <p>अच्छी जलनिकासी वाली, हल्की बलुई दोमट मिट्टी उपयुक्त है।</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2. बुवाई का समय:</h2>
                <p>ग्रीष्म: जून-जुलाई, गर्मियों का मौसम: फरवरी</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3. बीज / किलो हेक्टर:</h2>
                <p>4-6 रोपाई, 8-10 बुवाई</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4. रोपाई की दूरी:</h2>
                <p>मानसून: 60 x 30 (सेंमी)</p>
                <p>ग्रीष्म: 45 x 20 (सेंमी)</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5. जमीन की तैयारी:</h2>
                <p>
                  जमीन में गहरी जुताई करके 2-3 बार हल चलाएं। बारिश के मौसम में जमीन अच्छी तरह तैयार होनी चाहिए और पानी की निकासी उचित होनी चाहिए।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6. बीज उपचार:</h2>
                <p>
                  बुवाई से पहले बीजों पर रासायनिक फफूंदनाशक (जैसे थायरम या कार्बेंडाजिम 2-3 ग्राम प्रति किलो बीज) या जैविक फफूंदनाशक (ट्राइकोडर्मा विरिडिस 4 ग्राम प्रति किलो बीज) लगाएं।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7. बुवाई विधि:</h2>
                <p>
                  भिंडी की बुवाई कतार में या नाली बनाकर की जाती है। बारिश के मौसम में उठी हुई क्यारियों पर बुवाई करें।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8. जैविक खाद (टन/हेक्टर):</h2>
                <p>10-12 टन खाद</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9. रासायनिक उर्वरक किलो/हेक्टर:</h2>
                <p>कुल: 100:50:50 (NPK)</p>
                <p>मुख्य खुराक: 100:50:50 (NPK)</p>
                <p>पूर्णता: 50:00:00 [N]</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">10. सिंचाई:</h2>
                <p>
                  बुवाई के तुरंत बाद पहली सिंचाई करें। गर्मियों की फसल के लिए 5-8 दिनों में और सर्दियों की फसल के लिए 10-12 दिनों के अंतर पर सिंचाई करें।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">11. खरपतवार निकालना:</h2>
                <p>
                  बुवाई के 25 दिन बाद 2-3 बार अंतर-खेती शुरू करें और फिर 15-20 दिनों के अंतर पर 2-3 बार हाथ से खरपतवार निकालें।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">12. रोग नियंत्रण:</h2>
                <p>
                  <strong>पीला मोज़ेक:</strong> अंकुरण के 15 और 30 दिन बाद डाइमेथोएट 0.03% का छिड़काव करके रोगवाहक को नियंत्रित करें। सभी प्रभावित पौधों को उखाड़कर नष्ट कर दें।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">13. कीट नियंत्रण:</h2>
                <p>
                  <strong>माहू और तुडतुडे:</strong> अंकुरण के बाद मैलाथियॉन 0.05% और 25-30 दिनों बाद 0.03% डाइमेथोएट का छिड़काव करने से प्रभावी नियंत्रण मिलता है।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">14. कटाई:</h2>
                <p>
                  सामान्यतः भिंडी किस्म के अनुसार 45-50 दिनों में फल आने लगते हैं। डंठल को झटका न लगाते हुए घुमाकर भिंडी की तुड़ाई करें।
                </p>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-accent mb-2">विशेष नोट:</p>
                <p>
                  इस जानकारी का उपयोग करके आप अपने खेत में सफल खेती कर सकते हैं। अधिक जानकारी के लिए अपने क्षेत्र के कृषि सहायक या कृषि विशेषज्ञ से सलाह लें।
                </p>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Marathi Content */}
          <Card className="p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              भेंडी पीक लागवड पद्धत
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">जमीन:</h2>
                <p>चांगली निचरा होणारी, हलकी वालूमिश्रित माती योग्य आहे.</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">पेरणीची वेळ:</h2>
                <p>ग्रीष्म: जून-जुले उन्हाळी हंगाम: फेब्रुवारी</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">बियाणे / किलो हेक्टर:</h2>
                <p>4-6 लागवड, 8-10 पेरणी</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">लागवडीचे अंतर:</h2>
                <p>मानसून: 60 x 30 (सें.मी.)</p>
                <p>ग्रीष्मकाल: 45 x 20 (सें.मी.)</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">जमिनीची तयारी:</h2>
                <p>
                  जमिनीत ग्रोलवर नांगरणी करून 2-3 वेळा. पावसाळ्यात जमिनीची चांगली तयार असावी व पाण्याचा निचरा योग्य पद्धतीने व्हावा.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">बियाणे उपचार:</h2>
                <p>
                  पेरणीपूवी बियाण्यांवर रासायनिक बुरशीनाशके (उदा. थायरम किंवा कार्बेन्डाझिम 2 ते 3 ग्रॅम प्रति किलो बियाणे) किंवा सेंद्रिय बुरशीनाशके (ट्रायकोडर्मा व्हिरिडिस 4 ग्रॅम प्रति किलो बियाणे) लावावे.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">पेरणी पद्धत:</h2>
                <p>
                  भेंडीची पेरणी रांगेत किंवा नांगराच्या नाल्यांच्या मागे बियाणे सोडून केली जाते. पावसाळ्यात उतारावर त्याची पेरणी करावी.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">सेंद्रिय ग्रात (टन /किलो) हेक्टर:</h2>
                <p>10-12 टन ग्रात</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">रासायनिक ग्राते किलो /हेक्टर:</h2>
                <p>एकूण: 100:50:50 (NPK)</p>
                <p>मुख्य डोस: 100:50:50 (NPK)</p>
                <p>परिपूर्णता: 50:00:00 [N]</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">सिंचाई:</h2>
                <p>
                  पेरणीनंतर लगेचच पहिले सिंचन दिले जाते. उन्हाळी पिकांसाठी 5 ते 8 दिवस आणि हिवाळी पिकांसाठी 10-12 दिवसांच्या अंतराने सिंचन व्हावे.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">तण काढणे:</h2>
                <p>
                  पेरणीनंतर 25 दिवसांनी 2-3 वेळा आंतरशेती सुरू करावी व नंतर 15-20 दिवसांच्या अंतराने 2-3 वेळा हाताने तण काढून टाकावे.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">रोग नियंत्रण:</h2>
                <p>
                  <strong>यलो मोझॅक:</strong> उगवणीनंतर 15 व 30 दिवसांनी डायमेथोएट 0.03% फवारणी करून रोगवाहक नियंत्रण करता येते. त्यावर नियंत्रण ठेवण्यासाठी सर्व बाधित झाडे उखडून नष्ट करावीत
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">कीड नियंत्रण:</h2>
                <p>
                  <strong>मावा तुडतुडे:</strong> उगवणीनंतर मॅलॅथिऑन 0.05% व 25 व 30 दिवसांनंतर 0.03% डायमेथोएटने फवारणी केल्यास मावा तुडतुडे वर प्रभावी नियंत्रण मिळण्यास मदत होते.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">काढणी:</h2>
                <p>
                  साधारणत: भेंडीला जातीनुसार 45-50 दिवसांत फळे येण्यास सुरवात होते. देठाला धक्कू न लागता फिरवून भेंडीची काढणी केली जाते.
                </p>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-accent mb-2">खास नोंद:</p>
                <p>
                  या माहितीचा वापर करून तुम्ही तुमच्या शेतात ची यशस्वी लागवड करू शकता. अधिक माहितीसाठी तुमच्या भागातील कृषी सहाय्यक किंवा कृषी तज्ञांचा सल्ला घ्या.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Okra;
