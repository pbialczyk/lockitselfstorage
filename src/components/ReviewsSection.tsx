import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reviews = [
  {
    name: "Przemysław K.",
    text: "Świetny magazyn w super lokalizacji. Czysto, sucho, bezpiecznie. Obsługa bardzo pomocna i profesjonalna. Polecam każdemu, kto szuka miejsca na przechowanie rzeczy w Szczecinie!",
    initials: "PK",
  },
  {
    name: "Monika W.",
    text: "Korzystam z LOCKIT od kilku miesięcy i jestem bardzo zadowolona. Pan Przemysław pomógł mi wybrać odpowiedni boks, wszystko załatwiłam szybko i bezproblemowo. Magazyn czysty, zadbany i dobrze monitorowany.",
    initials: "MW",
  },
  {
    name: "Tomasz R.",
    text: "Przechowuję tu rzeczy firmy — dokumenty, sprzęt, materiały. Dojazd wygodny, można wjechać busem pod same boksy. Ceny przystępne, a dostęp 24/7 to ogromna wygoda. Gorąco polecam!",
    initials: "TR",
  },
  {
    name: "Anna M.",
    text: "Idealnie na czas przeprowadzki! Boks czysty, suchy, bezpieczny. Obsługa uprzejma i zawsze dostępna pod telefonem. Formalności załatwiłam online w kilka minut. Zdecydowanie polecam LOCKIT.",
    initials: "AM",
  },
  {
    name: "Karol D.",
    text: "Jako student szukałem taniego magazynu na wakacje. LOCKIT okazał się strzałem w dziesiątkę — dobra cena, bezpieczeństwo i łatwy dojazd z centrum. Na pewno wrócę w przyszłym roku!",
    initials: "KD",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const ReviewCard = ({ review, delay }: { review: typeof reviews[0]; delay: number }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-[300px] sm:w-[340px] bg-card border border-border rounded-2xl p-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <StarRating />
      <p className="text-sm text-muted-foreground mt-4 mb-5 leading-relaxed">
        „{review.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand/20 text-brand flex items-center justify-center text-sm font-bold">
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">Opinia z Google</p>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-secondary" id="opinie">
      <div className="container-wide mx-auto">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-accent" />
            5.0 na Google · 40 opinii
          </div>
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            Co mówią o nas klienci?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Opinie i oceny naszych klientów z Google Maps
          </p>
        </div>

        {/* Horizontal scroll on mobile, wrapped grid on desktop */}
        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {reviews.map((review, i) => (
            <div key={review.name} className="snap-start">
              <ReviewCard review={review} delay={i * 100} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/LOCKIT+self+storage/@53.4285,14.5528,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline text-sm"
          >
            Zobacz wszystkie opinie na Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
