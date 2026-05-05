import Layout from "@/components/layout/Layout";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LLink from "@/i18n/LLink";
import boksS from "@/assets/boks-s.webp";
import boksM from "@/assets/boks-m.webp";
import boksL from "@/assets/boks-l.webp";

const meta: Record<string, { label: string; area: string; size: string; price: string; priceEn: string; priceRegular: string; image: string; ctaLink: string }> = {
  "boks-s-szczecin": { label: "S", area: "3 m²", size: "150×200×200 cm", price: "od 125", priceEn: "from 125", priceRegular: "250", image: boksS, ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=32769a88-77d9-ef11-88f8-000d3a1d3d62" },
  "boks-m-szczecin": { label: "M", area: "6 m²", size: "200×300×200 cm", price: "od 175", priceEn: "from 175", priceRegular: "350", image: boksM, ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=531f0bd3-77d9-ef11-88f8-000d3a1d3d62" },
  "boks-l-szczecin": { label: "L", area: "12 m²", size: "200×600×200 cm", price: "od 250", priceEn: "from 250", priceRegular: "500", image: boksL, ctaLink: "https://wynajmij.lockit.pl/rent?step=1&typeId=93bd21f7-77d9-ef11-88f8-000d3a1d3d62" },
};

const BoksDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const m = slug ? meta[slug] : null;
  const all = t("boksDetail.boxes", { returnObjects: true }) as Record<string, { name: string; h1: string; desc: string; content: string[] }>;
  const post = slug ? all[slug] : null;
  if (!m || !post) {
    return (
      <Layout title={t("boksDetail.notFound")}>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground">{t("boksDetail.notFound")}</h1>
          <LLink to="/boksy" className="text-brand hover:underline mt-4 inline-block">{t("boksDetail.backOffer")}</LLink>
        </div>
      </Layout>
    );
  }
  const isEn = i18n.language === "en";
  return (
    <Layout title={post.h1} description={post.desc} canonical={`/boksy/${slug}`}
      jsonLd={[{ "@context": "https://schema.org", "@type": "Service", name: post.h1, description: post.desc, provider: { "@type": "SelfStorage", name: "LOCKIT self storage", address: { "@type": "PostalAddress", streetAddress: "ul. Gdańska 14C", addressLocality: "Szczecin", postalCode: "70-661", addressCountry: "PL" } } }]}>
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <div className="text-7xl font-extrabold text-brand-light/20 mb-4">{m.label}</div>
          <img src={m.image} alt={post.name} className="w-52 h-auto mx-auto mb-4" />
          <h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3">{post.h1}</h1>
          <p className="text-brand-light/80 text-lg">{post.desc}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center"><div className="text-3xl font-extrabold text-brand">{m.area}</div><div className="text-sm text-muted-foreground mt-1">{t("boksDetail.area")}</div></div>
            <div className="bg-card border border-border rounded-xl p-6 text-center"><div className="text-3xl font-extrabold text-brand">{isEn ? m.priceEn : m.price}</div><div className="text-sm text-muted-foreground mt-1">{t("boksDetail.perMonth")}</div><div className="text-xs text-muted-foreground line-through">{m.priceRegular} {isEn ? "PLN" : "zł"}</div></div>
            <div className="bg-card border border-border rounded-xl p-6 text-center"><div className="text-3xl font-extrabold text-brand">{m.size}</div><div className="text-sm text-muted-foreground mt-1">{t("boksDetail.sizeLabel")}</div></div>
          </div>
          <div className="prose prose-lg max-w-none mb-12">
            {post.content.map((p, i) => (<p key={i} className="text-foreground leading-relaxed mb-4">{p}</p>))}
          </div>
          <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t("boksDetail.rentNow", { name: post.name })}</h2>
            <p className="text-muted-foreground mb-6">{t("boksDetail.rentSub")}</p>
            <a href={m.ctaLink} target="_blank" rel="noopener noreferrer" className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
              {t("boksDetail.rentBtn", { name: post.name })}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BoksDetail;
