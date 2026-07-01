import { riskDistribution } from "@/data/dataset";

export default function RiskLegend() {
  return (
    <ul className="space-y-2.5">
      {riskDistribution.map((r) => (
        <li key={r.category} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: r.color }} />
            <span className="text-[12.5px] text-ink-soft">Risiko {r.category}</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[13px] font-semibold tabular text-ink">{r.count}</span>
            <span className="text-[11px] text-ink-muted">({r.percentage.toFixed(2)}%)</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
