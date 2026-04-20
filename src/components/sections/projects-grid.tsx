import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { PROJECTS, TECH_FILTERS, projectCoverImage, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCardInner({ p }: { p: Project }) {
  const cover = projectCoverImage(p);
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
        <img
          src={cover}
          alt={`${p.title} homepage preview, ${p.category}`}
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full scale-[1.02] object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-90" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur">
            {p.tech}
          </span>
        </div>
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{p.category}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gradient-brand">
          {p.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
      </div>
    </>
  );
}

export function ProjectsGrid({
  limit,
  showFilters = true,
  onOpen,
}: {
  limit?: number;
  showFilters?: boolean;
  onOpen?: (p: Project) => void;
}) {
  const [filter, setFilter] = useState<(typeof TECH_FILTERS)[number]>("All");

  const items = useMemo(() => {
    const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tech === filter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <div>
      {showFilters && (
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {TECH_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-medium transition-all",
                  filter === f
                    ? "border-transparent bg-gradient-brand text-primary-foreground shadow-elegant"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p, i) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="block w-full text-left"
                aria-label={`View ${p.title} case study`}
              >
                <ProjectCardInner p={p} />
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {typeof limit === "number" && (
        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/50 hover:text-foreground"
            >
              See all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  );
}
