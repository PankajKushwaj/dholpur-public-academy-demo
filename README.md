# Dholpur Public Academy — School Website Sales Demo & Portfolio

> **Live sales demo website created by freelance web developer Pankaj** to showcase custom, high-converting website solutions for schools, colleges, and coaching institutions in Dholpur, Rajasthan, and across North India.
> 
> *Discreetly labeled across the site as: **DEMO WEBSITE — Sample school information**.*

---

## 🎨 Design System & Color Palette

- **Core Navy**: `#142B4F` (Header, hero overlay, footer, primary cards)
- **Royal Blue**: `#2563EB` (Interactive badges, accents, links)
- **Accent Gold**: `#F4B942` (CTA buttons, school crest monogram, highlights)
- **Pure White**: `#FFFFFF` (Card surfaces, clean reading spaces)
- **Canvas Background**: `#F5F7FB` (Sophisticated soft neutral contrast)
- **Typography**: Google Fonts *Plus Jakarta Sans* (Clean, legible UI) and *Playfair Display* (Prestigious academic serif headings)

---

## 🚀 Live Features Implemented

1. **Brand Identity & Header**:
   - Monogram logo crest with "DPA" shield.
   - Discreet top demo announcement bar with Developer Proposal CTA.
   - Desktop and Mobile responsive navigation with keyboard accessibility.
   - Prominent "Enquire Now" gold button.

2. **Hero Section**:
   - High-resolution school campus backdrop with deep navy gradient overlay.
   - Inspiring headline: *"Building Bright Futures, Inspiring Excellence."*
   - Buttons: *"Explore Our School"* and *"Admission Enquiry"*.
   - Non-quantified institutional highlights (Sample Ratio, Pedagogy, Co-curriculars, Safe GPS transport) avoiding false numeric claims.

3. **Sample Principal's Message**:
   - Clearly marked with `[SAMPLE PRINCIPAL'S WELCOME - DEMO ONLY]` badge.
   - Profile photo, signature credentials, and message emphasizing values and child-centric learning.

4. **About the Academy**:
   - Mission, Vision, and 4 Core Values: Integrity, Curiosity, Empathy, and Collaborative Leadership.
   - Institutional advantages preview.

5. **Academic Wings (Progressive Stages)**:
   - Interactive wing selector: Pre-Primary (Foundational), Primary (I-V), Middle School (VI-VIII), and Secondary/Senior Secondary (IX-XII).
   - Core subjects list, pedagogical features, and explicit CBSE pattern disclaimer.

6. **Campus Facilities Showcase**:
   - Filterable categories: All, Academic & Labs, Digital Technology, Sports & Fitness, and Campus & Transport.
   - Interactive Modal preview on click with detailed infrastructure highlights.
   - Labelled as sample until verified.

7. **Admissions & Working Enquiry Form**:
   - 4-step admission journey.
   - Sample document verification checklist.
   - Expandable FAQ accordion.
   - **Form Fields**: Student Name, Parent/Guardian Name, Class Applying For, Parent Phone Number, Email, and Consent Checkbox.
   - **Validation**: 10-digit Indian phone validation and required field checks.
   - **Privacy & Safety Safeguard**: On submission, informs the user:
     `"Demo only: no information has been sent. Connect a real form service (such as Formspree, EmailJS, Google Sheets, or custom backend) to receive enquiries."`
   - Instant pre-filled WhatsApp enquiry trigger.

8. **Campus Life Gallery**:
   - Filterable categories: Campus, Sports, Laboratories, Events, Arts.
   - Fullscreen **Modal Lightbox** with next/prev navigation and keyboard `Escape` / `Arrow` controls.

9. **Notices & Circular Board**:
   - Filterable announcements by category (Admissions, Academic, Holidays, Events) and search bar.
   - Urgency badges, dates, and interactive modal view with sample document download triggers.

10. **Placeholder Achievements**:
    - Concept trophies, state recognition medals, and academic benchmarks clearly designated as demonstration placeholders.

11. **Campus Contact & Location**:
    - Sample telephone numbers, email, visiting hours, and address near Chambal road, Dholpur.
    - Custom styled interactive map mockup with road landmarks.

12. **Configurable WhatsApp Integration**:
    - Floating action button in bottom right.
    - Centrally managed in `src/config/siteConfig.ts`.
    - Opens WhatsApp with a prefilled admission inquiry message.

13. **Developer Sales Proposal (Pankaj)**:
    - Discreet *"Website concept by Pankaj | Web Development"* footer credit.
    - Bottom-left floating ribbon + top header button opening the **Developer Proposal Modal**.
    - Highlights custom school features, hosting, domain setup, and direct contact with Pankaj.

---

## 🛠️ How to Customize School Details

All school information, contact details, phone numbers, WhatsApp configurations, and developer credits are stored in a single configuration file:

👉 [src/config/siteConfig.ts](file:///e:/New%20folder/School%20demo%20for%20sale/src/config/siteConfig.ts)

```typescript
export const siteConfig = {
  name: "Dholpur Public Academy",
  shortName: "DPA Dholpur",
  monogram: "DPA",
  tagline: "Empowering Minds, Shaping Tomorrow's Leaders",
  motto: "Building Bright Futures, Inspiring Excellence",
  location: {
    city: "Dholpur",
    state: "Rajasthan",
    country: "India",
    fullAddress: "...",
  },
  contact: {
    phoneSecondary: "+91 98765 43210 (Sample Enquiry)",
    email: "admissions@...",
  },
  whatsapp: {
    number: "919876543210", // International format without +
    isConfigured: true,
    defaultMessage: "Hello Dholpur Public Academy! I am interested in admission...",
  },
  developer: {
    name: "Pankaj",
    phone: "+91 98765 01234",
    email: "pankaj.developer@example.com",
    whatsappNumber: "919876501234",
  }
};
```

---

## 💻 Running Locally

1. Open a terminal in the project directory:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   `http://localhost:5173`

4. Build production bundle:
   ```bash
   npm run build
   ```

---

## 🌐 How to Publish for Free

### Option 1: Vercel (Recommended - Takes 2 Minutes)
1. Push your repository to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and import this repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your live school demo URL (e.g., `dholpur-public-academy.vercel.app`) will be live with free global CDN and HTTPS!

### Option 2: Netlify (Drag & Drop or Git)
1. Run `npm run build` to generate the production `dist` folder.
2. Go to [netlify.com](https://netlify.com) and log in.
3. Drag and drop the `dist/` folder into the Netlify dashboard for instant live publishing.

### Option 3: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "./"` in `vite.config.ts`.
3. Add deploy script in `package.json`: `"deploy": "gh-pages -d dist"`
4. Run `npm run build && npm run deploy`.

---

## 🐙 How to Connect the Code to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: complete Dholpur Public Academy school sales demo website"
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `school-website-sales-demo`.

3. Link and push your local code:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/school-website-sales-demo.git
   git branch -M main
   git push -u origin main
   ```

---

## 📄 License & Presentation Notice
This project is an original demonstration concept engineered by **Pankaj** for presentations to school management, trustees, and principals.
