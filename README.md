# Praveen Raj — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Static-export ready, deploys free on Vercel or GitHub Pages.

## Before you deploy

1. In `components/Footer.tsx`, replace the placeholder `href="#"` on the LinkedIn link with your actual profile URL.
2. Add project repo/demo links in `components/Projects.tsx` if you want the project cards to link out (currently text-only).
3. Swap the favicon / add an OG image in `public/` if you want richer link previews.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy — Vercel (recommended, easiest)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Leave build settings as default (Next.js is auto-detected). Deploy.
4. Free custom subdomain: `yourname.vercel.app`. Custom domain optional.

## Deploy — GitHub Pages (fully free, static export)

This project is already configured for static export (`output: "export"` in `next.config.js`).

```bash
npm run build
```

This generates a static site in the `out/` folder.

1. Push the repo to GitHub.
2. In repo Settings → Pages, set source to the `out/` folder (or use a GitHub Action to build and deploy `out/` to the `gh-pages` branch).
3. Site goes live at `yourusername.github.io/reponame`.

## Structure

```
app/            → routes, layout, global styles
components/     → Hero, Nav, Experience, Projects, Skills, Footer, SystemDiagram
```

All content (experience, projects, skills) is in the component files as plain data arrays — edit directly, no CMS.
