"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { DEMO_RESULT } from "@/lib/content";

type Phase = "idle" | "rec" | "paused" | "processing" | "done";

const BARS = [30, 52, 40, 78, 60, 92, 48, 70, 100, 64, 38, 84, 56, 74, 44, 90, 62, 34, 72, 50, 86, 42];
const HIGHLIGHT = new Set([8, 15]);

function format(sec: number) {
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

function Waveform({ phase }: { phase: "idle" | "rec" | "paused" }) {
  return (
    <div className="flex h-[76px] items-center justify-center gap-1" aria-hidden="true">
      {BARS.map((v, i) => (
        <span
          key={i}
          className={cn(
            "w-[5px] rounded-full transition-[height,background-color] duration-300 ease-out",
            phase !== "idle" && HIGHLIGHT.has(i) ? "bg-brand" : phase === "rec" ? "bg-foreground" : "bg-border"
          )}
          style={{
            height: phase === "idle" ? 5 : v * 0.72,
            animation: phase === "idle" ? "none" : `bar ${0.7 + (i % 5) * 0.12}s ease-in-out ${-(i * 0.09)}s infinite alternate`,
            animationPlayState: phase === "rec" ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}

function RoundButton({ size, label, onClick, className, children }: { size: number; label: string; onClick: () => void; className?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2.5">
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        style={{ width: size, height: size }}
        className={cn("flex items-center justify-center rounded-full transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card", className)}
      >
        {children}
      </button>
      <span className="text-[13px] font-semibold">{label}</span>
    </div>
  );
}

export function RecordingDemo() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [seconds, setSeconds] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const procTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (phase !== "rec") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => () => clearTimeout(procTimer.current), []);

  const finish = () => {
    setPhase("processing");
    procTimer.current = setTimeout(() => setPhase("done"), 2200);
  };
  const reset = () => { setPhase("idle"); setSeconds(0); setConfirmDelete(false); };

  const recFlow = phase === "idle" || phase === "rec" || phase === "paused";
  const status = phase === "rec" ? "Gravando" : phase === "paused" ? "Pausado" : "Pronto para gravar";
  const sub = phase === "rec" ? "2 vozes detectadas" : phase === "paused" ? "Continue, apague ou conclua" : "Toque quando o paciente estiver pronto";

  return (
    <div className="relative flex min-h-[600px] w-full max-w-[380px] flex-col gap-5 overflow-hidden rounded-[36px] border bg-card p-[22px] pb-7 shadow-[0_40px_80px_-50px_rgba(16,23,28,0.45)]">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-muted-foreground">Nova consulta</span>
        <span className="rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">Porto · Clínica médica</span>
      </div>

      {recFlow && (
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-col items-center gap-2.5 pt-7" aria-live="polite">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className={cn("size-2 rounded-full", phase === "rec" ? "animate-pulse-dot bg-record" : "bg-subtle")} />
              {status}
            </div>
            <div className={cn("font-mono text-[60px] font-medium leading-none tracking-[-0.02em] tabular-nums", phase === "rec" ? "text-foreground" : "text-subtle")}>
              {format(seconds)}
            </div>
            <p className="min-h-[18px] text-center text-[13px] text-subtle">{sub}</p>
          </div>

          <Waveform phase={phase === "rec" ? "rec" : phase === "paused" ? "paused" : "idle"} />
          <div className="flex-1" />

          {phase === "idle" && (
            <div className="flex animate-in fade-in slide-in-from-bottom-1 flex-col items-center">
              <RoundButton size={84} label="Iniciar gravação" onClick={() => setPhase("rec")} className="bg-primary shadow-[0_0_0_8px_hsl(var(--muted))]">
                <span className="size-[26px] rounded-full bg-record" />
              </RoundButton>
            </div>
          )}

          {phase === "rec" && (
            <div className="flex animate-in fade-in slide-in-from-bottom-1 flex-col items-center">
              <RoundButton size={84} label="Pausar" onClick={() => setPhase("paused")} className="gap-[7px] bg-primary shadow-[0_0_0_8px_rgba(210,77,66,0.16)]">
                <span className="h-6 w-[7px] rounded-[3px] bg-primary-foreground" />
                <span className="h-6 w-[7px] rounded-[3px] bg-primary-foreground" />
              </RoundButton>
            </div>
          )}

          {phase === "paused" && (
            <div className="flex animate-in fade-in slide-in-from-bottom-1 items-end justify-between">
              <RoundButton size={52} label="Apagar" onClick={() => setConfirmDelete(true)} className="bg-muted text-foreground">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16" /><path d="M9 7V4.5h6V7" /><path d="M6.5 7l1 13h9l1-13" /><path d="M10 11v5" /><path d="M14 11v5" /></svg>
              </RoundButton>
              <RoundButton size={52} label="Continuar" onClick={() => setPhase("rec")} className="bg-muted">
                <span className="size-[15px] rounded-full bg-record" />
              </RoundButton>
              <RoundButton size={70} label="Concluir" onClick={finish} className="bg-brand">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="5,12.5 10,17 19,7" /></svg>
              </RoundButton>
            </div>
          )}
        </div>
      )}

      {phase === "processing" && (
        <div className="flex flex-1 animate-in fade-in flex-col items-center justify-center gap-4 text-center" role="status">
          <span className="size-11 animate-spin rounded-full border-[3px] border-muted border-t-brand" />
          <p className="font-display text-[22px] font-bold tracking-[-0.02em]">Organizando a anamnese</p>
          <p className="max-w-[240px] text-sm text-muted-foreground">Transcrevendo, separando falas e comparando com o checklist OSCE.</p>
        </div>
      )}

      {phase === "done" && (
        <div className="flex flex-1 animate-in fade-in slide-in-from-bottom-1 flex-col gap-3.5">
          <div className="flex items-end justify-between pt-1.5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">Med-Score</p>
              <p className="flex items-end gap-1.5">
                <span className="font-display text-[64px] font-extrabold leading-[0.9] tracking-[-0.05em]">{DEMO_RESULT.score}</span>
                <span className="pb-1.5 font-mono text-xs text-subtle">/100</span>
              </p>
            </div>
            <span className="rounded-full bg-muted px-2.5 py-1.5 font-mono text-[11px]">Hipótese: {DEMO_RESULT.hypothesis}</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-brand" style={{ width: `${DEMO_RESULT.score}%` }} /></div>
          <div className="flex flex-col gap-1.5 rounded-2xl bg-muted p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-signal">HDA</p>
            <p className="text-sm leading-[1.45]">{DEMO_RESULT.hda}</p>
          </div>
          <ul>
            {DEMO_RESULT.checklist.map((c) => (
              <li key={c.label} className="flex items-center gap-2.5 border-b py-2.5 text-[13px]">
                <span className={cn("size-2 flex-none rounded-full", c.ok ? "bg-brand" : "bg-record")} />
                <span className="flex-1">{c.label}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{c.pts}</span>
              </li>
            ))}
          </ul>
          <div className="flex-1" />
          <button type="button" onClick={reset} className="h-12 rounded-full border text-[15px] font-semibold transition-colors hover:bg-muted">Gravar de novo</button>
        </div>
      )}

      {confirmDelete && (
        <div className="absolute inset-0 flex animate-in fade-in items-end bg-ink/50" role="dialog" aria-modal="true" aria-labelledby="del-title">
          <div className="flex w-full animate-in slide-in-from-bottom-4 flex-col gap-3 rounded-t-3xl bg-card px-5 pb-6 pt-5">
            <p id="del-title" className="font-display text-xl font-bold tracking-[-0.02em]">Apagar esta gravação?</p>
            <p className="text-sm leading-normal text-muted-foreground">Os {format(seconds)} gravados serão descartados e você começa do zero.</p>
            <button type="button" onClick={reset} className="h-[50px] rounded-full bg-danger text-[15px] font-bold text-white">Apagar e recomeçar</button>
            <button type="button" onClick={() => setConfirmDelete(false)} className="h-[42px] text-sm font-semibold text-muted-foreground">Manter gravação</button>
          </div>
        </div>
      )}
    </div>
  );
}
