import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow } from "@/components/eyebrow";
import { CONTACT_EMAIL, FAQ } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="bg-muted">
      <div className="container grid items-start gap-12 py-24 lg:grid-cols-3">
        <div className="flex flex-col gap-3.5 lg:sticky lg:top-24">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display text-[clamp(34px,4.2vw,52px)] font-extrabold leading-[1.02] tracking-[-0.04em]">Perguntas frequentes</h2>
          <p className="text-base leading-normal text-muted-foreground">
            Não achou? Escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-signal underline underline-offset-2">{CONTACT_EMAIL}</a>.
          </p>
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="lg:col-span-2">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
