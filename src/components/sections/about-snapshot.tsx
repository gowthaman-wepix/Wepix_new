import { Award, Heart, Rocket, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";

const STATS = [
  { icon: Rocket, v: "200+", l: "Projects shipped" },
  { icon: Users, v: "150+", l: "Happy clients" },
  { icon: Award, v: "8 yrs", l: "Of craft" },
  { icon: Heart, v: "98%", l: "Retention rate" },
];

export function AboutSnapshot() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              About Wepix
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A small studio with a <span className="text-gradient-brand">big track record.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Wepix is a focused team of designers and engineers who care deeply about the craft.
              We've shipped 200+ digital products, from D2C Shopify stores doing 7-figures to
              custom Laravel platforms running internal operations for growing companies.
            </p>
            <p className="mt-3 text-muted-foreground">
              No bloat, no agencies-of-agencies. Just senior people, working close to the problem,
              shipping work we're proud to put our name on.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <s.icon className="h-5 w-5 text-accent" />
                <div className="mt-4 font-display text-3xl font-bold text-gradient-brand">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
