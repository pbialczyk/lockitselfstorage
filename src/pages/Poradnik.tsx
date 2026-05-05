import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import LLink from "@/i18n/LLink";

const Poradnik = () => {
  const { t } = useTranslation();
  const articles = (t("poradnik.articles", { returnObjects: true }) as { slug: string; title: string; excerpt: string; date: string }[]) || [];
  const locale = t("poradnik.locale");
  return (
    <Layout title={t("poradnik.title")} description={t("poradnik.description")} canonical="/poradnik"
      jsonLd={{ "@context": "https://schema.org", "@type": "Blog", name: "LOCKIT", url: "https://lockit.pl/poradnik", publisher: { "@type": "Organization", name: "LOCKIT self storage" } }}>
      <section className="section-padding bg-brand-deep">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">{t("poradnik.h1")}</h1>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">{t("poradnik.sub")}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <LLink key={a.slug} to={`/poradnik/${a.slug}`} className="block bg-card border border-border rounded-xl p-6 hover:border-brand hover:shadow-lg transition-all group">
                <time className="text-xs text-muted-foreground">{new Date(a.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}</time>
                <h2 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors mt-2 mb-2">{a.title}</h2>
                <p className="text-muted-foreground text-sm">{a.excerpt}</p>
                <span className="text-brand text-sm font-semibold mt-3 inline-block">{t("common.seeMore")}</span>
              </LLink>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Poradnik;
