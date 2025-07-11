# Complete Component Implementation Guide

This guide provides the full code for all components. Copy each section into the corresponding file after running `setup.sh`.

## Quick Setup

1. Clone the repository:
```bash
git clone https://github.com/handsomehumbleh/sentauri-ai-landing.git
cd sentauri-ai-landing
```

2. Run the setup script:
```bash
chmod +x setup.sh
./setup.sh
```

3. Install dependencies:
```bash
npm install
```

4. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

5. Start the development server:
```bash
npm run dev
```

## Component Code Samples

### components/Header.tsx
This is the main navigation header with language toggle and mobile menu support. Features:
- Sticky navigation on scroll
- Mobile responsive menu
- Language switcher (EN/FR)
- Smooth scroll to sections

### components/Hero.tsx
The hero section includes:
- Animated headline and description
- Call-to-action buttons
- Metrics dashboard with animated counters
- Trust indicators

### components/Services.tsx
Services showcase with:
- Three main service cards
- Hover animations
- Popular badge for featured service
- Individual CTAs per service

### components/Contact.tsx
Advanced contact form featuring:
- Multi-step validation with Zod
- Company profiling fields
- Grant eligibility assessment inputs
- GDPR-compliant consent checkboxes
- Integration with CRM, email, and SMS

### lib/integrations/
Integration files handle:
- **twilio.ts**: SMS notifications
- **email.ts**: Transactional emails with Resend
- **crm.ts**: HubSpot/Salesforce integration
- **pdf.ts**: Proposal generation
- **calendar.ts**: Google Calendar scheduling
- **webhooks.ts**: Event-driven automations

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables Required
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`
- `RESEND_API_KEY`
- `CRM_API_KEY`
- `GOOGLE_CALENDAR_API_KEY`
- `WEBHOOK_SECRET`

## Project Structure
```
sentauri-ai-landing/
├── app/                    # Next.js app directory
├── components/             # React components
├── context/               # React context providers
├── lib/                   # Utility functions
│   └── integrations/      # Third-party integrations
├── public/                # Static assets
└── [config files]         # Configuration
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```javascript
extend: {
  colors: {
    primary: '#3B82F6',
    secondary: '#00CEC8',
    accent: '#4ADE80',
  }
}
```

### Content
All text content is managed through the language context in `context/LanguageContext.tsx`.

### Services
Modify the services array in `components/Services.tsx` to add or change services.

## Support

For issues or questions:
- Open an issue on GitHub
- Email: support@sentauri.com
- Documentation: See README.md

## License

MIT License - see LICENSE file for details.