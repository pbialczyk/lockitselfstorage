import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LLink from "@/i18n/LLink";
import { stripLang } from "@/i18n/LangSync";

type SegData = { title: string; h1: string; description: string; intro: string; benefits: string[]; useCases: string[] };

const SegmentSection = ({ data, headingTag: H = "h2", labels }: { data: SegData; headingTag?: "h1" | "h2"; labels: { benefits: string; useCases: string } }) => (
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
            <h2 className="text-2xl font-bold text-foreground mb-6">{labels.benefits}</h2>
            <ul className="space-y-3">
              {data.benefits.map((b, i) => (
                <motion.li key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <span className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-foreground">{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">{labels.useCases}</h2>
            <ul className="space-y-3">
              {data.useCases.map((u, i) => (
                <motion.li key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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
  const { t } = useTranslation();
  const base = stripLang(location.pathname);
  const allData = t("segmentsPage.data", { returnObjects: true }) as Record<string, SegData>;
  const data = allData[base];
  const labels = { benefits: t("segmentsPage.benefits"), useCases: t("segmentsPage.useCases") };

  if (!data) return null;

  return (
    <Layout title={data.title} description={data.description} canonical={base}
      jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: data.h1, description: data.description, provider: { "@type": "SelfStorage", name: "LOCKIT self storage" } }}
    >
      <SegmentSection data={data} headingTag="h1" labels={labels} />

      <section className="bg-background pt-4 pb-2">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(allData).filter(([p]) => p !== base).map(([path, d]) => (
              <LLink key={path} to={path} className="px-4 py-2 text-sm rounded-full border border-border bg-card text-foreground hover:border-brand hover:text-brand transition-colors">
                {d.h1}
              </LLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t("segmentsPage.needBox")}</h2>
            <p className="text-muted-foreground mb-6">{t("segmentsPage.chooseSize")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wynajmij.lockit.pl" target="_blank" rel="noopener noreferrer" className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">{t("common.rentNow")} →</a>
              <LLink to="/boksy" className="inline-block border-2 border-brand text-brand px-8 py-4 rounded-lg font-bold hover:bg-brand hover:text-primary-foreground transition-colors">{t("common.seePricing")}</LLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SegmentPage;
