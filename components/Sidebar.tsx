"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPinned,
  BarChart3,
  FlaskConical,
  Settings,
  Activity,
} from "lucide-react";

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/provinces", label: "Provincial Risk", icon: MapPinned },
  { href: "/features", label: "Feature Importance", icon: BarChart3 },
  { href: "/methodology", label: "Methodology", icon: FlaskConical },
];

const systemItems = [{ href: "/settings", label: "Settings", icon: Settings }];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-64 shrink-0 flex-col border-r border-base-border bg-base-surface/80 backdrop-blur-sm">
      <div className="flex items-center gap-3 px-5 py-5 border-b border-base-hairline">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-indigo shadow-glow">
          <Activity className="h-4.5 w-4.5 text-base" strokeWidth={2.5} />
        </div>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold tracking-tight text-ink">BPJS-Sense</p>
          <p className="text-[11px] text-ink-muted">Risk Intelligence</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Menu
        </p>
        <ul className="mt-2 space-y-1">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] transition-colors ${
                    active
                      ? "bg-teal-soft text-teal border border-teal/30"
                      : "text-ink-soft hover:bg-base-raised hover:text-ink border border-transparent"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${active ? "text-teal" : "text-ink-muted group-hover:text-ink-soft"}`}
                    strokeWidth={2}
                  />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-7 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
          System
        </p>
        <ul className="mt-2 space-y-1">
          {systemItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] transition-colors ${
                    active
                      ? "bg-teal-soft text-teal border border-teal/30"
                      : "text-ink-soft hover:bg-base-raised hover:text-ink border border-transparent"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${active ? "text-teal" : "text-ink-muted group-hover:text-ink-soft"}`}
                    strokeWidth={2}
                  />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="m-3 rounded-xl border border-base-border bg-base-card p-3.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          <p className="text-[12.5px] font-medium text-ink">Model Active</p>
        </div>
        <p className="mt-1 text-[11px] text-ink-muted">Random Forest &middot; LOOCV</p>
      </div>
    </aside>
  );
}
