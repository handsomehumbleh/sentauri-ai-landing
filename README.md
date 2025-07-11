# Sentauri AI Solutions Landing Page

🚀 A sophisticated, high-converting landing page for an AI consulting firm built with Next.js 14+, Tailwind CSS, and enterprise-grade integrations.

![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Core Technologies
- **Next.js 14+** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth, professional animations
- **React Hook Form + Zod** for robust form validation

### Key Components
- 🎯 **Conversion-Optimized Hero** with animated metrics
- 💼 **Services Showcase** with hover effects and CTAs
- 📊 **Interactive Process Timeline**
- ⭐ **Client Testimonials** with ratings
- 💰 **Grant Information** (SR&ED, IRAP, Mitacs)
- 📝 **Advanced Contact Form** with multi-step validation
- 🍪 **GDPR-Compliant Cookie Banner**
- 🚪 **Exit-Intent Popup** for lead capture

### Integrations
- 📱 **Twilio** - SMS notifications for bookings
- 📧 **Resend** - Transactional email with templates
- 🗂️ **CRM Integration** - Lead management
- 📄 **PDF Generation** - Automated proposals
- 📅 **Calendar Integration** - Scheduling automation
- 🔗 **Webhooks** - Event-driven workflows

### Performance & SEO
- 📱 Mobile-first responsive design
- ⚡ 95+ Lighthouse scores
- 🔍 SEO optimized with meta tags and structured data
- ♿ WCAG AA accessibility compliant
- 🔒 Security headers configured
- 🌐 Bilingual support (EN/FR)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/handsomehumbleh/sentauri-ai-landing.git
cd sentauri-ai-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` file with your API keys

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
sentauri-ai-landing/
├── app/
│   ├── api/
│   │   └── contact/        # Form submission endpoint
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Process.tsx         # Process timeline
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Grants.tsx          # Funding information
│   ├── About.tsx           # Company information
│   ├── Resources.tsx       # Downloadable resources
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Site footer
│   ├── CookieBanner.tsx    # Cookie consent
│   └── ExitIntent.tsx      # Exit popup
├── context/
│   └── LanguageContext.tsx # i18n context
├── lib/
│   └── integrations/       # Third-party integrations
│       ├── twilio.ts       # SMS functionality
│       ├── email.ts        # Email templates
│       ├── crm.ts          # CRM integration
│       ├── pdf.ts          # PDF generation
│       └── calendar.ts     # Calendar integration
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 🔧 Configuration

### Deployment

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted with Docker

## 📊 Workflow Automation

The contact form submission triggers the following automated workflow:

1. **CRM Entry Creation** - Lead is added to your CRM
2. **SMS Confirmation** - Instant SMS via Twilio (if phone provided)
3. **Email Confirmation** - Branded email with PDF attachment
4. **Webhook Notifications** - Trigger external automations
5. **Calendar Event** - Automatic scheduling for follow-up
6. **Lead Scoring** - Qualify leads based on form data

## 🔒 Security Features

- HTTPS enforced
- Security headers configured
- Input validation and sanitization
- CSRF protection
- Rate limiting ready
- Environment variable protection

## 📈 Analytics & Tracking

- Google Analytics 4 ready
- Google Tag Manager support
- Conversion tracking
- Custom event tracking
- Performance monitoring

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

For support, email support@sentauri.com or open an issue in this repository.

---

⭐ If you find this project useful, please consider giving it a star!