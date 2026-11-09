# Dāniels Dūda — personal website

My personal portfolio, bringing together software development, IT coordination, teaching, and experiments with AI and creative work.

Built with [Astro](https://astro.build/) and TypeScript as a static website for GitHub Pages.

## Project status

The site has separate Home, Projects, and CV pages, with a shared profile sidebar and social links. The sidebar stays visible while scrolling on desktop and moves above the content on mobile. The Projects section documents six public repositories, with dedicated detail pages and GitHub links. The profile image is currently a monogram. The CV is available as an embedded PDF with open and download links. Replace `public/cv.pdf` and rebuild to update it. The sidebar links to GitHub, LinkedIn, and `hello@danielduda.dev`. Article routes are prepared for future use but are not linked in the navigation; drafts remain unpublished. The prepared article routes are excluded from search indexing until the section is ready.

## Getting started

Requires **Node.js 24** and npm. The Node.js version is also specified in `.nvmrc`.

```sh
npm ci
npm run dev
```

Open `http://localhost:4321` to view the site. No environment variables, credentials, or database are required.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Check Astro and TypeScript files |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |

To preview a production build, run `npm run build` followed by `npm run preview`.

## Project structure

- `src/pages/` — home, projects, articles, and CV pages.
- `src/data/projects.ts` — project descriptions, technology lists, and repository links.
- `src/layouts/BaseLayout.astro` — page layout, metadata, navigation, and footer.
- `src/components/` — reusable interface components.
- `src/styles/global.css` — responsive styles.
- `src/content.config.ts` — article collection schema.
- `src/content/articles/` — Markdown articles, including a draft example.
- `public/` — static assets and the PDF CV.
- `src/pages/404.astro` — custom not-found page.
- `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` — search discovery for the public pages.
- `.github/workflows/` — validation and deployment workflows.

## Project content

Edit `src/data/projects.ts` to update the project cards and detail pages. `src/pages/projects/[slug].astro` generates a page for each entry. The portfolio describes the current implementation of each public project, including coursework and unfinished prototypes.

## Deployment

The site is configured for `https://danielduda.dev/`.

Pull requests to `main` run the checks and build the site. The generated `dist/` directory is available as a `portfolio-preview` workflow artifact for seven days.

Pushes to `main` trigger the GitHub Pages deployment workflow. To enable publishing, select **GitHub Actions** under the repository’s **Settings → Pages → Build and deployment**. The deployment workflow can also be run manually on `main`.
