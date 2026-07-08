# N'Uwakaobiri Foundation Website

A Next.js 15 foundation website inspired by the Tony Elumelu Foundation.  
Built with TypeScript, Tailwind CSS, and Lucide icons.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Navbar + Footer)
│   ├── page.tsx            # Homepage — assembles all sections
│   └── globals.css         # Tailwind base + custom tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with dropdowns + mobile menu
│   │   └── Footer.tsx      # 4-col footer with newsletter input
│   └── sections/
│       ├── Hero.tsx         # Full-screen hero with stats strip
│       ├── StatsStrip.tsx   # 4-stat green band
│       ├── AboutSection.tsx # 2-col about with mission quote
│       ├── PillarsSection.tsx # 4 impact pillar cards
│       ├── ProgrammeSection.tsx # 4-step programme process
│       ├── StoriesSection.tsx   # 3 beneficiary story cards
│       ├── DonateBanner.tsx     # Full-width donate CTA
│       ├── NewsSection.tsx      # 3 news cards
│       └── PartnersSection.tsx  # Partner logos strip
└── data/
    └── site.ts             # ← ALL CONTENT LIVES HERE. Edit this file.
```

---

## Editing Content

**Everything is in `src/data/site.ts`.**

| Export | What it controls |
|---|---|
| `siteConfig` | Name, tagline, email, phone, address, socials |
| `navLinks` | All navigation links and dropdowns |
| `stats` | The 4 headline statistics |
| `pillars` | Impact pillar cards (icon, title, summary) |
| `programmeSteps` | The 4-step programme process |
| `stories` | Beneficiary success story cards |
| `newsItems` | News articles |
| `partners` | Partner organisation names |
| `about` | Mission, vision, philosophy text |
| `leadership` | Team/board members |

---

## Design Tokens

| Token | Value |
|---|---|
| Primary colour | Emerald 700 `#047857` |
| Display font | Playfair Display (serif) |
| Body font | Inter (sans-serif) |
| Border radius | None (square edges — intentional) |

---

## Adding New Pages

Create a file under `src/app/[page-name]/page.tsx`. Use the existing section
components as building blocks. All pages automatically get the Navbar and
Footer from `layout.tsx`.

Example — `/about` page:

```tsx
// src/app/about/page.tsx
import { about, leadership } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* build your page here */}
    </main>
  );
}
```

---

## Images

Hero and section images currently use Unsplash URLs for development.
Replace with your own assets in `/public/images/` and update the `src`
attributes in each component.

Recommended folder structure:
```
public/
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── stories/
    │   ├── chisom.jpg
    │   ├── ibrahim.jpg
    │   └── adaeze.jpg
    ├── team/
    └── partners/
```

---

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS 3** — utility-first styling
- **Lucide React** — icon library
- **Google Fonts** — Playfair Display + Inter
