import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LLink from "@/i18n/LLink";
import { stripLang } from "@/i18n/LangSync";

type SvcData = { title: string; h1: string; description: string; intro: string; content: string[] };

const ServicePage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const base = stripLang(location.pathname);
  const data = (t("servicePage.data", { returnObjects: true }) as Record<string, SvcData>)[base];
  if (!data) return null;
  return (
    <Layout title={data.title} description={data.description} canonical={base}
      jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: data.h1, description: data.description, provider: { "@type": "SelfStorage", name: "LOCKIT self storage" } }}>
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">{data.h1}</h1>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">{data.intro}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          {data.content.map((p, i) => (<p key={i} className="text-foreground leading-relaxed text-lg mb-6">{p}</p>))}
          <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t("servicePage.needBox")}</h2>
            <p className="text-muted-foreground mb-6">{t("servicePage.seeOffer")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wynajmij.lockit.pl" target="_blank" rel="noopener noreferrer" className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">{t("servicePage.rentBox")}</a>
              <LLink to="/kontakt" className="inline-block border-2 border-brand text-brand px-8 py-4 rounded-lg font-bold hover:bg-brand hover:text-primary-foreground transition-colors">{t("servicePage.contact")}</LLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
