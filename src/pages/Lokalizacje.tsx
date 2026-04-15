import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { MapPin, Clock, Shield, Phone } from "lucide-react";

const Lokalizacje = () => (
  <Layout
    title="Lokalizacje self storage"
    description="Lokalizacje magazynów LOCKIT self storage. Obecnie działamy w Szczecinie przy ul. Gdańskiej 14C. Dostęp 24/7, monitoring, ubezpieczenie."
    canonical="/lokalizacje"
  >
    <section className="section-padding bg-brand-deep">
      <div className="container-wide mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">Nasze lokalizacje</h1>
        <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">
          Bezpieczne, monitorowane magazyny self storage. Łatwy dojazd i dostęp 24/7.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto space-y-6">
        {/* Szczecin */}
        <Link
          to="/self-storage-szczecin"
          className="block bg-card border-2 border-brand rounded-2xl overflow-hidden hover:shadow-xl transition-all max-w-2xl mx-auto"
        >
          <div className="gradient-brand text-primary-foreground p-6">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6" />
              <h2 className="text-2xl font-extrabold">Szczecin</h2>
            </div>
            <p className="text-brand-light/80">ul. Gdańska 14C, 70-661 Szczecin</p>
          </div>
          <div className="p-6">
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="w-4 h-4 text-brand" /> Dostęp 24/7
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Shield className="w-4 h-4 text-brand" /> Monitoring
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Phone className="w-4 h-4 text-brand" /> 666 030 717
              </div>
            </div>
            <div className="text-brand font-semibold text-sm">Zobacz szczegóły lokalizacji →</div>
          </div>
        </Link>

        {/* Poznań */}
        <div className="block bg-card border-2 border-border rounded-2xl overflow-hidden max-w-2xl mx-auto opacity-75">
          <div className="bg-muted text-foreground p-6">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6" />
              <h2 className="text-2xl font-extrabold">Poznań</h2>
            </div>
            <p className="text-muted-foreground">Otwieramy się wkrótce</p>
          </div>
          <div className="p-6">
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="w-4 h-4 text-brand" /> Dostęp 24/7
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Shield className="w-4 h-4 text-brand" /> Monitoring
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Shield className="w-4 h-4 text-brand" /> Ubezpieczenie
              </div>
            </div>
            <div className="inline-block bg-brand/10 text-brand font-semibold text-sm px-3 py-1 rounded-full">Wkrótce</div>
          </div>
        </div>

        {/* Gdańsk */}
        <div className="block bg-card border-2 border-border rounded-2xl overflow-hidden max-w-2xl mx-auto opacity-75">
          <div className="bg-muted text-foreground p-6">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6" />
              <h2 className="text-2xl font-extrabold">Gdańsk</h2>
            </div>
            <p className="text-muted-foreground">Otwieramy się wkrótce</p>
          </div>
          <div className="p-6">
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="w-4 h-4 text-brand" /> Dostęp 24/7
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Shield className="w-4 h-4 text-brand" /> Monitoring
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Shield className="w-4 h-4 text-brand" /> Ubezpieczenie
              </div>
            </div>
            <div className="inline-block bg-brand/10 text-brand font-semibold text-sm px-3 py-1 rounded-full">Wkrótce</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Lokalizacje;
