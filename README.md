# BPJS Smart Health Financing — Risk Dashboard

A Next.js 14 (App Router) dashboard that visualises the findings of
**"Smart Health Financing System: AI-Based Regional Risk Prediction for
Sustainable BPJS Policy in Indonesia"** (Shanizal & Wibowo, Universitas Gadjah
Mada, SEMAR LKTIN Competition 2026).

The UI follows a dark, instrument-panel aesthetic (sidebar navigation, pill
tabs, status badges, dark cards with teal accents) in the same visual family
as the reference control dashboard provided for this project.

## Pages

| Route            | Description                                                          |
| ----------------- | --------------------------------------------------------------------- |
| `/`                | National overview — KPIs, feature importance, top-10 provinces, risk donut |
| `/provinces`       | Full provincial risk table with a category filter panel               |
| `/features`        | Feature importance, descriptive statistics (Tabel 4.1), variable definitions |
| `/methodology`     | Research summary, methodology steps, data sources, policy recommendations |
| `/settings`        | Display & notification preferences (UI only)                          |

All figures (feature importance %, top-10 provincial burden index, risk
category counts, descriptive statistics) are taken directly from Bab IV of
the paper and live in `data/dataset.ts` — update that single file to refresh
every chart and table on the site.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm run start
```

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for the dark instrument-panel design system (see
  `tailwind.config.ts` for the full colour/token set)
- **Recharts** for the bar, lollipop and donut charts
- **lucide-react** for icons

## Project structure

```
app/
  layout.tsx          root layout (sidebar + mobile nav)
  page.tsx             Dashboard (overview)
  provinces/page.tsx    Provincial risk table + filters
  features/page.tsx     Feature importance + descriptive stats
  methodology/page.tsx  Research methodology & recommendations
  settings/page.tsx     Preferences (UI only)
  globals.css
components/
  Sidebar.tsx, MobileNav.tsx, TopBar.tsx, SectionTabs.tsx
  RiskFilterPanel.tsx, ProvinceTable.tsx
  charts/               FeatureImportanceChart, TopProvincesChart, RiskDonut, ...
  ui/                    Card, StatCard, Pill
data/
  dataset.ts             all figures sourced from the paper
```

## Notes on the data

The published paper only reports individual `predicted_burden` values for
the top 10 provinces (Gambar 4.2). The remaining provinces in the Sedang and
Rendah risk tiers, plus 3 provinces in the Tinggi tier, are represented as
aggregate rows in the province table — counts only, matching Tabel 4.2 — to
avoid inventing figures the source report does not publish.
