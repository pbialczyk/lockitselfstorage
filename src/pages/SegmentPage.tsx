import Layout from "@/components/layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const segmentData: Record<string, {
  title: string; h1: string; description: string; canonical: string;
  intro: string; benefits: string[]; useCases: string[];
}> = {
  "/dla-klientow-indywidualnych": {
    title: "Self storage dla klientów indywidualnych Szczecin",
    h1: "Self storage dla klientów indywidualnych",
    description: "Self storage dla osób prywatnych w Szczecinie. Bezpieczne przechowywanie mebli, ubrań, sprzętu sportowego. Boksy od 3m², dostęp 24/7.",
    canonical: "/dla-klientow-indywidualnych",
    intro: "Szukasz bezpiecznego miejsca na swoje rzeczy? Nasze boksy magazynowe to idealne rozwiązanie dla osób prywatnych. Niezależnie od tego, czy potrzebujesz dodatkowej przestrzeni na meble, ubrania sezonowe, sprzęt sportowy czy pamiątki — mamy odpowiedni boks.",
    benefits: [
      "Bezpieczne przechowywanie z monitoringiem 24/7 i ubezpieczeniem",
      "Elastyczny okres najmu — bez długoterminowych zobowiązań",
      "Dostęp do boksu o każdej porze, 7 dni w tygodniu",
      "Prosta rezerwacja online w 5 minut",
      "Boksy od 3 m² — płać tylko za potrzebne metry",
    ],
    useCases: [
      "Przechowywanie mebli i rzeczy z mieszkania na czas remontu",
      "Sezonowe rzeczy — narty, rowery, ubrania zimowe/letnie",
      "Dodatkowa przestrzeń gdy brakuje miejsca w domu",
      "Pamiątki, albumy, kolekcje — wszystko bezpieczne i suche",
    ],
  },
  "/dla-firm": {
    title: "Self storage dla firm Szczecin — magazyn B2B",
    h1: "Self storage dla firm / B2B",
    description: "Elastyczny magazyn dla firm w Szczecinie. Faktura VAT, umowy długoterminowe, dedykowany dostęp. Boksy od 3m² do 12m². Idealne dla e-commerce.",
    canonical: "/dla-firm",
    intro: "Potrzebujesz elastycznego zaplecza magazynowego dla swojej firmy? LOCKIT self storage oferuje profesjonalne rozwiązania magazynowe dla przedsiębiorstw — od małych firm i e-commerce po firmy budowlane i kancelarie prawne.",
    benefits: [
      "Faktura VAT i umowy dostosowane do potrzeb firmy",
      "Elastyczna powierzchnia — zmień boks w każdym momencie",
      "Dostęp 24/7 — idealny do pracy zmianowej",
      "Monitoring, ochrona i ubezpieczenie w cenie",
      "Specjalne warunki przy wynajmie wielu boksów",
    ],
    useCases: [
      "Magazyn e-commerce — przechowywanie towarów i paczek",
      "Archiwum dokumentów firmowych z szybkim dostępem",
      "Magazyn narzędzi i materiałów budowlanych",
      "Przechowywanie sprzętu biurowego i reklamowego",
    ],
  },
  "/remont-przeprowadzka": {
    title: "Przechowywanie rzeczy podczas remontu i przeprowadzki Szczecin",
    h1: "Self storage na czas remontu i przeprowadzki",
    description: "Potrzebujesz miejsca na meble podczas remontu lub przeprowadzki? Boksy self storage w Szczecinie od 125 zł/mies. Krótki najem, szybka rezerwacja.",
    canonical: "/remont-przeprowadzka",
    intro: "Remont mieszkania? Przeprowadzka? Potrzebujesz miejsca na meble i rzeczy? Nasze boksy magazynowe są idealnym rozwiązaniem na czas, gdy Twoje mieszkanie jest niedostępne. Krótki lub długi najem, bez zobowiązań.",
    benefits: [
      "Krótki najem — nawet na jeden miesiąc",
      "Łatwy dojazd z centrum Szczecina",
      "Boks M (6 m²) mieści meble z mieszkania do 50 m²",
      "Szybka rezerwacja online bez wizyty w obiekcie",
      "Bezpieczne i suche warunki przechowywania",
    ],
    useCases: [
      "Meble i wyposażenie mieszkania na czas remontu kapitalnego",
      "Rzeczy osobiste między przeprowadzkami",
      "Sprzęt AGD/RTV na czas malowania i odnawiania",
      "Dokumenty i cenności wymagające bezpiecznego miejsca",
    ],
  },
  "/archiwum-dokumentow": {
    title: "Archiwum dokumentów firmowych Szczecin — przechowywanie akt",
    h1: "Archiwum dokumentów — bezpieczne przechowywanie akt",
    description: "Archiwizacja dokumentów firmowych w Szczecinie. Bezpieczne, suche i monitorowane boksy. Szybki dostęp 24/7. Faktura VAT.",
    canonical: "/archiwum-dokumentow",
    intro: "Obowiązek przechowywania dokumentów firmowych przez 5–50 lat to wyzwanie logistyczne. LOCKIT self storage oferuje bezpieczne, suche i monitorowane boksy do archiwizacji dokumentów — z szybkim dostępem 24/7.",
    benefits: [
      "Suche i bezpieczne warunki przechowywania dokumentów",
      "Monitoring 24/7 i ubezpieczenie",
      "Szybki dostęp — pobierz dokumenty kiedy chcesz",
      "Faktura VAT dla firm",
      "Boks S (3 m²) mieści setki segregatorów",
    ],
    useCases: [
      "Archiwum dokumentów księgowych i podatkowych",
      "Akta osobowe i umowy pracownicze",
      "Dokumentacja medyczna i prawna",
      "Dokumenty budowlane i projektowe",
    ],
  },
  "/dla-studentow": {
    title: "Self storage dla studentów Szczecin — tanie przechowywanie",
    h1: "Self storage dla studentów",
    description: "Tanie przechowywanie rzeczy dla studentów w Szczecinie. Boks od 125 zł/mies. Idealne na wakacje i przerwy międzysemestralne.",
    canonical: "/dla-studentow",
    intro: "Kończysz semestr i musisz opuścić akademik? Wyjeżdżasz na wakacje? Zamiast wozić wszystko do rodzinnego miasta, przechowaj rzeczy w bezpiecznym boksie LOCKIT. Boks S za 125 zł/mies. mieści wyposażenie całego pokoju studenckiego.",
    benefits: [
      "Najtańszy boks od 125 zł/miesięcznie",
      "Elastyczny najem — na miesiąc, semestr lub wakacje",
      "Boks S mieści wyposażenie pokoju studenckiego",
      "Prosta rezerwacja online ze smartfona",
      "Bez kaucji i ukrytych opłat",
    ],
    useCases: [
      "Przechowywanie rzeczy na czas wakacji",
      "Przerwa międzysemestralna — nie wozisz mebli do domu",
      "Wymiana akademika lub mieszkania studenckiego",
      "Rzeczy sezonowe — narty, rower, snowboard",
    ],
  },
};

const SegmentSection = ({ data, headingTag: H = "h2" }: { data: typeof segmentData[string]; headingTag?: "h1" | "h2" }) => (
  <>
    <section className="section-padding bg-brand-deep">
      <div className="container-narrow mx-auto text-center">
        <H className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">{data.h1}</H>
        <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">{data.intro}</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Korzyści</h2>
            <ul className="space-y-3">
              {data.benefits.map((b, i) => (
                <motion.li key={i} className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                >
                  <span className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-foreground">{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Zastosowania</h2>
            <ul className="space-y-3">
              {data.useCases.map((u, i) => (
                <motion.li key={i} className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                  <span className="text-foreground">{u}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

const SegmentPage = () => {
  const location = useLocation();
  const data = segmentData[location.pathname];

  if (!data) return null;

  return (
    <Layout title={data.title} description={data.description} canonical={data.canonical}
      jsonLd={{
        "@context": "https://schema.org", "@type": "Service",
        name: data.h1,
        description: data.description,
        provider: { "@type": "SelfStorage", name: "LOCKIT self storage", address: { "@type": "PostalAddress", streetAddress: "ul. Gdańska 14C", addressLocality: "Szczecin" } },
      }}
    >
      <SegmentSection data={data} headingTag="h1" />

      <section className="bg-background pt-4 pb-2">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(segmentData)
              .filter(([path]) => path !== location.pathname)
              .map(([path, d]) => (
                <Link
                  key={path}
                  to={path}
                  className="px-4 py-2 text-sm rounded-full border border-border bg-card text-foreground hover:border-brand hover:text-brand transition-colors"
                >
                  {d.h1}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Wynajmij boks już teraz</h2>
            <p className="text-muted-foreground mb-6">Wybierz rozmiar i wynajmij online w 5 minut.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wynajmij.lockit.pl" target="_blank" rel="noopener noreferrer"
                className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Wynajmij teraz →
              </a>
              <Link to="/boksy" className="inline-block border-2 border-brand text-brand px-8 py-4 rounded-lg font-bold hover:bg-brand hover:text-primary-foreground transition-colors">
                Zobacz cennik
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SegmentPage;
