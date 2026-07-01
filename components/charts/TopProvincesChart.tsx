"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from "recharts";
import { topProvinces } from "@/data/dataset";
import ChartTooltip from "./ChartTooltip";
import { useElementSize } from "@/hooks/useElementSize";

// severity gradient: rank 1 (most severe) -> rose, rank 10 -> teal
const severityColors = [
  "#f87171",
  "#f49374",
  "#efa877",
  "#e9bd7a",
  "#e3cf7e",
  "#cfd183",
  "#a9cf8e",
  "#7fcc9c",
  "#52c8ab",
  "#2dd4bf",
];

export default function TopProvincesChart() {
  const { ref, width, height } = useElementSize<HTMLDivElement>({ width: 560, height: 360 });

  return (
    <div ref={ref} className="h-[360px] w-full">
      <BarChart
        width={width}
        height={height}
        data={topProvinces}
        layout="vertical"
        margin={{ top: 4, right: 56, bottom: 4, left: 4 }}
        barCategoryGap={10}
      >
        <CartesianGrid horizontal={false} stroke="#1d2b28" strokeDasharray="3 5" />
        <XAxis
          type="number"
          tickFormatter={(v) => v.toFixed(3)}
          tick={{ fill: "#6c8682", fontSize: 11 }}
          axisLine={{ stroke: "#1d2b28" }}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="province"
          width={138}
          tick={{ fill: "#a9bcb7", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: "rgba(45,212,191,0.06)" }}
          content={
            <ChartTooltip
              formatter={(v) =>
                v == null
                ? "Burden index: -"
                : `Burden index: ${v.toFixed(4)}`
              }
            />
          }
        />
        <Bar dataKey="burden" radius={[0, 6, 6, 0]} maxBarSize={16}>
          {topProvinces.map((entry, i) => (
            <Cell key={entry.province} fill={severityColors[i % severityColors.length]} />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            formatter={(value) => {
              if (value == null) return "";

              const num =
                typeof value === "number"
                  ? value
                  : Number(value);

              return Number.isFinite(num) ? `${num.toFixed(1)}%` : "";
            }}
            fill="#e9f1ee"
            fontSize={11.5}
            fontWeight={600}
          />
        </Bar>
      </BarChart>
    </div>
  );
}
