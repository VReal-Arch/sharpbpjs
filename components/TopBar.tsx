import Link from "next/link";
import { Settings, AlertTriangle } from "lucide-react";
import { riskDistribution } from "@/data/dataset";

export default function TopBar({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const highRisk = riskDistribution.find((r) => r.category === "Tinggi");

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-base-border bg-base-surface/60 px-5 py-4 lg:px-8">
      <div>
        <h1 className="text-[19px] font-semibold tracking-tight text-ink">
          {title}
          <span className="ml-2.5 align-middle text-[12px] font-normal text-ink-muted">
            {subtitle}
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal-soft px-3 py-1.5 text-[12px] font-medium text-teal">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
          </span>
          Model Online
        </span>

        <button
          type="button"
          aria-label="Settings"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-base-border bg-base-card text-ink-soft transition-colors hover:border-teal/40 hover:text-teal"
        >
          <Settings className="h-3.5 w-3.5" />
        </button>

        <Link
          href="/provinces"
          className="flex items-center gap-1.5 rounded-full bg-rose-deep/90 px-3 py-1.5 text-[12px] font-semibold text-white shadow-[0_0_0_1px_rgba(248,113,113,0.35)] transition-colors hover:bg-rose-deep"
        >
          <AlertTriangle className="h-3.5 w-3.5" />
          {highRisk?.count ?? 0} High-Risk Provinces
        </Link>
      </div>
    </header>
  );
}
