import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import boksS from "@/assets/boks-s.png";
import boksM from "@/assets/boks-m.png";
import boksL from "@/assets/boks-l.png";

const boxes = [
  {
    label: "S", name: "Boks S", subtitle: "3 m² · boks mały", size: "150×200×200 cm", image: boksS,
    desc: "Idealna komórka lokatorska na kartony, drobne meble czy narzędzia ogrodowe. Mieści towar z 6 europalet.",
    price: "od 125", priceRegular: "250",
    link: "/boksy/boks-s-szczecin",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=32769a88-77d9-ef11-88f8-000d3a1d3d62",
  },
  {
    label: "M", name: "Boks M", subtitle: "6 m² · boks średni", size: "200×300×200 cm",
    desc: "Doskonałe rozwiązanie do przechowywania rowerów, motoru, nart lub mebli z mieszkania do 50 m². Mieści towar z 12 europalet.",
    price: "od 175", priceRegular: "350", image: boksM,
    link: "/boksy/boks-m-szczecin",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=531f0bd3-77d9-ef11-88f8-000d3a1d3d62",
    featured: true,
  },
  {
    label: "L", name: "Boks L", subtitle: "12 m² · boks duży", size: "200×600×200 cm",
    desc: "Duża przestrzeń często wybierana przez firmy. Idealna dla mebli, sprzętu, maszyn i materiałów budowlanych. Aż 24 m³!",
    price: "od 250", priceRegular: "500", image: boksL,
    link: "/boksy/boks-l-szczecin",
    ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=93bd21f7-77d9-ef11-88f8-000d3a1d3d62",
  },
];

const Boksy = () => (
  <Layout
    title="Boksy magazynowe i cennik"
    description="Boksy magazynowe self storage w Szczecinie. Boks S (3m²), Boks M (6m²), Boks L (12m²). Ceny od 125 zł/mies. Wynajem online w 5 minut."
    canonical="/boksy"
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Boksy magazynowe LOCKIT Szczecin",
      itemListElement: boxes.map((b, i) => ({
        "@type": "ListItem", position: i + 1, name: b.name, url: `https://lockit.pl${b.link}`,
      })),
    }}
  >
    <section className="section-padding bg-brand-deep">
      <div className="container-wide mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">Boksy i cennik</h1>
        <p className="text-brand-light/80 max-w-2xl mx-auto text-lg">
          Wybierz rozmiar boksu dopasowany do swoich potrzeb. Wszystkie dostępne w obiekcie przy ul. Gdańskiej 14C w Szczecinie.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {boxes.map((box, i) => (
            <motion.div
              key={box.label}
              className={`rounded-2xl overflow-hidden border-2 bg-card hover:-translate-y-2 hover:shadow-2xl transition-all ${
                box.featured ? "border-brand scale-[1.03]" : "border-border"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {box.featured && (
                <div className="gradient-brand text-primary-foreground text-center py-2 text-xs font-bold tracking-wide uppercase">
                  Najpopularniejszy
                </div>
              )}
              <div className="p-8 text-center">
                <img src={box.image} alt={box.name} className="w-40 h-auto mx-auto mb-4" />
                <div className="text-4xl font-extrabold text-brand mb-2">{box.label}</div>
                <h2 className="text-xl font-bold text-foreground">{box.name}</h2>
                <p className="text-muted-foreground text-sm mb-1">{box.subtitle}</p>
                <p className="text-muted-foreground text-xs mb-4">{box.size}</p>
                <p className="text-sm text-foreground mb-6">{box.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-foreground">{box.price}</span>
                  <span className="text-muted-foreground text-sm"> zł/mies.</span>
                  <div className="text-xs text-muted-foreground line-through">{box.priceRegular} zł/mies.</div>
                  <div className="text-xs text-accent font-semibold mt-1">-50% przez pierwszy miesiąc</div>
                </div>
                <a
                  href={box.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block gradient-brand text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-opacity mb-3"
                >
                  Wynajmij teraz
                </a>
                <Link to={box.link} className="text-brand text-sm font-semibold hover:underline">
                  Szczegóły boksu →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Boksy;
