import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="absolute -top-32 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 bg-mesh anim-glow" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex max-w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          A digital studio · 200+ projects shipped
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-center font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          We build digital products that <span className="text-gradient">convert.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground sm:text-lg"
        >
          Wepix is a results-driven digital agency designing & engineering Shopify stores,
          WordPress sites, React apps and custom PHP platforms, built to perform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild variant="hero" size="xl">
            <Link to="/work">
              View Our Work
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/contact">
              <PlayCircle className="h-4 w-4" />
              Get a Free Consultation
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { v: "200+", l: "Projects shipped" },
            { v: "98%", l: "Client retention" },
            { v: "12+", l: "Industries served" },
            { v: "4.9★", l: "Average rating" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-card/40 p-4 text-center backdrop-blur"
            >
              <div className="font-display text-2xl font-bold text-gradient-brand">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
