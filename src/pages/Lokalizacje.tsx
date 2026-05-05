import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import LLink from "@/i18n/LLink";
import { MapPin, Clock, Shield, Phone } from "lucide-react";

const Lokalizacje = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t("lokalizacjePage.title")} description={t("lokalizacjePage.description")} canonical="/lokalizacje">
      <section className="section-padding bg-brand-deep">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">{t("lokalizacjePage.h1")}</h1>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">{t("lokalizacjePage.sub")}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto space-y-6">
          <LLink to="/self-storage-szczecin" className="block bg-card border-2 border-brand rounded-2xl overflow-hidden hover:shadow-xl transition-all max-w-2xl mx-auto">
            <div className="gradient-brand text-primary-foreground p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6" />
                <h2 className="text-2xl font-extrabold">Szczecin</h2>
              </div>
              <p className="text-brand-light/80">ul. Gdańska 14C, 70-661 Szczecin</p>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-foreground"><Clock className="w-4 h-4 text-brand" /> {t("lokalizacjePage.access247")}</div>
                <div className="flex items-center gap-2 text-sm text-foreground"><Shield className="w-4 h-4 text-brand" /> {t("lokalizacjePage.monitoring")}</div>
                <div className="flex items-center gap-2 text-sm text-foreground"><Phone className="w-4 h-4 text-brand" /> 666 030 717</div>
              </div>
              <div className="text-brand font-semibold text-sm">{t("lokalizacjePage.seeDetails")}</div>
            </div>
          </LLink>

          {["Poznań", "Gdańsk"].map((city) => (
            <div key={city} className="block bg-card border-2 border-border rounded-2xl overflow-hidden max-w-2xl mx-auto opacity-75">
              <div className="bg-muted text-foreground p-6">
                <div className="flex items-center gap-3 mb-2"><MapPin className="w-6 h-6" /><h2 className="text-2xl font-extrabold">{city}</h2></div>
                <p className="text-muted-foreground">{t("lokalizacjePage.soon")}</p>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-foreground"><Clock className="w-4 h-4 text-brand" /> {t("lokalizacjePage.access247")}</div>
                  <div className="flex items-center gap-2 text-sm text-foreground"><Shield className="w-4 h-4 text-brand" /> {t("lokalizacjePage.monitoring")}</div>
                  <div className="flex items-center gap-2 text-sm text-foreground"><Shield className="w-4 h-4 text-brand" /> {t("lokalizacjePage.insurance")}</div>
                </div>
                <div className="inline-block bg-brand/10 text-brand font-semibold text-sm px-3 py-1 rounded-full">{t("lokalizacjePage.soonBadge")}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Lokalizacje;
