# Feriska Portfolio — Standalone

Personal portfolio website (React + Vite + Tailwind CSS v4 + Framer Motion).

## Cara jalanin

1. Pastikan Node.js (v18+) sudah ter-install di laptop kamu. Cek dengan:
   ```bash
   node -v
   ```
2. Buka terminal di folder project ini, lalu install semua package:
   ```bash
   npm install
   ```
3. Taruh file CV-mu di folder `public/` dengan nama persis:
   ```
   public/Feriska_Fetri_Juni_Hapsari_CV.pdf
   ```
4. Jalankan development server:
   ```bash
   npm run dev
   ```
5. Buka browser ke http://localhost:5173

## Build untuk production

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/` — bisa kamu deploy ke Vercel, Netlify, GitHub Pages, dll.

## Deploy gratis ke Vercel (paling cepat)

```bash
npm install -g vercel
vercel
```

Ikutin instruksinya, websitemu langsung live dalam ±1 menit.
