import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";

const boksData: Record<string, {
  label: string; name: string; h1: string; area: string; size: string;
  desc: string; price: string; priceRegular: string;
  ctaLink: string; frazy: string[];
  content: string[];
}> = {
  "boks-s-szczecin": {
    label: "S", name: "Boks S", h1: "Boks S — 3 m² self storage Szczecin",
    area: "3 m²", size: "150×200×200 cm",
    desc: "Mały boks magazynowy idealny jako komórka lokatorska do przechowywania kartonów, drobnych mebli, narzędzi ogrodowych czy sprzętu sportowego.",
    price: "od 125", priceRegular: "250",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=32769a88-77d9-ef11-88f8-000d3a1d3d62",
    frazy: ["boks 3m² Szczecin", "mały magazyn Szczecin", "schowek na rzeczy Szczecin"],
    content: [
      "Boks S to najmniejszy z naszych boksów magazynowych, idealny dla osób, które potrzebują niewielkiej, ale bezpiecznej przestrzeni. Powierzchnia 3 m² (150×200×200 cm) pozwala przechować kartony, drobne meble, rowery, narzędzia ogrodowe czy rzeczy sezonowe.",
      "Każdy boks jest zamykany na indywidualną kłódkę, monitorowany 24/7 i ubezpieczony. Dostęp do magazynu masz o każdej porze dnia i nocy, 7 dni w tygodniu.",
      "Boks S mieści towar z 6 europalet — to oznacza, że zmieścisz w nim wyposażenie pokoju studenckiego, sezonowe ubrania, dokumenty firmowe lub drobny sprzęt sportowy.",
    ],
  },
  "boks-m-szczecin": {
    label: "M", name: "Boks M", h1: "Boks M — 6 m² self storage Szczecin",
    area: "6 m²", size: "200×300×200 cm",
    desc: "Średni boks magazynowy — najpopularniejszy wybór. Idealny na meble z mieszkania, rowery, motor, narty i rzeczy osobiste.",
    price: "od 175", priceRegular: "350",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=531f0bd3-77d9-ef11-88f8-000d3a1d3d62",
    frazy: ["boks 6m² Szczecin", "wynajem magazynu 6m² Szczecin", "self storage Szczecin"],
    content: [
      "Boks M to nasz najpopularniejszy rozmiar — 6 m² (200×300×200 cm) to idealna przestrzeń do przechowywania mebli z mieszkania o powierzchni do 50 m², rowerów, motoru, nart i innych sprzętów.",
      "To doskonałe rozwiązanie na czas remontu, przeprowadzki lub gdy po prostu potrzebujesz więcej miejsca w domu. Mieści towar z 12 europalet.",
      "Boks jest dostępny 24/7, monitorowany i ubezpieczony. Wynajem online w 5 minut — bez wizyt, bez dokumentów do podpisywania na miejscu.",
    ],
  },
  "boks-l-szczecin": {
    label: "L", name: "Boks L", h1: "Boks L — 12 m² self storage Szczecin",
    area: "12 m²", size: "200×600×200 cm",
    desc: "Duży boks magazynowy — aż 24 m³ przestrzeni. Często wybierany przez firmy do przechowywania mebli, maszyn, materiałów budowlanych i towarów.",
    price: "od 250", priceRegular: "500",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=93bd21f7-77d9-ef11-88f8-000d3a1d3d62",
    frazy: ["boks 12m² Szczecin", "duży magazyn Szczecin", "wynajem powierzchni magazynowej Szczecin"],
    content: [
      "Boks L to największy z naszych boksów — 12 m² (200×600×200 cm) daje aż 24 m³ przestrzeni. To duża powierzchnia, często wybierana przez firmy do przechowywania towarów, maszyn i materiałów budowlanych.",
      "Zmieścisz tu wyposażenie domu lub mieszkania o powierzchni nawet 100 m². To idealne rozwiązanie dla firm e-commerce, które potrzebują elastycznego zaplecza magazynowego.",
      "Wszystkie boksy L są monitorowane 24/7, ubezpieczone i dostępne o każdej porze. Faktura VAT dla firm. Możliwość wynajmu wielu boksów na specjalnych warunkach.",
    ],
  },
};

const BoksDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const boks = slug ? boksData[slug] : null;

  if (!boks) {
    return (
      <Layout title="Nie znaleziono boksu">
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground">Nie znaleziono boksu</h1>
          <Link to="/boksy" className="text-brand hover:underline mt-4 inline-block">← Wróć do oferty</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={boks.h1}
      description={boks.desc}
      canonical={`/boksy/${slug}`}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: boks.h1,
        description: boks.desc,
        provider: {
          "@type": "SelfStorage",
          name: "LOCKIT self storage",
          address: { "@type": "PostalAddress", streetAddress: "ul. Gdańska 14C", addressLocality: "Szczecin", postalCode: "70-661", addressCountry: "PL" },
        },
      }}
    >
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <div className="text-7xl font-extrabold text-brand-light/20 mb-4">{boks.label}</div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3">{boks.h1}</h1>
          <p className="text-brand-light/80 text-lg">{boks.desc}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-extrabold text-brand">{boks.area}</div>
              <div className="text-sm text-muted-foreground mt-1">Powierzchnia</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-extrabold text-brand">{boks.price}</div>
              <div className="text-sm text-muted-foreground mt-1">zł/miesiąc</div>
              <div className="text-xs text-muted-foreground line-through">{boks.priceRegular} zł</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-extrabold text-brand">{boks.size}</div>
              <div className="text-sm text-muted-foreground mt-1">Wymiary (szer×dł×wys)</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {boks.content.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Zarezerwuj {boks.name} już teraz</h2>
            <p className="text-muted-foreground mb-6">Wynajem online w 5 minut. Bez wizyt, bez zbędnych formalności.</p>
            <a
              href={boks.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Wynajmij {boks.name} →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BoksDetail;
