"use client";

import { ShieldAlert, ShieldHalf, ShieldCheck, LayoutGrid, Database } from "lucide-react";
import { riskDistribution, dataSources, RiskCategory } from "@/data/dataset";
import { Card, CardHeader } from "./ui/Card";

export type FilterValue = "all" | RiskCategory;

const categoryButtons: { value: FilterValue; label: string; icon: typeof ShieldAlert }[] = [
  { value: "all", label: "Semua", icon: LayoutGrid },
  { value: "Tinggi", label: "Tinggi", icon: ShieldAlert },
  { value: "Sedang", label: "Sedang", icon: ShieldHalf },
  { value: "Rendah", label: "Rendah", icon: ShieldCheck },
];

const toneClass: Record<FilterValue, string> = {
  all: "data-[active=true]:border-teal/50 data-[active=true]:bg-teal-soft data-[active=true]:text-teal",
  Tinggi:
    "data-[active=true]:border-rose/50 data-[active=true]:bg-rose-soft data-[active=true]:text-rose",
  Sedang:
    "data-[active=true]:border-amber/50 data-[active=true]:bg-amber-soft data-[active=true]:text-amber",
  Rendah:
    "data-[active=true]:border-teal/50 data-[active=true]:bg-teal-soft data-[active=true]:text-teal",
};

export default function RiskFilterPanel({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (v: FilterValue) => void;
}) {
  return (
    <Card>
      <CardHeader title="Risk Filter Panel" meta="Provincial Burden Index" />

      <div className="space-y-5 p-5">
        <div>
          <p className="mb-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Kategori Risiko
          </p>
          <div className="grid grid-cols-2 gap-2">
            {categoryButtons.map((btn) => {
              const Icon = btn.icon;
              const isActive = active === btn.value;
              const count =
                btn.value === "all"
                  ? 38
                  : riskDistribution.find((r) => r.category === btn.value)?.count ?? 0;
              return (
                <button
                  key={btn.value}
                  type="button"
                  data-active={isActive}
                  onClick={() => onChange(btn.value)}
                  className={`flex flex-col items-start gap-2 rounded-lg border border-base-border bg-base-raised px-3 py-2.5 text-left transition-colors hover:border-base-hairline ${toneClass[btn.value]}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="text-[12.5px] font-medium">{btn.label}</span>
                  <span className="text-[10.5px] tabular text-ink-muted">{count} provinsi</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-2.5 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            <Database className="h-3 w-3" /> Sumber Data
          </p>
          <ul className="space-y-1.5">
            {dataSources.map((d) => (
              <li
                key={d.name}
                className="rounded-lg border border-base-border bg-base-raised px-3 py-2"
              >
                <p className="text-[12px] font-medium text-ink-soft">{d.name}</p>
                <p className="text-[10.5px] text-ink-muted">
                  {d.detail} &middot; {d.year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-base-hairline pt-3 text-[11px] leading-relaxed text-ink-muted">
          Pilih kategori risiko untuk menyaring tabel dan grafik provinsi di sisi kiri.
        </p>
      </div>
    </Card>
  );
}
