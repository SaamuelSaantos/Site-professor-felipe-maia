# Felipe Maia Professional Site

## Goal
Create a modern, responsive, conversion‑focused single‑page website for **Felipe Maia**, following the detailed specification.

## Open Questions
- **Portrait Photo** – Do you have a professional headshot for the hero section? If not, should we use a generated placeholder?
- **Logo / Favicon** – Any specific logo or favicon to include?
- **Portfolio Projects** – Provide initial project data (title, category, description, image) or should we create example cards marked as placeholders?
- **Contact Form Submission** – Preferred backend integration (email service, webhook, Netlify Forms, etc.)? We'll leave it as a stub for now.
- **Preferred Font** – Use Google Font *Inter* (default) or another font?
- **Social Links** – Confirm Instagram and YouTube URLs for PodPro.

## Proposed Project Structure
```
felipe-maia-site/
│
├─ index.html                # Single‑page markup with anchor sections
├─ css/
│   ├─ style.css             # Core design system, colors, typography
│   └─ responsive.css        # Media queries for mobile/tablet/desktop
├─ js/
│   ├─ main.js               # Navigation, smooth‑scroll, CTA handling
│   └─ contact.js            # Form validation and placeholder submit logic
├─ assets/
│   ├─ images/               # Hero photo, placeholder project images, icons
│   └─ icons/                # SVG icons for services, social links, etc.
├─ README.md                 # Project overview and build instructions
└─ favicon/                  # Placeholder favicon (replace later)
```

## Design System (CSS)
- **Primary interactive color**: `#0A78F5`
- **Structural dark blue**: `#0A235A`
- **Accent palette**: `#FFAF0F`, `#F01E50`, `#00BEC8`, `#6EC823`
- **Typography**: Google Font *Inter* (weights 400, 600, 700) with fallback `system-ui`.
- **Micro‑animations**: fade‑in on scroll, button hover scale, subtle shadow transitions.
- **Accessibility**: contrast > 4.5:1, focus outlines, `prefers-reduced-motion` handling.

## Development Steps
1. **Initialize repository** with the folder structure above.
2. **Create `index.html`**
   - Add meta tags (title, description, Open Graph, charset, viewport).
   - Header with navigation (desktop + hamburger for mobile).
   - Semantic sections (`<section id="hero">`, `<section id="sobre">`, etc.) matching menu anchors.
   - Placeholder content where data is not yet supplied (project cards, testimonials).
3. **Write `style.css`**
   - Define CSS custom properties for the palette.
   - Base typography, layout grid, reusable component classes (cards, buttons, forms).
   - Implement responsive grid (CSS Grid/Flexbox) and media queries.
4. **Write `responsive.css`**
   - Adjust layout breakpoints for tablets (≤768px) and phones (≤480px).
   - Ensure touch‑friendly target sizes.
5. **Create `main.js`**
   - Smooth scroll for anchor links.
   - Mobile menu toggle.
   - Lazy‑load images using `loading="lazy"` or IntersectionObserver.
   - Scroll‑based animation triggers (IntersectionObserver).
6. **Create `contact.js`**
   - Front‑end validation for required fields.
   - Stub `fetch` call to a placeholder endpoint; comment where backend integration will be added.
7. **Add assets**
   - Placeholder hero image (`hero-placeholder.jpg`).
   - SVG icons for services (e.g., 🎤, 🎓, 🧠, 👥, 💼, 🎙️) placed in `assets/icons/`.
   - Simple favicon (e.g., "F" on dark background).
8. **Write `README.md`**
   - Project description, tech stack, how to run a local dev server (`npx serve .`), and build notes.
9. **SEO & Accessibility**
   - `<title>`: "Felipe Maia – Educação, Liderança e Desenvolvimento Humano"
   - `<meta name="description">` per specification.
   - Semantic heading hierarchy (`<h1>` for site title, `<h2>` for sections).
   - `alt` attributes for images, `aria-label`s for navigation.
   - JSON‑LD Person schema with name, jobTitle, url.
   - `robots.txt` and `sitemap.xml` placeholder files.
10. **Performance**
    - Minify CSS/JS for production (e.g., `cleancss`, `terser`).
    - Optimize images (WebP) and lazy‑load.
    - No unnecessary libraries.
11. **Accessibility checks**
    - Run Lighthouse audit; note scores in README.
    - Ensure contrast ratios and keyboard navigation.
12. **Conversion Elements**
    - Multiple CTA buttons with audience‑specific copy linking to WhatsApp (`https://wa.me/` with pre‑filled message).
    - Floating WhatsApp button fixed bottom‑right.
    - “Vamos transformar uma ideia em projeto?” section with CTA.
    - Contact form with fields: Nome, E‑mail, WhatsApp, Empresa/Instituição, Tipo de interesse (select), Mensagem.
13. **Finalize**
    - Verify all CTA buttons open correct WhatsApp link.
    - Add `<!-- TODO: replace placeholder content -->` comments where future content will be injected.

## Verification Plan
- Open `index.html` in Chrome/Firefox desktop and mobile emulators.
- Verify navigation links, smooth scroll, mobile menu toggle.
- Check contrast ratios (use online tool).
- Confirm CTA buttons open WhatsApp with pre‑filled text.
- Validate form field validation blocks empty submission.
- Run Lighthouse audit for Performance, SEO, Accessibility; capture scores in README.
- Validate HTML with W3C validator (link in README).

---
*Please review the open questions and the proposed approach. Once approved, we will proceed to scaffold the file structure and populate the initial code.*
