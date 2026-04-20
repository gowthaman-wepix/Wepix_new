import { createFileRoute } from "@tanstack/react-router";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Our Work | Wepix Digital Agency" },
      {
        name: "description",
        content:
          "Selected projects by Wepix across Shopify, WordPress, React and custom PHP, from D2C ecommerce to SaaS dashboards and internal platforms.",
      },
      { property: "og:title", content: "Our Work | Wepix" },
      { property: "og:description", content: "Browse our portfolio of high-converting digital builds." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="pt-36 pb-12 sm:pt-44">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              Portfolio
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Work that <span className="text-gradient-brand">moves the needle</span>
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Click any project for the full case study with metrics, scope and outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <ProjectsGrid />
        </div>
      </section>

      <CtaBanner
        eyebrow="Want results like these?"
        title="Let's create your next case study"
        subtitle="Bring us your goals, and we'll bring the strategy, design and engineering to ship."
      />
    </>
  );
}
