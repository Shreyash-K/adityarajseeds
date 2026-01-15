import companyLogo from "@/assets/company-logo.jpeg";
import researchGuwarImage from "@/assets/research-guwar.jpeg";

const ResearchGuwar = () => {
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
              src={researchGuwarImage}
              alt="Research Guwar - Ratan"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Research Guwar
            </h2>
          </div>

          {/* Gujarati Content */}
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2">
              ગવાર (શાકભાજી) ની ખેતીની પદ્ધતિ
            </h3>
            
            <div className="space-y-4 text-foreground">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. જાતોની પસંદગી</h4>
                <p className="text-sm">શાકભાજી માટે ગવારની કુમળી અને ઓછી રેસાવાળી જાતો પસંદ કરવી જોઈએ. સ્થાનિક રીતે ઉપલબ્ધ સારી ગુણવત્તાવાળી જાતો આ માટે યોગ્ય છે.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. આબોહવા અને જમીન</h4>
                <p className="text-sm">ગવાર ગરમ અને ભેજવાળું વાતાવરણ પસંદ કરે છે. સારી નિતારવાળી ગોરાડુ જમીન આ માટે ઉત્તમ છે. જમીનનું pH મૂલ્ય 7.0 થી 8.5 ની વચ્ચે હોવું જોઈએ.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. વાવણીનો સમય</h4>
                <p className="text-sm">ગુજરાતમાં શાકભાજી માટે ગવારની વાવણી મુખ્યત્વે બે વખત કરવામાં આવે છે:</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>ચોમાસુ પાક: જૂન-જુલાઈ મહિનો</li>
                  <li>શિયાળુ પાક: સપ્ટેમ્બર - ઓક્ટોબર મહિનો (હળવા શિયાળાવાળા વિસ્તારોમાં)</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. બીજની માવજત અને વાવણી</h4>
                <p className="text-sm">બીજને વાવતા પહેલા થાયરમ અથવા કાર્બેન્ડાઝિમ જેવી ફૂગનાશક દવાથી માવજત કરવી જોઈએ. હાર વચ્ચે 45-60 સેમી અને છોડ વચ્ચે 30-45 સેમીનું અંતર રાખવું જોઈએ. બીજને 2-3 સેમીની ઊંડાઈમાં વાવવા જોઈએ. પ્રતિ હેક્ટર 15-20 કિલો બીજની જરૂર પડે છે.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. ખાતર અને પોષણ</h4>
                <p className="text-sm">જમીન પરીક્ષણના આધારે ખાતરનો ઉપયોગ કરવો જોઈએ. સામાન્ય રીતે, વાવણી સમયે 20 કિલો નાઇટ્રોજન અને 40 કિલો ફોસ્ફરસ પ્રતિ હેક્ટર આપવું જોઈએ. પાકની વૃદ્ધિ દરમિયાન જરૂર જણાય તો નાઇટ્રોજનનો બીજો હપ્તો આપી શકાય છે.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. સિંચાઈ</h4>
                <p className="text-sm">શાકભાજીના પાકને નિયમિત ભેજની જરૂર હોય છે, ખાસ કરીને ફૂલ અને શીંગો વિકાસના સમયે. જમીનના પ્રકાર અને હવામાનના આધારે 8-10 દિવસના અંતરે સિંચાઈ કરવી જોઈએ. વધુ પડતી સિંચાઈ ટાળવી જોઈએ.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. નીંદણ નિયંત્રણ</h4>
                <p className="text-sm">વાવણીના 20-25 દિવસ પછી પ્રથમ નીંદણ અને ત્યારબાદ જરૂર મુજબ નીંદણ કરવું જોઈએ. રાસાયણિક નીંદણ નિયંત્રણ માટે પેન્ડિમેથાલિન અથવા ફ્લુક્લોરાલિન જેવી દવાઓનો ઉપયોગ કરી શકાય છે.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. જીવાત અને રોગો</h4>
                <p className="text-sm">શાકભાજીના ગવારમાં મોલો, સફેદ માખી, પાન કથીરી અને શીંગો કોરનાર જેવી જીવાતોનો ઉપદ્રવ થઈ શકે છે. પાવડરી માઇલ્ડ્યુ અને બેક્ટેરિયલ બ્લાઇટ જેવા રોગો પણ જોવા મળી શકે છે. જીવાતો અને રોગોના નિયંત્રણ માટે યોગ્ય જંતુનાશક અને ફૂગનાશક દવાઓનો ઉપયોગ કરવો જોઈએ. જૈવિક નિયંત્રણ પદ્ધતિઓનો ઉપયોગ કરવો વધુ સારું છે.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">9. લણણી</h4>
                <p className="text-sm">શાકભાજી માટે ગવારની લણણી ત્યારે કરવી જોઈએ જ્યારે શીંગો કુમળી હોય અને તેમાં બીજ વિકાસ પામ્યા ન હોય. સામાન્ય રીતે વાવણીના 40-50 દિવસ પછી લણણી શરૂ થઈ જાય છે. સારી ગુણવત્તાવાળી શીંગો માટે નિયમિત અંતરાલે 2-3 દિવસમાં લણણી કરવી જોઈએ.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">10. ઉત્પાદન</h4>
                <p className="text-sm">સારી ખેતી પદ્ધતિઓ દ્વારા શાકભાજીના ગવારનું પ્રતિ હેક્ટર 80-120 ક્વિન્ટલ સુધી ઉત્પાદન મળી શકે છે, જાત અને વ્યવસ્થાપન પર આધાર રાખે છે.</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">વધારાની ટીપ્સ</h4>
                <p className="text-sm">પાકની ફેરબદલી કરવાથી જમીનની ફળદ્રુપતા જળવાઈ રહે છે અને રોગોનું પ્રમાણ ઘટે છે. ગુણવત્તાયુક્ત ઉત્પાદન માટે યોગ્ય સમયે ખાતર અને પાણી આપવું ખૂબ જ જરૂરી છે. સ્થાનિક કૃષિ નિષ્ણાતોની સલાહ લેવી ફાયદાકારક સાબિત થઈ શકે છે.</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">ખાસ નોંધ:</h4>
                <p className="text-sm text-yellow-700">આ એક સામાન્ય પદ્ધતિ છે. સ્થાનિક કૃષિ વિભાગ પાસેથી વિશિષ્ટ સલાહ અને નવીનતમ માહિતી મેળવવી હંમેશાં ઉપયોગી છે. જો આપને કોઈ વધુ પ્રશ્નો હોય તો નિઃસંકોચ પૂછી શકો છો.</p>
              </div>
            </div>
          </div>

          {/* Hindi Content */}
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2">
              ग्वार (सब्जी) खेती की पद्धति
            </h3>
            
            <div className="space-y-4 text-foreground">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">1. किस्मों का चयन</h4>
                <p className="text-sm">सब्जी के लिए ग्वार की कोमल और कम रेशे वाली किस्में चुननी चाहिए। स्थानीय रूप से उपलब्ध अच्छी गुणवत्ता वाली किस्में इसके लिए उपयुक्त हैं।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">2. जलवायु और मिट्टी</h4>
                <p className="text-sm">ग्वार गर्म और आर्द्र जलवायु पसंद करता है। अच्छी जल निकासी वाली बलुई दोमट मिट्टी इसके लिए उत्तम है। मिट्टी का pH मान 7.0 से 8.5 के बीच होना चाहिए।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">3. बुवाई का समय</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>खरीफ की फसल: जून-जुलाई का महीना</li>
                  <li>रबी की फसल: सितंबर-अक्टूबर का महीना (हल्के सर्दियों वाले क्षेत्रों में)</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">4. बीज उपचार और बुवाई</h4>
                <p className="text-sm">बीज को बोने से पहले थायरम या कार्बेन्डाजिम जैसी फफूंदनाशक दवा से उपचारित करना चाहिए। पंक्तियों के बीच 45-60 सेमी और पौधों के बीच 30-45 सेमी की दूरी रखनी चाहिए। बीज को 2-3 सेमी की गहराई पर बोना चाहिए। प्रति हेक्टेयर 15-20 किलोग्राम बीज की आवश्यकता होती है।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">5. खाद और पोषण</h4>
                <p className="text-sm">मिट्टी परीक्षण के आधार पर उर्वरकों का उपयोग करना चाहिए। सामान्य तौर पर, बुवाई के समय 20 किलोग्राम नाइट्रोजन और 40 किलोग्राम फास्फोरस प्रति हेक्टेयर देना चाहिए। फसल की वृद्धि के दौरान आवश्यकतानुसार नाइट्रोजन की दूसरी खुराक दी जा सकती है।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">6. सिंचाई</h4>
                <p className="text-sm">सब्जी की फसल को नियमित नमी की आवश्यकता होती है, खासकर फूल और फली विकास के समय। मिट्टी के प्रकार और मौसम के आधार पर 8-10 दिनों के अंतराल पर सिंचाई करनी चाहिए। अत्यधिक सिंचाई से बचना चाहिए।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">7. खरपतवार नियंत्रण</h4>
                <p className="text-sm">बुवाई के 20-25 दिनों के बाद पहली निराई और उसके बाद आवश्यकतानुसार निराई करनी चाहिए। रासायनिक खरपतवार नियंत्रण के लिए पेंडीमेथालिन या फ्लूक्लोरालिन जैसी दवाओं का उपयोग किया जा सकता है।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">8. कीट और रोग</h4>
                <p className="text-sm">सब्जी के ग्वार में एफिड्स, सफेद मक्खी, माइट्स और फली छेदक जैसे कीटों का प्रकोप हो सकता है। पाउडरी मिल्ड्यू और बैक्टीरियल ब्लाइट जैसे रोग भी देखे जा सकते हैं। कीटों और रोगों के नियंत्रण के लिए उचित कीटनाशक और फफूंदनाशक दवाओं का उपयोग करना चाहिए। जैविक नियंत्रण विधियों का उपयोग करना बेहतर है।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">9. कटाई</h4>
                <p className="text-sm">सब्जी के लिए ग्वार की कटाई तब करनी चाहिए जब फलियाँ कोमल हों और उनमें बीज विकसित न हुए हों। सामान्य तौर पर बुवाई के 40-50 दिनों के बाद कटाई शुरू हो जाती है। अच्छी गुणवत्ता वाली फलियों के लिए नियमित अंतराल पर 2-3 दिनों में कटाई करनी चाहिए।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">10. उपज</h4>
                <p className="text-sm">अच्छी खेती की विधियों द्वारा सब्जी के ग्वार की प्रति हेक्टेयर 80-120 क्विंटल तक उपज मिल सकती है, जो किस्म और प्रबंधन पर निर्भर करती है।</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">अतिरिक्त सुझाव</h4>
                <p className="text-sm">फसल चक्र अपनाने से मिट्टी की उर्वरता बनी रहती है और रोगों का प्रकोप कम होता है। गुणवत्तापूर्ण उत्पादन के लिए उचित समय पर खाद और पानी देना बहुत जरूरी है। स्थानीय कृषि विशेषज्ञों की सलाह लेना फायदेमंद साबित हो सकता है।</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">विशेष नोट:</h4>
                <p className="text-sm text-yellow-700">यह खेती की सामान्य पैकेज ऑफ प्रैक्टिसेज है। स्थानीय परिस्थितियों, मिट्टी के प्रकार और मौसम के अनुसार इसमें कुछ बदलाव किए जा सकते हैं। नवीनतम जानकारी और विशिष्ट सलाह के लिए अपने क्षेत्र के कृषि विशेषज्ञ या कृषि विश्वविद्यालय से संपर्क करें।</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Adityaraj Agri Genetics Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResearchGuwar;
