import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";

const blogData: Record<string, {
  title: string; h1: string; description: string; date: string;
  content: string[];
  relatedPage?: { label: string; href: string };
}> = {
  "jak-wybrac-rozmiar-boksu": {
    title: "Jak wybrać rozmiar boksu magazynowego?",
    h1: "Jak wybrać rozmiar boksu magazynowego?",
    description: "Poradnik jak dobrać odpowiedni rozmiar self storage. Porównanie boksów S (3m²), M (6m²) i L (12m²). Ile metrów kwadratowych potrzebujesz?",
    date: "2026-03-15",
    content: [
      "Wybór odpowiedniego rozmiaru boksu magazynowego to kluczowa decyzja. Zbyt mały boks oznacza problemy z pakowaniem, zbyt duży — niepotrzebne koszty. Jak dobrać rozmiar idealnie?",
      "**Boks S (3 m²)** — idealny dla studentów, osób przechowujących rzeczy sezonowe, dokumenty lub drobne meble. Mieści wyposażenie pokoju studenckiego lub 6 europalet towaru.",
      "**Boks M (6 m²)** — nasz najpopularniejszy rozmiar. Zmieścisz tu meble z mieszkania o powierzchni do 50 m². Idealny na czas remontu, przeprowadzki lub jako magazyn dla małej firmy. Mieści 12 europalet.",
      "**Boks L (12 m²)** — największy boks o pojemności 24 m³. Wyposażenie domu do 100 m², duże meble, maszyny, materiały budowlane. Często wybierany przez firmy e-commerce i budowlane.",
      "**Zasada kciuka:** oceń ile mebli/rzeczy masz do przechowywania i pomyśl o powierzchni pomieszczenia, z którego te rzeczy pochodzą. Pokój = S, mieszkanie do 50 m² = M, dom lub duże mieszkanie = L.",
      "Pamiętaj — w LOCKIT zawsze możesz zmienić rozmiar boksu! Zaczynasz od S i potrzebujesz więcej miejsca? Zmień na M online, bez dodatkowych formalności.",
    ],
    relatedPage: { label: "Zobacz cennik boksów", href: "/boksy" },
  },
  "self-storage-dla-firm": {
    title: "Self storage dla firm — korzyści i zastosowania",
    h1: "Self storage dla firm — dlaczego warto?",
    description: "Korzyści self storage dla firm w Szczecinie. Elastyczne magazynowanie, faktura VAT, dostęp 24/7. Idealne dla e-commerce, kancelarii i firm budowlanych.",
    date: "2026-03-10",
    content: [
      "Coraz więcej firm w Szczecinie korzysta z self storage jako elastycznego rozwiązania magazynowego. Dlaczego? Bo tradycyjny wynajem magazynu to wieloletnie umowy, duże koszty i brak elastyczności.",
      "**Elastyczność** — w self storage wynajmujesz dokładnie tyle przestrzeni, ile potrzebujesz. Sezon? Zwiększ magazyn. Poza sezonem? Zmniejsz. Bez kar umownych.",
      "**Koszty** — boks od 125 zł/mies. to ułamek kosztu tradycyjnego magazynu. Nie płacisz za media, ochronę, ubezpieczenie czy utrzymanie obiektu — wszystko jest w cenie.",
      "**Dostęp 24/7** — Twoi pracownicy mogą korzystać z magazynu o każdej porze. Idealne dla firm pracujących w zmianach lub obsługujących klientów w weekendy.",
      "**Zastosowania:** magazyn e-commerce (przechowywanie towarów), archiwum dokumentów firmowych, sprzęt budowlany i narzędzia, materiały reklamowe i eventowe, zapas opakowań.",
      "W LOCKIT wystawiamy fakturę VAT i oferujemy dedykowane warunki dla firm wynajmujących więcej niż jeden boks.",
    ],
    relatedPage: { label: "Oferta dla firm", href: "/dla-firm" },
  },
  "przechowywanie-remont": {
    title: "Przechowywanie rzeczy podczas remontu — poradnik",
    h1: "Co zrobić z meblami podczas remontu?",
    description: "Poradnik jak bezpiecznie przechować meble i rzeczy podczas remontu mieszkania. Self storage Szczecin od 125 zł/mies.",
    date: "2026-03-05",
    content: [
      "Remont mieszkania to stresujące doświadczenie, a jednym z największych problemów jest pytanie: co zrobić z meblami? Przesuwanie mebli z pokoju do pokoju jest niepraktyczne i utrudnia prace remontowe.",
      "**Self storage to najlepsze rozwiązanie.** Wynajmujesz boks na czas remontu, przewozisz meble i rzeczy, a po zakończeniu prac — zabierasz je z powrotem. Proste, bezpieczne i niedrogie.",
      "**Jak się przygotować?** Spakuj rzeczy w kartony (opisz je!), zdemontuj co się da, zabezpiecz delikatne przedmioty folią bąbelkową. Ciężkie rzeczy na dół, lżejsze na górę.",
      "**Jaki rozmiar boksu?** Boks M (6 m²) mieści meble z mieszkania do 50 m². Boks L (12 m²) pomieści wyposażenie domu do 100 m².",
      "**Ile trwa najem?** W LOCKIT okres minimalny to 1 miesiąc. Remont trwa dłużej niż planowałeś? Przedłuż najem automatycznie. Skończy się wcześniej? Wypowiedz umowę 7 dni przed końcem okresu.",
      "**Koszty:** od 125 zł/mies. za boks S do 250 zł/mies. za boks L. Ubezpieczenie i monitoring w cenie. Bez kaucji i ukrytych opłat.",
    ],
    relatedPage: { label: "Self storage na czas remontu", href: "/remont-przeprowadzka" },
  },
  "archiwizacja-dokumentow": {
    title: "Archiwizacja dokumentów firmowych — poradnik",
    h1: "Archiwizacja dokumentów firmowych — ile lat przechowywać akta?",
    description: "Poradnik archiwizacji dokumentów firmowych. Przepisy, terminy przechowywania, bezpieczne warunki. Self storage jako archiwum Szczecin.",
    date: "2026-03-01",
    content: [
      "Każda firma jest zobowiązana do przechowywania dokumentów przez określony czas. Dokumenty księgowe — 5 lat, akta osobowe — 50 lat (lub 10 lat dla umów po 2019), dokumenty ZUS — 5 lat.",
      "**Problem:** gdzie to wszystko trzymać? W biurze brakuje miejsca, a wynajem dodatkowej powierzchni biurowej jest drogi. Rozwiązanie? Self storage jako profesjonalne archiwum.",
      "**Dlaczego self storage?** Bezpieczne warunki — sucho, czysto, monitorowanie 24/7. Szybki dostęp — potrzebujesz dokumentu? Wchodzisz do boksu i go zabierasz, o każdej porze.",
      "**Organizacja archiwum:** używaj segregatorów i kartonów archiwizacyjnych o standardowych rozmiarach. Opisuj każdy karton (zawartość, daty, kategoria). Twórz spis treści archiwum.",
      "**Jaki boks?** Boks S (3 m²) mieści setki segregatorów i kartonów. Dla dużych archiwów — boks M lub L. W LOCKIT zawsze możesz zmienić rozmiar.",
      "**Koszty:** od 125 zł/mies. za boks S — to mniej niż wynajem dodatkowego metra biura w centrum Szczecina. Faktura VAT w cenie.",
    ],
    relatedPage: { label: "Archiwum dokumentów", href: "/archiwum-dokumentow" },
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogData[slug] : null;

  if (!post) {
    return (
      <Layout title="Nie znaleziono artykułu">
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground">Nie znaleziono artykułu</h1>
          <Link to="/poradnik" className="text-brand hover:underline mt-4 inline-block">← Wróć do poradnika</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={post.title}
      description={post.description}
      canonical={`/poradnik/${slug}`}
      jsonLd={[
        {
          "@context": "https://schema.org", "@type": "Article",
          headline: post.h1, datePublished: post.date,
          author: { "@type": "Organization", name: "LOCKIT self storage" },
          publisher: { "@type": "Organization", name: "LOCKIT self storage" },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://lockit.pl" },
            { "@type": "ListItem", position: 2, name: "Poradnik", item: "https://lockit.pl/poradnik" },
            { "@type": "ListItem", position: 3, name: post.h1, item: `https://lockit.pl/poradnik/${slug}` },
          ],
        },
      ]}
    >
      <article>
        <section className="section-padding bg-brand-deep">
          <div className="container-narrow mx-auto max-w-3xl">
            <Link to="/poradnik" className="text-brand-light/60 hover:text-brand-light text-sm mb-4 inline-block">← Poradnik</Link>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4">{post.h1}</h1>
            <time className="text-brand-light/60 text-sm">{new Date(post.date).toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto max-w-3xl">
            {post.content.map((p, i) => {
              const formatted = p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return (
                <p key={i} className="text-foreground leading-relaxed text-lg mb-6" dangerouslySetInnerHTML={{ __html: formatted }} />
              );
            })}

            {post.relatedPage && (
              <div className="bg-brand-50 border border-brand-light rounded-xl p-8 text-center mt-8">
                <Link to={post.relatedPage.href} className="inline-block gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
                  {post.relatedPage.label} →
                </Link>
              </div>
            )}
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
