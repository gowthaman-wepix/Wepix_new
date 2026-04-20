import { createFileRoute } from "@tanstack/react-router";
import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wepix | A small studio with a big track record" },
      {
        name: "description",
        content:
          "Meet Wepix: a focused team of designers and engineers who've shipped 200+ digital products for ambitious brands worldwide.",
      },
      { property: "og:title", content: "About Wepix" },
      { property: "og:description", content: "200+ projects, 98% client retention, 8 years of craft." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-8 sm:pt-44">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              About us
            </span>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              We're a studio, not a <span className="text-gradient-brand">factory.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Wepix is a small, senior team that partners closely with founders and growth leaders.
              We obsess over the details, from the kerning of a button to the milliseconds on a
              page load, because that's where great digital products are won.
            </p>
          </Reveal>
        </div>
      </section>
      <AboutSnapshot />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
