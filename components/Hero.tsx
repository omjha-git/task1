import { Search, Sparkles } from "lucide-react";
import { CategoryChip } from "@/components/CategoryChip";
import { topics } from "@/data/papers";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-atlas-line/80" id="explore">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute left-1/2 top-4 h-80 w-80 -translate-x-1/2 rounded-full bg-radialGlow blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-32 w-[72rem] -translate-x-1/2 rounded-full bg-atlas-orange/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-atlas-line bg-white/85 px-4 py-2 text-sm font-bold text-atlas-orange shadow-card backdrop-blur">
          <Sparkles size={16} />
          Discover frontier AI research faster
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.02] tracking-tight text-atlas-ink sm:text-5xl lg:text-7xl">
          Explore the frontiers of <span className="text-atlas-orange">AI research</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-atlas-muted sm:text-lg">
          Discover papers, methods, datasets, benchmarks, and tasks in one clean research atlas for frontier engineers and researchers.
        </p>

        <div className="mt-9 w-full max-w-3xl rounded-[1.75rem] border border-atlas-line bg-white/90 p-2 shadow-glow backdrop-blur">
          <div className="flex min-h-14 items-center gap-3 rounded-2xl bg-atlas-soft px-4 py-3 ring-1 ring-inset ring-atlas-line/70 transition focus-within:bg-white focus-within:ring-atlas-orange/50">
            <Search className="shrink-0 text-atlas-orange" size={22} />
            <input
              className="w-full min-w-0 bg-transparent text-sm font-semibold text-atlas-ink outline-none placeholder:text-atlas-muted sm:text-base"
              placeholder="Search papers, authors, datasets, methods, models..."
            />
            <kbd className="hidden shrink-0 rounded-lg border border-atlas-line bg-white px-2 py-1 text-xs font-bold text-atlas-muted shadow-sm sm:block">
              Ctrl K
            </kbd>
          </div>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {topics.map((topic) => (
            <CategoryChip key={topic} label={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
