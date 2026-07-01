"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPinned,
  BarChart3,
  FlaskConical,
  Settings,
} from "lucide-react";

const items = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/provinces", label: "Provinces", icon: MapPinned },
  { href: "/features", label: "Features", icon: BarChart3 },
  { href: "/methodology", label: "Method", icon: FlaskConical },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="lg:hidden sticky top-0 z-20 flex items-center gap-1 overflow-x-auto border-b border-base-border bg-base-surface/95 px-3 py-2 backdrop-blur-sm">
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-[12.5px] font-medium transition-colors ${
              active ? "bg-teal-soft text-teal" : "text-ink-soft"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
