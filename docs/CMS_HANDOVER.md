# Alagu Production — Website & Headless CMS Documentation

This document provides a comprehensive operational guide for the **Alagu Production** website, covering architecture, Headless CMS integration (Sanity schemas + built-in admin dashboard), environment variables, and production deployment on Vercel.

---

## 1. Tech Stack Overview

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom cinematic Obsidian (`#07090E`) & Warm Gold (`#D4AF37`) palette
- **Carousel**: Embla Carousel (`embla-carousel-react` + `embla-carousel-autoplay`) with pause on hover/focus, mouse drag, touch swipe, keyboard arrows, and snap scrolling
- **Animations**: CSS smooth transitions + keyframe glows with strict `prefers-reduced-motion` compliance
- **CMS Storage**: Dual mode:
  1. **Built-in Administrative Portal** (`/admin`) with encrypted session access, local JSON persistence (`data/cms-state.json`), movie manager, inquiry CRM, and CSV export.
  2. **Sanity Headless CMS Schemas** (`/sanity/schemas`) ready for standalone studio deployment.
- **SEO & Metadata**: Semantic HTML5, Dynamic XML Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), JSON-LD Structured Data (`MovieDistributor` and `Movie`), OpenGraph & Twitter Cards.

---

## 2. Environment Variables

Create a `.env.local` file in the root directory (refer to `.env.example`):

```bash
# =========================================================================
# SITE CONFIGURATION
# =========================================================================
NEXT_PUBLIC_SITE_URL=https://alaguproduction.com
NEXT_PUBLIC_COMPANY_NAME="Alagu Production"
NEXT_PUBLIC_WHATSAPP_NUMBER="995504887972"
NEXT_PUBLIC_CONTACT_EMAIL="alaguproduction@gmail.com"

# =========================================================================
# CMS ADMIN AUTHENTICATION
# =========================================================================
ADMIN_PIN_CODE=alagu2025
EDITOR_PIN_CODE=admin

# =========================================================================
# OPTIONAL: SANITY HEADLESS CMS (If deploying external Sanity Studio)
# =========================================================================
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_sanity_read_token
SANITY_API_WRITE_TOKEN=your_sanity_write_token

# =========================================================================
# EMAIL NOTIFICATIONS (Nodemailer / Resend / SendGrid)
# =========================================================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=alaguproduction@gmail.com
SMTP_PASS=your_app_password
NOTIFICATION_RECIPIENT=alaguproduction@gmail.com

# =========================================================================
# ANALYTICS (Privacy Compliant)
# =========================================================================
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 3. Headless CMS Schemas

The repository includes complete Sanity Studio schema definitions located in `sanity/schemas/`:

1. **`movie.ts`**:
   - `title`: String (Required)
   - `slug`: Slug (Generated from title)
   - `status`: String dropdown (*Now Showing*, *Upcoming*, *Previously Distributed*)
   - `poster`: Image with hotspot support (falls back to gradient placeholder)
   - `releaseYear`: Number
   - `releaseDate`: String (e.g. "Expected Q4 2025")
   - `languages`: Array of strings (Tamil, Telugu, Hindi, Malayalam, etc.)
   - `genres`: Array of strings
   - `territories`: Array of strings (UK, Germany, France, Nordics, etc.)
   - `synopsis`: Text
   - `director`: String
   - `cast`: Array of strings
   - `kdmFormat`: String (e.g. "DCI 4K Scope • Dolby Atmos")
   - `featured`: Boolean (Controls appearance in Home Carousel)
   - `published`: Boolean (Public visibility switch)

2. **`project.ts`**:
   - `filmTitle`: String
   - `country`: String
   - `city`: String
   - `venue`: String
   - `year`: Number
   - `dateString`: String
   - `approvedHighlights`: Text
   - `status`: String (*Completed*, *Current*, *Scheduled*)
   - `detailsConfirmed`: Boolean (Audit verification toggle)

3. **`testimonial.ts`**:
   - `author`: String
   - `role`: String
   - `organization`: String
   - `city` / `country`: String
   - `quote`: Text
   - `isApproved`: Boolean (Public display toggle)
   - `internalNote`: String

4. **`enquiry.ts`**:
   - Stores incoming theatre bookings, cinema contact, phone, email, and film requirements.

---

## 4. Built-in CMS Admin Portal (`/admin`)

Staff can manage the website without writing code:

1. Visit **`/admin`** in any web browser.
2. Enter the staff access PIN:
   - **`alagu2025`** for **Admin** (Full privileges)
   - **`admin`** for **Editor**
3. Features:
   - **Exhibitor Enquiries**: View incoming booking requests, change status (`New`, `In Discussion`, `Confirmed`, `Archived`), 1-click WhatsApp reply, and export to CSV.
   - **Movies**: Add upcoming titles, toggle public publish state, update theatrical specs.
   - **Projects**: Manage exhibition circuits across European cities.
   - **Testimonials**: Review partner endorsements and toggle public verification.

---

## 5. Deployment Steps (Vercel)

### Option A: One-Click Vercel Deployment via Git
1. Push this codebase to your GitHub/GitLab account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete cinematic Alagu Production website"
   git remote add origin https://github.com/your-org/alagu-production-website.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `alagu-production-website` repository.
4. Set the Framework Preset to **Next.js**.
5. Add the environment variables specified in `.env.example`.
6. Click **Deploy**. Vercel will build and assign a global CDN URL (with automatic HTTPS and continuous deployment).

### Option B: Local Production Testing
```bash
# Build production bundle
npm run build

# Start local production server
npm run start
```
The application will be live at `http://localhost:3000`.

---

## 6. Compliance & Content Verification Rules

- **"16+ Projects" Claim**:
  In accordance with company guidelines, this claim is footnoted across the site as *pending formal archival record reconciliation*. Once verified by management, edit `lib/data/siteSettings.ts` or CMS site settings to mark `projectsCountConfirmed = true`.
- **Testimonials & Client Milestones**:
  All testimonials start in an unapproved state (`isApproved: false`) and display a clear disclaimer. Only approve quotes once written authorization is received from cinema operators.
- **Poster Artworks**:
  Until official high-resolution licensed posters are uploaded, the site utilizes bespoke, high-definition typographic gradient placeholder cards that maintain brand elegance without copyright or hotlink liabilities.

