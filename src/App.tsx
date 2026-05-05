import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import LangSync from "./i18n/LangSync";

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

const routeDefs: { path: string; element: JSX.Element }[] = [
  { path: "/", element: <Index /> },
  { path: "/boksy", element: <Boksy /> },
  { path: "/boksy/:slug", element: <BoksDetail /> },
  { path: "/lokalizacje", element: <Lokalizacje /> },
  { path: "/self-storage-szczecin", element: <SelfStorageSzczecin /> },
  { path: "/dla-klientow-indywidualnych", element: <SegmentPage /> },
  { path: "/dla-firm", element: <SegmentPage /> },
  { path: "/remont-przeprowadzka", element: <SegmentPage /> },
  { path: "/archiwum-dokumentow", element: <SegmentPage /> },
  { path: "/dla-studentow", element: <SegmentPage /> },
  { path: "/transport-przeprowadzka", element: <ServicePage /> },
  { path: "/ubezpieczenie", element: <ServicePage /> },
  { path: "/pakowanie-organizacja", element: <ServicePage /> },
  { path: "/poradnik", element: <Poradnik /> },
  { path: "/poradnik/:slug", element: <BlogPost /> },
  { path: "/o-nas", element: <ONas /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/kontakt", element: <Kontakt /> },
  { path: "/polityka-prywatnosci", element: <PolitykaPrywatnosci /> },
  { path: "/ekspansja", element: <Ekspansja /> },
];

const App = () => (
  <BrowserRouter>
    <LangSync />
    <Suspense fallback={<PageFallback />}>
      <Routes>
        {routeDefs.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        {routeDefs.map((r) => (
          <Route
            key={`en${r.path}`}
            path={r.path === "/" ? "/en" : `/en${r.path}`}
            element={r.element}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
