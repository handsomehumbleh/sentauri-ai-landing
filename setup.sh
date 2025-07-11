#!/bin/bash

# Setup script for Sentauri AI Landing Page
# This script creates all necessary directories and placeholder files

echo "🚀 Setting up Sentauri AI Landing Page structure..."

# Create directories
mkdir -p components
mkdir -p context
mkdir -p lib/integrations
mkdir -p app/api/contact
mkdir -p public

# Create component files
touch components/Header.tsx
touch components/Hero.tsx
touch components/Services.tsx
touch components/Process.tsx
touch components/Testimonials.tsx
touch components/Grants.tsx
touch components/About.tsx
touch components/Resources.tsx
touch components/Contact.tsx
touch components/Footer.tsx
touch components/TrustBanner.tsx
touch components/CookieBanner.tsx
touch components/ExitIntent.tsx
touch components/CountUp.tsx

# Create context files
touch context/LanguageContext.tsx

# Create integration files
touch lib/integrations/twilio.ts
touch lib/integrations/email.ts
touch lib/integrations/crm.ts
touch lib/integrations/pdf.ts
touch lib/integrations/calendar.ts
touch lib/integrations/webhooks.ts

# Create API route
touch app/api/contact/route.ts

echo "✅ Directory structure created!"
echo ""
echo "📝 Next steps:"
echo "1. Copy the component code from the artifact into the respective files"
echo "2. Install dependencies: npm install"
echo "3. Set up your .env.local file with API keys"
echo "4. Run the development server: npm run dev"
echo ""
echo "🔗 Repository: https://github.com/handsomehumbleh/sentauri-ai-landing"