# Analytics & Search Console Setup

This site has Google Analytics 4 and Search Console verification wired in, but they only activate when their respective environment variables are set. Until you set the IDs, no analytics scripts load — the site stays clean.

## What you need to do (one-time, ~15 minutes)

### 1. Google Analytics 4 — create the property

1. Go to https://analytics.google.com/
2. Click **Admin** (gear icon, bottom-left)
3. Click **Create** → **Account**
   - Account name: `Green Gujarat Natural Fertilizer`
   - Accept the data-sharing defaults
4. Click **Create** → **Property**
   - Property name: `greengujaratnaturalfertilizer.in`
   - Time zone: `(GMT+05:30) India Standard Time`
   - Currency: `Indian Rupee (INR)`
5. Business details: Industry = `Agriculture`, size = `Small`
6. Choose **Web** as the platform
7. Set up your data stream:
   - Website URL: `https://greengujaratnaturalfertilizer.in`
   - Stream name: `GGNF main site`
8. Copy the **Measurement ID** — it looks like `G-XXXXXXXXXX`

### 2. Google Search Console — verify ownership

1. Go to https://search.google.com/search-console/
2. Click **Add property** → choose **URL prefix**
3. Enter: `https://greengujaratnaturalfertilizer.in/`
4. When prompted for verification, choose **HTML tag**
5. Google will show: `<meta name="google-site-verification" content="abc123XYZ..." />`
6. **Copy only the value** between `content="..."` — i.e. `abc123XYZ...` (without the `content=""` wrapper)

### 3. Plug both IDs into Vercel

1. Open your Vercel dashboard → the `ggnf-web` project → **Settings** → **Environment Variables**
2. Add these three (Production + Preview + Development scope):

| Name | Value | Required |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` (your GA4 ID) | yes |
| `NEXT_PUBLIC_GSC_VERIFICATION` | `abc123XYZ...` (the GSC code value) | yes |
| `NEXT_PUBLIC_BING_VERIFICATION` | (Bing code value, see step 5) | optional |

3. After adding them, trigger a redeploy (Vercel → Deployments → top deploy → ⋯ → Redeploy). Env-var changes don't apply to existing deploys.

### 4. Confirm verification in Search Console

1. Once redeployed, go back to Search Console and click **Verify**
2. Should succeed within seconds since the meta tag is now in your `<head>`

### 5. (Optional) Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters/
2. Sign in, click **Add a site**: `https://greengujaratnaturalfertilizer.in/`
3. Choose **Meta tag** verification → copy the code value (the part inside `content="..."`)
4. Add to Vercel as `NEXT_PUBLIC_BING_VERIFICATION`, redeploy, verify

> Tip: Bing also lets you import directly from Search Console — usually faster than re-verifying.

### 6. Submit your sitemap (do this in both)

**In Search Console:**
- Left sidebar → **Sitemaps**
- Enter `sitemap.xml` and click **Submit**
- Google will start crawling within hours

**In Bing Webmaster Tools:**
- Sitemaps → Submit a sitemap → `https://greengujaratnaturalfertilizer.in/sitemap.xml`

### 7. Request indexing on key pages

In Search Console:
- Use the **URL Inspection** bar at the top
- Paste these URLs one at a time and click **Request Indexing** after each:
  - `https://greengujaratnaturalfertilizer.in/`
  - `https://greengujaratnaturalfertilizer.in/products/fertisol-npk-19-19-19/`
  - `https://greengujaratnaturalfertilizer.in/blog/water-soluble-vs-granular-npk/`
  - `https://greengujaratnaturalfertilizer.in/guides/sugarcane/`
  - `https://greengujaratnaturalfertilizer.in/dealers/ahmedabad/`

Quota is ~10 requests/day per property. Spread out high-priority URLs over a week.

---

## What this gives you, where to look

| Question | Where to look |
|---|---|
| Am I ranking for "water soluble NPK"? | Search Console → Performance → filter by query |
| Which pages get the most clicks from Google? | Search Console → Performance → Pages |
| How many people visit per day? | GA4 → Reports → Realtime / Acquisition |
| Where are they coming from? | GA4 → Acquisition → Traffic acquisition |
| Are pages getting indexed? | Search Console → Pages |
| Did a rich snippet break? | Search Console → Enhancements (Products / FAQ / Breadcrumbs) |
| Site speed / Core Web Vitals | Search Console → Core Web Vitals |

---

## What happens locally (dev)

If you run `npm run dev` without setting these env vars, nothing analytics-related loads. To test analytics locally:

1. Copy `.env.example` to `.env.local`
2. Fill in the IDs
3. Restart `npm run dev`

Visit any page, then go to GA4 → Realtime — you should see yourself within 30 seconds.

---

## Troubleshooting

**GA4 not showing data:**
- Confirm the env var is set in Vercel production (not just preview)
- Confirm you redeployed *after* adding the env var
- Open the deployed site, view source, search for `gtag` — if missing, the env var didn't reach the build
- Wait 24h for the GA4 dashboard (Realtime works instantly, reports lag)

**Search Console verification failed:**
- View source of homepage, look for `<meta name="google-site-verification"`
- If missing → env var not set / redeploy needed
- If present but verification still fails → make sure you copied only the `content="..."` value, not the entire tag

**Vercel says env vars are set but nothing works:**
- `NEXT_PUBLIC_` prefix is required for client-side access. Without it, the variable exists at build time but Next.js won't ship it to the browser.

---

That's it. Once both are wired, you'll have actual data to measure all the SEO changes against.
