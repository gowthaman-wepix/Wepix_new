import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, LocateIcon, LocationEditIcon, Mail, MapPin, PhoneCall, PinIcon, Sparkles, TimerIcon, Twitter } from "lucide-react";
import { TiruppurWithTooltip } from "@/components/tiruppur-with-tooltip";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/30 mt-24">
      <div className="pointer-events-none absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-bold">
              we<span className="text-gradient-brand">pix</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A digital agency crafting high-converting websites and products in Shopify, WordPress,
            React and custom PHP. We turn ideas into pixel-perfect outcomes.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Github, href: "https://github.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/work" className="transition-colors hover:text-foreground">Work</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@wepix.in</li>
            <li className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> +91 93423 66970</li>
            <li className="flex items-center gap-2"><TimerIcon className="h-4 w-4" /> Mon to Fri · 10:00AM to 7:00PM IST</li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>
                <TiruppurWithTooltip />
                , Tamil Nadu (HQ — the OG)
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Wepix. All rights reserved.</p>
          <p>Crafted with care and a lot of pixels.</p>
        </div>
      </div>
    </footer>
  );
}
