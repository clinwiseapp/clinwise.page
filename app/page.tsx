import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Steps } from "@/components/sections/steps";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { CallToAction } from "@/components/sections/call-to-action";
import { FAQ } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Steps />
        <Pricing />
        <Faq />
        <CallToAction />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
