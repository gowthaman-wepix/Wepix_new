import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact-form";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wepix | High-converting Shopify, WordPress, React & PHP builds" },
      {
        name: "description",
        content:
          "Wepix is a digital agency that designs and engineers websites and products that convert. Shopify, WordPress, React and custom PHP solutions.",
      },
      { property: "og:title", content: "Wepix | Digital agency for ambitious brands" },
      { property: "og:description", content: "200+ projects shipped. 98% client retention. Let's build yours." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />

      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  Selected work
                </span>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Projects we're <span className="text-gradient-brand">proud of</span>
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                A small slice of recent builds across ecommerce, SaaS, fintech and education.
                Every project shipped on time, on brief and built to scale.
              </p>
            </div>
          </Reveal>
          <ProjectsGrid limit={6} showFilters={false} />
        </div>
      </section>

      <CtaBanner />

      <AboutSnapshot />
      <Process />
      <Testimonials />
      <ContactSection />

      <CtaBanner
        eyebrow="One last nudge"
        title="Let's build something amazing together"
        subtitle="Tell us about your idea, and we'll bring the strategy, design and engineering."
      />
    </>
  );
}
