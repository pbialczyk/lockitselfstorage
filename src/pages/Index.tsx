import { useState, useEffect } from "react";
import { Clock, Shield, CalendarDays, Package, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import boksS from "@/assets/boks-s-256.webp";
import boksM from "@/assets/boks-m-256.webp";
import boksL from "@/assets/boks-l-256.webp";
import Layout from "@/components/layout/Layout";
import LLink from "@/i18n/LLink";
import { useInView } from "@/hooks/useInView";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewsSection from "@/components/ReviewsSection";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  name: "LOCKIT self storage",
  url: "https://lockit.pl",
  telephone: "+48666030717",
  email: "info@lockit.pl",
  address: { "@type": "PostalAddress", streetAddress: "ul. Gdańska 14C", addressLocality: "Szczecin", postalCode: "70-661", addressCountry: "PL" },
  geo: { "@type": "GeoCoordinates", latitude: "53.4285", longitude: "14.5528" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "00:00" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "40", bestRating: "5", worstRating: "1" },
  priceRange: "125–500 zł/mies.",
  image: "https://lockit.pl/og-image.jpg",
  sameAs: ["https://www.facebook.com/lockitselfstorageszczecin", "https://www.instagram.com/lockit.szczecin"],
};

const featureIcons = [Clock, Shield, CalendarDays, Package, MapPin, Users];

const boxesMeta = [
  { label: "S", image: boksS, w: 256, h: 236, price: "od 125", priceEn: "from 125", priceRegular: "250", link: "/boksy/boks-s-szczecin", ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=32769a88-77d9-ef11-88f8-000d3a1d3d62" },
  { label: "M", image: boksM, w: 256, h: 200, price: "od 175", priceEn: "from 175", priceRegular: "350", link: "/boksy/boks-m-szczecin", ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=531f0bd3-77d9-ef11-88f8-000d3a1d3d62", featured: true },
  { label: "L", image: boksL, w: 256, h: 181, price: "od 250", priceEn: "from 250", priceRegular: "500", link: "/boksy/boks-l-szczecin", ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=93bd21f7-77d9-ef11-88f8-000d3a1d3d62" },
];

const segmentHrefs = ["/dla-klientow-indywidualnych", "/dla-firm", "/remont-przeprowadzka", "/archiwum-dokumentow", "/dla-studentow"];

const AnimatedCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setShowVideo(true), { timeout: 3000 });
    } else {
      timeoutId = setTimeout(() => setShowVideo(true), 2000) as unknown as number;
    }
    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) (window as Window).cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  const features = (t("features.items", { returnObjects: true }) as { title: string; desc: string }[]) || [];
  const boxesT = (t("offer.boxes", { returnObjects: true }) as { name: string; desc: string }[]) || [];
  const segmentsT = (t("segments.items", { returnObjects: true }) as { title: string; desc: string }[]) || [];
  const faqItems = ((t("homeFaq.items", { returnObjects: true }) as { q: string; a: string }[]) || []);

  return (
    <Layout canonical="/" jsonLd={LOCAL_BUSINESS_JSONLD}>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <picture className="md:hidden">
          <source type="image/avif" srcSet="/hero/hero-storage-640.avif 640w, /hero/hero-storage-1024.avif 1024w" sizes="(max-width: 640px) 100vw, 640px" />
          <source type="image/webp" srcSet="/hero/hero-storage-640.webp 640w, /hero/hero-storage-1024.webp 1024w" sizes="(max-width: 640px) 100vw, 640px" />
          <img src="/hero/hero-storage-640.avif" alt="" fetchPriority="high" decoding="async" width={640} height={853} className="md:hidden absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        </picture>
        {showVideo && (
          <video autoPlay loop muted playsInline preload="none" className="absolute inset-0 w-full h-full object-cover">
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            {t("hero.title1")} <span className="text-gradient-brand">{t("hero.title2")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-hero-muted mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a href="https://wynajmij.lockit.pl" target="_blank" rel="noopener noreferrer" className="gradient-brand text-foreground px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity shadow-lg">{t("common.rentNow")}</a>
            <a href="tel:+48666030717" className="border-2 border-brand-light/30 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-light/10 transition-colors">{t("hero.callUs")}</a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background" id="uslugi">
        <div className="container-wide mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-foreground mb-4">{t("features.heading")}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">{t("features.sub")}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <AnimatedCard key={f.title} delay={i * 100} className="h-full">
                  <div className="h-full flex flex-col text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center mx-auto mb-3">
                      {Icon && <Icon className="w-6 h-6 text-primary-foreground" />}
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-deep" id="oferta">
        <div className="container-wide mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-primary-foreground mb-4">{t("offer.heading")}</h2>
          <p className="text-center text-brand-light/80 max-w-xl mx-auto mb-12">{t("offer.sub")}</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {boxesMeta.map((box, i) => {
              const tBox = boxesT[i];
              if (!tBox) return null;
              return (
                <AnimatedCard key={box.label} delay={i * 150} className="h-full">
                  <div className={`rounded-2xl overflow-hidden border-2 transition-all hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col ${box.featured ? "border-accent bg-brand/50 scale-[1.03]" : "border-brand/40 bg-brand/30"}`}>
                    {box.featured && <div className="bg-accent text-accent-foreground text-center py-1.5 text-xs font-bold tracking-wide uppercase">{t("offer.featured")}</div>}
                    <div className="p-6 text-center flex flex-col flex-1">
                      <img src={box.image} alt={tBox.name} className="w-32 h-auto mx-auto mb-3" loading="lazy" width={box.w} height={box.h} />
                      <div className="text-3xl font-extrabold text-primary-foreground mb-2">{box.label}</div>
                      <h3 className="text-lg font-bold text-primary-foreground mb-1">{tBox.name}</h3>
                      <p className="text-sm text-brand-light/80 mb-4 flex-1">{tBox.desc}</p>
                      <div className="mb-4">
                        <span className="text-3xl font-extrabold text-primary-foreground">{isEn ? box.priceEn : box.price}</span>
                        <span className="text-brand-light/60 text-sm"> {t("common.monthAbbr")}</span>
                        <div className="text-xs text-brand-light/50 line-through">{box.priceRegular} {t("common.monthAbbr")}</div>
                        <div className="text-xs text-accent font-semibold mt-1">{t("common.discount")}</div>
                      </div>
                      <div className="space-y-2 mt-auto">
                        <a href={box.ctaLink} target="_blank" rel="noopener noreferrer" className="block gradient-brand text-foreground py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">{t("common.rentNow")}</a>
                        <LLink to={box.link} className="block text-brand-light/70 hover:text-primary-foreground py-2 text-sm transition-colors">{t("common.learnMore")}</LLink>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-foreground mb-4">{t("segments.heading")}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">{t("segments.sub")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {segmentsT.map((seg, i) => (
              <AnimatedCard key={segmentHrefs[i]} delay={i * 100} className="h-full">
                <LLink to={segmentHrefs[i]} className="block p-6 rounded-xl border border-border bg-card hover:border-brand hover:shadow-lg transition-all group h-full flex flex-col">
                  <h3 className="font-bold text-foreground group-hover:text-brand transition-colors mb-2">{seg.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{seg.desc}</p>
                  <span className="text-brand text-sm font-semibold mt-3 inline-block">{t("common.learnMore")}</span>
                </LLink>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="section-padding bg-secondary" id="faq">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold text-foreground mb-12">{t("homeFaq.heading")}</h2>
          <FAQAccordion items={faqItems} />
          <div className="text-center mt-8">
            <LLink to="/faq" className="text-brand font-semibold hover:underline">{t("homeFaq.seeAll")}</LLink>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background" id="kontakt">
        <div className="container-narrow mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">{t("homeContact.heading")}</h2>
          <p className="text-muted-foreground mb-8">{t("homeContact.sub")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+48666030717" className="inline-flex items-center justify-center gap-2 gradient-brand text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">📞 +48 666 030 717</a>
            <a href="mailto:info@lockit.pl" className="inline-flex items-center justify-center gap-2 border-2 border-brand text-brand px-6 py-3 rounded-lg font-bold hover:bg-brand hover:text-primary-foreground transition-colors">✉️ info@lockit.pl</a>
          </div>
          <p className="text-sm text-muted-foreground">{t("homeContact.address")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
