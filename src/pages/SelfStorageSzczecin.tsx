import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { MapPin, Clock, Shield, Phone, Mail } from "lucide-react";

const SelfStorageSzczecin = () => (
  <Layout
    title="Self storage Szczecin — boksy magazynowe ul. Gdańska 14C"
    description="Self storage w Szczecinie przy ul. Gdańskiej 14C. Boksy od 3m² do 12m², dostęp 24/7, monitoring, ubezpieczenie. Wynajem online w 5 minut."
    canonical="/self-storage-szczecin"
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "SelfStorage",
      name: "LOCKIT self storage Szczecin",
      address: { "@type": "PostalAddress", streetAddress: "ul. Gdańska 14C", addressLocality: "Szczecin", postalCode: "70-661", addressCountry: "PL" },
      telephone: "+48666030717",
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
    }}
  >
    <section className="section-padding bg-brand-deep" id="opis">
      <div className="container-wide mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-8 h-8 text-brand-light" />
          <h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground">Self storage Szczecin — ul. Gdańska 14C</h1>
        </div>
        <p className="text-brand-light/80 text-lg max-w-3xl">
          Nowoczesny obiekt magazynowy w Szczecinie. Boksy od 3 m² do 12 m², monitorowane 24/7, ubezpieczenie w cenie, łatwy dojazd z centrum miasta.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Opis obiektu</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Nasz magazyn przy ul. Gdańskiej 14C w Szczecinie to nowoczesny obiekt self storage, zaprojektowany z myślą o bezpieczeństwie i wygodzie. Obiekt jest w pełni monitorowany, z kontrolą dostępu i ubezpieczeniem przechowywanych rzeczy.
              </p>
              <p className="text-foreground leading-relaxed">
                Oferujemy boksy w trzech rozmiarach — S (3 m²), M (6 m²) i L (12 m²). Każdy boks zamykany jest na indywidualną kłódkę. Dostęp do magazynu masz o każdej porze, 7 dni w tygodniu.
              </p>
            </div>

            <div id="cennik">
              <h2 className="text-2xl font-bold text-foreground mb-4">Boksy i cennik</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "S", area: "3 m²", price: "od 125 zł/mies.", link: "/boksy/boks-s-szczecin" },
                  { label: "M", area: "6 m²", price: "od 175 zł/mies.", link: "/boksy/boks-m-szczecin" },
                  { label: "L", area: "12 m²", price: "od 250 zł/mies.", link: "/boksy/boks-l-szczecin" },
                ].map((b) => (
                  <Link key={b.label} to={b.link} className="block bg-card border border-border rounded-xl p-5 text-center hover:border-brand hover:shadow-lg transition-all">
                    <div className="text-3xl font-extrabold text-brand mb-1">{b.label}</div>
                    <div className="text-sm font-semibold text-foreground">{b.area}</div>
                    <div className="text-sm text-brand font-bold mt-2">{b.price}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://wynajmij.lockit.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block gradient-brand text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Wynajmij boks online →
                </a>
              </div>
            </div>

            <div id="dojazd">
              <h2 className="text-2xl font-bold text-foreground mb-4">Mapa i dojazd</h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5!2d14.5528!3d53.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI1JzQyLjYiTiAxNMKwMzMnMTAuMSJF!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa dojazdu do LOCKIT self storage Szczecin"
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4">Informacje</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-foreground"><MapPin className="w-4 h-4 mt-0.5 text-brand shrink-0" /> ul. Gdańska 14C, 70-661 Szczecin</li>
                <li className="flex items-center gap-2 text-foreground"><Clock className="w-4 h-4 text-brand shrink-0" /> Dostęp 24/7</li>
                <li className="flex items-center gap-2 text-foreground"><Shield className="w-4 h-4 text-brand shrink-0" /> Monitoring i ubezpieczenie</li>
                <li><a href="tel:+48666030717" className="flex items-center gap-2 text-brand hover:underline"><Phone className="w-4 h-4 shrink-0" /> +48 666 030 717</a></li>
                <li><a href="mailto:info@lockit.pl" className="flex items-center gap-2 text-brand hover:underline"><Mail className="w-4 h-4 shrink-0" /> info@lockit.pl</a></li>
              </ul>
            </div>
            <a
              href="https://wynajmij.lockit.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="block gradient-brand text-primary-foreground text-center py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Wynajmij boks →
            </a>
          </aside>
        </div>
      </div>
    </section>
  </Layout>
);

export default SelfStorageSzczecin;
