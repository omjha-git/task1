import { Bookmark, Search, Upload } from "lucide-react";
import { navLinks } from "@/data/papers";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-atlas-line bg-[#fffaf6]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center gap-5 px-5">
        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="Frontier Atlas home">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-atlas-orange text-[11px] font-black text-white shadow-sm">FA</div>
          <span className="text-[15px] font-black tracking-tight text-atlas-ink">Frontier Atlas</span>
        </a>

        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`text-[12px] font-bold transition hover:text-atlas-orange ${link === "Papers" ? "text-atlas-orange" : "text-atlas-muted"}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <label className="ml-auto hidden h-8 w-[275px] items-center gap-2 rounded-md border border-atlas-line bg-white px-3 text-atlas-muted shadow-sm md:flex">
          <Search size={14} />
          <input className="min-w-0 flex-1 bg-transparent text-[12px] font-medium text-atlas-ink outline-none placeholder:text-atlas-muted" placeholder="Search papers, authors, topics, benchmarks..." />
          <kbd className="rounded border border-atlas-line bg-atlas-soft px-1.5 py-0.5 text-[10px] font-bold text-atlas-muted">⌘ K</kbd>
        </label>

        <button className="hidden h-8 items-center gap-1.5 rounded-md border border-atlas-line bg-white px-3 text-[12px] font-bold text-atlas-muted shadow-sm transition hover:border-atlas-orange hover:text-atlas-orange sm:flex">
          <Bookmark size={13} /> Save
        </button>
        <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-atlas-orange px-3 text-[12px] font-black text-white shadow-sm transition hover:bg-[#ed4810]">
          <Upload size={13} /> Submit
        </button>
      </div>
    </header>
  );
}
