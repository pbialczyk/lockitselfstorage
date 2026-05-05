import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { MapPin, Building2 } from "lucide-react";

const Ekspansja = () => {
  const { t } = useTranslation();
  const items = (t("ekspansja.whatItems", { returnObjects: true }) as string[]) || [];
  const cities = (t("ekspansja.cities", { returnObjects: true }) as string[]) || [];
  return (
    <Layout title={t("ekspansja.title")} description={t("ekspansja.description")} canonical="/ekspansja">
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground mb-4">{t("ekspansja.h1")}</h1>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">{t("ekspansja.sub")}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <div className="bg-card border-2 border-brand rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4"><Building2 className="w-8 h-8 text-brand" /><h2 className="text-2xl font-bold text-foreground">{t("ekspansja.whatHeading")}</h2></div>
            <ul className="space-y-3 text-foreground">
              {items.map((it) => (<li key={it} className="flex items-start gap-2"><span className="text-brand font-bold">•</span> {it}</li>))}
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="w-6 h-6 text-brand" /> {t("ekspansja.locHeading")}</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {cities.map((c) => (<div key={c} className="bg-card border border-border rounded-lg p-4 text-foreground font-medium">{c}</div>))}
          </div>
          <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-4">{t("ekspansja.ctaHeading")}</h2>
            <p className="text-muted-foreground mb-6">{t("ekspansja.ctaSub")}</p>
            <a href="mailto:info@lockit.pl" className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">{t("ekspansja.ctaBtn")}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ekspansja;
