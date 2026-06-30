import { FeedTabs } from "@/components/FeedTabs";
import { HeroSearch } from "@/components/HeroSearch";
import { Navbar } from "@/components/Navbar";
import { PaperCard } from "@/components/PaperCard";
import { RightUpdates } from "@/components/RightUpdates";
import { Sidebar } from "@/components/Sidebar";
import { papers } from "@/data/papers";

export default function HomePage() {
  return (
    <main className="min-h-screen pb-10">
      <Navbar />
      <HeroSearch />

      <section className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 px-5 py-4 lg:grid-cols-[205px_minmax(0,1fr)] xl:grid-cols-[205px_minmax(0,1fr)_310px]" id="papers">
        <Sidebar />

        <div className="min-w-0 overflow-hidden rounded-lg border border-atlas-line bg-white/88 shadow-sm">
          <FeedTabs />
          {papers.map((paper) => (
            <PaperCard key={paper.title} {...paper} />
          ))}
        </div>

        <div className="lg:col-span-2 xl:col-span-1">
          <RightUpdates />
        </div>
      </section>
    </main>
  );
}
