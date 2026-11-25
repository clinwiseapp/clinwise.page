"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/eyebrow";
import { cn } from "@/lib/utils";
import { PLANS } from "@/lib/content";

function Check({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("font-bold", className)}>✓</span>;
}

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  const price = annual ? PLANS.pro.annualPerMonth : PLANS.pro.monthly;
  const note = annual ? `R$ ${PLANS.pro.annualPerMonth * 12} cobrados uma vez por ano` : "Cobrança mensal, sem fidelidade";

  return (
    <section id="precos" className="container flex flex-col gap-11 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>Preços</Eyebrow>
          <h2 className="font-display text-[clamp(34px,4.2vw,52px)] font-extrabold leading-[1.02] tracking-[-0.04em]">Comece sem pagar nada.</h2>
        </div>
        <div role="radiogroup" aria-label="Período de cobrança" className="flex gap-1 rounded-full bg-muted p-1">
          {[{ v: false, l: "Mensal" }, { v: true, l: "Anual" }].map((o) => (
            <button
              key={o.l}
              type="button"
              role="radio"
              aria-checked={annual === o.v}
              onClick={() => setAnnual(o.v)}
              className={cn("flex items-center gap-2 rounded-full px-[18px] py-2.5 text-sm font-semibold transition-colors", annual === o.v ? "bg-card shadow-sm" : "text-muted-foreground")}
            >
              {o.l}
              {o.v && <span className="font-mono text-[11px] text-signal">−25%</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="flex flex-col gap-[22px] rounded-3xl border bg-card p-[34px]">
          <header className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">{PLANS.free.name}</h3>
            <p className="text-[15px] text-muted-foreground">{PLANS.free.tagline}</p>
          </header>
          <p className="flex items-end gap-2">
            <span className="font-display text-[56px] font-extrabold leading-[0.9] tracking-[-0.05em]">R$ 0</span>
            <span className="pb-1 text-[15px] text-muted-foreground">para sempre</span>
          </p>
          <ul className="flex flex-col gap-3 border-t pt-[22px] text-[15px]">
            {PLANS.free.items.map((it) => <li key={it} className="flex gap-2.5"><Check className="text-signal" />{it}</li>)}
          </ul>
          <div className="flex-1" />
          <Button asChild variant="outline" size="block"><a href="#cta">Criar conta grátis</a></Button>
        </article>

        <article className="flex flex-col gap-[22px] rounded-3xl border border-ink bg-ink p-[34px] text-paper dark:border-border">
          <header className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">{PLANS.pro.name}</h3>
              <p className="text-[15px] text-[#B4BFC4]">{PLANS.pro.tagline}</p>
            </div>
            <Badge>Mais escolhido</Badge>
          </header>
          <div className="flex flex-col gap-2">
            <p className="flex flex-wrap items-end gap-2">
              <span className="font-display text-[56px] font-extrabold leading-[0.9] tracking-[-0.05em]">R$ {price}</span>
              <span className="pb-1 text-[15px] text-[#B4BFC4]">/ mês</span>
            </p>
            <p className="font-mono text-xs text-[#8A9599]">{note}</p>
          </div>
          <ul className="flex flex-col gap-3 border-t border-[#26323A] pt-[22px] text-[15px]">
            {PLANS.pro.items.map((it) => <li key={it} className="flex gap-2.5"><Check className="text-brand-bright" />{it}</li>)}
          </ul>
          <div className="flex-1" />
          <Button asChild variant="signal" size="block"><a href={`#cta`} data-plan={annual ? "internato-anual" : "internato-mensal"}>Assinar o Internato</a></Button>
        </article>
      </div>
      <p className="text-sm text-subtle">Cancele quando quiser, direto no app. Pagamento por cartão ou Pix.</p>
    </section>
  );
}
