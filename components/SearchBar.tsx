import { Search } from "lucide-react";

type SearchBarProps = {
  compact?: boolean;
};

export function SearchBar({ compact = false }: SearchBarProps) {
  return (
    <label className={`flex items-center gap-2 rounded-md border border-atlas-line bg-white px-3 text-atlas-muted shadow-sm transition focus-within:border-atlas-orange/70 focus-within:text-atlas-orange ${compact ? "h-9" : "h-10"}`}>
      <Search size={16} className="shrink-0" />
      <input
        className="min-w-0 flex-1 bg-transparent text-sm font-medium text-atlas-ink outline-none placeholder:text-atlas-muted"
        placeholder="Search papers, code, methods..."
      />
    </label>
  );
}
