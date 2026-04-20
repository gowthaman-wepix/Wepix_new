import { useEffect, useState } from "react";

import { Reveal } from "@/components/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CLIENT_LOGOS } from "@/data/client-logos";
import { cn } from "@/lib/utils";

const LOGO_SLOT_CLASS =
  "flex h-[4.5rem] w-full items-center justify-center rounded-xl border border-border/50 bg-background/50 px-3 py-2 shadow-sm transition-[opacity,box-shadow] sm:h-[5rem]";

const LOGO_LINK_CLASS = cn(
  LOGO_SLOT_CLASS,
  "hover:border-border hover:bg-background/80 hover:opacity-95 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

export function Trust() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const id = window.setInterval(() => {
      if (document.visibilityState === "hidden") return;
      api.scrollNext();
    }, 2600);

    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section className="border-y border-border bg-card/30 py-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by ambitious teams across the globe
          </p>
        </Reveal>

        <Reveal className="mt-8" delay={0.06}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
            }}
            className="relative w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {CLIENT_LOGOS.map((logo) => (
                <CarouselItem
                  key={logo.src}
                  className={cn(
                    "basis-1/2 pl-3 sm:basis-1/3 sm:pl-4 md:basis-1/4 lg:basis-1/5",
                  )}
                >
                  {logo.href ? (
                    <a
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={LOGO_LINK_CLASS}
                      aria-label={`${logo.alt}, opens in a new tab`}
                    >
                      <img
                        src={logo.src}
                        alt=""
                        className="h-14 max-h-14 w-auto max-w-[min(100%,10rem)] object-contain sm:h-16 sm:max-h-16 sm:max-w-[min(100%,11rem)]"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  ) : (
                    <div className={LOGO_SLOT_CLASS}>
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-14 max-h-14 w-auto max-w-[min(100%,10rem)] object-contain sm:h-16 sm:max-h-16 sm:max-w-[min(100%,11rem)]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="outline"
              className="left-0 top-1/2 h-9 w-9 -translate-y-1/2 border-border/80 bg-background/90 shadow-sm sm:left-1"
            />
            <CarouselNext
              variant="outline"
              className="right-0 top-1/2 h-9 w-9 -translate-y-1/2 border-border/80 bg-background/90 shadow-sm sm:right-1"
            />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
