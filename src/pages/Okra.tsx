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
              Package of Practices - Gujarati
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1. જમીનની તૈયારી</h2>
                <p>
                  વાવેતરના 20-25 દિવસ પહેલા એકર 10-12 ટન ખાતર ઉમેરીને જમીન તૈયાર કરો અને અંતરધ્યાનમાં રાખીને પથારી બનાવો. નાઇટ્રોજન ફિક્સિંગ, ફોસ્ફરસ દ્રાવ્ય અને પોટેશિયમ જેવા કાર્બનિક પદાર્થોનો ઉપયોગ કરી શકાય છે અને ટ્રાઇકોડર્મા અને સ્યુડોમોનાસ જેવા કાર્બનિક પદાર્થો જે બેક્ટેરિયાને સક્રિય કરે છે તેનો ઉપયોગ કરી શકાય છે.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2. બીજ દર અને પદ્ધતિ</h2>
                <p>
                  સરેરાશ ૨.૫-૩.૫ કિગ્રા/એકર (રોપાના અંતર અને પ્રદેશના આધારે બદલાય છે), પદ્ધતિ - સીધી વાવણી
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3. અંતર</h2>
                <p>રવી - ૪૫ સેમી × ૧૫ સેમી (હરોળથી હરોળ × બીજથી બીજ)</p>
                <p>ખરીફ - ૪૫ સેમી × ૩૦ સેમી (હરોળથી હરોળ × બીજથી બીજ)</p>
                <p>પ્રાદેશિક પ્રથા અનુસાર બદલાય છે.</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4. પોષક તત્વોનું સંચાલન</h2>
                <p>
                  NPK ની જરૂરિયાત: 60:40:40 NPK કિગ્રા/એકર. 30% નાઇટ્રોજન અને 50% ફોસ્ફરસ અને 25% પોટેશિયમ મૂળભૂત માત્રા તરીકે આપવામાં આવે છે. બાકીના 40% નાઇટ્રોજન અને 50% ફોસ્ફરસ અને 25% પોટેશિયમ 25-30 દિવસના અંતરાલમાં પ્રથમ ટોપડ્રેસિંગ તરીકે આપવામાં આવે છે. બાકીના 30% નાઇટ્રોજન અને 25% પોટેશિયમ લગભગ 45-50 દિવસના અંતરાલમાં બીજા ટોપડ્રેસિંગ તરીકે આપવામાં આવે છે.
                </p>
                <p className="mt-2 text-muted-foreground">
                  (સંતુલિત પ્રાથમિક, ગૌણ અને સૂક્ષ્મ પોષકતત્ત્વોનો ઉપયોગ ફળના સેટિંગ દરમિયાન અને પછી કરી શકાય છે જેના પરિણામે છોડની ગુણવત્તા અને ફળની માત્રામાં વધારો થાય છે.)
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5. જીવાત અને રોગ વ્યવસ્થાપન</h2>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">સર્કોસ્પોરા પાંદડાના ટપકાં:</h3>
                    <p className="text-muted-foreground">હેક્સાકોનાઝોલ 4% + ઝિનેબ 68% WP, પ્રોપીકોનાઝોલ 25%, કાર્બેન્ડાઝીમ 12% + મેન્કોઝેબ 63% WP, ક્લોરોથાલોનિલ 75% WP.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">પાવડરી માઇલ્ડ્યુ:</h3>
                    <p className="text-muted-foreground">ટેબુકોનાઝોલ 50% + ટ્રાઇફ્લોક્સીસ્ટ્રોબિન 25% WG, મેટિરામ 55% + પાયરાક્લોસ્ટ્રોબિન 5% WG, માયક્લોબ્યુટેનિલ 10% WP, ફ્લુઓપાયરામ 17.7% + ટેબુકોનાઝોલ 17.7%.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">વર્ટિસિલિયમ વિલ્ટ:</h3>
                    <p className="text-muted-foreground">જમીનને COC 50% WP, કાર્બેન્ડાઝીમ 25% + મેન્કોઝેબ 50%, થિયોફેનેટ મિથાઈલ 70% WP થી ભીંજવો. જમીનની તૈયારી દરમિયાન જૈવિક નિયંત્રણ એજન્ટોનો ઉપયોગ માટીજન્ય રોગાણુઓના ઉપદ્રવને ઘટાડવામાં મદદ કરે છે.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">કળી અને ફળ ખાનાર ઈયળ:</h3>
                    <p className="text-muted-foreground">બ્રોફ્લેનાઇલાઇડ 20% SC, ક્લોરેન્ટ્રાનિલિપ્રોલ 18.50% SC, સાયન્ટ્રેનિલિપ્રોલ 10.26% OD, સાયપરમેથ્રિન 25% EC, ડેલ્ટામેથ્રિન 2.8% EC, એમામેક્ટિન બેન્ઝોએટ 05% SG, ફેનવેલરેટ 20% EC, ફ્લુબેન્ડિયામાઇડ 39.35% SC, પાયરિડાલિલ 10% EC, સ્પાઈનેટોરમ 11.70% SC, ક્લોરેન્ટ્રાનિલિપ્રોલ 09.30% + લેમ્બડા-સાયહેલોથ્રિન 04.60% ZC.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">સફેદ માખી:</h3>
                    <p className="text-muted-foreground">ક્લોથિઆનિડિન ૦.૫% GR, સાયન્ટ્રાનિલિપ્રોલ ૧૦.૨૬% OD, ડાયફેન્થયુરોન ૫૦% WP, ફ્લોનિકામિડ ૫૦% WG, ફ્લુપાયરાડિફ્યુરોન ૧૭.૦૯% SL, પાયરિપ્રોક્સીફેન ૧૦% EC, ટોલ્ફેનપાયરાડ ૧૫% EC, પાયરિપ્રોક્સીફેન ૦૫% + ફેનપ્રોપેથ્રિન ૧૫% EC.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">એફિડ:</h3>
                    <p className="text-muted-foreground">એસેટામિપ્રિડ ૨૦% SP, સાયન્ટ્રાનિલિપ્રોલ ૧૦.૨૬% OD, ફ્લોનિકામિડ ૫૦% WG, ઇમિડાક્લોપ્રિડ ૭૦% WS, સ્પિરોટેટ્રામેટ ૧૫.૩૧% OD, ટોલ્ફેનપાયરાડ ૧૫% EC.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">લીફહોપર્સ / જેસીડ્સ:</h3>
                    <p className="text-muted-foreground">બ્રોફ્લાનિલિડ 20% SC, ક્લોથિઆનિડિન 0.5% GR, સાયપરમેથ્રિન 25% EC, ડાયફેન્થયુરોન 50% WP, ફેનવેલરેટ 20% EC, ફ્લોનિકામિડ 50% WG, ફ્લોપાયરાડિફ્યુરોન 17.09%, ટોલ્ફેનપાયરાડ 15% EC, 12.6% થિઆમેથોક્સામ + 9.5% ZC લેમ્બડા-સાયહેલોથ્રિન.</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-accent mb-2">ખાસ નોંધ:</p>
                <p>
                  આ માહિતીનો વાપર કરીને તમે તમારા ખેતરમાં સફળ લાગવડ કરી શકો છો. અધિક માહિતી માટે તમારા વિસ્તારના કૃષિ સહાયક કે કૃષિ તજ્ઞનો સલ્લો લો.
                </p>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Hindi Content */}
          <Card className="p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              Package of Practices - Hindi
            </h1>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1. भूमि की तैयारी</h2>
                <p>
                  बोने से 20-25 दिन पहले हर एकड़ में 10-12 टन खाद डालकर मिट्टी तैयार करें और दूरी का ध्यान रखते हुए क्यारियां बनाएं। नाइट्रोजन फिक्सिंग, फॉस्फोरस घुलनशील और पोटेशियम जैसे ऑर्गेनिक मैटर का इस्तेमाल किया जा सकता है और ट्राइकोडर्मा और स्यूडोमोनास जैसे ऑर्गेनिक मैटर जो बैक्टीरिया को एक्टिवेट करते हैं, उनका इस्तेमाल किया जा सकता है।
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2. बीज दर एवं विधि</h2>
                <p>
                  औसत 2.5-3.5 kg/एकड़ (पौधों के बीच की दूरी और इलाके के हिसाब से अलग-अलग), तरीका - सीधी बुवाई
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3. अंतर</h2>
                <p>रबी - 45 सेमी × 15 सेमी (पंक्ति से पंक्ति × बीज से बीज)</p>
                <p>खरीफ - 45 सेमी × 30 सेमी (पंक्ति से पंक्ति × बीज से बीज)</p>
                <p>क्षेत्रीय अभ्यास के अनुसार भिन्न होता है।</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4. पोषक तत्व प्रबंधन</h2>
                <p>
                  NPK की ज़रूरत: 60:40:40 NPK kg/एकड़। 30% नाइट्रोजन और 50% फॉस्फोरस और 25% पोटैशियम बेसल डोज़ के तौर पर दिया जाता है। बचा हुआ 40% नाइट्रोजन और 50% फॉस्फोरस और 25% पोटैशियम 25-30 दिनों के गैप पर पहली टॉपड्रेसिंग के तौर पर दिया जाता है। बचा हुआ 30% नाइट्रोजन और 25% पोटैशियम लगभग 45-50 दिनों के गैप पर दूसरी टॉपड्रेसिंग के तौर पर दिया जाता है।
                </p>
                <p className="mt-2 text-muted-foreground">
                  (बैलेंस्ड प्राइमरी, सेकेंडरी और माइक्रोन्यूट्रिएंट्स का इस्तेमाल फल लगने के दौरान और बाद में किया जा सकता है, जिससे पौधे की क्वालिटी और फल की क्वांटिटी बढ़ती है।)
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5. कीट एवं रोग प्रबंधन</h2>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">सर्कोस्पोरा लीफ स्पॉट:</h3>
                    <p className="text-muted-foreground">हेक्साकोनाज़ोल 4% + ज़िनेब 68% WP, प्रोपिकोनाज़ोल 25%, कार्बेन्डाज़िम 12% + मैन्कोज़ेब 63% WP, क्लोरोथेलोनिल 75% WP.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">पाउडरी मिल्ड्यू:</h3>
                    <p className="text-muted-foreground">टेबुकोनाज़ोल 50% + ट्राइफ्लोक्सीस्ट्रोबिन 25% WG, मेटिराम 55% + पाइराक्लोस्ट्रोबिन 5% WG, माइक्लोबुटानिल 10% WP, फ्लूओपाइराम 17.7% + टेबुकोनाज़ोल 17.7%.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">वर्टिसिलियम विल्ट:</h3>
                    <p className="text-muted-foreground">मिट्टी को COC 50% WP, कार्बेन्डाज़िम 25% + मैन्कोज़ेब 50%, थियोफैनेट मिथाइल 70% WP से गीला करें। मिट्टी तैयार करते समय बायोलॉजिकल कंट्रोल एजेंट का इस्तेमाल करने से मिट्टी से होने वाले पैथोजन्स का असर कम करने में मदद मिलेगी।</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">कली और फल छेदक:</h3>
                    <p className="text-muted-foreground">ब्रोफ्लैननलाइड 20% SC, क्लोरेंट्रानिलिप्रोले 18.50% SC, सायन्ट्रानिलिप्रोले 10.26% OD, साइपरमेथ्रिन 25% EC, डेल्टामेथ्रिन 2.8% EC, इमामेक्टिन बेंजोएट 05% SG, फेनवालेरेट 20% EC, फ्लूबेंडियामाइड 39.35% SC, पाइरीडालिल 10% EC, स्पिनेटोरम 11.70% SC, क्लोरेंट्रानिलिप्रोले 09.30% + लैम्ब्डा-साइहालोथ्रिन 04.60% ZC.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">सफेद मक्खी:</h3>
                    <p className="text-muted-foreground">क्लोथियानिडिन 0.5% GR, सायन्ट्रानिलिप्रोल 10.26% OD, डाइफेंथ्यूरोन 50% WP, फ्लोनिकैमिड 50% WG, फ्लूपाइराडिफ्यूरोन 17.09% SL, पाइरीप्रोक्सीफेन 10% EC, टोल्फेनपाइराड 15% EC, पाइरीप्रोक्सीफेन 05% + फेनप्रोपेथ्रिन 15% EC.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">एफिड:</h3>
                    <p className="text-muted-foreground">एसिटामिप्रिड 20% SP, सायन्ट्रानिलिप्रोल 10.26% OD, फ्लोनिकैमिड 50% WG, इमिडाक्लोप्रिड 70% WS, स्पिरोटेट्रामेट 15.31% OD, टोल्फेनपाइराड 15% EC.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">लीफहॉपर / जैसिड्स:</h3>
                    <p className="text-muted-foreground">ब्रोफ्लैनिलिड 20% SC, क्लोथियानिडिन 0.5% GR, साइपरमेथ्रिन 25% EC, डाइफेंथ्यूरोन 50% WP, फेनवालेरेट 20% EC, फ्लोनिकैमिड 50% WG, फ्लोपाइराडिफ्यूरोन 17.09%, टोल्फेनपाइराड 15% EC, 12.6% थियामेथोक्सम + 9.5% ZC लैम्ब्डा-साइहालोथ्रिन.</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-accent mb-2">विशेष नोट:</p>
                <p>
                  इस जानकारी का उपयोग करके आप अपने खेत में सफल खेती कर सकते हैं। अधिक जानकारी के लिए अपने क्षेत्र के कृषि सहायक या कृषि विशेषज्ञ से सलाह लें।
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
