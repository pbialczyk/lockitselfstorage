import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";

const PolitykaPrywatnosci = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t("polityka.title")} description={t("polityka.description")} canonical="/polityka-prywatnosci">
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground">{t("polityka.h1")}</h1>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl prose prose-lg">
          <p className="text-foreground leading-relaxed mb-4">{t("polityka.p1")}</p>
          <p className="text-foreground leading-relaxed mb-4">{t("polityka.p2")}</p>
          <p className="text-foreground leading-relaxed mb-4">{t("polityka.p3")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default PolitykaPrywatnosci;
