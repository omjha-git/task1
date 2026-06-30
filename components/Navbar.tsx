import { Bookmark, ChevronDown, Menu, Search, Upload } from "lucide-react";

const navLinks = ["Explore", "Rankings", "Tasks", "Methods", "About"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-atlas-line/80 bg-atlas-soft/88 shadow-[0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-2.5" aria-label="Frontier Atlas home">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-atlas-orange text-sm font-black text-white shadow-glow ring-1 ring-atlas-orange/20">
            FA
          </div>
          <span className="truncate text-lg font-black tracking-tight text-atlas-ink">Frontier Atlas</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-atlas-line bg-white/75 p-1 text-sm font-semibold text-atlas-muted shadow-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              className={`rounded-full px-4 py-2 transition hover:bg-atlas-soft hover:text-atlas-ink ${link === "Explore" ? "bg-atlas-soft text-atlas-ink" : ""}`}
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden h-10 items-center gap-2 rounded-full border border-atlas-line bg-white/85 px-4 text-sm font-semibold text-atlas-muted shadow-sm transition hover:-translate-y-0.5 hover:border-atlas-orange/60 hover:text-atlas-ink md:flex">
            <Search size={16} />
            Search
          </button>
          <button className="hidden h-10 items-center gap-2 rounded-full border border-atlas-line bg-white/85 px-4 text-sm font-semibold text-atlas-muted shadow-sm transition hover:-translate-y-0.5 hover:border-atlas-orange/60 hover:text-atlas-ink sm:flex">
            <Bookmark size={16} />
            Save
          </button>
          <button className="flex h-10 items-center gap-2 rounded-full bg-atlas-orange px-4 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#f24910] sm:px-5">
            <Upload size={16} />
            <span className="hidden sm:inline">Submit</span>
            <ChevronDown className="hidden sm:block" size={15} />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-atlas-line bg-white text-atlas-muted shadow-sm transition hover:border-atlas-orange hover:text-atlas-ink lg:hidden" aria-label="Open navigation">
            <Menu size={18} />
          </button>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 text-sm font-semibold text-atlas-muted sm:px-6 lg:hidden lg:px-8">
        {navLinks.map((link) => (
          <a key={link} className="shrink-0 rounded-full border border-atlas-line bg-white/80 px-3 py-2" href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}
