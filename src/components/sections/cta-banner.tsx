import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaBanner({
  eyebrow = "Ready when you are",
  title = "Let's build something amazing together.",
  subtitle = "From scrappy MVPs to flagship platforms: bring us the brief, and we'll bring the craft.",
  primaryLabel = "Start Your Project",
  primaryTo = "/contact",
  secondaryLabel = "Contact Us",
  secondaryTo = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-16 shadow-elegant">
            <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
            <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl anim-glow" />
            <div className="relative mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1 text-xs backdrop-blur">
                {eyebrow}
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {title.split(" ").map((w, i, arr) =>
                  i >= arr.length - 2 ? (
                    <span key={i} className="text-gradient-brand">{w} </span>
                  ) : (
                    <span key={i}>{w} </span>
                  ),
                )}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to={primaryTo as "/contact"}>
                    {primaryLabel} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link to={secondaryTo as "/contact"}>
                    <MessageSquare className="h-4 w-4" />
                    {secondaryLabel}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
