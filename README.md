# Mengran Li — research homepage

Live site: https://limengran98.github.io/

The homepage presents selected work, the full publication record, news, awards,
academic service, and contact information. Essential page assets are local;
the optional visitor map loads only when opened.

## Edit and preview

- `data.js`: selected works, publications, news, awards, and service.
- `template.html`: biography and page structure.
- `styles.css`: responsive layout, light/dark themes, and print styling.
- `render.js`: shared HTML rendering for the build and publication filters.
- `app.js`: search, filters, citations, figure viewer, theme switch, and visitor map.
- `images/`: research figures. `lmr.jpg`: profile photo.

Use Node.js 22 or later. No package installation is required.

```bash
node build.mjs
python -m http.server 4173 --directory dist
```

Open http://localhost:4173. The build also refreshes `index.html` in the repository
root. Publication content is rendered into the HTML so it remains readable
before JavaScript loads; JavaScript adds search and filtering.

## Publishing

Push changes to `main`. The **Deploy research homepage** GitHub Actions workflow
rebuilds the site and publishes `dist/` to GitHub Pages. It can also be started
manually from Actions. `dist/` is generated and is not committed.

Keep manuscript titles, author order, publication status, and paper/project/code
links verified when adding work. The three current preprints are labeled as
preprints and are included in both selected work and the full publication list.

The three featured cellular-AI projects each include a framework figure and a
supporting research figure. Click any figure to enlarge it; the original image
remains accessible without JavaScript. Figures retain their source proportions.
