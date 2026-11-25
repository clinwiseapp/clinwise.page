import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, rule = false }: { children: React.ReactNode; className?: string; rule?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-signal", className)}>
      {rule && <span className="h-px w-[22px] bg-current" />}
      {children}
    </div>
  );
}
