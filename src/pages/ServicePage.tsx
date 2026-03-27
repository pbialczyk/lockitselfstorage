import Layout from "@/components/layout/Layout";
import { Link, useLocation } from "react-router-dom";

const serviceData: Record<string, {
  title: string; h1: string; description: string; canonical: string;
  intro: string; content: string[];
}> = {
  "/transport-przeprowadzka": {
    title: "Transport i przeprowadzka — LOCKIT self storage Szczecin",
    h1: "Transport i przeprowadzka",
    description: "Potrzebujesz pomocy z transportem rzeczy do magazynu? LOCKIT pomoże zorganizować przewóz mebli i rzeczy do boksu w Szczecinie.",
    canonical: "/transport-przeprowadzka",
    intro: "Nie masz jak dowieźć rzeczy do magazynu? Pomagamy zorganizować transport — od pojedynczych kartonów po pełne przeprowadzki.",
    content: [
      "Współpracujemy z lokalnymi firmami transportowymi w Szczecinie, aby zapewnić Ci wygodny i bezproblemowy transport rzeczy do naszego magazynu.",
      "Niezależnie od tego, czy potrzebujesz przewieźć kilka kartonów, czy pełne wyposażenie mieszkania — pomożemy zorganizować odpowiedni transport w atrakcyjnej cenie.",
      "Skontaktuj się z nami, a doradzimy najlepsze rozwiązanie transportowe dopasowane do Twoich potrzeb i budżetu.",
    ],
  },
  "/ubezpieczenie": {
    title: "Ubezpieczenie boksu magazynowego — LOCKIT self storage",
    h1: "Ubezpieczenie przechowywanych rzeczy",
    description: "Ubezpieczenie rzeczy przechowywanych w boksie LOCKIT self storage Szczecin. Ochrona od kradzieży, zalania i pożaru. Atrakcyjne warunki.",
    canonical: "/ubezpieczenie",
    intro: "Bezpieczeństwo Twoich rzeczy jest dla nas najważniejsze. Oprócz monitoringu i ochrony, oferujemy ubezpieczenie przechowywanych przedmiotów.",
    content: [
      "Każdy boks magazynowy LOCKIT jest objęty podstawowym ubezpieczeniem w cenie najmu. Możesz również rozszerzyć ochronę i samodzielnie określić wartość ubezpieczonych rzeczy.",
      "Ubezpieczenie obejmuje ochronę od kradzieży z włamaniem, zalania, pożaru i innych zdarzeń losowych. Współpracujemy z renomowanymi towarzystwami ubezpieczeniowymi.",
      "To Ty decydujesz, na jaką kwotę chcesz ubezpieczyć swoje rzeczy. My zadbaliśmy o korzystne warunki finansowe ubezpieczenia.",
    ],
  },
  "/pakowanie-organizacja": {
    title: "Pakowanie i organizacja przestrzeni — LOCKIT self storage",
    h1: "Pakowanie i organizacja przestrzeni",
    description: "Porady dotyczące pakowania i organizacji boksu magazynowego. Jak efektywnie wykorzystać przestrzeń w self storage Szczecin.",
    canonical: "/pakowanie-organizacja",
    intro: "Chcesz maksymalnie wykorzystać przestrzeń swojego boksu? Podpowiadamy, jak efektywnie spakować i zorganizować rzeczy.",
    content: [
      "Odpowiednie pakowanie to klucz do efektywnego wykorzystania powierzchni boksu. Używaj kartonów o jednolitych rozmiarach — łatwiej je ułożyć i maksymalnie wykorzystać dostępną przestrzeń.",
      "Ciężkie przedmioty umieszczaj na dole, lżejsze na górze. Opisuj kartony, aby szybko znaleźć potrzebne rzeczy. Wykorzystuj całą wysokość boksu (200 cm).",
      "Potrzebujesz kartonów lub materiałów do pakowania? Skontaktuj się z nami — doradzimy i pomożemy się przygotować do przeprowadzki rzeczy do magazynu.",
    ],
  },
};

const ServicePage = () => {
  const location = useLocation();
  const data = serviceData[location.pathname];

  if (!data) return null;

  return (
    <Layout title={data.title} description={data.description} canonical={data.canonical}
      jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: data.h1, description: data.description,
        provider: { "@type": "SelfStorage", name: "LOCKIT self storage" } }}
    >
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">{data.h1}</h1>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">{data.intro}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          {data.content.map((p, i) => (
            <p key={i} className="text-foreground leading-relaxed text-lg mb-6">{p}</p>
          ))}

          <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Potrzebujesz boksu magazynowego?</h2>
            <p className="text-muted-foreground mb-6">Sprawdź naszą ofertę i zarezerwuj boks online.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wynajmij.lockit.pl" target="_blank" rel="noopener noreferrer"
                className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Zarezerwuj boks →
              </a>
              <Link to="/kontakt" className="inline-block border-2 border-brand text-brand px-8 py-4 rounded-lg font-bold hover:bg-brand hover:text-primary-foreground transition-colors">
                Skontaktuj się
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
