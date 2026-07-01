"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from "recharts";
import { featureImportance } from "@/data/dataset";
import ChartTooltip from "./ChartTooltip";
import { useElementSize } from "@/hooks/useElementSize";

const colors = ["#2dd4bf", "#5eead4", "#7fd8cc", "#9fb8b4", "#6c8682"];

export default function FeatureImportanceChart() {
  const { ref, width, height } = useElementSize<HTMLDivElement>({ width: 560, height: 300 });

  return (
    <div ref={ref} className="h-[300px] w-full">
      <BarChart
        width={width}
        height={height}
        data={featureImportance}
        layout="vertical"
        margin={{ top: 4, right: 36, bottom: 4, left: 4 }}
        barCategoryGap={18}
      >
        <CartesianGrid horizontal={false} stroke="#1d2b28" strokeDasharray="3 5" />
        <XAxis
          type="number"
          domain={[0, 75]}
          tickFormatter={(v) => `${v}%`}
          tick={{ fill: "#6c8682", fontSize: 11 }}
          axisLine={{ stroke: "#1d2b28" }}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="label"
          width={132}
          tick={{ fill: "#a9bcb7", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: "rgba(45,212,191,0.06)" }}
          content={<ChartTooltip formatter={(v) => `${v.toFixed(2)}%`} />}
        />
        <Bar dataKey="value" radius={[0, 6, 6, 0]} maxBarSize={22}>
          {featureImportance.map((entry, i) => (
            <Cell key={entry.key} fill={colors[i % colors.length]} />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            formatter={(v: number) => `${v.toFixed(1)}%`}
            fill="#e9f1ee"
            fontSize={11.5}
            fontWeight={600}
          />
        </Bar>
      </BarChart>
    </div>
  );
}
