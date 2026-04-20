import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { Reveal } from "@/components/reveal";

const STEPS = [
  { icon: Compass, t: "Discovery", d: "We dig into your goals, audience and competitors to map a clear path forward." },
  { icon: PenTool, t: "Design", d: "We craft pixel-perfect, conversion-focused designs that feel uniquely yours." },
  { icon: Code2, t: "Development", d: "Engineered with care: fast, accessible and built to scale with your business." },
  { icon: Rocket, t: "Launch", d: "We test, optimise, and ship, then keep iterating based on real-world data." },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              How we work
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A proven <span className="text-gradient-brand">4-step process</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Transparent, collaborative and focused on outcomes at every single step.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-elegant">
                    <s.icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-[10px] font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
