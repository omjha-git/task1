import { sortFilters } from "@/data/papers";

type FeedTabsProps = {
  tabs: string[];
};

export function FeedTabs({ tabs }: FeedTabsProps) {
  return (
    <div className="space-y-3 rounded-lg border border-atlas-line bg-white/90 p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-atlas-ink">Trending Research</h1>
          <p className="mt-1 text-sm font-medium text-atlas-muted">Curated daily from arXiv and Hugging Face</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`rounded-md border px-3 py-1.5 text-xs font-black transition ${
                tab === "Today"
                  ? "border-atlas-orange bg-atlas-orange text-white"
                  : "border-atlas-line bg-atlas-soft text-atlas-muted hover:border-atlas-orange hover:text-atlas-orange"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-atlas-line pt-3">
        {sortFilters.map((filter) => (
          <button
            key={filter}
            className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${filter === "Trending" ? "bg-atlas-ink text-white" : "bg-atlas-soft text-atlas-muted hover:text-atlas-ink"}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
