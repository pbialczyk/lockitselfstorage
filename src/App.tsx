import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

// Lazy-loaded routes for code splitting
const NotFound = lazy(() => import("./pages/NotFound"));
const Boksy = lazy(() => import("./pages/Boksy"));
const BoksDetail = lazy(() => import("./pages/BoksDetail"));
const Lokalizacje = lazy(() => import("./pages/Lokalizacje"));
const SelfStorageSzczecin = lazy(() => import("./pages/SelfStorageSzczecin"));
const SegmentPage = lazy(() => import("./pages/SegmentPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Poradnik = lazy(() => import("./pages/Poradnik"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ONas = lazy(() => import("./pages/ONas"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const PolitykaPrywatnosci = lazy(() => import("./pages/PolitykaPrywatnosci"));
const Ekspansja = lazy(() => import("./pages/Ekspansja"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<PageFallback />}>
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
    </Suspense>
  </BrowserRouter>
);

export default App;
