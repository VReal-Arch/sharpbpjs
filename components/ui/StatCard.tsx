import { ReactNode } from "react";
import { Card } from "./Card";

export function StatCard({
  label,
  value,
  unit,
  icon,
  tone = "default",
  hint,
}: {
  label: string;
  value: string;
  unit?: string;
  icon?: ReactNode;
  tone?: "default" | "teal" | "rose" | "amber";
  hint?: string;
}) {
  const toneText: Record<string, string> = {
    default: "text-ink",
    teal: "text-teal",
    rose: "text-rose",
    amber: "text-amber",
  };

  return (
    <Card className="p-4.5 px-5 py-4">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          {label}
        </p>
        {icon && <span className="text-ink-faint">{icon}</span>}
      </div>
      <p className={`mt-2 text-[26px] font-semibold tabular leading-none ${toneText[tone]}`}>
        {value}
        {unit && <span className="ml-1 text-[13px] font-medium text-ink-muted">{unit}</span>}
      </p>
      {hint && <p className="mt-1.5 text-[11.5px] text-ink-muted">{hint}</p>}
    </Card>
  );
}
