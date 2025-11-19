# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying on Vercel

This repository is ready to deploy on Vercel. Follow these steps:

1. Sign in to Vercel at https://vercel.com and connect your GitHub account.
2. Import this repository into Vercel by selecting the repo `3ayomidepeter/My-Portfolio`.
3. In the project settings (during import), set the:
   - Framework preset: `Other` (Vite uses a static build)
   - Build command: `npm run build`
   - Output directory: `dist`
4. (Optional) Add `Vite` base if you are hosting under a subpath — but for Vercel this is typically not required. If you do, set `VITE_BASE` in Project Environment Variables.
5. Deploy — Vercel will build the static site using `vite build` and serve files from the `dist` folder.

Notes:

- `vercel.json` is included to ensure that SPA routes fall back to `index.html` so navigation works correctly on refresh.
- If you see engine warnings about Node versions, set the `Node` version in Vercel to `20.x` or add the engines property:
  ```json
  "engines": { "node": ">=20.19.0" }
  ```

If you prefer continuous deployment with GitHub Pages, `gh-pages` is included in `devDependencies` and `npm run deploy` can push `/dist` to `gh-pages`. But for Vercel you don't need that — simply import the repo.

## Automatic deployment with GitHub Actions (Vercel)

You can automatically deploy when you push to `main` by adding a GitHub secret with your Vercel credentials and using the included workflow:

1. In your GitHub repo, go to Settings → Secrets → Actions and create the following secrets:

- `VERCEL_TOKEN` — create via Vercel dashboard (Account → Tokens → Create Token)
- `VERCEL_ORG_ID` — Project settings / General in the Vercel dashboard
- `VERCEL_PROJECT_ID` — Project settings / General in the Vercel dashboard

2. Push to `main` — GitHub Actions will run `npm run build` and call Vercel to deploy.

The workflow is in `.github/workflows/deploy-vercel.yml` and uses the official Vercel Action to publish your site automatically.
