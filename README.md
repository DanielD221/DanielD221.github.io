# Dāniels Dūda — personal website

A small, static Astro and TypeScript portfolio. Software, IT coordination, teaching, AI tools, and creative work share equal space. The project cards and personal logo are explicitly marked placeholders. The LinkedIn profile URL is intentionally pending; add the verified URL before turning its label into a link.

## Cloud development

All development can happen in Codex Cloud; no tools need to be installed on your Mac. Use the existing isolated checkout, without creating a worktree. In the repository directory, use Node.js 24 and run:

```sh
npm ci
npm run check
npm run build
npm run dev
```

The dev server listens on port 4321 on all interfaces for a cloud environment's supported port forwarding. Ask Codex to start it and use the environment's preview or shared browser when available. `npm run preview` serves the production `dist/` output on the same port after building; stop the dev server first. A new cloud task may need `npm ci` again. No credentials, environment variables, backend, or database are required. If the cloud sandbox cannot write npm's default cache, use `npm --cache /tmp/portfolio-npm-cache ci`. If Astro cannot write its telemetry preferences, prefix Astro commands with `ASTRO_TELEMETRY_DISABLED=1` (for example, `ASTRO_TELEMETRY_DISABLED=1 npm run build`).

## Structure and architecture

- `src/pages/index.astro`: the initial one-page website and editable placeholder project data.
- `src/layouts/BaseLayout.astro`: shared document, metadata, navigation, and footer.
- `src/components/`: typed, reusable section headings and project cards.
- `src/styles/global.css`: responsive styles, system fonts, focus states, and reduced-motion support. No remote font requests or client JavaScript are needed.
- `src/content.config.ts`: Markdown article collection with validated title, description, publication date, draft flag, and tags.
- `src/content/articles/`: article Markdown files. The included README is a draft authoring example, not a published article.
- `public/`: files copied directly into the output, including the temporary favicon.
- `.github/workflows/`: PR validation and official Astro GitHub Pages deployment.
- `astro.config.mjs`, `tsconfig.json`: static output, user-site URL, and strict TypeScript.
- `package-lock.json`, `.nvmrc`: reproducible dependencies and Node major version.

Astro renders `.astro` pages and components to HTML at build time, bundles CSS, and writes the deployable files to `dist/`. GitHub Pages serves those files directly. This version has no client-side framework or hydration runtime.

## Future projects and articles

Create `src/pages/projects/index.astro` when a dedicated project archive is needed, reusing `ProjectCard`. Create `src/pages/articles/index.astro` for an article listing and `src/pages/articles/[...id].astro` for individual articles using `getCollection`, `getStaticPaths`, and `render` from `astro:content`. Filter with `({ data }) => !data.draft` before creating public listings or routes. The collection is prepared now; article routes are deliberately not published yet. Add Markdown files using the frontmatter in the draft example. The build validates the collection schema.

The design is an original minimal starting point. A future Refero Styles `DESIGN.md` can guide refinement without replacing the component structure.

## Checks and deployment

`npm run check` validates Astro/TypeScript; `npm run build` generates the production website. Pull requests to `main` run both checks and upload `dist/` as a seven-day `portfolio-preview` artifact. Downloaded HTML should be served in the cloud, rather than opened as a file, because asset paths are root-relative. PRs do not deploy to the public site and do not receive an automatic hosted preview URL.

After merging into `main`, `.github/workflows/deploy.yml` uses the official `withastro/action@v6` to install from the lockfile, check, build, and upload the Pages artifact. `actions/deploy-pages@v5` then publishes it using the `github-pages` environment and GitHub's temporary OIDC credentials. No personal deployment token is needed. The workflow can also be run manually on `main`.

### One-time GitHub settings

1. Open this repository → **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Ensure Actions are enabled and the repository or organization permits the actions used by the workflows.
4. Review the pull request, inspect its checks, and preview in Codex Cloud before approving and merging it.
5. After merging, inspect **Actions → Deploy to GitHub Pages**. The deployment environment provides the published URL.

The site is configured for **https://danield221.github.io/**. Since this is a user-level Pages repository, no repository-name `base` is needed. `danielduda.dev` is intentionally not configured: there is no `CNAME` file, DNS change, or custom-domain setting. Configure the domain and update canonical `site` metadata together in a later change.

Merging into `main` triggers publication once Pages is enabled. Nothing merges automatically. Review changes in the PR's **Files changed**, wait for passing checks, and request a cloud browser preview of the branch before merging.
