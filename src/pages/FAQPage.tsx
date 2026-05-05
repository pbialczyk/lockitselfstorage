import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const { t } = useTranslation();
  const faqItems = (t("faqPage.items", { returnObjects: true }) as { q: string; a: string }[]) || [];
  return (
    <Layout title={t("faqPage.title")} description={t("faqPage.description")} canonical="/faq"
      jsonLd={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }}>
      <section className="section-padding bg-brand-deep">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">{t("faqPage.h1")}</h1>
          <p className="text-brand-light/80 text-lg">{t("faqPage.sub")}</p>
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
};

export default FAQPage;
