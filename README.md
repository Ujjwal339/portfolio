# Portfolio — Ujjwal Kumar

Built on the "Orchid" theme: near-black canvas, Playfair Display + Inter, frosted-glass
cards, left-aligned hero — re-themed around VLSI/embedded work with a chip-mark logo,
a copper accent (`#C98A54`), and an animated circuit-trace/signal line in place of the
video background.

## Run it

```
npm install
npm run dev
```

## Before you publish

- **Photo** — the base64 photo embedded in the file you pasted decoded to a JPEG with a
  valid header/footer but no SOF (frame) segment, so it's not actually a complete image —
  likely truncated somewhere in transit. The hero is already wired up to show a circular
  photo at `public/photo.jpg`; it just fails gracefully (hides itself) until you drop a
  real file there.
- **Resume** — the navbar's "Resume" button links to `/resume.pdf`, which doesn't exist
  yet. Add your PDF at `public/resume.pdf`.
- **"Open to VLSI & Embedded Systems roles" badge** — in `Hero.tsx`, matching your "Open
  to Work" badge from the previous version. Edit or remove if your availability changes.

## What's real in here

Pulled directly from the file you shared:

- Email, GitHub, and LinkedIn (footer + contact section)
- All 8 project cards, with real GitHub links and concrete stats (WNS, LUT/FF counts,
  R², sample counts, etc.) where available
- Full skills list across 6 domains
- Education (IIIT Manipur, B.Tech ECE, CGPA 8.02, core courses)
- Certifications (2x NIELIT internships, IIT Dhanbad bootcamp, IoT workshop) and
  competition placements (2nd/3rd place finishes)
- Certificates, TCL scripting, and Perl scripting repo links

## Structure

```
src/
  components/
    Navbar.tsx        — chip-mark logo, section links, resume button
    Hero.tsx           — headline, badge, stats row, photo frame, circuit/signal SVG
    Projects.tsx        — 8 project cards + "also built" list
    Skills.tsx           — skills across 6 domains
    Education.tsx        — degree, CGPA, coursework
    Achievements.tsx      — certifications + competition placements
    Contact.tsx            — email / GitHub / LinkedIn / more links, footer
```
