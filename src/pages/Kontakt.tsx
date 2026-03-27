import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Kontakt = () => (
  <Layout
    title="Kontakt"
    description="Skontaktuj się z LOCKIT self storage Szczecin. Telefon: +48 666 030 717, email: info@lockit.pl. ul. Gdańska 14C, 70-661 Szczecin."
    canonical="/kontakt"
  >
    <section className="section-padding bg-brand-deep">
      <div className="container-narrow mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">Kontakt</h1>
        <p className="text-brand-light/80 text-lg">Masz pytania? Skontaktuj się z nami — doradzimy!</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Dane kontaktowe</h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Adres", value: "ul. Gdańska 14C, 70-661 Szczecin" },
                { icon: Phone, label: "Telefon", value: "+48 666 030 717", href: "tel:+48666030717" },
                { icon: Mail, label: "Email", value: "info@lockit.pl", href: "mailto:info@lockit.pl" },
                { icon: Clock, label: "Dostęp", value: "24/7, 365 dni w roku" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-brand hover:underline">{item.value}</a>
                    ) : (
                      <div className="text-muted-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5!2d14.5528!3d53.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI1JzQyLjYiTiAxNMKwMzMnMTAuMSJF!5e0!3m2!1spl!2spl!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LOCKIT self storage Szczecin — mapa"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Kontakt;
