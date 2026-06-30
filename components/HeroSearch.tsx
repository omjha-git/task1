import { Bot, BrainCircuit, Code2, Eye, Grid2X2, Search, Sparkles } from "lucide-react";
import { heroChips } from "@/data/papers";

const iconMap = {
  bot: Bot,
  nodes: BrainCircuit,
  eye: Eye,
  code: Code2,
  robot: Bot,
  grid: Grid2X2,
};

export function HeroSearch() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pt-5">
      <div className="relative overflow-hidden rounded-lg border border-atlas-line bg-[#fff7f1] px-6 py-8 text-center shadow-sm">
        <div className="absolute inset-0 bg-grid bg-[size:34px_34px] opacity-35" />
        <div className="absolute -right-20 -top-28 h-72 w-[520px] rounded-full border border-dashed border-atlas-orange/25" />
        <div className="absolute -right-7 top-4 h-2 w-2 rounded-full bg-atlas-orange" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-[31px] font-black leading-tight tracking-tight text-atlas-ink sm:text-[35px]">
            Explore the frontiers of <span className="text-atlas-orange">AI research</span>
          </h1>
          <p className="mt-3 text-[14px] font-semibold text-atlas-muted">
            Discover papers, methods, datasets, benchmarks and track the latest breakthroughs.
          </p>

          <label className="mx-auto mt-6 flex h-12 max-w-[650px] items-center gap-3 rounded-full border border-atlas-line bg-white px-5 text-atlas-muted shadow-[0_8px_22px_rgba(18,16,15,0.08)]">
            <Search size={18} />
            <input className="min-w-0 flex-1 bg-transparent text-[13px] font-semibold text-atlas-ink outline-none placeholder:text-atlas-muted" placeholder="Search papers, authors, datasets, methods, models..." />
            <kbd className="rounded-full border border-atlas-line bg-atlas-soft px-2.5 py-1 text-[11px] font-black text-atlas-muted">⌘ K</kbd>
          </label>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {heroChips.map((chip) => {
              const Icon = iconMap[chip.icon as keyof typeof iconMap] ?? Sparkles;
              return (
                <button key={chip.label} className="inline-flex h-9 items-center gap-2 rounded-full border border-atlas-line bg-white px-4 text-[12px] font-black text-atlas-ink shadow-sm transition hover:border-atlas-orange hover:text-atlas-orange">
                  <Icon size={14} className="text-atlas-orange" /> {chip.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
