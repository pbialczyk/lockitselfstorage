import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Boksy from "./pages/Boksy";
import BoksDetail from "./pages/BoksDetail";
import Lokalizacje from "./pages/Lokalizacje";
import SelfStorageSzczecin from "./pages/SelfStorageSzczecin";
import SegmentPage from "./pages/SegmentPage";
import ServicePage from "./pages/ServicePage";
import Poradnik from "./pages/Poradnik";
import BlogPost from "./pages/BlogPost";
import ONas from "./pages/ONas";
import FAQPage from "./pages/FAQPage";
import Kontakt from "./pages/Kontakt";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Ekspansja from "./pages/Ekspansja";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/boksy" element={<Boksy />} />
          <Route path="/boksy/:slug" element={<BoksDetail />} />
          <Route path="/lokalizacje" element={<Lokalizacje />} />
          <Route path="/self-storage-szczecin" element={<SelfStorageSzczecin />} />
          <Route path="/dla-klientow-indywidualnych" element={<SegmentPage />} />
          <Route path="/dla-firm" element={<SegmentPage />} />
          <Route path="/remont-przeprowadzka" element={<SegmentPage />} />
          <Route path="/archiwum-dokumentow" element={<SegmentPage />} />
          <Route path="/dla-studentow" element={<SegmentPage />} />
          <Route path="/transport-przeprowadzka" element={<ServicePage />} />
          <Route path="/ubezpieczenie" element={<ServicePage />} />
          <Route path="/pakowanie-organizacja" element={<ServicePage />} />
          <Route path="/poradnik" element={<Poradnik />} />
          <Route path="/poradnik/:slug" element={<BlogPost />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
          <Route path="/ekspansja" element={<Ekspansja />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
