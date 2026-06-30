import { ArrowUpRight, FileText, Github, MessageCircle, Star, TrendingUp } from "lucide-react";

type PaperCardProps = {
  rank: number;
  title: string;
  authors: string;
  summary: string;
  tags: string[];
  score: string;
  stars: string;
  citations: string;
  comments: number;
  date: string;
  links: string[];
};

const linkIcons = {
  View: ArrowUpRight,
  PDF: FileText,
  GitHub: Github,
};

export function PaperCard({ rank, title, authors, summary, tags, score, stars, citations, comments, date, links }: PaperCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-atlas-line bg-white/92 p-5 shadow-card transition hover:-translate-y-1 hover:border-atlas-orange/60 hover:shadow-glow">
      <div className="flex gap-4">
        <div className="hidden sm:block">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-atlas-soft text-sm font-black text-atlas-orange ring-1 ring-atlas-line">
            #{rank}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold text-atlas-muted">
            <span className="rounded-full bg-atlas-orange/10 px-2.5 py-1 text-atlas-orange ring-1 ring-atlas-orange/15">Trending Paper</span>
            <span>{date}</span>
            <span aria-hidden="true">/</span>
            <span>{authors}</span>
          </div>

          <h3 className="text-xl font-black tracking-tight text-atlas-ink transition group-hover:text-atlas-orange sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-atlas-muted">{summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-atlas-line bg-atlas-soft px-3 py-1 text-xs font-bold text-atlas-muted">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-4 border-t border-atlas-line pt-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-bold text-atlas-muted">
              <span className="inline-flex items-center gap-1.5 text-atlas-orange"><TrendingUp size={16} /> {score}</span>
              <span className="inline-flex items-center gap-1.5"><Star size={16} /> {stars}</span>
              <span>{citations} citations</span>
              <span className="inline-flex items-center gap-1.5"><MessageCircle size={16} /> {comments}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {links.map((link) => {
                const Icon = linkIcons[link as keyof typeof linkIcons] ?? ArrowUpRight;
                return (
                  <a
                    key={link}
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-full border border-atlas-line bg-white px-3 py-2 text-xs font-bold text-atlas-muted transition hover:border-atlas-orange hover:text-atlas-orange"
                  >
                    <Icon size={14} />
                    {link}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
