import { ArrowRight } from "lucide-react";
import { feedTabs } from "@/data/papers";

export function FeedTabs() {
  return (
    <div className="flex h-12 items-center justify-between border-b border-atlas-line px-4">
      <div className="flex h-full items-center gap-9">
        {feedTabs.map((tab) => (
          <button key={tab} className={`relative h-full text-[12px] font-black ${tab === "Today" ? "text-atlas-ink" : "text-atlas-muted"}`}>
            {tab}
            {tab === "Today" && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-atlas-orange" />}
          </button>
        ))}
      </div>
      <a href="#" className="hidden items-center gap-2 text-[12px] font-black text-atlas-ink transition hover:text-atlas-orange sm:inline-flex">
        View all trending <ArrowRight size={14} />
      </a>
    </div>
  );
}
