import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/eyebrow";
import { RecordingDemo } from "@/components/recording-demo";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section id="topo" className="container grid items-center gap-16 pb-24 pt-16 md:pt-[72px] lg:grid-cols-2">
      <div className="flex flex-col gap-7">
        <Eyebrow rule>{HERO.eyebrow}</Eyebrow>
        <h1 className="font-display text-[clamp(44px,6.4vw,84px)] font-extrabold leading-[0.96] tracking-[-0.045em]">
          {HERO.titleA} <span className="text-signal">{HERO.titleB}</span>
        </h1>
        <p className="max-w-[500px] text-[19px] leading-[1.55] text-muted-foreground">{HERO.lead}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#cta">Começar grátis</a></Button>
          <Button asChild size="lg" variant="outline"><a href="#demo">Testar a gravação →</a></Button>
        </div>
      </div>
      <div id="demo" className="flex flex-col items-center gap-4">
        <RecordingDemo />
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-subtle">Demonstração interativa · toque para gravar</p>
      </div>
    </section>
  );
}
