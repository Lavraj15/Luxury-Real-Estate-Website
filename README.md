# Billionaires Tree Realty – Luxury Real Estate Website

React 19 + Vite + TypeScript + Tailwind CSS v4.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview
```

## Features
- Sticky header (transparent -> dark blur on scroll), smooth-scroll nav, active-section highlight
- Mobile hamburger menu (closes on link click, Esc, or resize)
- Hero, trust strip, About, Services, Locations, Why Us, Inquiry, Final CTA, Footer
- Hover effects: buttons, nav, service cards, location cards (image zoom), why-us tiles, About image
- Every CTA opens WhatsApp (+91 92661 33030) with a pre-filled message; Inquiry section has category chips that change the message
- Floating WhatsApp button
- Logo: `public/logo-mark.jpeg` (header, footer, favicon) – overwrite the file to change; sizes are set in `src/App.tsx`

Edit the phone number in `src/App.tsx` (`WA_BASE`).
