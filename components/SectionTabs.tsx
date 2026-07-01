"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MapPinned, BarChart3, FlaskConical } from "lucide-react";

const tabs = [
  { href: "/", label: "National Overview", icon: LayoutDashboard },
  { href: "/provinces", label: "Provincial Risk", icon: MapPinned },
  { href: "/features", label: "Feature Importance", icon: BarChart3 },
  { href: "/methodology", label: "Methodology", icon: FlaskConical },
];

export default function SectionTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2.5 px-5 pt-5 lg:px-8">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[13px] font-medium transition-colors ${
              active
                ? "border-teal/50 bg-base-card text-ink shadow-glow"
                : "border-base-border bg-base-card/60 text-ink-soft hover:border-base-hairline hover:text-ink"
            }`}
          >
            <Icon className={`h-3.5 w-3.5 ${active ? "text-teal" : "text-ink-muted"}`} />
            {tab.label}
            <span
              className={`ml-1 h-1.5 w-1.5 rounded-full ${active ? "bg-teal" : "bg-ink-faint"}`}
            />
          </Link>
        );
      })}
    </div>
  );
}
