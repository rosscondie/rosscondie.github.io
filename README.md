# rosscondie.github.io

A minimal personal landing page for Ross Condie, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Tech stack

- **Framework**: Astro (static output, no client JS except the contact form)
- **Language**: TypeScript (strict)
- **Styling**: Plain CSS with design tokens (Gruvbox dark palette, IBM Plex Mono)
- **Contact form**: [EmailJS](https://www.emailjs.com/) via `@emailjs/browser`
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`

## Development

Requires Node 22.23+ (CI uses Node 24).

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs to ./dist
npm run preview  # serve the production build
npm run check    # type-check .astro and .ts files
```

## Structure

```
src/
  layouts/Base.astro          # html shell, meta, fonts, global styles
  pages/index.astro           # landing page: intro + links
  pages/contact.astro         # contact form
  components/                 # Intro, Links, ContactForm
  styles/global.css           # reset + design tokens
public/                       # CNAME, favicon
```

## Roadmap

- [x] Migrate from CRA to Vite
- [x] Rebuild as a minimal Astro site (TypeScript, plain CSS, `@emailjs/browser`)
- [x] Social preview image (Open Graph / Twitter meta tags)
- [ ] Custom 404 page
- [ ] `/now` page — current focus, updated every few months
- [ ] `/uses` page — Neovim, dotfiles, terminal setup, espresso and film gear
- [ ] Projects section, once there are 2–3 worth showing
- [ ] Blog via Astro content collections (Go, k8s, DevOps notes)
- [ ] Light/dark theme toggle (Gruvbox light variant)
- [ ] Dependabot or Renovate to keep dependencies up to date
