# ChokhiYatra - Next.js Travel Website

A modern, SEO-optimized travel website built with Next.js 14, TypeScript, and full server-side rendering capabilities.

## 🚀 Features

- ✅ **Next.js 14 App Router** - Modern React framework with server components
- ✅ **TypeScript** - Full type safety
- ✅ **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards
- ✅ **Structured Data** - JSON-LD schema for better search engine understanding
- ✅ **Automatic Sitemap** - Dynamic sitemap.xml generation
- ✅ **Image Optimization** - Next.js Image component with AVIF/WebP support
- ✅ **Performance** - Optimized script loading with Next.js Script component
- ✅ **Responsive Design** - Mobile-first approach with Bootstrap grid
- ✅ **Animations** - GSAP, AOS, Swiper sliders

## 📋 Prerequisites

- Node.js 18+
- npm or yarn or pnpm

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd chokhiyatra-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   If you encounter SSL errors, try:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

   Update the values in `.env.local` with your actual site URL and other configurations.

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
chokhiyatra-nextjs/
├── public/
│   └── assets/          # Static assets (images, CSS, JS)
│       ├── css/
│       ├── js/
│       └── images/
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── destination/page.tsx # Destinations
│   │   ├── faq/page.tsx       # FAQ page
│   │   ├── gallery/page.tsx   # Gallery page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/      # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Preloader.tsx      # Loading animation
│   │   ├── SearchPopup.tsx    # Search modal
│   │   └── Scripts.tsx        # Script loader
│   ├── lib/             # Utility functions
│   │   ├── metadata.ts        # SEO metadata utilities
│   │   └── structured-data.ts # JSON-LD schema helpers
│   └── types/           # TypeScript type definitions
├── next.config.js       # Next.js configuration
├── next-sitemap.config.js # Sitemap configuration
└── tsconfig.json        # TypeScript configuration
```

## 🔧 Configuration

### SEO Configuration

Edit `src/lib/metadata.ts` to customize SEO settings:

```typescript
export const siteConfig = {
  name: 'ChokhiYatra',
  title: 'ChokhiYatra - Time to Wing It',
  description: 'Your description here',
  url: 'https://chokhiyatra.com',
  // ... more settings
};
```

### Sitemap Configuration

Edit `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://chokhiyatra.com',
  generateRobotsTxt: true,
  // ... more settings
};
```

### Image Optimization

The project uses Next.js Image component with automatic optimization. Update `next.config.js` if you need to add external image domains:

```javascript
images: {
  domains: ['example.com'], // Add external domains here
  formats: ['image/avif', 'image/webp'],
}
```

## 📄 Pages

- **Home** (`/`) - Main landing page with hero, destinations, packages
- **About** (`/about`) - Company information and team
- **Destinations** (`/destination`) - Travel destination listings
- **Gallery** (`/gallery`) - Photo gallery
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact form and information

## 🎨 Customization

### Adding a New Page

1. Create a new directory in `src/app/`:
   ```bash
   mkdir src/app/your-page
   ```

2. Create `page.tsx`:
   ```tsx
   import { Metadata } from 'next';
   import { createMetadata } from '@/lib/metadata';
   import Header from '@/components/Header';
   import Footer from '@/components/Footer';
   import Scripts from '@/components/Scripts';

   export const metadata: Metadata = createMetadata({
     title: 'Your Page Title',
     description: 'Your page description',
   });

   export default function YourPage() {
     return (
       <>
         <Header />
         <main>
           {/* Your content */}
         </main>
         <Footer />
         <Scripts />
       </>
     );
   }
   ```

### Adding Structured Data

Use the structured data helpers in `src/lib/structured-data.ts`:

```tsx
import { StructuredData } from '@/lib/structured-data';

// In your page component
<StructuredData
  type="breadcrumb"
  data={[
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]}
/>
```

## 🔍 SEO Features

### Meta Tags
- Complete Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Robots meta tags

### Structured Data (JSON-LD)
- Organization schema
- Website schema
- Breadcrumb schema
- Tourist destination schema
- Tourist trip schema

### Automatic Generation
- `sitemap.xml` - Generated on build
- `robots.txt` - Generated on build

## 📦 Scripts & Libraries

The project includes:
- jQuery 3.7.1
- Bootstrap 5
- GSAP (GreenSock Animation Platform)
- Swiper.js (Sliders)
- AOS (Animate On Scroll)
- WOW.js
- Nice Select
- Counter animations
- And more...

All scripts are loaded optimally using Next.js Script component with appropriate strategies.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's Next.js deployment guide.

## 🌐 Environment Variables

Create a `.env.local` file:

```env
SITE_URL=https://chokhiyatra.com
NEXT_PUBLIC_SITE_URL=https://chokhiyatra.com

# Add other environment variables as needed
```

## 📝 Post-Deployment Checklist

- [ ] Update `SITE_URL` in environment variables
- [ ] Add Google Analytics / Tag Manager
- [ ] Add Google Search Console verification code in `src/lib/metadata.ts`
- [ ] Submit sitemap to Google Search Console
- [ ] Update social media URLs in structured data
- [ ] Add actual contact information
- [ ] Test all pages for responsiveness
- [ ] Test form submissions
- [ ] Optimize images (use WebP/AVIF formats)
- [ ] Set up proper error handling
- [ ] Configure proper CORS headers if needed

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors, try:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Type Errors

Run TypeScript check:
```bash
npx tsc --noEmit
```

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For support, email contact@chokhiyatra.com

---

**Built with ❤️ using Next.js**