import Layout from "@/components/layout/Layout";
import { Shield, Clock, Users, Award } from "lucide-react";

const ONas = () => (
  <Layout
    title="O nas"
    description="LOCKIT self storage — szczecińska firma specjalizująca się w wynajmie samoobsługowych boksów magazynowych. Poznaj naszą historię i misję."
    canonical="/o-nas"
  >
    <section className="section-padding bg-brand-deep">
      <div className="container-narrow mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">O nas</h1>
        <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">
          Jesteśmy lokalną firmą self storage w Szczecinie. Pomagamy przechowywać rzeczy bezpiecznie i wygodnie.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-3xl">
        <p className="text-foreground text-lg leading-relaxed mb-6">
          LOCKIT self storage to szczecińska firma specjalizująca się w wynajmie samoobsługowych boksów magazynowych. Od lat pomagamy naszym klientom, oferując bezpieczne i nowoczesne rozwiązania magazynowe w kluczowych momentach ich życia.
        </p>
        <p className="text-foreground text-lg leading-relaxed mb-12">
          Dla klientów indywidualnych nasze self storage to wsparcie podczas remontów, przeprowadzek, zmiany miejsca pracy oraz sposób na zwiększenie komfortu w domu. Dla firm jesteśmy partnerem w optymalizacji kosztów, zapewniając elastyczny i bezpieczny wynajem self storage dostosowany do ich potrzeb.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Shield, title: "Bezpieczeństwo", desc: "Monitoring 24/7, kontrola dostępu i ubezpieczenie przechowywanych rzeczy." },
            { icon: Clock, title: "Dostęp 24/7", desc: "Twój boks dostępny o każdej porze dnia i nocy, 7 dni w tygodniu." },
            { icon: Users, title: "Obsługa klienta", desc: "Jesteśmy do Twojej dyspozycji — doradzimy i pomożemy wybrać boks." },
            { icon: Award, title: "Nowoczesność", desc: "Wynajem online w 5 minut, aplikacja mobilna, brak zbędnych formalności." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-6">
              <item.icon className="w-8 h-8 text-brand mb-3" />
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ONas;
