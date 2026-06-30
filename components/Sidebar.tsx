import { Activity, Brain, Code2, Cpu, Flame, Github, Globe2, Microscope, Rocket } from "lucide-react";
import { SidebarNav } from "@/components/SidebarNav";

const items = [
  { label: "Trending Papers", icon: Flame, active: true },
  { label: "Latest Papers", icon: Activity },
  { label: "New GitHub Stars", icon: Github },
  { label: "Agents", icon: Rocket },
  { label: "Reasoning", icon: Brain },
  { label: "Vision", icon: Globe2 },
  { label: "Coding", icon: Code2 },
  { label: "Robotics", icon: Microscope },
  { label: "LLMs", icon: Cpu },
];

export function Sidebar() {
  return (
    <aside className="rounded-[1.75rem] border border-atlas-line bg-white/90 p-3 shadow-card backdrop-blur lg:sticky lg:top-24">
      <div className="mb-3 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-atlas-muted">Filters</div>
      <SidebarNav items={items} />
    </aside>
  );
}
