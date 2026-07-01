"use client";

import type { TooltipContentProps } from "recharts";

type Props = Partial<TooltipContentProps<number, string>> & {
  suffix?: string;
  formatter?: (v: number) => string;
};

export default function ChartTooltip({
  active,
  payload,
  label,
  suffix = "",
  formatter,
}: Props) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-base-border bg-base-raised px-3 py-2 shadow-card">
      {label && (
        <p className="text-[11px] font-medium text-ink-soft">{label}</p>
      )}

      {payload.map((entry, i) => (
        <p key={i} className="text-[12.5px] font-semibold tabular text-ink">
          {formatter
            ? formatter(Number(entry.value))
            : `${entry.value}${suffix}`}
        </p>
      ))}
    </div>
  );
}