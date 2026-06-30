import { DomainSidebar } from "@/components/DomainSidebar";
import { FeedTabs } from "@/components/FeedTabs";
import { MetricPanel } from "@/components/MetricPanel";
import { Navbar } from "@/components/Navbar";
import { PaperCard } from "@/components/PaperCard";
import { feedTabs, papers } from "@/data/papers";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="border-b border-atlas-line/80 bg-atlas-soft/60" id="papers">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid bg-[size:36px_36px] opacity-45" />
          <div className="absolute right-12 top-0 h-28 w-56 rounded-full bg-atlas-orange/10 blur-3xl" />
          <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-atlas-orange">Frontier Atlas</p>
              <h1 className="mt-1 text-2xl font-black tracking-tight text-atlas-ink sm:text-3xl">Explore the frontiers of <span className="text-atlas-orange">AI research</span></h1>
              <p className="mt-2 text-sm font-medium leading-6 text-atlas-muted">A compact research feed for papers, code, methods, benchmarks, and fast-moving model releases.</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-atlas-muted">
              <span className="rounded-md border border-atlas-line bg-white px-3 py-2">30K+ AI Papers</span>
              <span className="rounded-md border border-atlas-line bg-white px-3 py-2">6K+ Benchmarks</span>
              <span className="rounded-md border border-atlas-line bg-white px-3 py-2">18K+ Updates</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:px-8 xl:grid-cols-[250px_minmax(0,1fr)_300px]" id="rankings">
        <DomainSidebar />

        <div className="min-w-0 space-y-4">
          <FeedTabs tabs={feedTabs} />
          <div className="overflow-hidden rounded-lg border border-atlas-line bg-white/88 shadow-sm">
            {papers.map((paper) => (
              <PaperCard key={paper.title} {...paper} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-span-1">
          <MetricPanel />
        </div>
      </section>
    </main>
  );
}
