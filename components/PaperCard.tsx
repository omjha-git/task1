import { ArrowUp, ExternalLink, FileText, Github, MessageCircle, Trophy } from "lucide-react";
import { TagChip } from "@/components/TagChip";

type PaperCardProps = {
  title: string;
  authors: string;
  date: string;
  abstract: string;
  result: string;
  tags: string[];
  thumbnail: string;
  metrics: {
    stars: string;
    repo: string;
    citations: string;
  };
};

function PaperThumb({ title }: { title: string }) {
  return (
    <div className="hidden h-[178px] w-[124px] shrink-0 overflow-hidden rounded-md border border-atlas-line bg-white shadow-sm sm:block">
      <div className="border-b border-atlas-line bg-atlas-soft px-2 py-2 text-center text-[5px] font-black leading-tight text-atlas-ink">{title}</div>
      <div className="space-y-1.5 p-3">
        <div className="mx-auto h-1.5 w-12 rounded bg-atlas-orange/60" />
        <div className="mx-auto h-1 w-16 rounded bg-atlas-line" />
        <div className="mx-auto h-1 w-14 rounded bg-atlas-line" />
        <div className="mt-4 space-y-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-1 rounded bg-atlas-line/80" style={{ width: `${index % 3 === 0 ? 86 : index % 3 === 1 ? 72 : 94}%` }} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 items-end gap-1 border-t border-atlas-line pt-3">
          <div className="h-8 rounded-sm bg-atlas-orange/25" />
          <div className="h-12 rounded-sm bg-atlas-orange/55" />
          <div className="h-6 rounded-sm bg-atlas-orange/20" />
        </div>
      </div>
    </div>
  );
}

export function PaperCard({ title, authors, date, abstract, result, tags, thumbnail, metrics }: PaperCardProps) {
  return (
    <article className="grid gap-5 border-b border-atlas-line bg-white px-4 py-4 last:border-b-0 hover:bg-[#fffdfb] md:grid-cols-[124px_minmax(0,1fr)_95px]">
      <PaperThumb title={thumbnail} />

      <div className="min-w-0 py-1">
        <h2 className="text-[21px] font-black leading-tight tracking-tight text-atlas-ink hover:text-atlas-orange">
          <a href="#">{title}</a>
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] font-semibold text-atlas-muted">
          <span>{authors}</span>
          <span aria-hidden="true">·</span>
          <span>{date}</span>
        </div>
        <p className="mt-4 max-w-[620px] text-[13px] font-medium leading-6 text-atlas-ink/78">{abstract}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-black text-atlas-muted">
          <span className="text-atlas-orange">SOTA</span>
          <Trophy size={12} className="text-atlas-orange" />
          <span>{result}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => <TagChip key={tag} label={tag} active={index === 0} />)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-black">
          <a href="#" className="inline-flex h-7 items-center gap-1 rounded-md border border-atlas-line bg-white px-2.5 text-atlas-orange hover:border-atlas-orange">arXiv Page <ExternalLink size={12} /></a>
          <a href="#" className="inline-flex h-7 items-center gap-1 rounded-md border border-atlas-line bg-white px-2.5 text-atlas-ink hover:border-atlas-orange hover:text-atlas-orange"><Github size={12} /> GitHub</a>
          <a href="#" className="inline-flex h-7 items-center gap-1 rounded-md border border-atlas-line bg-white px-2.5 text-atlas-ink hover:border-atlas-orange hover:text-atlas-orange"><FileText size={12} /> PDF</a>
        </div>
      </div>

      <div className="flex gap-3 border-atlas-line text-center md:flex-col md:border-l md:pl-4">
        <div className="flex-1 py-2">
          <div className="inline-flex items-center gap-1 text-[18px] font-black text-atlas-ink"><ArrowUp size={15} /> {metrics.stars}</div>
          <div className="text-[10px] font-black uppercase tracking-[0.08em] text-atlas-muted">Stars / Hr</div>
        </div>
        <div className="flex-1 border-atlas-line py-2 md:border-t">
          <div className="text-[18px] font-black text-atlas-ink">{metrics.repo}</div>
          <div className="text-[10px] font-black uppercase tracking-[0.08em] text-atlas-muted">Repo</div>
        </div>
        <div className="flex-1 border-atlas-line py-2 md:border-t">
          <div className="inline-flex items-center gap-1 text-[18px] font-black text-atlas-ink"><MessageCircle size={14} /> {metrics.citations}</div>
          <div className="text-[10px] font-black uppercase tracking-[0.08em] text-atlas-muted">Citations</div>
        </div>
      </div>
    </article>
  );
}
