import { Bookmark, ChevronDown, Menu, Upload } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";

const navLinks = ["Papers", "Tasks", "Methods", "Datasets", "Benchmarks"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-atlas-line bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="Frontier Atlas home">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-atlas-orange text-xs font-black text-white shadow-sm">
            FA
          </div>
          <span className="hidden text-base font-black tracking-tight text-atlas-ink sm:inline">Frontier Atlas</span>
        </a>

        <nav className="hidden items-center gap-1 text-sm font-bold text-atlas-muted lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`rounded-md px-3 py-2 transition hover:bg-atlas-soft hover:text-atlas-orange ${link === "Papers" ? "text-atlas-orange" : ""}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden w-full max-w-md md:block">
          <SearchBar compact />
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button className="hidden h-9 items-center gap-2 rounded-md border border-atlas-line bg-white px-3 text-sm font-bold text-atlas-muted transition hover:border-atlas-orange hover:text-atlas-orange sm:flex">
            <Bookmark size={15} />
            Save
          </button>
          <button className="flex h-9 items-center gap-2 rounded-md bg-atlas-orange px-3 text-sm font-black text-white shadow-sm transition hover:bg-[#ed4810]">
            <Upload size={15} />
            <span className="hidden sm:inline">Submit</span>
            <ChevronDown className="hidden sm:block" size={14} />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-md border border-atlas-line bg-white text-atlas-muted lg:hidden" aria-label="Open navigation">
            <Menu size={18} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 pb-2 sm:px-6 md:hidden">
        <SearchBar compact />
      </div>
    </header>
  );
}
