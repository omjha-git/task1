import { ArrowRight, Github, Heart, MessageCircle, Radio, Sparkles, Twitter } from "lucide-react";
import { updates } from "@/data/papers";

const iconMap = {
  "X / Twitter": Twitter,
  Reddit: Radio,
  GitHub: Github,
};

export function RightUpdates() {
  return (
    <aside className="rounded-lg border border-atlas-line bg-white/88 p-5 shadow-sm lg:sticky lg:top-[74px]">
      <div className="mb-5 flex items-center gap-3">
        <Sparkles size={19} className="text-atlas-orange" />
        <h2 className="text-[18px] font-black tracking-tight text-atlas-ink">What&apos;s happening</h2>
      </div>

      <div className="mb-5 flex gap-3 text-[12px] font-black">
        {[
          "All",
          "X / Twitter",
          "Reddit",
          "GitHub",
        ].map((tab) => (
          <button key={tab} className={`rounded-full px-3 py-1.5 ${tab === "All" ? "bg-[#fff0eb] text-atlas-orange" : "text-atlas-ink hover:bg-atlas-soft"}`}>{tab}</button>
        ))}
      </div>

      <div className="space-y-0">
        {updates.map((item) => {
          const Icon = iconMap[item.source as keyof typeof iconMap] ?? Radio;
          return (
            <article key={item.text} className="border-b border-atlas-line py-4 first:pt-0 last:border-b-0">
              <div className="flex gap-3">
                <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-atlas-soft text-atlas-ink">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="mb-1 flex flex-wrap items-center gap-2 text-[12px] font-bold text-atlas-muted">
                    <span>{item.channel}</span>
                    <span>·</span>
                    <span>{item.time}</span>
                  </div>
                  <p className="text-[13px] font-black leading-5 text-atlas-ink">{item.text}</p>
                  <div className="mt-3 flex items-center gap-5 text-[12px] font-bold text-atlas-muted">
                    <span className="inline-flex items-center gap-1"><Heart size={13} /> {item.likes}</span>
                    <span className="inline-flex items-center gap-1"><MessageCircle size={13} /> {item.replies}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <a href="#" className="mt-5 inline-flex items-center gap-2 text-[13px] font-black text-atlas-orange hover:text-atlas-ink">
        View all updates <ArrowRight size={14} />
      </a>
    </aside>
  );
}
