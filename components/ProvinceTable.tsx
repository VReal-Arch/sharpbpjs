import { RiskCategory } from "@/data/dataset";
import { Pill } from "./ui/Card";

const toneByCategory: Record<RiskCategory, "rose" | "amber" | "teal"> = {
  Tinggi: "rose",
  Sedang: "amber",
  Rendah: "teal",
};

export type ProvinceRow = {
  province: string;
  burden: number | null;
  category: RiskCategory;
  region: string;
  note?: string;
};

export default function ProvinceTable({ rows }: { rows: ProvinceRow[] }) {
  if (rows.length === 0) {
    return (
      <div className="px-5 py-10 text-center text-[12.5px] text-ink-muted">
        Tidak ada provinsi pada kategori ini.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-[12.5px]">
        <thead>
          <tr className="border-b border-base-hairline text-[10.5px] uppercase tracking-[0.08em] text-ink-faint">
            <th className="px-5 py-3 font-semibold">Provinsi</th>
            <th className="px-5 py-3 font-semibold">Wilayah</th>
            <th className="px-5 py-3 font-semibold">Predicted Burden Index</th>
            <th className="px-5 py-3 font-semibold">Kategori</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.province}
              className="border-b border-base-hairline/70 last:border-0 hover:bg-base-raised/60"
            >
              <td className="px-5 py-3">
                <p className="font-medium text-ink">{row.province}</p>
                {row.note && <p className="mt-0.5 text-[11px] text-ink-muted">{row.note}</p>}
              </td>
              <td className="px-5 py-3 text-ink-soft">{row.region}</td>
              <td className="px-5 py-3 tabular text-ink-soft">
                {row.burden !== null ? row.burden.toFixed(4) : "—"}
              </td>
              <td className="px-5 py-3">
                <Pill tone={toneByCategory[row.category]}>{row.category}</Pill>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
