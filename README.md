# EverHealthy Nutrition Academy — Website

Static site, no build step. Pages: `index.html`, `about.html`, `courses.html`,
`certification.html`, `mastery.html`, `program.html`, `condition.html`,
`conditions.html`, `specialisations.html`, `book.html`.

## Deploy to GitHub Pages

**Option A — GitHub Actions (included, recommended)**
1. Push this repo to GitHub (branch `main`).
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` (or re-run the "Deploy to GitHub Pages" workflow) — the site
   deploys automatically via `.github/workflows/deploy.yml`.

**Option B — Deploy from a branch (no Actions)**
1. Push this repo to GitHub (branch `main`).
2. In the repo: **Settings → Pages → Source → Deploy from a branch**,
   pick `main` / `/ (root)`.

Either way, all links, CSS, and JS use relative paths, so the site works
both at the root of a custom domain and under a project subpath
(`https://<user>.github.io/<repo>/`).

## Local preview
```
python3 -m http.server 8000
```
then open `http://localhost:8000`.
# everhealthynutrition
