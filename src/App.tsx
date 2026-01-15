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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
