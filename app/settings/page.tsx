"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Card, CardHeader } from "@/components/ui/Card";
import { Download, Moon, BellRing } from "lucide-react";

function Toggle({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative h-5 w-9 rounded-full transition-colors ${
        checked ? "bg-teal" : "bg-base-raised border border-base-border"
      } ${disabled ? "opacity-50" : ""}`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-base-card shadow transition-transform ${
          checked ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [highRiskAlerts, setHighRiskAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <main className="flex-1 pb-10">
      <TopBar title="Settings" subtitle="Preferensi tampilan & notifikasi dashboard" />

      <div className="mx-auto max-w-2xl space-y-5 px-5 pt-7 lg:px-8">
        <Card>
          <CardHeader icon={<Moon className="h-4 w-4" />} title="Tampilan"/>
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-[13px] font-medium text-ink">Dark mode</p>
              <p className="text-[11.5px] text-ink-muted">
                Tema gelap digunakan secara default untuk dashboard ini.
              </p>
            </div>
            <Toggle checked disabled />
          </div>
        </Card>

        <Card>
          <CardHeader
            icon={<BellRing className="h-4 w-4" />}
            title="Notifikasi"
            meta="Pengingat risiko regional"
          />
          <div className="divide-y divide-base-hairline/70">
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-[13px] font-medium text-ink">Peringatan provinsi risiko tinggi</p>
                <p className="text-[11.5px] text-ink-muted">
                  Tampilkan badge ketika ada provinsi baru memasuki kategori Tinggi.
                </p>
              </div>
              <Toggle checked={highRiskAlerts} onChange={() => setHighRiskAlerts((v) => !v)} />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-[13px] font-medium text-ink">Ringkasan mingguan</p>
                <p className="text-[11.5px] text-ink-muted">
                  Ringkasan perubahan indeks beban pembiayaan setiap minggu.
                </p>
              </div>
              <Toggle checked={weeklyDigest} onChange={() => setWeeklyDigest((v) => !v)} />
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader icon={<Download className="h-4 w-4" />} title="Data & Ekspor" meta="Tabel provinsi" />
          <div className="flex items-center justify-between px-5 py-4">
            <p className="text-[12.5px] text-ink-soft">
              Unduh ringkasan tabel risiko provinsi dalam format CSV.
            </p>
            <button
              type="button"
              className="rounded-lg border border-teal/30 bg-teal-soft px-3.5 py-2 text-[12.5px] font-medium text-teal transition-colors hover:bg-teal/20"
            >
              Export CSV
            </button>
          </div>
        </Card>

        <Card>
          <CardHeader title="Tentang Model Ini" meta="Sitasi" />
          <div className="px-5 py-4 text-[12px] leading-relaxed text-ink-muted">
            Shanizal, M.R.P.P. &amp; Wibowo, V.A.A.K. (2026).{" "}
            <span className="text-ink-soft">
              Smart Health Financing System: AI-Based Regional Risk Prediction for Sustainable
              BPJS Policy in Indonesia.
            </span>{" "}
            Karya Tulis Ilmiah Nasional, SEMAR LKTIN Competition, Universitas Gadjah Mada.
          </div>
        </Card>
      </div>
    </main>
  );
}
