import TopBar from "@/components/TopBar";
import SectionTabs from "@/components/SectionTabs";
import { Card, CardHeader } from "@/components/ui/Card";
import FeatureImportanceChart from "@/components/charts/FeatureImportanceChart";
import VariableRangeChart from "@/components/charts/VariableRangeChart";
import { descriptiveStats, featureImportance, variableDefinitions } from "@/data/dataset";

function fmt(n: number) {
  return n >= 1000
    ? n.toLocaleString("id-ID")
    : n.toLocaleString("id-ID", { maximumFractionDigits: 2 });
}

export default function FeaturesPage() {
  return (
    <main className="flex-1 pb-10">
      <TopBar
        title="Feature Importance"
        subtitle="Kontribusi variabel & statistik deskriptif"
      />
      <SectionTabs />

      <div className="space-y-5 px-5 pt-5 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <Card>
            <CardHeader
              title="Feature Importance untuk Prediksi Beban BPJS"
            />
            <div className="px-3 pb-4 pt-2">
              <FeatureImportanceChart />
            </div>
          </Card>

          <Card>
            <CardHeader title="Distribusi Variabel Utama" meta="Min · Mean ± Std · Max" />
            <div className="px-5 pb-5 pt-4">
              <VariableRangeChart />
            </div>
          </Card>
        </div>

        <Card>
          <CardHeader title="Statistik Deskriptif Variabel"/>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-[12.5px]">
              <thead>
                <tr className="border-b border-base-hairline text-[10.5px] uppercase tracking-[0.08em] text-ink-faint">
                  <th className="px-5 py-3 font-semibold">Variabel</th>
                  <th className="px-5 py-3 font-semibold">Minimum</th>
                  <th className="px-5 py-3 font-semibold">Maksimum</th>
                  <th className="px-5 py-3 font-semibold">Rata-rata</th>
                  <th className="px-5 py-3 font-semibold">Std. Deviasi</th>
                </tr>
              </thead>
              <tbody>
                {descriptiveStats.map((s) => (
                  <tr
                    key={s.variable}
                    className="border-b border-base-hairline/70 last:border-0 hover:bg-base-raised/60"
                  >
                    <td className="px-5 py-3 font-medium text-ink">
                      {s.variable}
                      <span className="ml-1.5 text-[11px] font-normal text-ink-muted">
                        ({s.unit})
                      </span>
                    </td>
                    <td className="px-5 py-3 tabular text-ink-soft">{fmt(s.min)}</td>
                    <td className="px-5 py-3 tabular text-ink-soft">{fmt(s.max)}</td>
                    <td className="px-5 py-3 tabular text-ink-soft">{fmt(s.mean)}</td>
                    <td className="px-5 py-3 tabular text-ink-soft">{fmt(s.std)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardHeader title="Definisi Variabel Model"/>
          <ul className="divide-y divide-base-hairline/70">
            {variableDefinitions.map((v) => (
              <li key={v.key} className="px-5 py-4">
                <p className="font-mono text-[12px] font-semibold text-teal">{v.label}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{v.definition}</p>
              </li>
            ))}
          </ul>
        </Card>

        <div className="grid gap-3.5 sm:grid-cols-3">
          {featureImportance.map((f) => (
            <Card key={f.key} className="p-4.5 px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                {f.label}
              </p>
              <p className="mt-1.5 text-[22px] font-semibold tabular text-ink">
                {f.value.toFixed(2)}%
              </p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{f.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
