import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl2 border border-base-border bg-base-card shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  icon,
  title,
  meta,
  action,
}: {
  icon?: ReactNode;
  title: string;
  meta?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-base-hairline px-5 py-4">
      <div className="flex items-center gap-2.5">
        {icon && <span className="text-ink-soft">{icon}</span>}
        <div>
          <p className="text-[13px] font-semibold text-ink">{title}</p>
          {meta && <p className="text-[11.5px] text-ink-muted">{meta}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "teal" | "rose" | "amber" | "indigo";
}) {
  const tones: Record<string, string> = {
    default: "border-base-border bg-base-raised text-ink-soft",
    teal: "border-teal/30 bg-teal-soft text-teal",
    rose: "border-rose/30 bg-rose-soft text-rose",
    amber: "border-amber/30 bg-amber-soft text-amber",
    indigo: "border-indigo/30 bg-indigo-soft text-indigo",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
