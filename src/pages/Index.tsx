import { motion } from "framer-motion";
import { Clock, Shield, CalendarDays, Package, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-storage.jpg";
import boksS from "@/assets/boks-s.png";
import boksM from "@/assets/boks-m.png";
import boksL from "@/assets/boks-l.png";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  name: "LOCKIT self storage",
  description: "Samoobsługowe boksy magazynowe w Szczecinie. Bezpieczne, nowoczesne, dostępne 24/7.",
  url: "https://lockit.pl",
  telephone: "+48666030717",
  email: "info@lockit.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Gdańska 14C",
    addressLocality: "Szczecin",
    postalCode: "70-661",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "53.4285",
    longitude: "14.5528",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

const features = [
  { icon: Clock, title: "Dostęp 24/7", desc: "Dostęp do magazynu 24h, 7 dni w tygodniu" },
  { icon: Shield, title: "Bezpieczeństwo", desc: "Monitoring, ochrona i ubezpieczenie rzeczy" },
  { icon: CalendarDays, title: "Elastyczny najem", desc: "Wynajmij na dowolny okres — bez zobowiązań" },
  { icon: Package, title: "Od 3 m²", desc: "Płać tylko za metraż, który naprawdę potrzebujesz" },
  { icon: MapPin, title: "Świetna lokalizacja", desc: "ul. Gdańska 14C — łatwy dojazd z centrum" },
  { icon: Users, title: "Dla każdego", desc: "Oferta dla firm, osób prywatnych i studentów" },
];

const boxes = [
  {
    label: "S",
    name: "Boks S — 3 m²",
    size: "150×200×200 cm",
    desc: "Idealna komórka lokatorska na kartony, drobne meble czy narzędzia ogrodowe.",
    price: "od 125",
    priceRegular: "250",
    link: "/boksy/boks-s-szczecin",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=32769a88-77d9-ef11-88f8-000d3a1d3d62",
  },
  {
    label: "M",
    name: "Boks M — 6 m²",
    size: "200×300×200 cm",
    desc: "Doskonały do przechowywania rowerów, motoru, nart lub mebli z mieszkania do 50 m².",
    price: "od 175",
    priceRegular: "350",
    link: "/boksy/boks-m-szczecin",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=531f0bd3-77d9-ef11-88f8-000d3a1d3d62",
    featured: true,
  },
  {
    label: "L",
    name: "Boks L — 12 m²",
    size: "200×600×200 cm",
    desc: "Duża przestrzeń na meble, sprzęt, maszyny i materiały budowlane. Aż 24 m³!",
    price: "od 250",
    priceRegular: "500",
    link: "/boksy/boks-l-szczecin",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=93bd21f7-77d9-ef11-88f8-000d3a1d3d62",
  },
];

const faqItems = [
  {
    q: "Czym jest LOCKIT Self Storage?",
    a: "Jesteśmy szczecińską firmą specjalizującą się w wynajmie samoobsługowych boksów magazynowych. Pomagamy klientom indywidualnym i firmom przechowywać rzeczy w bezpiecznych, monitorowanych magazynach dostępnych 24/7.",
  },
  {
    q: "Czy magazyny są bezpieczne?",
    a: "Bezpieczeństwo przechowywanych rzeczy jest dla nas najważniejsze. Każdy magazyn jest zabezpieczony przed dostępem osób nieupoważnionych. Monitoring i ochrona obiektu działają bez przerwy. Dodatkowo ubezpieczamy wszystko co jest magazynowane.",
  },
  {
    q: "Jak wynająć magazyn?",
    a: "Umowę najmu zawrzesz online w 5 minut. Wybierasz boks, zakładasz konto, płacisz pierwszy czynsz i możesz od razu przywieźć swoje rzeczy. Zrezygnować możesz w każdym momencie.",
  },
  {
    q: "Jak duży magazyn potrzebuję?",
    a: "Boks S (3 m²) — mieszkanie studenckie. Boks M (6 m²) — mieszkanie do 50 m². Boks L (12 m²) — dom do 100 m² lub magazyn firmowy. Zawsze możesz zmienić rozmiar.",
  },
  {
    q: "Co mogę przechować?",
    a: "Praktycznie wszystko — meble, sprzęt sportowy, dokumenty, towary firmowe, narzędzia. Nie przechowujemy jedynie broni, materiałów łatwopalnych, żywych organizmów i substancji niedozwolonych.",
  },
];

const segments = [
  { title: "Klient indywidualny", href: "/dla-klientow-indywidualnych", desc: "Przechowaj swoje rzeczy bezpiecznie" },
  { title: "Dla firm / B2B", href: "/dla-firm", desc: "Elastyczny magazyn dla Twojej firmy" },
  { title: "Remont i przeprowadzka", href: "/remont-przeprowadzka", desc: "Bezpieczne miejsce na czas remontu" },
  { title: "Archiwum dokumentów", href: "/archiwum-dokumentow", desc: "Przechowywanie akt i dokumentacji" },
  { title: "Dla studentów", href: "/dla-studentow", desc: "Tanie przechowywanie na wakacje" },
];

const Index = () => {
  return (
    <Layout
      canonical="/"
      jsonLd={LOCAL_BUSINESS_JSONLD}
    >
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Magazyn na miarę{" "}
            <span className="text-gradient-brand">Twoich potrzeb</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-hero-muted mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Samoobsługowe boksy magazynowe w Szczecinie. Bezpieczne, nowoczesne, dostępne 24/7. Wynajem online w 5 minut.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="https://wynajmij.lockit.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand text-foreground px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              Wynajmij teraz
            </a>
            <a
              href="tel:+48666030717"
              className="border-2 border-brand-light/30 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-light/10 transition-colors"
            >
              Zadzwoń — doradzimy
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding bg-background" id="uslugi">
        <div className="container-wide mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-foreground mb-4">
            Przechowaj swoje rzeczy u nas
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Nasze boksy magazynowe są idealnym rozwiązaniem — bezpieczne, nowoczesne i przystosowane do różnych potrzeb.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER / BOXES */}
      <section className="section-padding bg-brand-deep" id="oferta">
        <div className="container-wide mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-primary-foreground mb-4">
            Nasza oferta
          </h2>
          <p className="text-center text-brand-light/80 max-w-xl mx-auto mb-12">
            Wybierz boks dopasowany do swoich potrzeb. Wszystkie boksy są dostępne w naszym obiekcie przy ul. Gdańskiej 14C w Szczecinie.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {boxes.map((box, i) => (
              <motion.div
                key={box.label}
                className={`rounded-2xl overflow-hidden border-2 transition-all hover:-translate-y-2 hover:shadow-2xl ${
                  box.featured
                    ? "border-accent bg-brand/50 scale-[1.03]"
                    : "border-brand/40 bg-brand/30"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {box.featured && (
                  <div className="bg-accent text-accent-foreground text-center py-1.5 text-xs font-bold tracking-wide uppercase">
                    Najpopularniejszy
                  </div>
                )}
                <div className="p-6 text-center">
                  <img src={box.label === "S" ? boksS : box.label === "M" ? boksM : boksL} alt={box.name} className="w-32 h-auto mx-auto mb-3" />
                  <div className="text-3xl font-extrabold text-primary-foreground mb-2">{box.label}</div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-1">{box.name}</h3>
                  <p className="text-sm text-brand-light/70 mb-1">{box.size}</p>
                  <p className="text-sm text-brand-light/80 mb-4">{box.desc}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-primary-foreground">{box.price}</span>
                    <span className="text-brand-light/60 text-sm"> zł/mies.</span>
                    <div className="text-xs text-brand-light/50 line-through">{box.priceRegular} zł/mies.</div>
                    <div className="text-xs text-accent font-semibold mt-1">-50% przez pierwszy miesiąc</div>
                  </div>
                  <div className="space-y-2">
                    <a
                      href={box.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block gradient-brand text-foreground py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                    >
                      Wynajmij teraz
                    </a>
                    <Link
                      to={box.link}
                      className="block text-brand-light/70 hover:text-primary-foreground py-2 text-sm transition-colors"
                    >
                      Dowiedz się więcej →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-foreground mb-4">
            Dla kogo jest self storage?
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Niezależnie od tego, czy jesteś osobą prywatną, firmą czy studentem — mamy idealne rozwiązanie magazynowe.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={seg.href}
                  className="block p-6 rounded-xl border border-border bg-card hover:border-brand hover:shadow-lg transition-all group"
                >
                  <h3 className="font-bold text-foreground group-hover:text-brand transition-colors mb-2">{seg.title}</h3>
                  <p className="text-sm text-muted-foreground">{seg.desc}</p>
                  <span className="text-brand text-sm font-semibold mt-3 inline-block">Dowiedz się więcej →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary" id="faq">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold text-foreground mb-12">
            Pytania i odpowiedzi
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link to="/faq" className="text-brand font-semibold hover:underline">
              Zobacz wszystkie pytania →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-padding bg-background" id="kontakt">
        <div className="container-narrow mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-muted-foreground mb-8">
            Masz pytania? Zadzwoń lub napisz — doradzimy i pomożemy wybrać odpowiedni boks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+48666030717"
              className="inline-flex items-center justify-center gap-2 gradient-brand text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              📞 +48 666 030 717
            </a>
            <a
              href="mailto:info@lockit.pl"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand text-brand px-6 py-3 rounded-lg font-bold hover:bg-brand hover:text-primary-foreground transition-colors"
            >
              ✉️ info@lockit.pl
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            ul. Gdańska 14C, 70-661 Szczecin · Dostęp 24/7
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
