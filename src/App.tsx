import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aditya44 from "./pages/Aditya44";
import Aditya22 from "./pages/Aditya22";
import Aditya55 from "./pages/Aditya55";
import Okra from "./pages/Okra";
import Rasili from "./pages/Rasili";
import Rasna from "./pages/Rasna";
import FodderBajra from "./pages/FodderBajra";
import ResearchGuwar from "./pages/ResearchGuwar";
import ResearchCowpea from "./pages/ResearchCowpea";
import VitaraGrass from "./pages/VitaraGrass";
import Paras from "./pages/Paras";
import GumGuvar from "./pages/GumGuvar";
import Kalamoti from "./pages/Kalamoti";
import KrantiTal from "./pages/KrantiTal";
import BhaskarCastor from "./pages/BhaskarCastor";
import Dantiwada7Castor from "./pages/Dantiwada7Castor";
import UniqueBajra from "./pages/UniqueBajra";
import Bajra86A22 from "./pages/Bajra86A22";
import Sundram36 from "./pages/Sundram36";
import SundramSesamum from "./pages/SundramSesamum";
import SundramBajra from "./pages/SundramBajra";
import SundramBlackGold from "./pages/SundramBlackGold";
import SundramVeer from "./pages/SundramVeer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aditya-44" element={<Aditya44 />} />
          <Route path="/aditya-22" element={<Aditya22 />} />
          <Route path="/aditya-55" element={<Aditya55 />} />
          <Route path="/okra" element={<Okra />} />
          <Route path="/rasili" element={<Rasili />} />
          <Route path="/rasna" element={<Rasna />} />
          <Route path="/fodder-bajra" element={<FodderBajra />} />
          <Route path="/research-guwar" element={<ResearchGuwar />} />
          <Route path="/research-cowpea" element={<ResearchCowpea />} />
          <Route path="/vitara-grass" element={<VitaraGrass />} />
          <Route path="/paras" element={<Paras />} />
          <Route path="/gum-guvar" element={<GumGuvar />} />
          <Route path="/kalamoti" element={<Kalamoti />} />
          <Route path="/kranti-tal" element={<KrantiTal />} />
          <Route path="/bhaskar-castor" element={<BhaskarCastor />} />
          <Route path="/dantiwada7-castor" element={<Dantiwada7Castor />} />
          <Route path="/unique-bajra" element={<UniqueBajra />} />
          <Route path="/86a22" element={<Bajra86A22 />} />
          <Route path="/sundram-36" element={<Sundram36 />} />
          <Route path="/sundram-sesamum" element={<SundramSesamum />} />
          <Route path="/sundram-bajra" element={<SundramBajra />} />
          <Route path="/sundram-black-gold" element={<SundramBlackGold />} />
          <Route path="/sundram-veer" element={<SundramVeer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
