"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SIGNUP_URL } from "@/lib/content";

export function CallToAction() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL(SIGNUP_URL);
    if (email) url.searchParams.set("email", email);
    window.location.href = url.toString();
  };

  return (
    <section id="cta" className="container flex flex-col items-center gap-[26px] py-[110px] text-center">
      <h2 className="max-w-[860px] font-display text-[clamp(40px,6vw,76px)] font-extrabold leading-[0.98] tracking-[-0.045em]">Sua próxima consulta já pode valer nota.</h2>
      <p className="max-w-[520px] text-lg leading-normal text-muted-foreground">Crie a conta em um minuto e grave o primeiro atendimento no próximo plantão.</p>
      <form onSubmit={onSubmit} className="flex flex-wrap justify-center gap-2.5">
        <label htmlFor="cta-email" className="sr-only">E-mail</label>
        <Input id="cta-email" type="email" required autoComplete="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="min-w-[260px]" />
        <Button type="submit" size="lg">Começar grátis</Button>
      </form>
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-subtle">Ferramenta de estudo · não substitui registro em prontuário</p>
    </section>
  );
}
