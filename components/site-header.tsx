import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="container flex flex-wrap items-center justify-between gap-5 py-4">
        <Link href="#topo" aria-label="ClinWise — início"><Logo /></Link>
        <nav className="hidden items-center gap-7 text-[15px] font-medium text-muted-foreground md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button asChild size="sm"><a href="#cta">Começar grátis</a></Button>
        </div>
      </div>
    </header>
  );
}
