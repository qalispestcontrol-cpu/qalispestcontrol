# Qalis Pest Control (Pty) Ltd

Qalis Pest Control is a trusted pest management company dedicated to delivering safe, efficient, and affordable pest control services across residential, commercial, and industrial sectors in South Africa.

This repository is a simple static site starter for the Qalis Pest Control website. It includes a basic site structure (Home, Services, About, Contact), responsive CSS, a placeholder logo, and CI placeholder workflow.

Quick start (React + Vite)

1. Install dependencies:
   - npm install

2. Run dev server:
   - npm run dev
   - Open http://localhost:5173

3. Build for production:
   - npm run build
   - npm run preview (test the production build locally)

4. Edit source files in `src/` (pages, components, theme).

Design & Notes ✅
- **Brand colors:** primary `#f59e0b` (use as `brand.500` / `--brand`), **black** (`#000000`) and **white** (`#ffffff`).
- **Fonts:** `Inter` is used for headings and body. Font is loaded from Google Fonts in `index.html`.
- **Where to edit styles:** global CSS variables live in `styles/main.css`; Chakra UI tokens and component defaults are in `src/theme.js`.
- **Assets:** Replace the placeholder logo (`assets/logo.svg`) and add photos in `assets/images/` for the hero and services.
- **Accessibility:** focus states and higher contrast were added for CTAs. Please test with Lighthouse / Axe for compliance.
- **Responsive:** Mobile navigation drawer added, hero and cards are responsive, CTAs become full-width on small screens.
- **Placeholders & content:** Added a hero section, service cards, and client cards with placeholder SVG illustrations in `assets/images/` and new components in `src/components` (`Hero.jsx`, `ServiceCard.jsx`, `ClientCard.jsx`). Replace these placeholders with real photography or illustrations for production.
- **WhatsApp contact:** Added a floating WhatsApp action in `src/components/WhatsApp.jsx` that opens a chat drawer with a pre-filled message and a button that opens WhatsApp via the API (`https://wa.me/`), plus a quick-call option.
- **Footer:** Replaced `src/components/Footer.jsx` with a comprehensive footer that includes quick links, office addresses with map links, phone/email/WhatsApp CTAs, and site credits.
- **SEO / Crawling:** Added `public/robots.txt` and `public/sitemap.xml` (update the sitemap URL to your production domain). Also added a placeholder Open Graph image at `/og-image.svg` and meta tags in `index.html`.
- **Breadcrumbs:** Added a `Breadcrumbs` component (`src/components/Breadcrumbs.jsx`) and placed it in `Home`, `About`, `Services`, and `Contact` pages to provide navigational context for users and search engines.
- **Structured data:** Added LocalBusiness JSON-LD to `index.html` (update the URLs, opening hours, and `sameAs` links to reflect production values).
- **Next steps:** Replace placeholder imagery, add a favicon and Open Graph images, run Lighthouse/axe accessibility tests, and consider a sticky quick-call button for mobile.

## Vercel deployment & environment variables 🔧

- Set the Web3Forms key as a Vite environment variable in Vercel's Project Settings: `VITE_WEB3FORMS_KEY` (this is required for the contact form to submit). Do not commit your `.env` file — the real key should only be stored in Vercel or a local `.env` file.
- Enable automatic deployments on every GitHub push by connecting the repository in Vercel and ensuring **Automatic Deploys** are turned on for the production branch (default behavior when linked).
- If you prefer to rotate the key, generate a new key in Web3Forms and replace the `VITE_WEB3FORMS_KEY` value in Vercel; then push a new commit to trigger a redeploy.

License

This project is available under the MIT License. See `LICENSE`.
