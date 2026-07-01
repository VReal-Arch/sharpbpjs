import TopBar from "@/components/TopBar";
import SectionTabs from "@/components/SectionTabs";
import { Card, CardHeader, Pill } from "@/components/ui/Card";
import {
  dataSources,
  methodologySteps,
  modelMeta,
  recommendations,
} from "@/data/dataset";
import { BookOpenText, Building2, Users } from "lucide-react";

export default function MethodologyPage() {
  return (
    <main className="flex-1 pb-10">
      <TopBar title="Methodology" subtitle="Tentang penelitian, data, dan rekomendasi kebijakan" />
      <SectionTabs />

      <div className="space-y-5 px-5 pt-5 lg:px-8">
        <Card>
          <CardHeader
            icon={<BookOpenText className="h-4 w-4" />}
            title={modelMeta.title}
            meta={modelMeta.subtitle}
            action={<Pill tone="teal">SEMAR LKTIN 2026</Pill>}
          />
          <div className="px-5 py-4 text-[13px] leading-relaxed text-ink-soft">
            JKN melalui BPJS Kesehatan menghadapi ketimpangan beban pembiayaan antarwilayah.
            Penelitian ini membangun model risk prediction berbasis data publik untuk
            mengidentifikasi faktor dominan dan wilayah prioritas, menggunakan{" "}
            <span className="text-ink">{modelMeta.method}</span> yang divalidasi dengan{" "}
            <span className="text-ink">{modelMeta.validation}</span> atas{" "}
            {modelMeta.provincesAnalyzed} provinsi.
          </div>
          <div className="flex flex-wrap gap-4 border-t border-base-hairline px-5 py-4">
            <div className="flex items-center gap-2 text-[12.5px] text-ink-soft">
              <Building2 className="h-3.5 w-3.5 text-ink-muted" /> {modelMeta.institution}
            </div>
            <div className="flex items-center gap-2 text-[12.5px] text-ink-soft">
              <Users className="h-3.5 w-3.5 text-ink-muted" /> Tim {modelMeta.team} —{" "}
              {modelMeta.authors.join(", ")}
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader title="Alur Metodologi"/>
          <ol className="divide-y divide-base-hairline/70">
            {methodologySteps.map((step) => (
              <li key={step.step} className="flex gap-4 px-5 py-4">
                <span className="font-mono text-[12px] font-semibold text-ink-faint">
                  {step.step}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>

        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader title="Sumber Data"/>
            <ul className="divide-y divide-base-hairline/70">
              {dataSources.map((d) => (
                <li key={d.name} className="px-5 py-3.5">
                  <p className="text-[12.5px] font-medium text-ink">{d.name}</p>
                  <p className="mt-0.5 text-[11.5px] text-ink-muted">
                    {d.detail} &middot; {d.year}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <CardHeader title="Batasan Penelitian"/>
            <ul className="space-y-3 px-5 py-4 text-[12.5px] leading-relaxed text-ink-soft">
              <li>• Tidak menggunakan data klaim individu karena bersifat sensitif dan tidak tersedia publik.</li>
              <li>• claim_burden_index adalah indeks proksi, bukan nilai klaim BPJS aktual.</li>
              <li>• Fasilitas kesehatan digabung sebagai total, belum membedakan FKTP dan rumah sakit rujukan.</li>
              <li>• Kepesertaan JKN pada provinsi hasil pemekaran Papua dialokasikan melalui pembobotan populasi.</li>
            </ul>
          </Card>
        </div>

        <Card>
          <CardHeader title="Rekomendasi Kebijakan"/>
          <div className="grid gap-4 px-5 py-5 sm:grid-cols-3">
            {recommendations.map((r, i) => (
              <div
                key={r.title}
                className="rounded-lg border border-base-border bg-base-raised p-4"
              >
                <p className="font-mono text-[11px] text-teal">0{i + 1}</p>
                <p className="mt-1.5 text-[13px] font-semibold text-ink">{r.title}</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
