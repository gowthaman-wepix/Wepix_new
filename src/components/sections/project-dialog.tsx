import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projectCoverImage, type Project } from "@/data/projects";

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl overflow-hidden border-border bg-card p-0">
        {project && (
          <div className="max-h-[85vh] overflow-y-auto">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
              <img
                src={projectCoverImage(project)}
                alt={`${project.title} homepage preview`}
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute left-5 top-5 flex gap-2">
                <span className="rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
                  {project.tech}
                </span>
                <span className="rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
                  {project.year}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <DialogHeader>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {project.category} · {project.client}
                </p>
                <DialogTitle className="font-display text-3xl">{project.title}</DialogTitle>
              </DialogHeader>
              <p className="mt-3 text-muted-foreground">{project.excerpt}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-background/50 p-4 text-center"
                  >
                    <div className="font-display text-xl font-bold text-gradient-brand">
                      {m.value}
                    </div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Scope
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.scope.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <Link to="/contact" onClick={onClose}>
                    Start a similar project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="glass" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
