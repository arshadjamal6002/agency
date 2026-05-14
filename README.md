# Fazilyyy Portfolio

Single-page portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, **Swiper**, and **EmailJS** (optional).

## Getting started

```bash
cd fazilyyy-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values as needed:

- **EmailJS** — `NEXT_PUBLIC_EMAILJS_*` for the contact form. If unset, submit still completes (stub) for local development.
- **WhatsApp** — `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, country code included).
- **Calendly** — `NEXT_PUBLIC_CALENDLY_URL`
- **Fiverr** — `NEXT_PUBLIC_FIVERR_URL`
- **Contact email** — `NEXT_PUBLIC_CONTACT_EMAIL` (shown in footer / contact strip)

## Placeholder assets

Images under `public/images/` are placeholders (SVG). Replace them with your real exports:

- `hero-portrait.svg` — hero photo (keep **no border-radius** on the image in `Hero.tsx` when swapping to a raster).
- `avatar.svg` — about section avatar.
- `placeholder-*.svg` — project / video thumbnails.
- `smartdine-phone.svg` — mobile mockup.

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `npm run dev`  | Development server |
| `npm run build`| Production build   |
| `npm run start`| Production server  |
| `npm run lint` | ESLint             |

## Deploy (Vercel)

Push the `fazilyyy-portfolio` folder to a Git repo, import in Vercel, set environment variables in the project dashboard, and deploy.
