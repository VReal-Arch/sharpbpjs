// Data extracted from: "Smart Health Financing System: AI-Based Regional Risk
// Prediction for Sustainable BPJS Policy in Indonesia" (Shanizal & Wibowo,
// Universitas Gadjah Mada, SEMAR LKTIN 2026).
// Figures below mirror Tabel 4.1, Tabel 4.2, Gambar 4.2 and Gambar 4.3 of the paper.

export type RiskCategory = "Tinggi" | "Sedang" | "Rendah";

export const modelMeta = {
  title: "Smart Health Financing System",
  subtitle: "AI-Based Regional Risk Prediction for Sustainable BPJS Policy",
  authors: ["Muhammad Rafif Pratama Putra Shanizal", "Verryl Al Aziz Kusuma Wibowo"],
  institution: "Universitas Gadjah Mada",
  team: "Zygarde",
  method: "Random Forest Regression",
  validation: "Leave-One-Out Cross Validation (LOOCV)",
  looMae: 0.00049,
  provincesAnalyzed: 38,
  topFeature: "Tingkat Kemiskinan (Poverty Rate)",
  topFeatureShare: 69.99,
};

// Gambar 4.3 — Feature Importance for BPJS Burden Prediction
export const featureImportance: {
  key: string;
  label: string;
  description: string;
  value: number;
}[] = [
  {
    key: "poverty_rate",
    label: "Tingkat Kemiskinan",
    description: "Persentase penduduk miskin per provinsi — sisi permintaan layanan.",
    value: 69.99,
  },
  {
    key: "pdrb_per_capita",
    label: "PDRB per Kapita",
    description: "Proksi kapasitas ekonomi regional.",
    value: 9.25,
  },
  {
    key: "jkn_coverage",
    label: "Cakupan JKN",
    description: "Rasio peserta JKN terhadap jumlah penduduk.",
    value: 7.69,
  },
  {
    key: "nakes_per_million",
    label: "Tenaga Kesehatan",
    description: "Jumlah tenaga kesehatan per satu juta penduduk.",
    value: 7.62,
  },
  {
    key: "faskes_per_million",
    label: "Fasilitas Kesehatan",
    description: "Jumlah fasilitas kesehatan per satu juta penduduk.",
    value: 5.44,
  },
];

// Gambar 4.2 — Top 10 Provinces with Highest Predicted BPJS Financial Burden
export const topProvinces: { rank: number; province: string; burden: number; region: string }[] = [
  { rank: 1, province: "Papua Pegunungan", burden: 0.0041, region: "Indonesia Timur" },
  { rank: 2, province: "Papua Tengah", burden: 0.0040, region: "Indonesia Timur" },
  { rank: 3, province: "Papua", burden: 0.0031, region: "Indonesia Timur" },
  { rank: 4, province: "Papua Barat", burden: 0.0029, region: "Indonesia Timur" },
  { rank: 5, province: "Papua Selatan", burden: 0.0027, region: "Indonesia Timur" },
  { rank: 6, province: "Aceh", burden: 0.0026, region: "Indonesia Barat" },
  { rank: 7, province: "Nusa Tenggara Timur", burden: 0.0021, region: "Indonesia Tengah" },
  { rank: 8, province: "Lampung", burden: 0.0019, region: "Indonesia Barat" },
  { rank: 9, province: "Nusa Tenggara Barat", burden: 0.0019, region: "Indonesia Tengah" },
  { rank: 10, province: "Jawa Timur", burden: 0.0018, region: "Indonesia Barat" },
];

// Tabel 4.2 — Distribusi Kategori Risiko Beban Pembiayaan BPJS
export const riskDistribution: {
  category: RiskCategory;
  count: number;
  percentage: number;
  color: string;
}[] = [
  { category: "Tinggi", count: 13, percentage: 34.21, color: "#f87171" },
  { category: "Sedang", count: 12, percentage: 31.58, color: "#fbbf24" },
  { category: "Rendah", count: 13, percentage: 34.21, color: "#2dd4bf" },
];

// Province table rows: the 10 named provinces from Gambar 4.2, plus aggregate
// placeholders for provinces the paper places in each risk tier without
// publishing individual index values.
export const provinceTableRows: {
  province: string;
  burden: number | null;
  category: RiskCategory;
  region: string;
  note?: string;
}[] = [
  ...topProvinces.map((p) => ({
    province: p.province,
    burden: p.burden,
    category: "Tinggi" as RiskCategory,
    region: p.region,
  })),
  {
    province: "+3 provinsi lainnya",
    burden: null,
    category: "Tinggi",
    region: "Beragam",
    note: "Termasuk kategori Tinggi (kuantil atas), nilai indeks tidak dipublikasikan per provinsi pada laporan asli.",
  },
  {
    province: "12 provinsi",
    burden: null,
    category: "Sedang",
    region: "Beragam",
    note: "Kategori risiko Sedang berdasarkan klasifikasi kuantil predicted_burden.",
  },
  {
    province: "13 provinsi",
    burden: null,
    category: "Rendah",
    region: "Beragam",
    note: "Kategori risiko Rendah berdasarkan klasifikasi kuantil predicted_burden.",
  },
];

// Tabel 4.1 — Statistik Deskriptif Variabel Penelitian
export const descriptiveStats: {
  variable: string;
  unit: string;
  min: number;
  max: number;
  mean: number;
  std: number;
}[] = [
  { variable: "Tingkat Kemiskinan", unit: "%", min: 3.42, max: 29.45, mean: 10.51, std: 6.51 },
  { variable: "PDRB per Kapita", unit: "juta Rp", min: 19.11, max: 367.69, mean: 89.42, std: 65.12 },
  { variable: "Cakupan JKN", unit: "rasio", min: 0.57, max: 2.54, mean: 1.01, std: 0.33 },
  { variable: "Faskes per Juta Penduduk", unit: "/juta", min: 100.51, max: 256.79, mean: 168.75, std: 42.05 },
  { variable: "Nakes per Juta Penduduk", unit: "/juta", min: 2452, max: 11746, mean: 7148, std: 2281 },
];

// Variables used by the model, with a one-line plain-language definition —
// summarised from Bab III.3 of the paper for the Feature Importance page.
export const variableDefinitions: { key: string; label: string; definition: string }[] = [
  {
    key: "poverty_rate",
    label: "poverty_rate",
    definition: "Persentase penduduk miskin di tiap provinsi (sumber: BPS).",
  },
  {
    key: "pdrb_per_capita",
    label: "pdrb_per_capita",
    definition: "PDRB per kapita sebagai proksi kapasitas ekonomi regional (sumber: BPS).",
  },
  {
    key: "jkn_coverage",
    label: "jkn_coverage",
    definition: "Rasio peserta JKN terhadap jumlah penduduk (sumber: BPJS Kesehatan / DJSN).",
  },
  {
    key: "faskes_per_million",
    label: "faskes_per_million",
    definition: "Jumlah fasilitas kesehatan per satu juta penduduk (sumber: Profil Kesehatan Indonesia, Kemenkes).",
  },
  {
    key: "nakes_per_million",
    label: "nakes_per_million",
    definition: "Jumlah tenaga kesehatan per satu juta penduduk (sumber: Profil Kesehatan Indonesia, Kemenkes).",
  },
  {
    key: "claim_burden_index",
    label: "claim_burden_index (target)",
    definition:
      "Indeks proksi beban pembiayaan BPJS, disusun dari sisi permintaan (kemiskinan & cakupan JKN) dan sisi kapasitas layanan (faskes & nakes). Bukan nilai klaim aktual.",
  },
];

export const dataSources = [
  {
    name: "Badan Pusat Statistik (BPS)",
    detail: "Tingkat kemiskinan, PDRB per kapita, jumlah penduduk.",
    year: "2025",
  },
  {
    name: "Kementerian Kesehatan RI",
    detail: "Profil Kesehatan Indonesia — jumlah fasilitas & tenaga kesehatan.",
    year: "2024",
  },
  {
    name: "BPJS Kesehatan & DJSN",
    detail: "Data kepesertaan / cakupan Jaminan Kesehatan Nasional (JKN).",
    year: "2025",
  },
];

export const recommendations = [
  {
    title: "Economic Targeting",
    body: "Fokuskan intervensi pada wilayah dengan kemiskinan tinggi; integrasikan program bantuan sosial dengan sistem JKN agar menyasar akar masalah, bukan hanya gejala.",
  },
  {
    title: "Health System Optimization",
    body: "Perkuat layanan kesehatan primer dan fungsi puskesmas sebagai gatekeeper, serta percepat pemerataan distribusi tenaga kesehatan antarwilayah.",
  },
  {
    title: "Data-Driven Policy",
    body: "Integrasikan model risk scoring berbasis data publik ke proses perencanaan anggaran agar alokasi sumber daya lebih tepat sasaran dan lebih dini.",
  },
];

export const methodologySteps = [
  {
    step: "01",
    title: "Pengumpulan Data",
    body: "Data sekunder tingkat provinsi dari BPS, Kemenkes, dan BPJS/DJSN digabungkan menjadi satu dataset 38 provinsi.",
  },
  {
    step: "02",
    title: "Feature Engineering",
    body: "Pembersihan data, penyeragaman unit, dan penyusunan claim_burden_index sebagai variabel target proksi.",
  },
  {
    step: "03",
    title: "Pemodelan Random Forest",
    body: "Random Forest Regression dipilih untuk menangkap hubungan non-linear antarvariabel dan menghasilkan feature importance yang dapat diinterpretasikan.",
  },
  {
    step: "04",
    title: "Validasi LOOCV",
    body: "Leave-One-Out Cross Validation digunakan karena jumlah observasi terbatas (38 provinsi), menghasilkan LOO MAE sebesar 0,00049.",
  },
  {
    step: "05",
    title: "Klasifikasi Risiko",
    body: "Nilai predicted_burden dikelompokkan ke kuantil Tinggi / Sedang / Rendah untuk mendukung prioritas kebijakan regional.",
  },
];
