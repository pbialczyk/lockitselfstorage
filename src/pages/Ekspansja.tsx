import Layout from "@/components/layout/Layout";
import { MapPin, Building2 } from "lucide-react";

const Ekspansja = () => (
  <Layout
    title="Ekspansja — szukamy nieruchomości"
    description="LOCKIT self storage szuka nieruchomości pod nowe lokalizacje. Trójmiasto, Poznań, Łódź, Bydgoszcz, Śląsk. Powierzchnia 500-1500 m²."
    canonical="/ekspansja"
  >
    <section className="section-padding bg-brand-deep">
      <div className="container-narrow mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary-foreground mb-4">Ekspansja — szukamy nieruchomości</h1>
        <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">
          Rozwijamy sieć LOCKIT self storage i szukamy nieruchomości w nowych miastach.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="bg-card border-2 border-brand rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-brand" />
            <h2 className="text-2xl font-bold text-foreground">Czego szukamy?</h2>
          </div>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-2"><span className="text-brand font-bold">•</span> Działki, budynki do adaptacji lub powierzchnie na wynajem</li>
            <li className="flex items-start gap-2"><span className="text-brand font-bold">•</span> Powierzchnia: 500–1500 m²</li>
            <li className="flex items-start gap-2"><span className="text-brand font-bold">•</span> Dobra komunikacja i dostęp drogowy</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-brand" /> Interesujące nas lokalizacje
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {["Trójmiasto (Gdańsk, Sopot, Gdynia)", "Poznań", "Łódź", "Bydgoszcz", "Aglomeracja Śląska"].map((city) => (
            <div key={city} className="bg-card border border-border rounded-lg p-4 text-foreground font-medium">{city}</div>
          ))}
        </div>

        <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-4">Masz nieruchomość do zaproponowania?</h2>
          <p className="text-muted-foreground mb-6">Skontaktuj się z nami — omówimy warunki współpracy.</p>
          <a href="mailto:info@lockit.pl" className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
            Napisz do nas: info@lockit.pl
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Ekspansja;
