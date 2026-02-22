# PracticeClaw Landing Page

## Overview
A stunning landing page for PracticeClaw, an AI-powered patient communication platform for healthcare practices. Built with React, TypeScript, Tailwind CSS, and Framer Motion animations.

## Recent Changes
- 2026-02-22: Navbar updated with Identity, Skills, Tools, Education (scroll anchors to home sections)
- 2026-02-22: Case Studies and How It Works moved to footer; About Us page added (/about)
- 2026-02-22: Replaced tabbed Capabilities with 4 individual sections (Identity, Skills, Tools, Training)
- 2026-02-22: Updated Case Studies with 9 specialties (Dental, PT, Chiro, Optometry, Cosmetic Surgery, Dermatology, Internal Medicine, Sports Medicine, Orthodontics)
- 2026-02-22: Changed primary color to blue (#4f81bd)
- Added rotating headline animation: "Your Patients", "Your Staff", "Your Bottom Line"
- Badge changed to "OpenClaw for Healthcare"
- Added trust badges: "Free 20 conversations", "No credit card required", "HIPAA compliant"
- 2026-02-22: Added multi-page routing with /platform, /how-it-works, /community, /about pages
- 2026-02-22: Rebranded from OpenClaw to PracticeClaw with healthcare-focused content
- 2026-02-21: Initial build

## Project Architecture
- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Routing**: Wouter
- **UI Components**: Shadcn/ui

### Key Files
- `client/src/pages/home.tsx` - Main landing page (Hero + Capabilities + CTA)
- `client/src/pages/platform.tsx` - Platform page (/platform)
- `client/src/pages/how-it-works.tsx` - How It Works page (/how-it-works)
- `client/src/pages/community.tsx` - Community page (/community)
- `client/src/components/landing/capabilities.tsx` - 4 individual sections for Identity, Skills, Tools, Training
- `client/src/components/landing/use-cases.tsx` - Case Studies for 9 healthcare specialties
- `client/src/components/landing/` - All landing page sections (navbar, hero, platform, how-it-works, use-cases, testimonials, cta, footer, theme-provider)
- `client/src/pages/about.tsx` - About Us page (/about)
- `client/src/App.tsx` - App router with theme provider (routes: /, /platform, /how-it-works, /community, /about, /sign-in, /sign-up)
- `client/src/index.css` - CSS variables and theme tokens

### Theme
- Primary color: Blue (#4f81bd, HSL 213 47% 45-55%)
- Secondary color: Blue-tinted neutral
- Dark mode default with light mode toggle
- Font: Inter (sans), Libre Baskerville (serif), JetBrains Mono (mono)

## User Preferences
- Healthcare/medical practice branding
- PracticeClaw brand with "AI that works" tagline
- Keragon MCP integration focus
- HIPAA compliance messaging
