import { cn } from "@/lib/utils";

export function LogoMark({ className, framed = true }: { className?: string; framed?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={cn("size-[30px]", className)}>
      {framed && <rect x="4" y="4" width="92" height="92" rx="24" stroke="currentColor" strokeWidth="8" />}
      <polyline points="26,28 38,72 50,46" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="50,46 62,72 74,28" stroke="#009B9E" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-[21px] font-extrabold tracking-[-0.03em]">ClinWise</span>
    </span>
  );
}
