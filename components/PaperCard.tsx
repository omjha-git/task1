import { ArrowUpRight, BarChart3, Boxes, Database, FileText, Github, Star } from "lucide-react";
import { TagChip } from "@/components/TagChip";

type PaperCardProps = {
  title: string;
  authors: string;
  date: string;
  citations: string;
  abstract: string;
  benchmark: string;
  tags: string[];
  thumbnail: string;
  accent: string;
  metrics: {
    stars: string;
    models: string;
    spaces: string;
    datasets: string;
  };
};

export function PaperCard({ title, authors, date, citations, abstract, benchmark, tags, thumbnail, accent, metrics }: PaperCardProps) {
  return (
    <article className="group grid gap-4 border-b border-atlas-line bg-white/88 p-4 transition last:border-b-0 hover:bg-white sm:grid-cols-[92px_minmax(0,1fr)] xl:grid-cols-[92px_minmax(0,1fr)_170px]">
      <div className="hidden sm:block">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-atlas-line bg-atlas-soft shadow-sm">
          <div className="absolute inset-0 bg-grid bg-[size:18px_18px] opacity-70" />
          <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-25 blur-xl" style={{ backgroundColor: accent }} />
          <span className="relative text-lg font-black text-atlas-orange">{thumbnail}</span>
        </div>
      </div>

      <div className="min-w-0">
        <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-atlas-muted">
          <span>{authors}</span>
          <span aria-hidden="true">/</span>
          <span>{date}</span>
          <span aria-hidden="true">/</span>
          <span>{citations} citations</span>
        </div>

        <h2 className="text-lg font-black leading-snug tracking-tight text-atlas-ink transition group-hover:text-atlas-orange sm:text-xl">
          <a href="#">{title}</a>
        </h2>
        <p className="mt-2 text-sm font-medium leading-6 text-atlas-muted">{abstract}</p>

        <div className="mt-3 rounded-md border border-atlas-line bg-atlas-soft px-3 py-2 text-xs font-bold text-atlas-ink">
          <span className="text-atlas-orange">Benchmark:</span> {benchmark}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-atlas-line pt-0 text-xs font-bold text-atlas-muted xl:flex-col xl:border-l xl:pl-4">
        <span className="inline-flex items-center gap-1.5 rounded border border-atlas-line bg-atlas-soft px-2 py-1 text-atlas-orange"><Star size={13} /> {metrics.stars}</span>
        <span className="inline-flex items-center gap-1.5 rounded border border-atlas-line bg-white px-2 py-1"><Boxes size={13} /> {metrics.models}</span>
        <span className="inline-flex items-center gap-1.5 rounded border border-atlas-line bg-white px-2 py-1"><BarChart3 size={13} /> {metrics.spaces}</span>
        <span className="inline-flex items-center gap-1.5 rounded border border-atlas-line bg-white px-2 py-1"><Database size={13} /> {metrics.datasets}</span>
        <div className="mt-0 flex gap-2 xl:mt-2">
          <a href="#" className="grid h-8 w-8 place-items-center rounded border border-atlas-line bg-white text-atlas-muted transition hover:border-atlas-orange hover:text-atlas-orange" aria-label="Open paper"><ArrowUpRight size={14} /></a>
          <a href="#" className="grid h-8 w-8 place-items-center rounded border border-atlas-line bg-white text-atlas-muted transition hover:border-atlas-orange hover:text-atlas-orange" aria-label="Open PDF"><FileText size={14} /></a>
          <a href="#" className="grid h-8 w-8 place-items-center rounded border border-atlas-line bg-white text-atlas-muted transition hover:border-atlas-orange hover:text-atlas-orange" aria-label="Open GitHub"><Github size={14} /></a>
        </div>
      </div>
    </article>
  );
}
