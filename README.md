# Amar Canopy Redesign

Landing page Vue.js + Tailwind CSS untuk Amar Canopy.

## Struktur

```text
amar-canopy-redesign/
├─ src/
│  ├─ assets/logo-amar-canopy.png
│  ├─ components/
│  │  ├─ Header.vue
│  │  ├─ HeroSection.vue
│  │  ├─ ServicesSection.vue
│  │  ├─ PortfolioSection.vue
│  │  ├─ TestimonialSection.vue
│  │  ├─ AboutSection.vue
│  │  ├─ FooterSection.vue
│  │  └─ WhatsAppWidget.vue
│  ├─ App.vue
│  ├─ main.js
│  └─ style.css
├─ index.html
├─ package.json
├─ tailwind.config.js
└─ postcss.config.js
```

## Instalasi

```bash
cd amar-canopy-redesign
npm install
npm run dev
```

Buka URL dari Vite, biasanya `http://localhost:5173`.

## Build Production

```bash
npm run build
npm run preview
```

## Catatan

- Gambar portfolio masih placeholder.
- Nomor WhatsApp berada di `Header.vue`, `HeroSection.vue`, dan `WhatsAppWidget.vue`.
- Logo ada di `src/assets/logo-amar-canopy.png`.
