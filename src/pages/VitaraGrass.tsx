import companyLogo from "@/assets/company-logo.jpeg";
import vitaraGrassSeeds from "@/assets/vitara-grass-seeds.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VitaraGrass = () => {
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

      {/* Product Title */}
      <div className="bg-secondary py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-devanagari">
            Hybrid Surgam Vitara Grass - Black Beri
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            હાઈબ્રીડ સરગમ વિટારા ગ્રાસ - બ્લેક બેરી | हाइब्रिड सरगम विटारा ग्रास - ब्लैक बेरी
          </p>
        </div>
      </div>

      {/* Seed Packet Image */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-center">
          <img 
            src={vitaraGrassSeeds} 
            alt="Hybrid Surgam Vitara Grass Black Beri Seeds Package" 
            className="max-w-sm w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        
        {/* Gujarati Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary font-devanagari text-xl">
              ચારા/ઘાસ ના પાક માટે ખેતી પદ્ધતિ (ગુજરાતી)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 font-devanagari">
            <div>
              <h4 className="font-semibold text-primary">જાત:</h4>
              <p className="text-foreground">
                જમીન અને પિયત ની સગવડ ના આધારે સોર્ગમ, મકાઈ કે ચેપ્ટર ઘાસ ની જાત ની પસંદગી કરવી.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">જમીન ની પસંદગી:</h4>
              <p className="text-foreground">
                સારા નિતાર વાળી ગોરાળુ થી મધ્યમ કાળી જમીન પસંદ કરવી.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">જમીન ની તૈયારી:</h4>
              <p className="text-foreground">
                સારી રીતે ખેડ કરી જમીન ને ભરભરી બનાવવી.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">બિયારણ નો દર:</h4>
              <p className="text-foreground">
                એક એકરે 4 કિ.ગ્રા. બિયારણ વાપરવું. બીજ ને 3 ગ્રામ થાયરમ/કિ.ગ્રા.બીજ પ્રમાણે માવજત આપવી.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">વાવણીનો સમય:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li>ચોમાસુ (ખરીફ): જુન-જુલાઈ</li>
                <li>ઉનાળુ: ફેબ્રુઆરી-માર્ચ અને 30 થી 45 દિવસ ના ગાળે બીજી વાવણી કરવી.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary">બે હાર અને બે છોડ વચ્ચે નું અંતર:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li>સોર્ગમ: સોરગમ – 30 x 10 સે.મી.</li>
                <li>સોર્ગમ x સુદાન ગ્રાસ – 50 x 30 સે.મી.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary">ખાતર:</h4>
              <p className="text-foreground">
                સેન્દ્રિય ખાતર (છાણિયું ખાતર) હેક્ટરે 10 ટન અને જમીન ની ફળદ્રુપતા ના આધારે પાક ઉતાર બાદ નાઈટ્રોજન ટોપ ડ્રેસીંગ કરવી.
              </p>
              <p className="text-foreground mt-2">
                પાયામાં રાસાયણિક ખાતર (કિ.ગ્રા./હેક્ટર):
              </p>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li>નાઈટ્રોજન (N): 40 થી 80</li>
                <li>ફોસ્ફરસ (P): 40</li>
                <li>પોટાશ (K): 00</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary">આંતરખેડ / નીંદામણ:</h4>
              <p className="text-foreground">
                વાવણી પછી 15 થી 20 દિવસે દાંતી/કોલ્પા ચલાવી આંતરખેડ અને નીંદામણ કરવું.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">પિયત:</h4>
              <p className="text-foreground">
                ઉનાળામાં 8 થી 10 દિવસે અને શિયાળામાં 15 થી 20 દિવસે પિયત આપવું. ચોમાસામાં જરૂરિયાત મુજબ પિયત આપવું.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">લણણી:</h4>
              <p className="text-foreground">
                50 થી 55 દિવસ ના સમયે પ્રથમ કાપણી લેવી અને ત્યાર પછી ના કાપણી 30 થી 40 દિવસ ના ગાળે 
                લેવી. પશુઓમાં ઝેરી અસર થતી અટકાવવા લીલા ચારા માં 25 થી 30 ટકા સુકો ચારો ભેળવીને ખવડાવવો.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">ઉત્પાદન:</h4>
              <p className="text-foreground">
                સરેરાશ 800 થી 1000 ક્વિન્ટલ/હેક્ટર લીલો ચારો મળે છે.
              </p>
            </div>

            <div className="bg-accent/50 p-3 rounded-lg">
              <p className="text-accent-foreground font-semibold">
                નોંધ: ઉપર આપેલ ખેડૂત ભાઈઓ માટે સામાન્ય ભલામણો છે. વિસ્તાર અને જમીન પ્રમાણે વિગતો બદલાઈ શકે છે. 
                કોઈપણ ખેત પદ્ધતિ અપનાવતા પહેલા સ્થાનિક કૃષિ નિષ્ણાંત/વૈજ્ઞાનિક ની સલાહ લેવી.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Hindi Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary font-devanagari text-xl">
              चारा/घास के पाक के लिए खेती पद्धति (हिंदी)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 font-devanagari">
            <div>
              <h4 className="font-semibold text-primary">जाति:</h4>
              <p className="text-foreground">
                भूमि और सिंचाई की सुविधा के आधार पर सोरगम, मक्का या नेपियर घास की जाति का चुनाव करें।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">भूमि का चुनाव:</h4>
              <p className="text-foreground">
                अच्छी जल निकासी वाली दोमट से मध्यम काली मिट्टी का चयन करें।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">भूमि की तैयारी:</h4>
              <p className="text-foreground">
                अच्छी तरह जुताई कर भूमि को भुरभुरी बनाएं।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">बीज दर:</h4>
              <p className="text-foreground">
                प्रति एकड़ 4 कि.ग्रा. बीज का उपयोग करें। बीज को 3 ग्राम थायरम/कि.ग्रा. बीज के हिसाब से उपचारित करें।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">बुवाई का समय:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li>खरीफ (वर्षा): जून-जुलाई</li>
                <li>ग्रीष्म: फरवरी-मार्च और 30 से 45 दिन के अंतराल पर दूसरी बुवाई करें।</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary">दो पंक्तियों और दो पौधों के बीच का अंतर:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li>सोरगम: 30 x 10 से.मी.</li>
                <li>सोरगम x सूडान ग्रास: 50 x 30 से.मी.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary">खाद:</h4>
              <p className="text-foreground">
                जैविक खाद (गोबर की खाद) प्रति हेक्टेयर 10 टन और भूमि की उर्वरता के आधार पर फसल कटाई के बाद नाइट्रोजन की टॉप ड्रेसिंग करें।
              </p>
              <p className="text-foreground mt-2">
                आधार में रासायनिक उर्वरक (कि.ग्रा./हेक्टेयर):
              </p>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li>नाइट्रोजन (N): 40 से 80</li>
                <li>फॉस्फोरस (P): 40</li>
                <li>पोटाश (K): 00</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary">अंतर कृषि / निराई-गुड़ाई:</h4>
              <p className="text-foreground">
                बुवाई के 15 से 20 दिन बाद कुदाल चलाकर अंतर कृषि और निराई करें।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">सिंचाई:</h4>
              <p className="text-foreground">
                गर्मी में 8 से 10 दिन और सर्दी में 15 से 20 दिन के अंतराल पर सिंचाई करें। बरसात में आवश्यकतानुसार सिंचाई करें।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">कटाई:</h4>
              <p className="text-foreground">
                50 से 55 दिन में पहली कटाई करें और उसके बाद 30 से 40 दिन के अंतराल पर कटाई करें। 
                पशुओं में विषाक्त प्रभाव से बचाव के लिए हरे चारे में 25 से 30 प्रतिशत सूखा चारा मिलाकर खिलाएं।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary">उत्पादन:</h4>
              <p className="text-foreground">
                औसतन 800 से 1000 क्विंटल/हेक्टेयर हरा चारा मिलता है।
              </p>
            </div>

            <div className="bg-accent/50 p-3 rounded-lg">
              <p className="text-accent-foreground font-semibold">
                नोट: ऊपर दी गई किसान भाइयों के लिए सामान्य सिफारिशें हैं। क्षेत्र और भूमि के अनुसार विवरण बदल सकते हैं। 
                कोई भी कृषि पद्धति अपनाने से पहले स्थानीय कृषि विशेषज्ञ/वैज्ञानिक की सलाह लें।
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default VitaraGrass;
