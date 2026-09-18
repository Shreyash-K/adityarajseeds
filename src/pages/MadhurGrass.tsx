import companyLogo from "@/assets/company-logo.jpeg";
import productAsset from "@/assets/madhur-grass.jpeg.asset.json";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type Guide = {
  language: string;
  title: string;
  sections: GuideSection[];
};

const guides: Guide[] = [
  {
    language: "English",
    title: "Package of Practices for Fodder Ryegrass",
    sections: [
      {
        title: "1. Climate and Soil",
        paragraphs: [
          "Fodder ryegrass is a cool-season fodder crop. It grows well in cool and moderate climatic conditions. Very low temperatures below 6–8°C may reduce crop growth.",
          "It performs well in fertile, well-drained, medium to heavy soils with good moisture-holding capacity. The field should be free from weeds and prepared into a fine, level seedbed.",
        ],
      },
      {
        title: "2. Agronomic Practices",
        paragraphs: [
          "Time of sowing: Last week of September to the first week of October.",
          "Seed rate: Approximately 3–4 kg per acre, depending on the variety and sowing method.",
          "Broadcast the seed uniformly in moist soil. Mix it with fine, moist soil or sand for even distribution, lightly rake the field, and irrigate immediately. For line sowing, keep approximately 25–30 cm between rows.",
        ],
      },
      {
        title: "3. Manures and Fertilizers",
        paragraphs: ["Apply 15–20 tonnes of well-decomposed farmyard manure per acre before sowing."],
        bullets: [
          "At sowing: 15 kg nitrogen per acre, equivalent to approximately 33 kg urea.",
          "After 30 days: 15 kg nitrogen per acre, equivalent to approximately 33 kg urea.",
          "After every subsequent cutting: 30 kg nitrogen per acre, equivalent to approximately 66 kg urea.",
          "Adjust fertilizer recommendations according to soil testing and local agricultural advice.",
        ],
      },
      {
        title: "4. Irrigation",
        paragraphs: [],
        bullets: [
          "Give the first irrigation immediately after sowing and the second approximately 5–6 days later.",
          "Thereafter, irrigate at around 10-day intervals according to soil and weather conditions.",
          "Irrigate after each cutting to support regrowth and avoid waterlogging.",
        ],
      },
      {
        title: "5. Harvesting and Fodder Management",
        paragraphs: [
          "Take the first cutting approximately 50–55 days after sowing. Subsequent cuttings may be taken at approximately monthly intervals when plants reach around 50–60 cm in height.",
          "Under suitable conditions, approximately 5–6 cuttings may be obtained from November to May. Feed the harvested fodder fresh or conserve it properly to maintain quality.",
        ],
      },
      {
        title: "6. Weed Management",
        paragraphs: ["Ryegrass is sensitive to herbicides. Do not use herbicides without expert advice. Keep the field clean before sowing and remove weeds manually when necessary."],
      },
      {
        title: "7. Plant Protection",
        paragraphs: ["Inspect the crop regularly for pests and diseases. Use only locally approved products, follow label instructions, and confirm the required waiting period before feeding the crop to livestock."],
      },
    ],
  },
  {
    language: "हिंदी",
    title: "चारा राईग्रास की खेती हेतु पैकेज ऑफ प्रैक्टिस",
    sections: [
      { title: "1. जलवायु एवं मिट्टी", paragraphs: ["चारा राईग्रास ठंडे मौसम की चारा फसल है। यह ठंडी एवं सामान्य जलवायु में अच्छी वृद्धि करती है। 6–8°C से कम तापमान पर वृद्धि प्रभावित हो सकती है।", "यह उपजाऊ, अच्छी जल निकासी वाली, मध्यम से भारी तथा नमी धारण करने वाली मिट्टी में अच्छी तरह उगती है। खेत खरपतवार रहित, समतल और मिट्टी भुरभुरी होनी चाहिए।"] },
      { title: "2. कृषि पद्धति", paragraphs: ["बुवाई का समय सितंबर के अंतिम सप्ताह से अक्टूबर के प्रथम सप्ताह तक है। बीज दर लगभग 3–4 किलोग्राम प्रति एकड़ रखें।", "नम मिट्टी में बीजों का समान छिड़काव करें। समान वितरण के लिए बीज को बारीक नम मिट्टी या रेत में मिलाएँ, हल्की रेकिंग करें और तुरंत सिंचाई करें। कतारों के बीच लगभग 25–30 सेंटीमीटर दूरी रखी जा सकती है।"] },
      { title: "3. खाद एवं उर्वरक", paragraphs: ["बुवाई से पहले 15–20 टन प्रति एकड़ अच्छी तरह सड़ी गोबर की खाद डालें।"], bullets: ["बुवाई के समय: 15 किलोग्राम नाइट्रोजन या लगभग 33 किलोग्राम यूरिया प्रति एकड़।", "30 दिन बाद: 15 किलोग्राम नाइट्रोजन या लगभग 33 किलोग्राम यूरिया प्रति एकड़।", "हर अगली कटाई के बाद: 30 किलोग्राम नाइट्रोजन या लगभग 66 किलोग्राम यूरिया प्रति एकड़।", "मात्रा मिट्टी परीक्षण और स्थानीय कृषि विशेषज्ञ की सलाह के अनुसार रखें।"] },
      { title: "4. सिंचाई", paragraphs: [], bullets: ["बुवाई के तुरंत बाद पहली और लगभग 5–6 दिन बाद दूसरी सिंचाई करें।", "इसके बाद मिट्टी और मौसम के अनुसार लगभग 10 दिन के अंतराल पर सिंचाई करें।", "हर कटाई के बाद सिंचाई करें और खेत में जलभराव न होने दें।"] },
      { title: "5. कटाई एवं चारा प्रबंधन", paragraphs: ["पहली कटाई बुवाई के लगभग 50–55 दिन बाद करें। बाद की कटाइयाँ फसल की वृद्धि के अनुसार लगभग एक महीने के अंतराल पर, पौधों की ऊँचाई 50–60 सेंटीमीटर होने पर करें।", "उपयुक्त परिस्थितियों में नवंबर से मई तक लगभग 5–6 कटिंग मिल सकती हैं। चारे को ताजा खिलाएँ या उचित तरीके से संरक्षित करें।"] },
      { title: "6. खरपतवार प्रबंधन", paragraphs: ["राईग्रास शाकनाशी के प्रति संवेदनशील है। विशेषज्ञ की सलाह के बिना शाकनाशी न डालें। खेत को खरपतवार मुक्त रखें और जरूरत पर हाथ से खरपतवार निकालें।"] },
      { title: "7. फसल सुरक्षा", paragraphs: ["फसल का नियमित निरीक्षण करें। केवल स्थानीय रूप से स्वीकृत उत्पादों का प्रयोग करें, लेबल निर्देश मानें और पशुओं को चारा खिलाने से पहले आवश्यक प्रतीक्षा अवधि की पुष्टि करें।"] },
    ],
  },
  {
    language: "ગુજરાતી",
    title: "ઘાસ માટે રાઈગ્રાસની ખેતી માટે પેકેજ ઓફ પ્રેક્ટિસ",
    sections: [
      { title: "1. આબોહવા અને જમીન", paragraphs: ["ચારા માટેનો રાઈગ્રાસ ઠંડી ઋતુનો ચારા પાક છે. તે ઠંડા અને મધ્યમ તાપમાનમાં સારી વૃદ્ધિ કરે છે. 6–8°Cથી ઓછા તાપમાને વૃદ્ધિ પર અસર થઈ શકે છે.", "આ પાક ફળદ્રુપ, સારી નિતારવાળી, મધ્યમથી ભારે અને ભેજ જાળવી રાખતી જમીનમાં સારી રીતે ઉગે છે. ખેતર નીંદણમુક્ત અને સમતલ તથા જમીન બારીક તૈયાર કરેલી હોવી જોઈએ."] },
      { title: "2. ખેતી પદ્ધતિ", paragraphs: ["વાવણીનો સમય સપ્ટેમ્બરના અંતિમ અઠવાડિયાથી ઓક્ટોબરના પ્રથમ અઠવાડિયા સુધી છે. બીજ દર આશરે 3–4 કિલોગ્રામ પ્રતિ એકર રાખવો.", "ભેજવાળી જમીનમાં બીજનો સરખો છંટકાવ કરવો. સમાન વિતરણ માટે બારીક ભેજવાળી માટી અથવા રેતી સાથે ભેળવી, હળવું રેકિંગ કરી તરત પિયત આપવી. હારથી હારનું અંતર આશરે 25–30 સેન્ટિમીટર રાખી શકાય છે."] },
      { title: "3. ખાતર અને પોષક તત્ત્વો", paragraphs: ["વાવણી પહેલાં સારી રીતે સડેલું છાણિયું ખાતર 15–20 ટન પ્રતિ એકરના પ્રમાણમાં આપવું."], bullets: ["વાવણી સમયે: 15 કિલોગ્રામ નાઇટ્રોજન અથવા આશરે 33 કિલોગ્રામ યુરિયા પ્રતિ એકર.", "વાવણીના 30 દિવસ બાદ: 15 કિલોગ્રામ નાઇટ્રોજન અથવા આશરે 33 કિલોગ્રામ યુરિયા પ્રતિ એકર.", "દરેક કાપણી બાદ: 30 કિલોગ્રામ નાઇટ્રોજન અથવા આશરે 66 કિલોગ્રામ યુરિયા પ્રતિ એકર.", "માત્રા જમીન પરીક્ષણ અને સ્થાનિક કૃષિ નિષ્ણાતની સલાહ મુજબ નક્કી કરવી."] },
      { title: "4. પિયત વ્યવસ્થાપન", paragraphs: [], bullets: ["વાવણી બાદ તરત પ્રથમ અને આશરે 5–6 દિવસ બાદ બીજી પિયત આપવી.", "ત્યારબાદ જમીન અને હવામાન મુજબ આશરે 10 દિવસના અંતરે પિયત આપવી.", "દરેક કાપણી બાદ પુનઃવૃદ્ધિ માટે પિયત આપવી અને પાણી ભરાવા ન દેવું."] },
      { title: "5. કાપણી અને ચારા વ્યવસ્થાપન", paragraphs: ["પ્રથમ કાપણી વાવણી બાદ 50–55 દિવસમાં કરવી. ત્યારબાદ પાકની વૃદ્ધિ મુજબ આશરે એક મહિનાના અંતરે, છોડ 50–60 સેન્ટિમીટર ઊંચા થાય ત્યારે કાપણી કરવી.", "યોગ્ય પરિસ્થિતિમાં નવેમ્બરથી મે સુધી આશરે 5–6 કાપણી મેળવી શકાય છે. ચારો તાજો ખવડાવવો અથવા યોગ્ય રીતે સંગ્રહિત કરવો."] },
      { title: "6. નીંદણ વ્યવસ્થાપન", paragraphs: ["રાઈગ્રાસ શાકનાશક દવાઓ પ્રત્યે સંવેદનશીલ છે. નિષ્ણાતની સલાહ વિના તેનો ઉપયોગ ન કરવો. ખેતરને નીંદણમુક્ત રાખવું અને જરૂર પડે ત્યારે હાથથી નીંદણ દૂર કરવું."] },
      { title: "7. પાક સંરક્ષણ", paragraphs: ["પાકનું નિયમિત નિરીક્ષણ કરવું. માત્ર સ્થાનિક રીતે મંજૂર દવાઓનો ઉપયોગ કરવો, લેબલની સૂચના માનવી અને પશુઓને ચારો આપતા પહેલાં જરૂરી રાહ સમયની પુષ્ટિ કરવી."] },
    ],
  },
  {
    language: "मराठी",
    title: "चारा रायग्रास लागवडीसाठी पॅकेज ऑफ प्रॅक्टिस",
    sections: [
      { title: "1. हवामान आणि जमीन", paragraphs: ["चारा रायग्रास हे थंड हंगामातील चारा पीक आहे. थंड आणि मध्यम हवामानात त्याची चांगली वाढ होते. 6–8°C पेक्षा कमी तापमानात वाढीवर परिणाम होऊ शकतो.", "हे पीक सुपीक, उत्तम निचऱ्याच्या, मध्यम ते भारी आणि ओलावा टिकवणाऱ्या जमिनीत चांगले वाढते. शेत तणमुक्त, सपाट आणि जमीन भुसभुशीत असावी."] },
      { title: "2. लागवड पद्धती", paragraphs: ["पेरणी सप्टेंबरच्या शेवटच्या आठवड्यापासून ऑक्टोबरच्या पहिल्या आठवड्यापर्यंत करावी. बियाणे प्रमाण साधारण 3–4 किलो प्रति एकर ठेवावे.", "ओलसर जमिनीत बियाण्यांची समान पेरणी करावी. समान वितरणासाठी बियाणे बारीक ओलसर माती किंवा वाळूसोबत मिसळून हलके रेकिंग करावे व लगेच पाणी द्यावे. ओळींमध्ये 25–30 सेंटीमीटर अंतर ठेवता येते."] },
      { title: "3. शेणखत आणि रासायनिक खते", paragraphs: ["पेरणीपूर्वी पूर्णपणे कुजलेले शेणखत 15–20 टन प्रति एकर द्यावे."], bullets: ["पेरणीच्या वेळी: 15 किलो नत्र किंवा साधारण 33 किलो युरिया प्रति एकर.", "पेरणीनंतर 30 दिवसांनी: 15 किलो नत्र किंवा साधारण 33 किलो युरिया प्रति एकर.", "प्रत्येक कापणीनंतर: 30 किलो नत्र किंवा साधारण 66 किलो युरिया प्रति एकर.", "खताचे प्रमाण माती परीक्षण आणि स्थानिक कृषी तज्ज्ञांच्या सल्ल्यानुसार ठरवावे."] },
      { title: "4. पाणी व्यवस्थापन", paragraphs: [], bullets: ["पेरणीनंतर लगेच पहिले आणि साधारण 5–6 दिवसांनी दुसरे पाणी द्यावे.", "त्यानंतर जमीन व हवामानानुसार साधारण 10 दिवसांच्या अंतराने पाणी द्यावे.", "प्रत्येक कापणीनंतर पुन्हा वाढीसाठी पाणी द्यावे आणि शेतात पाणी साचू देऊ नये."] },
      { title: "5. कापणी आणि चारा व्यवस्थापन", paragraphs: ["पहिली कापणी पेरणीनंतर साधारण 50–55 दिवसांनी करावी. त्यानंतर पिकाच्या वाढीनुसार महिन्याच्या अंतराने, झाडे 50–60 सेंटीमीटर उंच झाल्यावर कापणी करावी.", "योग्य परिस्थितीत नोव्हेंबर ते मे दरम्यान साधारण 5–6 कापण्या मिळू शकतात. चारा ताजा खाऊ घालावा किंवा योग्य पद्धतीने साठवावा."] },
      { title: "6. तण व्यवस्थापन", paragraphs: ["रायग्रास तणनाशकांना संवेदनशील आहे. तज्ज्ञांच्या सल्ल्याशिवाय तणनाशक वापरू नये. शेत तणमुक्त ठेवावे आणि गरजेनुसार हाताने तण काढावे."] },
      { title: "7. पीक संरक्षण", paragraphs: ["पिकाची नियमित पाहणी करावी. केवळ स्थानिक पातळीवर मंजूर उत्पादने वापरावीत, लेबलवरील सूचना पाळाव्यात आणि पशूंना चारा देण्यापूर्वी आवश्यक प्रतीक्षा कालावधी तपासावा."] },
    ],
  },
];

const MadhurGrass = () => (
  <main className="min-h-screen bg-background">
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex max-w-4xl items-start gap-4 px-4 py-6 md:gap-6 md:py-8">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted/50 shadow-md md:h-28 md:w-28">
          <img src={companyLogo} alt="Adityaraj Agri Genetics logo" className="h-full w-full object-contain p-2" />
        </div>
        <div className="min-w-0 flex-1 pt-1">
          <h1 className="mb-3 text-xl font-bold leading-tight text-foreground md:text-3xl">ADITYARAJ AGRI GENETICS<br />PVT. LTD.</h1>
          <div className="space-y-0.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
            <p>S-16, Kanku Complex, Opp. Welcome Party Plot,</p>
            <p>Modhera Road, Nagalpur, Mehsana, Gujarat, 384002</p>
            <p className="mt-1.5">Customer Care: +91 99254 41144</p>
            <p className="break-words">Email: adityarajagrigenetics@gmail.com</p>
          </div>
        </div>
      </div>
    </header>

    <section className="border-b border-border/30 py-6 md:py-8">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Madhur Grass</h2>
        <p className="mt-2 text-lg text-muted-foreground">Multicut Fodder Ryegrass · મધુર ઘાસ · मधुर घास</p>
      </div>
    </section>

    <section className="py-8 md:py-10">
      <div className="container mx-auto max-w-4xl px-4">
        <img src={productAsset.url} alt="Madhur Grass multicut fodder seed package" className="mx-auto w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </section>

    <section className="pb-10">
      <div className="container mx-auto max-w-4xl space-y-8 px-4">
        {guides.map((guide) => (
          <Card key={guide.language} className="p-5 md:p-8">
            <p className="mb-2 text-sm font-semibold uppercase text-muted-foreground">{guide.language}</p>
            <h3 className="text-xl font-bold text-primary md:text-2xl">{guide.title}</h3>
            <Separator className="my-6" />
            <div className="space-y-4">
              {guide.sections.map((section) => (
                <div key={section.title} className="rounded-lg bg-muted/50 p-4">
                  <h4 className="mb-2 font-semibold text-primary">{section.title}</h4>
                  <div className="space-y-2 text-sm leading-relaxed text-foreground">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && (
                      <ul className="list-disc space-y-1 pl-5">
                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
        <aside className="rounded-lg border-l-4 border-primary bg-muted p-4 text-sm text-muted-foreground">
          Seed rate, fertilizer, irrigation, and crop-protection practices may vary by variety, soil, weather, and local recommendations. Consult a local agricultural expert before use.
        </aside>
      </div>
    </section>

    <footer className="border-t border-border bg-card py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">© 2026 Adityaraj Agri Genetics Pvt. Ltd. All rights reserved.</div>
    </footer>
  </main>
);

export default MadhurGrass;