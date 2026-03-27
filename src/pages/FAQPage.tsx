import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  { q: "Czym jest LOCKIT Self Storage?", a: "Jesteśmy szczecińską firmą specjalizującą się w wynajmie samoobsługowych boksów magazynowych. Oferujemy bezpieczne, monitorowane boksy dostępne 24/7 przy ul. Gdańskiej 14C w Szczecinie." },
  { q: "Czy magazyny są bezpieczne?", a: "Bezpieczeństwo jest naszym priorytetem. Obiekt jest monitorowany 24/7, z kontrolą dostępu i automatyczną ochroną. Dodatkowo ubezpieczamy wszystkie przechowywane rzeczy." },
  { q: "Jak wynająć magazyn?", a: "Wynajem online zajmuje 5 minut. Wchodzisz na wynajmij.lockit.pl, wybierasz boks, zakładasz konto, płacisz pierwszy czynsz — i możesz od razu korzystać z magazynu." },
  { q: "Jak duży magazyn potrzebuję?", a: "Boks S (3 m²) — pokój studencki, rzeczy sezonowe. Boks M (6 m²) — mieszkanie do 50 m². Boks L (12 m²) — dom do 100 m² lub duży magazyn firmowy." },
  { q: "Co mogę przechować?", a: "Prawie wszystko — meble, sprzęt, dokumenty, towary firmowe. Nie przechowujemy: broni, materiałów łatwopalnych, żywych organizmów i substancji niedozwolonych." },
  { q: "Ile kosztuje wynajem?", a: "Boks S od 125 zł/mies., Boks M od 175 zł/mies., Boks L od 250 zł/mies. Aktualnie -50% na pierwszy miesiąc. Ubezpieczenie i monitoring w cenie." },
  { q: "Czy mogę zmienić rozmiar boksu?", a: "Tak! W każdym momencie możesz zmienić boks na większy lub mniejszy. Załatwisz to online na swoim koncie." },
  { q: "Jaki jest minimalny okres najmu?", a: "Minimalny okres to 1 miesiąc. Możesz zrezygnować w każdym momencie — wypowiedz umowę 7 dni przed końcem okresu rozliczeniowego." },
  { q: "Czy wystawiacie fakturę VAT?", a: "Tak, wystawiamy fakturę VAT dla firm." },
  { q: "Czy mam dostęp do boksu 24/7?", a: "Tak, dostęp do magazynu masz o każdej porze dnia i nocy, 7 dni w tygodniu, 365 dni w roku." },
];

const FAQPage = () => (
  <Layout
    title="FAQ — Najczęściej zadawane pytania"
    description="Odpowiedzi na najczęściej zadawane pytania o self storage LOCKIT w Szczecinie. Wynajem, ceny, bezpieczeństwo, dostęp."
    canonical="/faq"
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    }}
  >
    <section className="section-padding bg-brand-deep">
      <div className="container-narrow mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">Pytania i odpowiedzi</h1>
        <p className="text-brand-light/80 text-lg">Znajdź odpowiedzi na najczęściej zadawane pytania o self storage.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 overflow-hidden">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand py-5">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQPage;
