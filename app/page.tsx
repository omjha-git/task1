import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PaperCard } from "@/components/PaperCard";
import { RightPanel } from "@/components/RightPanel";
import { Sidebar } from "@/components/Sidebar";
import { StatsStrip } from "@/components/StatsStrip";
import { filters, papers } from "@/data/papers";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10 -mt-9">
        <StatsStrip />
      </div>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[230px_minmax(0,1fr)] lg:px-8 xl:grid-cols-[230px_minmax(0,1fr)_340px]" id="rankings">
        <Sidebar />

        <div className="min-w-0 space-y-5">
          <div className="rounded-[1.75rem] border border-atlas-line bg-white/90 p-4 shadow-card backdrop-blur" id="tasks">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-atlas-orange">Research feed</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-atlas-ink">Trending AI papers</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={`rounded-full px-4 py-2 text-xs font-black transition ${
                      filter === "Today"
                        ? "bg-atlas-orange text-white shadow-glow"
                        : "border border-atlas-line bg-atlas-soft text-atlas-muted hover:border-atlas-orange hover:text-atlas-orange"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-atlas-line pt-4 sm:flex-row sm:items-center sm:justify-between">
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-atlas-line bg-atlas-soft px-4 py-2 text-sm font-bold text-atlas-muted transition hover:border-atlas-orange hover:text-atlas-orange">
                <SlidersHorizontal size={16} /> Advanced filters
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-atlas-line bg-atlas-soft px-4 py-2 text-sm font-bold text-atlas-muted transition hover:border-atlas-orange hover:text-atlas-orange">
                Sort by trending score <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {papers.map((paper) => (
              <PaperCard key={paper.title} {...paper} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-span-1">
          <RightPanel />
        </div>
      </section>
    </main>
  );
}
