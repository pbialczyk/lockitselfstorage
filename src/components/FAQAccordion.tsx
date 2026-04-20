import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

const FAQAccordion = ({ items }: { items: FAQItem[] }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {items.map((item, i) => (
      <AccordionItem
        key={i}
        value={`faq-${i}`}
        className="bg-card rounded-xl border border-border px-6 overflow-hidden"
      >
        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand py-5">
          {item.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
          {item.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FAQAccordion;
