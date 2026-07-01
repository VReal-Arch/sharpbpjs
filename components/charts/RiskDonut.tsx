"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { riskDistribution } from "@/data/dataset";
import ChartTooltip from "./ChartTooltip";
import { useElementSize } from "@/hooks/useElementSize";

export default function RiskDonut() {
  const { ref, width, height } = useElementSize<HTMLDivElement>({ width: 260, height: 230 });
  const size = Math.min(width, height);
  const cx = width / 2;
  const cy = height / 2;

  return (
    <div ref={ref} className="relative h-[230px] w-full">
      <PieChart width={width} height={height}>
        <Pie
          data={riskDistribution}
          dataKey="count"
          nameKey="category"
          cx={cx}
          cy={cy}
          innerRadius={size * 0.28}
          outerRadius={size * 0.39}
          paddingAngle={3}
          stroke="none"
        >
          {riskDistribution.map((entry) => (
            <Cell key={entry.category} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip formatter={(v) => `${v} provinsi`} />} />
      </PieChart>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[24px] font-semibold tabular text-ink">38</p>
        <p className="text-[11px] text-ink-muted">Provinsi</p>
      </div>
    </div>
  );
}
