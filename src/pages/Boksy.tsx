import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LLink from "@/i18n/LLink";
import boksS from "@/assets/boks-s.webp";
import boksM from "@/assets/boks-m.webp";
import boksL from "@/assets/boks-l.webp";

const meta = [
  { label: "S", image: boksS, size: "150×200×200 cm", price: "od 125", priceEn: "from 125", priceRegular: "250", link: "/boksy/boks-s-szczecin", ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=32769a88-77d9-ef11-88f8-000d3a1d3d62" },
  { label: "M", image: boksM, size: "200×300×200 cm", price: "od 175", priceEn: "from 175", priceRegular: "350", link: "/boksy/boks-m-szczecin", ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=531f0bd3-77d9-ef11-88f8-000d3a1d3d62", featured: true },
  { label: "L", image: boksL, size: "200×600×200 cm", price: "od 250", priceEn: "from 250", priceRegular: "500", link: "/boksy/boks-l-szczecin", ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=93bd21f7-77d9-ef11-88f8-000d3a1d3d62" },
];

const Boksy = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const boxes = (t("boksyPage.boxes", { returnObjects: true }) as { name: string; subtitle: string; desc: string }[]) || [];
  return (
    <Layout title={t("boksyPage.title")} description={t("boksyPage.description")} canonical="/boksy"
      jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", name: "Boksy magazynowe LOCKIT Szczecin",
        itemListElement: meta.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: boxes[i]?.name || b.label, url: `https://lockit.pl${b.link}` })) }}>
      <section className="section-padding bg-brand-deep">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">{t("boksyPage.h1")}</h1>
          <p className="text-brand-light/80 max-w-2xl mx-auto text-lg">{t("boksyPage.sub")}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {meta.map((box, i) => {
              const tBox = boxes[i];
              if (!tBox) return null;
              return (
                <motion.div key={box.label} className={`rounded-2xl overflow-hidden border-2 bg-card hover:-translate-y-2 hover:shadow-2xl transition-all ${box.featured ? "border-brand scale-[1.03]" : "border-border"}`}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                  {box.featured && <div className="gradient-brand text-primary-foreground text-center py-2 text-xs font-bold tracking-wide uppercase">{t("offer.featured")}</div>}
                  <div className="p-8 text-center">
                    <img src={box.image} alt={tBox.name} className="w-40 h-auto mx-auto mb-4" />
                    <div className="text-4xl font-extrabold text-brand mb-2">{box.label}</div>
                    <h2 className="text-xl font-bold text-foreground">{tBox.name}</h2>
                    <p className="text-muted-foreground text-sm mb-1">{tBox.subtitle}</p>
                    <p className="text-muted-foreground text-xs mb-4">{box.size}</p>
                    <p className="text-sm text-foreground mb-6">{tBox.desc}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-extrabold text-foreground">{isEn ? box.priceEn : box.price}</span>
                      <span className="text-muted-foreground text-sm"> {t("common.monthAbbr")}</span>
                      <div className="text-xs text-muted-foreground line-through">{box.priceRegular} {t("common.monthAbbr")}</div>
                      <div className="text-xs text-accent font-semibold mt-1">{t("common.discount")}</div>
                    </div>
                    <a href={box.ctaLink} target="_blank" rel="noopener noreferrer" className="block gradient-brand text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-opacity mb-3">{t("common.rentNow")}</a>
                    <LLink to={box.link} className="text-brand text-sm font-semibold hover:underline">{t("boksyPage.detailsLink")}</LLink>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Boksy;
