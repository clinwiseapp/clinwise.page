import { STEPS } from "@/lib/content";

export function Steps() {
  return (
    <section id="como-funciona" className="border-y">
      <div className="container flex flex-col gap-[52px] py-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="max-w-[620px] font-display text-[clamp(34px,4.2vw,52px)] font-extrabold leading-[1.02] tracking-[-0.04em]">Três passos entre a consulta e a nota.</h2>
          <p className="max-w-[340px] text-base leading-normal text-muted-foreground">Sem digitar nada durante o atendimento. Você foca no paciente.</p>
        </div>
        <ol className="grid md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="flex flex-col gap-3.5 border-t-2 border-foreground py-7 pr-7">
              <span className="font-display text-[64px] font-extrabold leading-none tracking-[-0.05em] text-signal">{s.n}</span>
              <h3 className="text-[21px] font-bold tracking-[-0.01em]">{s.title}</h3>
              <p className="text-base leading-[1.55] text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
