import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

type Review = { name: string; text: string; initials: string };

const ReviewCard = ({ review, delay, label }: { review: Review; delay: number; label: string }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-[300px] sm:w-[340px] lg:w-auto h-full flex flex-col bg-card border border-border rounded-2xl p-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <StarRating />
      <p className="text-sm text-muted-foreground mt-4 mb-5 leading-relaxed flex-1">„{review.text}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-brand/20 text-brand flex items-center justify-center text-sm font-bold">
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const { t } = useTranslation();
  const reviews = (t("reviews.items", { returnObjects: true }) as Review[]) || [];
  return (
    <section className="section-padding bg-secondary" id="opinie">
      <div className="container-wide mx-auto">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-accent" />
            {t("reviews.badge")}
          </div>
          <h2 className="text-3xl font-extrabold text-foreground mb-4">{t("reviews.heading")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("reviews.sub")}</p>
        </div>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {reviews.map((review, i) => (
            <div key={review.name} className="snap-start">
              <ReviewCard review={review} delay={i * 100} label={t("reviews.googleReview")} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://www.google.com/maps/place/LOCKIT+self+storage/@53.4285,14.5528,17z/" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline text-sm">
            {t("reviews.seeAll")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
