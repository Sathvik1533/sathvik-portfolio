# Kotagiri Sathvik — Personal Portfolio

> Personal engineering portfolio of Kotagiri Sathvik, Backend & AI Systems Engineer.  
> Focusing on financial reconciliation pipelines, grounded document intelligence with code-level refusal gates, and secure multi-tenant backend architectures.

---

## Tech Stack

- **Frontend:** React 18, TypeScript 5, Vite 5
- **Styling:** CSS variables, Space Grotesk, Inter, JetBrains Mono
- **Backend / Serverless (Netlify):** Netlify Edge / Serverless TypeScript Functions (`netlify/functions/`)
- **Testing:** Bun Test

---

## Local Development

```bash
# Install dependencies
bun install # or npm install

# Run development server
npm run dev

# Run test suite
bun test

# Production build
npm run build

# Preview build locally
npm run preview
```

---

## Deployment Instructions

### 1. Deploying Frontend to Vercel

```bash
# Link and deploy via Vercel CLI
vercel link
vercel deploy --prod
```
Or import `Sathvik1533/sathvik-portfolio` directly from your [Vercel Dashboard](https://vercel.com/new). The `vercel.json` file is pre-configured with the Vite build and SPA routing.

### 2. Deploying to Netlify (Frontend + Backend Functions)

```bash
# Link and deploy via Netlify CLI
netlify link
netlify deploy --prod
```
Or connect your GitHub repository in the [Netlify Dashboard](https://app.netlify.com/start).  
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Functions directory:** `netlify/functions` (configured in `netlify.toml`)
- The backend API will be available under `/api/*` (e.g. `/api/health`).

---

## Projects Featured

1. **LedgerLens** — Financial reconciliation and evidence review (`LOCAL DEMO`)
2. **VERITAS (pdf-rag-chat)** — Grounded document Q&A with cosine refusal gate (`VERIFIED`)
3. **FinSight** — Receipt intelligence and statutory GST ITC engine (`LOCAL DEMO`)
4. **LedgerSense** — 4-way transaction settlement reconciliation prototype (`SYNTHETIC BENCHMARK`)
