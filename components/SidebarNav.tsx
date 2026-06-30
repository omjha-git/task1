import type { LucideIcon } from "lucide-react";

type SidebarNavProps = {
  items: {
    label: string;
    icon: LucideIcon;
    active?: boolean;
  }[];
};

export function SidebarNav({ items }: SidebarNavProps) {
  return (
    <div className="space-y-1">
      {items.map(({ label, icon: Icon, active }) => (
        <button
          key={label}
          className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-bold transition ${
            active
              ? "bg-atlas-orange text-white shadow-glow"
              : "text-atlas-muted hover:bg-atlas-soft hover:text-atlas-ink"
          }`}
        >
          <Icon size={17} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
