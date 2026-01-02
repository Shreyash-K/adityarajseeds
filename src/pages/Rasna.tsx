import dantiwadaHeader from "@/assets/dantiwada-header.jpeg";
import rasnaSeedsImage from "@/assets/rasna-seeds.jpeg";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Rasna = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Company Header Banner */}
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
            Rasna - Hy. Sorghum Sudan Grass
          </h2>
        </div>
      </section>

      {/* Seed Packet Section */}
      <section className="bg-background py-8 md:py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src={rasnaSeedsImage}
              alt="Rasna Hybrid Sorghum Sudan Grass Seeds Package"
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-4">
          
          {/* English Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center">
              🌾 Sorghum Sudan Grass – Package of Practices (POP) 🌾
            </h1>
            <p className="text-center text-muted-foreground mb-8">(For Fodder Production)</p>

            <div className="space-y-8 text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1️⃣ 🌦️ Climate & Soil</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Climate:</strong> Warm and semi-arid conditions are ideal.</li>
                  <li><strong>Temperature:</strong> 25–35°C is optimal.</li>
                  <li><strong>Rainfall:</strong> Requires moderate rainfall (400–600 mm).</li>
                  <li><strong>Soil:</strong> Grows well in loamy to sandy loam soil with good drainage.</li>
                  <li><strong>pH Range:</strong> 6.0–7.5 preferred.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2️⃣ 🌱 Land Preparation</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Plough 2–3 times for fine tilth.</li>
                  <li>Apply 10–12 tons FYM/ha before last ploughing.</li>
                  <li>Level the field for uniform irrigation.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3️⃣ 🌾 Seed & Sowing</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Seed Rate:</strong> 25–30 kg/ha.</li>
                  <li><strong>Seed Treatment:</strong> Treat with Carbendazim 2 g/kg seed before sowing.</li>
                  <li><strong>Sowing Time:</strong> Kharif: June–July | Rabi (Irrigated): October–November</li>
                  <li><strong>Spacing:</strong> 30 cm × 10 cm.</li>
                  <li><strong>Depth:</strong> 2–3 cm.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4️⃣ 💧 Irrigation</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Give first irrigation immediately after sowing.</li>
                  <li>Subsequent irrigation every 7–10 days (depending on soil moisture).</li>
                  <li>Avoid waterlogging.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5️⃣ 🌿 Nutrient Management</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Basal Dose:</strong> N: 40 kg, P₂O₅: 20 kg/ha at sowing.</li>
                  <li><strong>Top Dressing:</strong> Additional 40 kg N/ha after 1st cut.</li>
                  <li>Apply through urea and DAP.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6️⃣ 🚜 Weed Management</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Keep the field weed-free during first 30 days.</li>
                  <li>One hand weeding at 20–25 DAS.</li>
                  <li><strong>Pre-emergence herbicide:</strong> Atrazine 0.5–1.0 kg a.i./ha.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7️⃣ 🦠 Pest & Disease Control</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Shoot fly:</strong> Spray Chlorpyrifos 20 EC @ 2 ml/L water.</li>
                  <li><strong>Leaf spot / Rust:</strong> Spray Mancozeb 2.5 g/L water.</li>
                  <li>Rotate crops to reduce disease carryover.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8️⃣ ✂️ Harvesting</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>First cut:</strong> 45–50 days after sowing (50–60 cm height).</li>
                  <li><strong>Subsequent cuts:</strong> Every 30–35 days.</li>
                  <li>Stop irrigation 5–7 days before cutting.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9️⃣ 💰 Yield</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Green fodder yield:</strong> 350–400 quintals/ha.</li>
                  <li><strong>Dry matter yield:</strong> 70–80 quintals/ha.</li>
                </ul>
              </div>

              <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                <h2 className="text-xl md:text-2xl font-bold text-destructive mb-3">🔟 ⚠️ Important Tips</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Avoid feeding young regrowth (&lt;30 days) due to hydrocyanic acid (HCN) toxicity.</li>
                  <li>Provide mixture of legume fodder for balanced nutrition.</li>
                  <li>Regularly rotate fields for soil health improvement.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Hindi Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              🌾 ज्वार-सूडान घास – कृषि क्रियाओं का पैकेज (POP) 🌾
            </h1>
            <p className="text-center text-muted-foreground mb-8 font-devanagari">(चारागाह / हरे चारे हेतु)</p>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1️⃣ 🌦️ जलवायु एवं मिट्टी</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>जलवायु:</strong> गर्म व अर्ध शुष्क क्षेत्र उपयुक्त।</li>
                  <li><strong>तापमान:</strong> 25–35°C आदर्श।</li>
                  <li><strong>वर्षा:</strong> 400–600 मि.मी. पर्याप्त।</li>
                  <li><strong>मिट्टी:</strong> दोमट या बलुई दोमट भूमि अच्छी रहती है।</li>
                  <li><strong>pH मान:</strong> 6.0–7.5 उपयुक्त।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2️⃣ 🌱 भूमि तैयारी</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>खेत को 2–3 बार हल चलाकर भुरभुरा करें।</li>
                  <li>अंतिम जुताई से पहले 10–12 टन गोबर की खाद प्रति हेक्टेयर डालें।</li>
                  <li>खेत को समतल करें ताकि सिंचाई समान रूप से हो सके।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3️⃣ 🌾 बीज एवं बुवाई</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>बीज दर:</strong> 25–30 किग्रा/हेक्टेयर।</li>
                  <li><strong>बीज उपचार:</strong> कार्बेन्डाजिम 2 ग्राम/किग्रा बीज से उपचारित करें।</li>
                  <li><strong>बुवाई का समय:</strong> खरीफ: जून–जुलाई | रबी (सिंचित): अक्टूबर–नवंबर</li>
                  <li><strong>कतार दूरी:</strong> 30 से.मी. × पौधा दूरी 10 से.मी.</li>
                  <li><strong>गहराई:</strong> 2–3 से.मी.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4️⃣ 💧 सिंचाई प्रबंधन</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>पहली सिंचाई बुवाई के तुरंत बाद करें।</li>
                  <li>आगे की सिंचाई हर 7–10 दिन के अंतराल पर करें।</li>
                  <li>खेत में जलभराव न होने दें।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5️⃣ 🌿 पोषक तत्व प्रबंधन</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>आधार खाद:</strong> नत्रजन (N): 40 किग्रा, फास्फोरस (P₂O₅): 20 किग्रा प्रति हेक्टेयर</li>
                  <li><strong>टॉप ड्रेसिंग:</strong> प्रथम कटाई के बाद 40 किग्रा N/हेक्टेयर।</li>
                  <li>खाद के रूप में यूरिया व डीएपी प्रयोग करें।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6️⃣ 🚜 खरपतवार नियंत्रण</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>शुरुआती 30 दिनों तक खेत को खरपतवार मुक्त रखें।</li>
                  <li>20–25 दिन बाद एक निराई-गुड़ाई करें।</li>
                  <li>एट्राजिन 0.5–1.0 किग्रा सक्रिय तत्व/हेक्टेयर की पूर्व उद्भव अवस्था में छिड़काव करें।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7️⃣ 🦠 कीट एवं रोग नियंत्रण</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>शूट फ्लाई:</strong> क्लोरपाइरीफॉस 20 EC @ 2 मि.ली./लीटर पानी छिड़कें।</li>
                  <li><strong>लीफ स्पॉट / रस्ट:</strong> मैंकोजेब 2.5 ग्राम/लीटर पानी छिड़कें।</li>
                  <li>फसल चक्र अपनाएं ताकि रोग संक्रमण कम हो।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8️⃣ ✂️ कटाई</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>पहली कटाई:</strong> बुवाई के 45–50 दिन बाद (जब ऊँचाई 50–60 से.मी. हो)।</li>
                  <li><strong>अगली कटाई:</strong> प्रत्येक 30–35 दिन के अंतराल पर।</li>
                  <li>कटाई से 5–7 दिन पहले सिंचाई बंद कर दें।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9️⃣ 💰 उपज</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>हरी चारे की उपज:</strong> 350–400 क्विंटल/हेक्टेयर।</li>
                  <li><strong>सूखी पदार्थ उपज:</strong> 70–80 क्विंटल/हेक्टेयर।</li>
                </ul>
              </div>

              <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                <h2 className="text-xl md:text-2xl font-bold text-destructive mb-3">🔟 ⚠️ महत्वपूर्ण सुझाव</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>30 दिन से कम उम्र की नई बढ़वार वाले पौधे (HCN विषाक्तता) के कारण पशुओं को न खिलाएँ।</li>
                  <li>संतुलित पोषण हेतु दलहनी चारे के साथ मिलाकर खिलाएँ।</li>
                  <li>फसल परिवर्तन से भूमि की उर्वरता बनाए रखें।</li>
                </ul>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Gujarati Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              🌾 જ્વાર-સુદાન ઘાસ – ખેતીની પદ્ધતિઓનું પેકેજ (POP) 🌾
            </h1>
            <p className="text-center text-muted-foreground mb-8 font-devanagari">(ચારા માટે ખાસ ઉપયોગી)</p>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1️⃣ 🌦️ હવામાન અને જમીન</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>હવામાન:</strong> ગરમ અને અર્ધ-શુષ્ક વિસ્તાર અનુકૂળ।</li>
                  <li><strong>તાપમાન:</strong> 25–35°C ઉત્તમ।</li>
                  <li><strong>વરસાદ:</strong> 400–600 મિ.મી. પૂરતો।</li>
                  <li><strong>જમીન:</strong> સારો ડ્રેનેજ ધરાવતી દોળિયા અથવા વેરિયાળી દોળિયા જમીન શ્રેષ્ઠ।</li>
                  <li><strong>pH રેન્જ:</strong> 6.0 થી 7.5 યોગ્ય।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2️⃣ 🌱 જમીન તૈયારી</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>જમીનને 2–3 વાર ઉંધા-મોઢા કરીને નરમ બનાવવી।</li>
                  <li>છેલ્લી હળ ચલાવતી વખતે 10–12 ટન ગોબર ખાતર પ્રતિ હેક્ટર આપવી।</li>
                  <li>સમાન સિંચાઈ માટે જમીન સમતલ રાખવી।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3️⃣ 🌾 વાવણી અને બીજ વ્યવસ્થા</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>બીજ દર:</strong> 25–30 કિગ્રા પ્રતિ હેક્ટર।</li>
                  <li><strong>બીજ ઉપચાર:</strong> કાર્બેન્ડાઝિમ 2 ગ્રામ/કિગ્રા બીજ થી ઉપચાર કરવો।</li>
                  <li><strong>વાવણીનો સમય:</strong> ખરીફ: જૂન–જુલાઈ | રવિ (સિંચિત): ઑક્ટોબર–નવેમ્બર</li>
                  <li><strong>અંતર:</strong> કતાર વચ્ચે 30 સેમી અને છોડ વચ્ચે 10 સેમી।</li>
                  <li><strong>વાવણી ઊંડાણ:</strong> 2–3 સેમી।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4️⃣ 💧 સિંચાઈ વ્યવસ્થા</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>પ્રથમ સિંચાઈ વાવણી પછી તરત કરવી।</li>
                  <li>પછીની સિંચાઈ દરેક 7–10 દિવસના અંતરે કરવી।</li>
                  <li>પાણી ભરાઈ ન રહે તે ધ્યાન રાખવું।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5️⃣ 🌿 ખાતર વ્યવસ્થા</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>આધાર ખાતર:</strong> નાઈટ્રોજન (N): 40 કિગ્રા, ફોસ્ફરસ (P₂O₅): 20 કિગ્રા પ્રતિ હેક્ટર।</li>
                  <li><strong>ટોપ ડ્રેસિંગ:</strong> પ્રથમ કપાણ પછી 40 કિગ્રા N/હેક્ટર આપવું।</li>
                  <li>યુરિયા અને ડીએપી ખાતર તરીકે ઉપયોગ કરવો।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6️⃣ 🚜 નિંદણ નિયંત્રણ</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>વાવણી પછીના પ્રથમ 30 દિવસમાં ખેતર નિંદણમુક્ત રાખવું।</li>
                  <li>20–25 દિવસ પછી એક નિંદણ/કાંટણી કરવી।</li>
                  <li>પૂર્વ-ઉદભવ માટે એટ્રાઝિન 0.5–1.0 કિગ્રા સક્રિય ઘટક/હેક્ટર છાંટવું।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7️⃣ 🦠 જીવાત અને રોગ નિયંત્રણ</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>શૂટ ફ્લાય:</strong> ક્લોરપાયરિફોસ 20 EC @ 2 મી.લી./લીટર પાણી છાંટવું।</li>
                  <li><strong>પાંદડાનો ડાઘ / રસ્ટ:</strong> મેન્કોઝેબ 2.5 ગ્રામ/લીટર પાણી છાંટવું।</li>
                  <li>રોગનું પ્રમાણ ઘટાડવા પાક ફેરફાર (Crop rotation) અપનાવો।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8️⃣ ✂️ કપાણી</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>પ્રથમ કપાણ:</strong> વાવણી પછી 45–50 દિવસ (જ્યારે ઊંચાઈ 50–60 સેમી હોય)।</li>
                  <li><strong>પછીની કપાણી:</strong> દર 30–35 દિવસના અંતરે।</li>
                  <li>કપાણ પહેલા 5–7 દિવસ સિંચાઈ બંધ કરવી।</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9️⃣ 💰 ઉપજ</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>લીલો ચારો:</strong> 350–400 ક્વિન્ટલ પ્રતિ હેક્ટર।</li>
                  <li><strong>શુષ્ક પદાર્થ:</strong> 70–80 ક્વિન્ટલ પ્રતિ હેક્ટર।</li>
                </ul>
              </div>

              <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                <h2 className="text-xl md:text-2xl font-bold text-destructive mb-3">🔟 ⚠️ મહત્વપૂર્ણ સૂચનો</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>30 દિવસથી ઓછી ઉમરના નવા અંકુરેલા છોડ પશુઓને ન ખવડાવવાં — HCN ઝેરી પદાર્થથી નુકસાન થઈ શકે છે।</li>
                  <li>સંતુલિત પોષણ માટે દળહ ચારા સાથે મિક્સ કરીને ખવડાવવું।</li>
                  <li>જમીન ઉર્વરતા જાળવવા પાક ફેરફાર નિયમિત રીતે કરવો।</li>
                </ul>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Marathi Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-devanagari text-center">
              🌾 ज्वारी-सूडान गवत – शेती विषयक शिफारसी (POP) 🌾
            </h1>
            <p className="text-center text-muted-foreground mb-8 font-devanagari">(चारासाठी उपयुक्त)</p>

            <div className="space-y-8 font-devanagari text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1️⃣ 🌦️ हवामान आणि जमीन</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>हवामान:</strong> उष्ण आणि अर्ध-कोरडे प्रदेश योग्य.</li>
                  <li><strong>तापमान:</strong> 25–35°C दरम्यान सर्वोत्तम वाढ होते.</li>
                  <li><strong>पर्जन्यमान:</strong> 400–600 मि.मी. पर्याप्त.</li>
                  <li><strong>जमीन:</strong> चांगला निचरा होणारी गाळयुक्त किंवा वालुकामय गाळयुक्त जमीन उत्तम.</li>
                  <li><strong>pH:</strong> 6.0–7.5 अनुकूल.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2️⃣ 🌱 जमीन तयारी</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>जमीन 2–3 वेळा नांगरून भुसभुशीत करावी.</li>
                  <li>शेवटच्या नांगरणीपूर्वी 10–12 टन शेणखत प्रति हेक्टर द्यावे.</li>
                  <li>जमीन सपाट आणि समपातळी ठेवावी.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3️⃣ 🌾 बियाणे आणि पेरणी</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>बियाणे प्रमाण:</strong> 25–30 किलो/हेक्टर.</li>
                  <li><strong>बियाणे प्रक्रिया:</strong> कार्बेन्डाझिम 2 ग्रॅम/किलो बियाणे याने प्रक्रिया करावी.</li>
                  <li><strong>पेरणीचा कालावधी:</strong> खरीप: जून–जुलै | रब्बी (सिंचित): ऑक्टोबर–नोव्हेंबर</li>
                  <li><strong>अंतर:</strong> ओळीतील अंतर 30 से.मी. व रोपांतील अंतर 10 से.मी.</li>
                  <li><strong>पेरणी खोली:</strong> 2–3 से.मी.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4️⃣ 💧 सिंचन व्यवस्था</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>पहिलं सिंचन पेरणीनंतर लगेच करावं.</li>
                  <li>नंतर प्रत्येक 7–10 दिवसांनी सिंचन करावं.</li>
                  <li>पाण्याचा तळ साचू देऊ नये.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5️⃣ 🌿 खत व्यवस्थापन</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>आधार खत:</strong> नत्र (N): 40 किलो, स्फुरद (P₂O₅): 20 किलो प्रति हेक्टर</li>
                  <li><strong>वरखत:</strong> पहिल्या कापणीनंतर 40 किलो नत्र/हेक्टर द्यावे.</li>
                  <li>युरिया आणि डीएपीचा वापर करावा.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6️⃣ 🚜 तण नियंत्रण</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>पहिल्या 30 दिवसांत शेत तणमुक्त ठेवावे.</li>
                  <li>20–25 दिवसांनी एक तणनियंत्रण करावे.</li>
                  <li>अट्राझीन 0.5–1.0 किलो सक्रिय घटक/हेक्टर पूर्व उद्भव अवस्थेत फवारावे.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7️⃣ 🦠 कीड व रोग व्यवस्थापन</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>शूट फ्लाय:</strong> क्लोरपायरिफॉस 20 EC @ 2 मि.ली./लिटर पाणी फवारणी करावी.</li>
                  <li><strong>पानांवरील डाग / गंज:</strong> मॅन्कोझेब 2.5 ग्रॅम/लिटर पाणी फवारावे.</li>
                  <li>रोगाचा प्रसार कमी करण्यासाठी पिक बदल (Crop rotation) करावा.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8️⃣ ✂️ कापणी</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>पहिली कापणी:</strong> पेरणीनंतर 45–50 दिवसांनी (जेव्हा उंची 50–60 से.मी. असेल).</li>
                  <li><strong>पुढील कापण्या:</strong> दर 30–35 दिवसांनी.</li>
                  <li>कापणीपूर्वी 5–7 दिवस सिंचन थांबवावे.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9️⃣ 💰 उत्पादन</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>हिरवा चारा:</strong> 350–400 क्विंटल/हेक्टर.</li>
                  <li><strong>सुका पदार्थ:</strong> 70–80 क्विंटल/हेक्टर.</li>
                </ul>
              </div>

              <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                <h2 className="text-xl md:text-2xl font-bold text-destructive mb-3">🔟 ⚠️ महत्वाच्या सूचना</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>30 दिवसांपेक्षा कमी वयाच्या कोवळ्या वाढीचा चारा पशूंना (HCN विषबाधा) होऊ शकतो — देऊ नये.</li>
                  <li>संतुलित पोषणासाठी डाळींच्या चार्‍यासोबत मिसळून द्यावा.</li>
                  <li>जमिनीची सुपीकता टिकवण्यासाठी नियमित पिक बदल करावा.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Tamil Content */}
          <Card className="mb-12 p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center">
              🌾 சோர்கம்-சூடான் புல் – பயிர் நடைமுறைகள் தொகுப்பு (POP) 🌾
            </h1>
            <p className="text-center text-muted-foreground mb-8">(மிருக தீவனத்திற்கு சிறந்தது)</p>

            <div className="space-y-8 text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1️⃣ 🌦️ காலநிலை மற்றும் மண்</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>காலநிலை:</strong> வெப்பமான மற்றும் அரை வறண்ட பகுதிகள் உகந்தவை.</li>
                  <li><strong>வெப்பநிலை:</strong> 25–35°C சிறந்தது.</li>
                  <li><strong>மழைப்பொழிவு:</strong> 400–600 மி.மீ. போதுமானது.</li>
                  <li><strong>மண்:</strong> நல்ல வடிகால் வசதி உள்ள மணற்பாணி அல்லது மண்ணாலான நிலம் உகந்தது.</li>
                  <li><strong>pH மதிப்பு:</strong> 6.0–7.5 சிறந்தது.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2️⃣ 🌱 நிலம் தயாரித்தல்</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>நிலத்தை 2–3 முறை உழுதி நன்கு பொடியாக்கவும்.</li>
                  <li>கடைசி உழவுக்கு முன் 10–12 டன் நாட்டு உரம் (FYM)/ஹெக்டேர் சேர்க்கவும்.</li>
                  <li>நீர் சீராக செல்ல நிலத்தை சமமாக்கவும்.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3️⃣ 🌾 விதை மற்றும் விதைப்பு</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>விதை அளவு:</strong> 25–30 கிலோ/ஹெக்டேர்.</li>
                  <li><strong>விதை மருந்து:</strong> கார்பெண்டாசிம் 2 கிராம்/கிலோ விதை கொண்டு பூசவும்.</li>
                  <li><strong>விதைப்பு நேரம்:</strong> கலவை (காரீப்): ஜூன்–ஜூலை | சமையல் (ரபி): அக்டோபர்–நவம்பர்</li>
                  <li><strong>இடைவெளி:</strong> வரிசை 30 செ.மீ × செடி 10 செ.மீ.</li>
                  <li><strong>ஆழம்:</strong> 2–3 செ.மீ.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4️⃣ 💧 பாசன மேலாண்மை</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>முதல் பாசனம் விதைத்தவுடன் உடனே செய்யவும்.</li>
                  <li>பின்னர் ஒவ்வொரு 7–10 நாள்களுக்கும் பாசனம் செய்யவும்.</li>
                  <li>நீர் தேங்காமல் பார்த்துக்கொள்ளவும்.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5️⃣ 🌿 உர மேலாண்மை</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>அடிப்படை உரம்:</strong> நைட்ரஜன் (N): 40 கிலோ, பாஸ்பரஸ் (P₂O₅): 20 கிலோ / ஹெக்டேர்</li>
                  <li><strong>மேலேற்ற உரம்:</strong> முதல் வெட்டுக்குப் பிறகு 40 கிலோ நைட்ரஜன்/ஹெக்டேர்.</li>
                  <li>யூரியா மற்றும் DAP பயன்படுத்தவும்.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6️⃣ 🚜 கொடிக்கட்டை கட்டுப்பாடு</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>முதல் 30 நாட்களில் நிலம் கொடிமுட்டிகளின்றி இருக்க வேண்டும்.</li>
                  <li>20–25 நாட்களில் ஒரு கைமுறைக் கொடிக்கட்டை செய்யவும்.</li>
                  <li>அட்ராசின் 0.5–1.0 கிலோ செயலில் உள்ள பொருள்/ஹெக்டேர் விதை முளைக்குமுன் தெளிக்கவும்.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7️⃣ 🦠 பூச்சி மற்றும் நோய் மேலாண்மை</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>ஷூட் பறவை (Shoot fly):</strong> குளோர்பைரிபாஸ் 20 EC @ 2 மி.லி./லிட்டர் நீர் தெளிக்கவும்.</li>
                  <li><strong>இலைப்புள்ளி / சுருக்கு:</strong> மாங்கோசெப் 2.5 கிராம்/லிட்டர் நீர் தெளிக்கவும்.</li>
                  <li>நோய் பரவலை குறைக்க பயிர் மாறுதல் (Crop rotation) பின்பற்றவும்.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8️⃣ ✂️ அறுவடை</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>முதல் வெட்டு:</strong> விதைத்த 45–50 நாட்களில் (உயரம் 50–60 செ.மீ. ஆனபோது).</li>
                  <li><strong>அடுத்த வெட்டுகள்:</strong> ஒவ்வொரு 30–35 நாள்களுக்கும்.</li>
                  <li>வெட்டுக்குப் 5–7 நாட்களுக்கு முன் பாசனம் நிறுத்தவும்.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9️⃣ 💰 விளைச்சல்</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>பச்சை தீவன விளைச்சல்:</strong> 350–400 க்விண்டல்/ஹெக்டேர்.</li>
                  <li><strong>உலர் பொருள்:</strong> 70–80 க்விண்டல்/ஹெக்டேர்.</li>
                </ul>
              </div>

              <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                <h2 className="text-xl md:text-2xl font-bold text-destructive mb-3">🔟 ⚠️ முக்கிய குறிப்புகள்</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>30 நாட்களுக்குள் வளர்ந்த இளம் தழைகளை மாடுகளுக்கு கொடுக்க வேண்டாம் — HCN நச்சுத்தன்மை ஏற்படலாம்.</li>
                  <li>சமநிலையான உணவுக்காக பருப்பு வகை தீவனத்துடன் கலந்து கொடுக்கவும்.</li>
                  <li>மண் வளம் காக்க பயிர் மாறுதல் முறையினைப் பின்பற்றவும்.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Telugu Content */}
          <Card className="p-8 md:p-12 bg-card shadow-[var(--shadow-card)] border-border">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center">
              🌾 జొన్న–సూడాన్ గడ్డి – సాగు పద్ధతుల ప్యాకేజ్ (POP) 🌾
            </h1>
            <p className="text-center text-muted-foreground mb-8">(పశువుల మేత కోసం)</p>

            <div className="space-y-8 text-base md:text-lg leading-relaxed text-foreground">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">1️⃣ 🌦️ వాతావరణం మరియు నేల</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>వాతావరణం:</strong> వేడి మరియు అర్ధశుష్క ప్రాంతాలు అనుకూలం.</li>
                  <li><strong>ఉష్ణోగ్రత:</strong> 25–35°C సరైనది.</li>
                  <li><strong>వర్షపాతం:</strong> 400–600 మి.మీ. సరిపోతుంది.</li>
                  <li><strong>నేల:</strong> నీరు నిల్వ కాకుండా సులభంగా వడకే ఇసుక లేదా లోమి నేలలు ఉత్తమం.</li>
                  <li><strong>pH:</strong> 6.0–7.5 మధ్యలో ఉండాలి.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">2️⃣ 🌱 నేల తయారీ</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>భూమిని 2–3 సార్లు దున్ని మెత్తగా చేయాలి.</li>
                  <li>చివరి దున్నుడు ముందు 10–12 టన్నుల ఎరువైన పశువుల ఎరువు (FYM)/హెక్టారు వేయాలి.</li>
                  <li>నీటి పారుదల సులభంగా ఉండేలా సమంగా చేయాలి.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">3️⃣ 🌾 విత్తనాలు మరియు విత్తకం</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>విత్తన పరిమాణం:</strong> 25–30 కిలోల/హెక్టారు.</li>
                  <li><strong>విత్తన శుద్ధి:</strong> కార్బెండాజిమ్ 2 గ్రా/కిలో విత్తనంతో చికిత్స చేయాలి.</li>
                  <li><strong>విత్తకం కాలం:</strong> ఖరీఫ్: జూన్–జూలై | రబీ (నీరావరిస్తే): అక్టోబర్–నవంబర్</li>
                  <li><strong>అంతరం:</strong> వరుసల మధ్య 30 సెం.మీ., మొక్కల మధ్య 10 సెం.మీ.</li>
                  <li><strong>లోతు:</strong> 2–3 సెం.మీ.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">4️⃣ 💧 నీటి నిర్వహణ</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>మొదటి నీరుపారుదల విత్తిన వెంటనే చేయాలి.</li>
                  <li>తరువాత ప్రతి 7–10 రోజులకు ఒకసారి నీరు ఇవ్వాలి.</li>
                  <li>నీరు నిల్వ ఉండకుండా జాగ్రత్తపడాలి.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">5️⃣ 🌿 ఎరువుల నిర్వహణ</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>ప్రాధమిక ఎరువు:</strong> నత్రజని (N): 40 కిలోలు, ఫాస్ఫరస్ (P₂O₅): 20 కిలోలు/హెక్టారు</li>
                  <li><strong>తరువాతి ఎరువు:</strong> మొదటి కోత తర్వాత 40 కిలోలు N/హెక్టారు ఇవ్వాలి.</li>
                  <li>యూరియా మరియు డి.ఏ.పీ. వాడాలి.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">6️⃣ 🚜 మాలిన్య నియంత్రణ</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>మొదటి 30 రోజుల్లో పొలాన్ని మాలిన్య రహితంగా ఉంచాలి.</li>
                  <li>20–25 రోజులకు ఒకసారి చేత్తో కలుపు తీయాలి.</li>
                  <li>అట్రాజిన్ 0.5–1.0 కిలో క్రియాశీల పదార్థం/హెక్టారు విత్తనం ములకే ముందే పిచికారీ చేయాలి.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">7️⃣ 🦠 పురుగులు మరియు రోగాలు</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>షూట్ ఫ్లై:</strong> క్లోర్‌పైరిఫాస్ 20 EC @ 2 మి.లి./లీటర్ నీరుతో పిచికారీ చేయాలి.</li>
                  <li><strong>ఆకు మచ్చ / తుప్పు:</strong> మాంకోజెబ్ 2.5 గ్రా/లీటర్ నీరుతో పిచికారీ చేయాలి.</li>
                  <li>రోగం వ్యాప్తి తగ్గించేందుకు పంట మార్పిడి (Crop rotation) చేయాలి.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">8️⃣ ✂️ కోత</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>మొదటి కోత:</strong> విత్తిన 45–50 రోజుల తర్వాత (మొక్క ఎత్తు 50–60 సెం.మీ. ఉన్నప్పుడు).</li>
                  <li><strong>తరువాతి కోతలు:</strong> ప్రతి 30–35 రోజులకు.</li>
                  <li>కోతకు 5–7 రోజుల ముందు నీరు ఆపాలి.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">9️⃣ 💰 దిగుబడి</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>పచ్చి మేత:</strong> 350–400 క్వింటాళ్లు/హెక్టారు.</li>
                  <li><strong>ఎండు పదార్థం:</strong> 70–80 క్వింటాళ్లు/హెక్టారు.</li>
                </ul>
              </div>

              <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                <h2 className="text-xl md:text-2xl font-bold text-destructive mb-3">🔟 ⚠️ ముఖ్య సూచనలు</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>30 రోజుల లోపు పెరిగిన కొత్త మొక్కలను పశువులకు ఇవ్వకండి — HCN విషతత్వం కలుగుతుంది.</li>
                  <li>సమతుల్య ఆహారం కోసం పప్పు రకాల మేతతో కలిపి ఇవ్వాలి.</li>
                  <li>నేల సారాన్ని కాపాడటానికి పంట మార్పిడి పద్ధతి అనుసరించాలి.</li>
                </ul>
              </div>
            </div>
          </Card>

        </div>
      </section>
    </main>
  );
};

export default Rasna;
