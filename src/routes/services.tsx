import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Shopify, WordPress, React & PHP | Wepix" },
      {
        name: "description",
        content:
          "Explore Wepix services: Shopify development, WordPress development, React apps and custom PHP solutions, engineered to convert and scale.",
      },
      { property: "og:title", content: "Services | Wepix" },
      { property: "og:description", content: "Shopify, WordPress, React and custom PHP, built to perform." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-8 sm:pt-44">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              Services
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              End-to-end <span className="text-gradient-brand">digital craft</span>
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We design, engineer, launch and grow across the platforms our clients trust most.
            </p>
          </Reveal>
        </div>
      </section>
      <Services />
      <Process />
      <CtaBanner
        title="Ready to start your project?"
        subtitle="A free, no-pressure consultation is the fastest way to see if we're a fit."
      />
    </>
  );
}
