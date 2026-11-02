# Nihal Ansh Aherwar - 3D Portfolio

React + Three.js (react-three-fiber) portfolio. Frontend only, no backend needed.

## Run locally

```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Build for production

```bash
npm run build      # output in /dist
npm run preview
```

Deploy the `dist` folder on Netlify, Vercel, GitHub Pages or any static host.

## Edit your content

- `src/data/projects.js` - every project: pitch, problem, solution, architecture steps, role, Q&A
- `src/data/profile.js` - name, contact, skills, experience, education
- `public/resume.pdf` - the resume behind the "Download resume" button
- `src/components/Shapes.jsx` - the 3D shape of each project
- `src/styles.css` - colors (CSS variables at the top)

## How a client uses it

1. Open the site and press **Start guided 3D tour** - it walks through every project automatically
   (pitch, architecture, your role), so the site explains your work on its own.
2. Or click any 3D object / use the arrow keys to open a project yourself.
3. The **Client Q&A** tab holds ready answers to common technical questions.

## Add a new project

Add one object to the array in `src/data/projects.js` (copy an existing one). Pick a `shape`
from: logs, phone, lock, network, city, chat, coins.
