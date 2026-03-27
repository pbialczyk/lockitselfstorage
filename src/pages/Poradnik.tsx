import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "jak-wybrac-rozmiar-boksu",
    title: "Jak wybrać rozmiar boksu magazynowego?",
    excerpt: "Poradnik jak dobrać odpowiedni rozmiar self storage do swoich potrzeb. Porównanie boksów S, M i L.",
    date: "2026-03-15",
  },
  {
    slug: "self-storage-dla-firm",
    title: "Self storage dla firm — korzyści i zastosowania",
    excerpt: "Dlaczego coraz więcej firm w Szczecinie wybiera self storage? Poznaj korzyści elastycznego magazynowania.",
    date: "2026-03-10",
  },
  {
    slug: "przechowywanie-remont",
    title: "Przechowywanie rzeczy podczas remontu — poradnik",
    excerpt: "Co zrobić z meblami podczas remontu? Jak bezpiecznie przechować wyposażenie mieszkania?",
    date: "2026-03-05",
  },
  {
    slug: "archiwizacja-dokumentow",
    title: "Archiwizacja dokumentów firmowych — poradnik",
    excerpt: "Jak archiwizować dokumenty zgodnie z przepisami? Ile lat trzeba przechowywać akta firmowe?",
    date: "2026-03-01",
  },
];

const Poradnik = () => (
  <Layout
    title="Poradnik self storage — blog LOCKIT"
    description="Porady dotyczące self storage, przechowywania rzeczy, organizacji przestrzeni. Blog LOCKIT self storage Szczecin."
    canonical="/poradnik"
  >
    <section className="section-padding bg-brand-deep">
      <div className="container-wide mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">Poradnik</h1>
        <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">
          Praktyczne porady dotyczące self storage, przechowywania rzeczy i organizacji przestrzeni.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/poradnik/${article.slug}`}
              className="block bg-card border border-border rounded-xl p-6 hover:border-brand hover:shadow-lg transition-all group"
            >
              <time className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" })}</time>
              <h2 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors mt-2 mb-2">{article.title}</h2>
              <p className="text-muted-foreground text-sm">{article.excerpt}</p>
              <span className="text-brand text-sm font-semibold mt-3 inline-block">Czytaj więcej →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Poradnik;
