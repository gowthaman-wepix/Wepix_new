import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function TiruppurWithTooltip({ className }: { className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            "cursor-help underline decoration-dotted decoration-muted-foreground/60 underline-offset-2",
            className,
          )}
        >
          திருப்பூர்
        </span>
      </TooltipTrigger>
      <TooltipContent>Tirupur</TooltipContent>
    </Tooltip>
  );
}
