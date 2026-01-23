import companyLogo from "@/assets/company-logo.jpeg";
import researchCowpeaImage from "@/assets/research-cowpea.jpeg";

const ResearchCowpea = () => {
  return (
    <div className="min-h-screen bg-background">
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
                <p className="mt-1.5">Customer Care: +91 99254 41144</p>
                <p>Email: adityarajagrigenetics@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Product Title and Image */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">RESEARCH COWPEA - ચોળા</h2>
          <div className="flex justify-center mb-8">
            <img 
              src={researchCowpeaImage} 
              alt="Research Cowpea MADHU Seeds Package" 
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Gujarati Content */}
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Package of Practices (ગુજરાતી)</h3>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">1. જમીનની તૈયારી</h4>
              <p>વાવેતરના 20-25 દિવસ પહેલા 1 એકર 10-12 ટન ખાતર ઉમેરીને જમીન તૈયાર કરો અને અંતરધ્યાનમાં રાખીને પથારી બનાવો. નાઇટ્રોજન ફિક્સિંગ, ફોસ્ફરસ દ્રાવ્ય અને પોટેશિયમ જેવા કાર્બનિક પદાર્થોનો ઉપયોગ કરી શકાય છે અને ટ્રાઇકોડર્મા અને સ્યુડોમોનાસ જેવા કાર્બનિક પદાર્થોનો ઉપયોગ કરી શકાય છે.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">2. બીજ દર અને પદ્ધતિ</h4>
              <ul className="list-disc list-inside ml-4">
                <li>ઝાડીની જાત: 20-25 કિગ્રા/હેક્ટર</li>
                <li>વેલાવાળી જાત: 10-12 કિગ્રા/હેક્ટર</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">3. અંતર</h4>
              <ul className="list-disc list-inside ml-4">
                <li>ઝાડીની જાત: 45 સેમી × 20 સેમી (હરોળથી હરોળ × બીજથી બીજ)</li>
                <li>વેલાવાળી જાત: 75 સેમી × 30 સેમી (હરોળથી હરોળ × બીજથી બીજ)</li>
              </ul>
              <p className="mt-2 text-sm">પ્રાદેશિક પ્રથા અનુસાર બદલાય છે.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">4. પોષક તત્વોનું સંચાલન</h4>
              <p>NPK ની જરૂરિયાત: 20:40:20 NPK કિગ્રા/હેક્ટર. 30% નાઇટ્રોજન અને 50% ફોસ્ફરસ અને 25% પોટેશિયમ મૂળભૂત માત્રા તરીકે આપવામાં આવે છે. બાકીના 30% નાઇટ્રોજન અને 25% પોટેશિયમ લગભગ 45-50 દિવસના અંતરાલમાં બીજા ટોપડ્રેસિંગ તરીકે આપવામાં આવે છે.</p>
              <p className="mt-2 text-sm italic">(સંતુલિત પ્રાથમિક, ગૌણ અને સૂક્ષ્મ પોષકતત્ત્વોનો ઉપયોગ ફળના સેટિંગ દરમિયાન અને પછી કરી શકાય છે જેના પરિણામે છોડની ગુણવત્તા અને ફળની માત્રામાં વધારો થાય છે).</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">5. જીવાત અને રોગ વ્યવસ્થાપન</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">સર્કોસ્પોરા પાંદડાના ટપકાં:</p>
                  <p className="text-sm">હેક્સાકોનાઝોલ 4% + ઝિનેબ 68% WP, ટોપીકોનાઝોલ 25%, કાર્બેન્ડાઝીમ 12% + મેન્કોઝેબ 63% WP, ક્લોરોથાલોનિલ 75% WP.</p>
                </div>
                <div>
                  <p className="font-medium">પાવડરી માઇલ્ડ્યુ:</p>
                  <p className="text-sm">ટેબુકોનાઝોલ 50% + ટ્રાઇફ્લોક્સીસ્ટ્રોબિન 25% WG, મેટિરામ 55% + પાયરાક્લોસ્ટ્રોબિન 5% WG, માયક્લોબ્યુટેનિલ 10% WP.</p>
                </div>
                <div>
                  <p className="font-medium">વર્ટિસિલિયમ વિલ્ટ:</p>
                  <p className="text-sm">જમીનને COC 50% WP, કાર્બેન્ડાઝીમ 25% + મેન્કોઝેબ 50%, થિયોફેનેટ મિથાઈલ 70% WP થી ભીંજવી દો.</p>
                </div>
                <div>
                  <p className="font-medium">કળી અને ફળ ખાનાર ઈયળ:</p>
                  <p className="text-sm">બ્રોફ્લેનાઇલાઇડ 20% SC, ક્લોરેન્ટ્રાનિલિપ્રોલ 18.50% SC, સાયન્ટ્રેનિલિપ્રોલ 10.26% OD, સાયપરમેથ્રિન 25% EC, ડેલ્ટામેથ્રિન 2.8% EC.</p>
                </div>
                <div>
                  <p className="font-medium">સફેદ માખી:</p>
                  <p className="text-sm">ક્લોથિઆનિડીન 0.5% GR, સાયન્ટ્રાનિલિપ્રોલ 10.26% OD, ડાયફેન્થ્યુરોન 50% WP, ફ્લોનિકામિડ 50% WG.</p>
                </div>
                <div>
                  <p className="font-medium">એફિડ:</p>
                  <p className="text-sm">એસેટામિપ્રિડ 20% SP, સાયન્ટ્રાનિલિપ્રોલ 10.26% OD, ફ્લોનિકામિડ 50% WG, ઇમિડાક્લોપ્રિડ 70% WS.</p>
                </div>
                <div>
                  <p className="font-medium">લીફહોપર્સ/જેસિડ્સ:</p>
                  <p className="text-sm">બ્રોફ્લાનિલિડ 20% SC, ક્લોથિઆનિડીન 0.5% GR, સાયપરમેથ્રિન 25% EC, ડાયફેનથિયુરોન 50% WP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hindi Content */}
        <div className="bg-orange-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-orange-800 mb-4">Package of Practices (हिंदी)</h3>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">1. भूमि की तैयारी</h4>
              <p>बोने से 20-25 दिन पहले हर एकड़ में 10-12 टन खाद डालकर मिट्टी तैयार करें और क्यारियां बनाएं। नाइट्रोजन फिक्सिंग, फॉस्फोरस घुलनशील और पोटेशियम जैसे ऑर्गेनिक मैटर का इस्तेमाल किया जा सकता है और ट्राइकोडर्मा और स्यूडोमोनास जैसे ऑर्गेनिक मैटर जो बैक्टीरिया को एक्टिवेट करते हैं, उनका इस्तेमाल किया जा सकता है।</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">2. बीज दर एवं विधि</h4>
              <ul className="list-disc list-inside ml-4">
                <li>झाडी किस्म: 20-25 किग्रा/हेक्टर</li>
                <li>बेल किस्म: 10-12 किग्रा/हेक्टर</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">3. अंतर</h4>
              <ul className="list-disc list-inside ml-4">
                <li>झाडी किस्म: 45 सेमी × 20 सेमी (पंक्ति से पंक्ति × बीज से बीज)</li>
                <li>बेल किस्म: 75 सेमी × 30 सेमी (पंक्ति से पंक्ति × बीज से बीज)</li>
              </ul>
              <p className="mt-2 text-sm">क्षेत्रीय अभ्यास के अनुसार भिन्न होता है।</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">4. पोषक तत्व प्रबंधन</h4>
              <p>NPK की जरूरत: 20:40:20 NPK किग्रा/हेक्टर। 30% नाइट्रोजन और 50% फॉस्फोरस और 25% पोटैशियम बेसल डोज़ के तौर पर दिया जाता है। बचा हुआ 30% नाइट्रोजन और 25% पोटैशियम लगभग 45-50 दिनों के गैप पर दिया जाता है।</p>
              <p className="mt-2 text-sm italic">(बैलेंस्ड प्राइमरी, सेकेंडरी और माइक्रोन्यूट्रिएंट्स का इस्तेमाल फल लगने के दौरान और बाद में किया जा सकता है, जिससे पौधे की क्वालिटी और फल की क्वांटिटी बढ़ती है)।</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">5. कीट एवं रोग प्रबंधन</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">सर्कोस्पोरा लीफ स्पॉट:</p>
                  <p className="text-sm">हेक्साकोनाज़ोल 4% + जिनेब 68% WP, टोपिकोनाज़ोल 25%, कार्बेन्डाजिम 12% + मैन्कोजेब 63% WP, क्लोरोथेलोनिल 75% WP.</p>
                </div>
                <div>
                  <p className="font-medium">पाउडरी मिल्ड्यू:</p>
                  <p className="text-sm">टेबुकोनाज़ोल 50% + ट्राइफ्लोक्सीस्ट्रोबिन 25% WG, मेटिराम 55% + पाइराक्लोस्ट्रोबिन 5% WG, माइक्लोब्युटानिल 10% WP.</p>
                </div>
                <div>
                  <p className="font-medium">वर्टिसिलियम विल्ट:</p>
                  <p className="text-sm">मिट्टी को COC 50% WP, कार्बेन्डाजिम 25% + मैन्कोब 50%, थियोफैनेट मिथाइल 70% WP से गीला करें।</p>
                </div>
                <div>
                  <p className="font-medium">कली और फल छेदक:</p>
                  <p className="text-sm">ब्रोफ्लैनिलाइड 20% SC, क्लोरेंट्रानिलिप्रोले 18.50% SC, सायानिलिप्रोले 10.26% OD, साइपरमेथ्रिन 25% EC, डेल्टामेथ्रिन 2.8% EC.</p>
                </div>
                <div>
                  <p className="font-medium">सफेद मक्खी:</p>
                  <p className="text-sm">क्लोथियानिडीन 0.5% GR, सायन्ट्रानिलिप्रोल 10.26% OD, डाइफेंथ्यूरोन 50% WP, फ्लोनिकैमिड 50% WG.</p>
                </div>
                <div>
                  <p className="font-medium">एफिड:</p>
                  <p className="text-sm">एसिटामिप्रिड 20% SP, सायन्ट्रानिलिप्रोल 10.26% OD, फ्लोनिकैमिड 50% WG, इमिडाक्लोप्रिड 70% WS.</p>
                </div>
                <div>
                  <p className="font-medium">लीफहॉपर/जैसिड्स:</p>
                  <p className="text-sm">ब्रोफ्लानिलिड 20% SC, क्लोथियानिडीन 0.5% GR, साइपरमेथ्रिन 25% EC, डाइफेंथियूरोन 50% WP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-800 font-medium">વિશેષ નોંધ / विशेष नोट:</p>
          <p className="text-yellow-700 text-sm mt-2">
            ઉપરોક્ત માહિતી માત્ર માર્ગદર્શન માટે છે. કૃપા કરીને સ્થાનિક કૃષિ નિષ્ણાતોની સલાહ લો.
          </p>
          <p className="text-yellow-700 text-sm">
            उपरोक्त जानकारी केवल मार्गदर्शन के लिए है। कृपया स्थानीय कृषि विशेषज्ञों से सलाह लें।
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Adityaraj Agri Genetics Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResearchCowpea;
