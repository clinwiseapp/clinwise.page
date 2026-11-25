import { CONTACT_EMAIL } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-wrap items-center justify-between gap-5 py-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <span className="font-display text-[17px] font-extrabold tracking-[-0.03em] text-foreground">ClinWise</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap gap-6">
          <a href="/termos" className="hover:text-foreground">Termos de uso</a>
          <a href="/privacidade" className="hover:text-foreground">Privacidade e LGPD</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">Contato</a>
        </nav>
      </div>
    </footer>
  );
}
