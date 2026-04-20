import type { ComponentType, ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { TiruppurWithTooltip } from "@/components/tiruppur-with-tooltip";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Wepix | Start your project today" },
      {
        name: "description",
        content:
          "Get in touch with Wepix. Tell us about your project and we'll respond within one business day with a tailored plan and quote.",
      },
      { property: "og:title", content: "Contact Wepix" },
      { property: "og:description", content: "Start your next digital project with Wepix today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="relative pt-36 pb-24 sm:pt-44">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              Let's talk
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Tell us about your <span className="text-gradient-brand">project</span>
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Share a few details and we'll be in touch within 24 hours with next steps. No sales
              pitch, just a real conversation about your goals.
            </p>

            <div className="mt-10 space-y-5">
              <ContactInfo icon={Mail} label="Email" value="hello@wepix.in" />
              <ContactInfo icon={Phone} label="Phone" value="+91 93423 66970" />
              <ContactInfo icon={MapPin} label="Studio" value="திருப்பூர், Tamil Nadu (HQ — the OG)" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card-elegant ring-gradient">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon, label, value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-elegant">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-base">{value}</div>
      </div>
    </div>
  );
}
