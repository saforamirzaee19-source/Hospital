# MyPatientHUB (React)

This is the original MyPatientHUB static site (login page, dashboard, find a
doctor, find a clinic) converted into a React + Vite single-page app.

Nothing about the design or the underlying logic was changed:
- `src/style.css` is the original `style.css`, unmodified.
- `src/legacyScript.js` is the original `script.js`, unmodified except
  wrapped in a function so it can run inside a React `useEffect` (see
  `src/hooks/useLegacyScript.js`). One line was adjusted: the post-login
  redirect target `"dashboard.html"` became `"/dashboard"` since pages are
  now SPA routes instead of separate files.
- Each page's JSX mirrors its original HTML 1:1 (same tags, classes, and
  ids), just written in JSX syntax, with the shared sidebar/topbar pulled
  into one component instead of being repeated in three files
  (`src/components/AppShell.jsx`).
- Chart.js and Leaflet are installed via npm instead of loaded from a CDN
  `<script>` tag, and exposed on `window` in `src/main.jsx` so the original
  script still finds `Chart` and `L` exactly as before.
- Internal links (`dashboard.html`, `find-doctor.html`, etc.) were updated to
  the equivalent React Router paths (`/dashboard`, `/find-doctor`, ...).

## Routes
- `/` — Sign in
- `/dashboard` — Dashboard
- `/find-doctor` — Find Doctor
- `/find-clinic` — Find Clinic

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production
build in `dist/`.
