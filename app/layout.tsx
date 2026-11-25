import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["500", "700", "800"], display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", weight: ["400", "500", "600", "700"], display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", weight: ["400", "500"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinwiseapp.com";
const description =
  "Grave os atendimentos do rodízio hospitalar e receba a anamnese em Porto ou SOAP, a nota no checklist OSCE e o que a sua banca cobraria do caso.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ClinWise — Você atende. A banca corrige.", template: "%s · ClinWise" },
  description,
  applicationName: "ClinWise",
  keywords: ["internato", "OSCE", "anamnese", "residência médica", "Porto", "SOAP", "Med-Score"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: siteUrl, siteName: "ClinWise", title: "ClinWise — Você atende. A banca corrige.", description },
  twitter: { card: "summary_large_image", title: "ClinWise", description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1418" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
