import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Founder, Lumen Apparel",
    quote:
      "Wepix didn't just rebuild our Shopify store; they redesigned how our brand feels online. Conversions are up 38% and our team finally loves the backend.",
    rating: 5,
  },
  {
    name: "Sara Kapoor",
    role: "Head of Growth, Pulse Inc.",
    quote:
      "The dashboard they delivered is beautiful and stupidly fast. They understood our SaaS metrics better than most product folks I've worked with.",
    rating: 5,
  },
  {
    name: "Daniel Rivera",
    role: "CEO, Estate Group",
    quote:
      "From discovery to launch: clean process, zero drama. Our inquiries jumped 74% in the first quarter after launch.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "COO, Atlas Group",
    quote:
      "They consolidated our entire ops stack into a single Laravel platform. Easily the highest-leverage build we've ever invested in.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                Kind words
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Loved by founders & <span className="text-gradient-brand">growth teams</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9 / 5 average rating</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
