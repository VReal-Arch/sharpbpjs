import { descriptiveStats } from "@/data/dataset";

function fmt(n: number) {
  return n >= 1000 ? n.toLocaleString("id-ID") : n.toLocaleString("id-ID", { maximumFractionDigits: 2 });
}

export default function VariableRangeChart() {
  return (
    <div className="space-y-5">
      {descriptiveStats.map((s) => {
        const range = s.max - s.min;
        const meanPct = range === 0 ? 50 : ((s.mean - s.min) / range) * 100;
        const stdPct = range === 0 ? 0 : (s.std / range) * 100;
        const bandStart = Math.max(0, meanPct - stdPct);
        const bandEnd = Math.min(100, meanPct + stdPct);

        return (
          <div key={s.variable}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <p className="text-[12.5px] font-medium text-ink-soft">{s.variable}</p>
              <p className="text-[11px] text-ink-muted">
                <span className="tabular">{fmt(s.min)}</span>
                {" – "}
                <span className="tabular">{fmt(s.max)}</span>
                <span className="ml-1 text-ink-faint">{s.unit}</span>
              </p>
            </div>
            <div className="relative h-2.5 w-full rounded-full bg-base-raised">
              <div
                className="absolute top-0 h-2.5 rounded-full bg-teal/25"
                style={{ left: `${bandStart}%`, width: `${bandEnd - bandStart}%` }}
              />
              <div
                className="absolute top-1/2 h-3.5 w-0.5 -translate-y-1/2 rounded-full bg-teal"
                style={{ left: `${meanPct}%` }}
              />
            </div>
            <p className="mt-1 text-[11px] text-ink-muted">
              mean <span className="tabular text-ink-soft">{fmt(s.mean)}</span> &middot; std{" "}
              <span className="tabular text-ink-soft">{fmt(s.std)}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
