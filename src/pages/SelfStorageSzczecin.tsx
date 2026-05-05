import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import LLink from "@/i18n/LLink";
import { MapPin, Clock, Shield, Phone, Mail } from "lucide-react";

const SelfStorageSzczecin = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const monthLabel = t("common.monthAbbr");
  return (
    <Layout title={t("selfStorageSzczecin.title")} description={t("selfStorageSzczecin.description")} canonical="/self-storage-szczecin"
      jsonLd={{ "@context": "https://schema.org", "@type": "SelfStorage", name: "LOCKIT self storage Szczecin", address: { "@type": "PostalAddress", streetAddress: "ul. Gdańska 14C", addressLocality: "Szczecin", postalCode: "70-661", addressCountry: "PL" }, telephone: "+48666030717" }}>
      <section className="section-padding bg-brand-deep" id="opis">
        <div className="container-wide mx-auto">
          <div className="flex items-center gap-3 mb-4"><MapPin className="w-8 h-8 text-brand-light" /><h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground">{t("selfStorageSzczecin.h1")}</h1></div>
          <p className="text-brand-light/80 text-lg max-w-3xl">{t("selfStorageSzczecin.sub")}</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("selfStorageSzczecin.descHeading")}</h2>
                <p className="text-foreground leading-relaxed mb-4">{t("selfStorageSzczecin.descP1")}</p>
                <p className="text-foreground leading-relaxed">{t("selfStorageSzczecin.descP2")}</p>
              </div>
              <div id="cennik">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("selfStorageSzczecin.pricingHeading")}</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "S", area: "3 m²", price: isEn ? `from 125 ${monthLabel}` : `od 125 ${monthLabel}`, link: "/boksy/boks-s-szczecin" },
                    { label: "M", area: "6 m²", price: isEn ? `from 175 ${monthLabel}` : `od 175 ${monthLabel}`, link: "/boksy/boks-m-szczecin" },
                    { label: "L", area: "12 m²", price: isEn ? `from 250 ${monthLabel}` : `od 250 ${monthLabel}`, link: "/boksy/boks-l-szczecin" },
                  ].map((b) => (
                    <LLink key={b.label} to={b.link} className="block bg-card border border-border rounded-xl p-5 text-center hover:border-brand hover:shadow-lg transition-all">
                      <div className="text-3xl font-extrabold text-brand mb-1">{b.label}</div>
                      <div className="text-sm font-semibold text-foreground">{b.area}</div>
                      <div className="text-sm text-brand font-bold mt-2">{b.price}</div>
                    </LLink>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <a href="https://wynajmij.lockit.pl" target="_blank" rel="noopener noreferrer" className="inline-block gradient-brand text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">{t("selfStorageSzczecin.rentOnline")}</a>
                </div>
              </div>
              <div id="dojazd">
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("selfStorageSzczecin.mapHeading")}</h2>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <iframe src="https://maps.google.com/maps?q=Gda%C5%84ska%2014C%2C%2070-661%20Szczecin&t=m&z=16&output=embed" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="LOCKIT map" />
                </div>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">{t("selfStorageSzczecin.sidebarHeading")}</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-foreground"><MapPin className="w-4 h-4 mt-0.5 text-brand shrink-0" /> ul. Gdańska 14C, 70-661 Szczecin</li>
                  <li className="flex items-center gap-2 text-foreground"><Clock className="w-4 h-4 text-brand shrink-0" /> {t("lokalizacjePage.access247")}</li>
                  <li className="flex items-center gap-2 text-foreground"><Shield className="w-4 h-4 text-brand shrink-0" /> {t("selfStorageSzczecin.monitoring")}</li>
                  <li><a href="tel:+48666030717" className="flex items-center gap-2 text-brand hover:underline"><Phone className="w-4 h-4 shrink-0" /> +48 666 030 717</a></li>
                  <li><a href="mailto:info@lockit.pl" className="flex items-center gap-2 text-brand hover:underline"><Mail className="w-4 h-4 shrink-0" /> info@lockit.pl</a></li>
                </ul>
              </div>
              <a href="https://wynajmij.lockit.pl" target="_blank" rel="noopener noreferrer" className="block gradient-brand text-primary-foreground text-center py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">{t("common.rentBox")} →</a>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SelfStorageSzczecin;
