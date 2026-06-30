import type { LucideIcon } from "lucide-react";

type NewsItemProps = {
  icon: LucideIcon;
  source: string;
  text: string;
  meta: string;
};

export function NewsItem({ icon: Icon, source, text, meta }: NewsItemProps) {
  return (
    <article className="rounded-2xl border border-atlas-line/90 bg-atlas-soft/80 p-4 transition hover:-translate-y-0.5 hover:border-atlas-orange/50 hover:bg-white">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-black text-atlas-orange">
          <Icon size={14} />
          {source}
        </span>
        <span className="shrink-0 text-xs font-bold text-atlas-muted">{meta}</span>
      </div>
      <p className="text-sm font-semibold leading-5 text-atlas-ink">{text}</p>
    </article>
  );
}
