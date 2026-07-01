"use client";

import { useMemo, useState } from "react";
import TopBar from "@/components/TopBar";
import SectionTabs from "@/components/SectionTabs";
import { Card, CardHeader } from "@/components/ui/Card";
import TopProvincesChart from "@/components/charts/TopProvincesChart";
import RiskDonut from "@/components/charts/RiskDonut";
import RiskLegend from "@/components/charts/RiskLegend";
import RiskFilterPanel, { FilterValue } from "@/components/RiskFilterPanel";
import ProvinceTable from "@/components/ProvinceTable";
import { provinceTableRows } from "@/data/dataset";

export default function ProvincesPage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredRows = useMemo(
    () =>
      filter === "all"
        ? provinceTableRows
        : provinceTableRows.filter((r) => r.category === filter),
    [filter]
  );

  return (
    <main className="flex-1 pb-10">
      <TopBar title="Provincial Risk" subtitle="Distribusi beban pembiayaan BPJS antarprovinsi" />
      <SectionTabs />

      <div className="grid gap-5 px-5 pt-5 lg:grid-cols-[1fr_300px] lg:px-8">
        <div className="space-y-5">
          <Card>
            <CardHeader
              title="Top 10 Provinsi — Predicted Burden Index"
            />
            <div className="px-3 pb-4 pt-2">
              <TopProvincesChart />
            </div>
          </Card>

          <Card>
            <CardHeader
              title={`Tabel Provinsi${filter !== "all" ? ` — Kategori ${filter}` : ""}`}
              meta={`${filteredRows.length} baris ditampilkan`}
            />
            <ProvinceTable rows={filteredRows} />
            <p className="border-t border-base-hairline px-5 py-3 text-[11px] leading-relaxed text-ink-muted">
              Catatan: laporan asli mempublikasikan nilai indeks individual hanya untuk 10
              provinsi dengan beban tertinggi (Gambar 4.2). Provinsi pada kategori Sedang dan
              Rendah, serta 3 provinsi sisa kategori Tinggi, dilaporkan sebagai agregat
              berdasarkan Tabel 4.2.
            </p>
          </Card>
        </div>

        <div className="space-y-5 lg:sticky lg:top-5 lg:self-start">
          <RiskFilterPanel active={filter} onChange={setFilter} />
          <Card>
            <CardHeader title="Distribusi Risiko"/>
            <div className="px-5 pb-5 pt-3">
              <RiskDonut />
              <div className="mt-4">
                <RiskLegend />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
