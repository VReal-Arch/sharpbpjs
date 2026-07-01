"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Activity, Layers, Target } from "lucide-react";
import TopBar from "@/components/TopBar";
import SectionTabs from "@/components/SectionTabs";
import { Card, CardHeader, Pill } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import FeatureImportanceChart from "@/components/charts/FeatureImportanceChart";
import TopProvincesChart from "@/components/charts/TopProvincesChart";
import RiskDonut from "@/components/charts/RiskDonut";
import RiskLegend from "@/components/charts/RiskLegend";
import RiskFilterPanel, { FilterValue } from "@/components/RiskFilterPanel";
import ProvinceTable from "@/components/ProvinceTable";
import { modelMeta, provinceTableRows, riskDistribution } from "@/data/dataset";

export default function DashboardPage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredRows = useMemo(
    () =>
      filter === "all"
        ? provinceTableRows.slice(0, 6)
        : provinceTableRows.filter((r) => r.category === filter).slice(0, 6),
    [filter]
  );

  const highRisk = riskDistribution.find((r) => r.category === "Tinggi");

  return (
    <main className="flex-1 pb-10">
      <TopBar
        title="National Overview"
        subtitle="BPJS regional financing risk · 38 provinces"
      />
      <SectionTabs />

      <div className="grid gap-5 px-5 pt-5 lg:grid-cols-[1fr_300px] lg:px-8">
        {/* main column */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            <StatCard
              label="Provinces Analyzed"
              value={String(modelMeta.provincesAnalyzed)}
              icon={<Layers className="h-4 w-4" />}
              hint="Unit analisis tingkat provinsi"
            />
            <StatCard
              label="High-Risk Provinces"
              value={String(highRisk?.count ?? 0)}
              unit={`(${highRisk?.percentage.toFixed(1)}%)`}
              icon={<TrendingUp className="h-4 w-4" />}
              tone="rose"
              hint="Kategori risiko Tinggi"
            />
            <StatCard
              label="Top Determinant"
              value={`${modelMeta.topFeatureShare.toFixed(1)}%`}
              icon={<Target className="h-4 w-4" />}
              tone="teal"
              hint="Kontribusi tingkat kemiskinan"
            />
            <StatCard
              label="LOO MAE"
              value={modelMeta.looMae.toFixed(5)}
              icon={<Activity className="h-4 w-4" />}
              hint="Leave-One-Out validation error"
            />
          </div>

          <Card>
            <CardHeader
              title="Smart Health Financing Model"
              meta={`${modelMeta.method} · ${modelMeta.validation}`}
              action={
                <div className="flex items-center gap-2">
                  <Pill tone="teal">{modelMeta.team}</Pill>
                  <Pill>UGM</Pill>
                </div>
              }
            />
            <div className="px-5 py-4 text-[13px] leading-relaxed text-ink-soft">
              Model memprediksi <span className="text-ink">claim_burden_index</span>, sebuah
              indeks proksi beban pembiayaan BPJS, dari lima indikator publik: tingkat
              kemiskinan, PDRB per kapita, cakupan JKN, rasio fasilitas kesehatan, dan rasio
              tenaga kesehatan. Tingkat kemiskinan menjadi faktor paling dominan dengan
              kontribusi {modelMeta.topFeatureShare.toFixed(2)}%, menunjukkan bahwa determinan
              sosial ekonomi lebih berpengaruh dibandingkan kapasitas layanan kesehatan semata.
            </div>
          </Card>

          <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <Card>
              <CardHeader
                title="Feature Importance"
                meta="Kontribusi relatif tiap variabel pada model"
              />
              <div className="px-3 pb-4 pt-2">
                <FeatureImportanceChart />
              </div>
            </Card>

            <Card>
              <CardHeader title="Distribusi Risiko" meta="Klasifikasi kuantil 38 provinsi" />
              <div className="px-5 pb-5 pt-3">
                <RiskDonut />
                <div className="mt-4">
                  <RiskLegend />
                </div>
              </div>
            </Card>
          </div>

          <Card>
            <CardHeader
              title="Top 10 Provinsi — Predicted Burden Index"
              meta="Diurutkan dari risiko tertinggi"
              action={
                <Link
                  href="/provinces"
                  className="flex items-center gap-1 text-[12px] font-medium text-teal hover:text-teal-glow"
                >
                  Lihat semua <ArrowUpRight className="h-3 w-3" />
                </Link>
              }
            />
            <div className="px-3 pb-4 pt-2">
              <TopProvincesChart />
            </div>
          </Card>

          <Card>
            <CardHeader
              title="Pratinjau Tabel Provinsi"
              meta={
                filter === "all"
                  ? "6 provinsi pertama"
                  : `Kategori ${filter} · ditampilkan maksimal 6 baris`
              }
              action={
                <Link
                  href="/provinces"
                  className="flex items-center gap-1 text-[12px] font-medium text-teal hover:text-teal-glow"
                >
                  Tabel lengkap <ArrowUpRight className="h-3 w-3" />
                </Link>
              }
            />
            <ProvinceTable rows={filteredRows} />
          </Card>
        </div>

        {/* right control panel */}
        <div className="lg:sticky lg:top-5 lg:self-start">
          <RiskFilterPanel active={filter} onChange={setFilter} />
        </div>
      </div>
    </main>
  );
}
