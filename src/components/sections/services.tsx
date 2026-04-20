import { Code2, Layers, ShoppingBag, Sparkles, Wand2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    desc: "Custom themes, headless storefronts and conversion optimisation for D2C brands.",
    tags: ["Shopify 2.0", "Hydrogen", "Klaviyo"],
  },
  {
    icon: Layers,
    title: "WordPress Development",
    desc: "Performant, secure WordPress builds with custom blocks and editor experiences.",
    tags: ["Custom themes", "ACF", "WooCommerce"],
  },
  {
    icon: Code2,
    title: "React Development",
    desc: "Modern web apps and dashboards with React, TypeScript and a polished design system.",
    tags: ["React 19", "TanStack", "Realtime"],
  },
  {
    icon: Wand2,
    title: "Custom PHP Solutions",
    desc: "Tailored Laravel and PHP platforms for CRMs, internal tools and integrations.",
    tags: ["Laravel", "APIs", "Integrations"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-accent" /> What we do
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Services that <span className="text-gradient-brand">drive growth</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              From a one-page funnel to a multi-store ecommerce ecosystem, we design, build and
              scale digital experiences obsessed with outcomes.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 ring-gradient hover:-translate-y-1 hover:shadow-elegant">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
