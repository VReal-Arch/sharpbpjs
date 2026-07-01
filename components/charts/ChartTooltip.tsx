"use client";

import type { TooltipContentProps } from "recharts";

type Props = Partial<TooltipContentProps<number, string>> & {
  suffix?: string;
  formatter?: (v: number | undefined) => string;
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
      {label != null && (
        <p className="text-[11px] font-medium text-ink-soft">
          {String(label)}
        </p>
      )}

      {payload.map((entry, i) => {
        const value =
          typeof entry.value === "number"
            ? entry.value
            : entry.value != null
              ? Number(entry.value)
              : undefined;

        return (
          <p key={i} className="text-[12.5px] font-semibold tabular text-ink">
            {formatter
              ? formatter(value)
              : `${value ?? "-"}${suffix}`}
          </p>
        );
      })}
    </div>
  );
}