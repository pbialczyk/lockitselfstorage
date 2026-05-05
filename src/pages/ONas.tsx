import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { Shield, Clock, Users, Award } from "lucide-react";

const icons = [Shield, Clock, Users, Award];

const ONas = () => {
  const { t } = useTranslation();
  const items = (t("oNas.items", { returnObjects: true }) as { title: string; desc: string }[]) || [];
  return (
    <Layout title={t("oNas.title")} description={t("oNas.description")} canonical="/o-nas">
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">{t("oNas.h1")}</h1>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">{t("oNas.sub")}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="text-foreground text-lg leading-relaxed mb-6">{t("oNas.p1")}</p>
          <p className="text-foreground text-lg leading-relaxed mb-12">{t("oNas.p2")}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                  {Icon && <Icon className="w-8 h-8 text-brand mb-3" />}
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ONas;
