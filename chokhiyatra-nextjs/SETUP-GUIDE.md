# ChokhiYatra Next.js Setup Guide

## 🎯 Quick Start

### Step 1: Install Dependencies

Due to potential SSL issues on Windows, use one of these commands:

```bash
npm install --legacy-peer-deps
```

Or if that fails:
```bash
npm config set strict-ssl false
npm install
npm config set strict-ssl true
```

### Step 2: Create Environment File

```bash
copy .env.example .env.local
```

Edit `.env.local` and update the `SITE_URL` to your actual domain.

### Step 3: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## ✅ What's Been Converted

### Pages Created:
- ✅ **Home** - `src/app/page.tsx` (index.html)
- ✅ **About** - `src/app/about/page.tsx` (about.html)
- ✅ **Contact** - `src/app/contact/page.tsx` (contact.html)
- ✅ **Destinations** - `src/app/destination/page.tsx` (destination.html)
- ✅ **Gallery** - `src/app/gallery/page.tsx` (gallary.html)
- ✅ **FAQ** - `src/app/faq/page.tsx` (faq.html)

### Components Created:
- ✅ **Header** - `src/components/Header.tsx` (Navigation)
- ✅ **Footer** - `src/components/Footer.tsx` (Footer with links)
- ✅ **Preloader** - `src/components/Preloader.tsx` (Loading animation)
- ✅ **SearchPopup** - `src/components/SearchPopup.tsx` (Search modal)
- ✅ **Scripts** - `src/components/Scripts.tsx` (JS library loader)

### SEO Features:
- ✅ **Metadata Utility** - `src/lib/metadata.ts`
- ✅ **Structured Data** - `src/lib/structured-data.ts`
- ✅ **Sitemap Config** - `next-sitemap.config.js`
- ✅ **Next.js Config** - `next.config.js` (Image optimization)

## 🔧 Configuration Steps

### 1. Update Site Information

Edit `src/lib/metadata.ts`:

```typescript
export const siteConfig = {
  name: 'ChokhiYatra',
  title: 'ChokhiYatra - Time to Wing It',
  description: 'YOUR ACTUAL DESCRIPTION',
  url: 'https://your-actual-domain.com',
  twitterHandle: '@your_handle',
  // ... update other fields
};
```

### 2. Add Contact Information

Edit `src/lib/structured-data.ts`:

```typescript
contactPoint: {
  '@type': 'ContactPoint',
  telephone: '+91-YOUR-PHONE-NUMBER',
  // ... update contact info
}
```

### 3. Add Social Media Links

Update social media URLs in:
- `src/lib/structured-data.ts` (sameAs array)
- `src/components/Footer.tsx` (social icons)

### 4. Google Search Console

After deployment, add verification code in `src/lib/metadata.ts`:

```typescript
verification: {
  google: 'your-google-verification-code-here',
}
```

## 🎨 Customization

### Changing Colors

Edit `public/assets/css/main.css` for custom styles.

### Adding New Sections

All page content is in `src/app/*/page.tsx` files. You can edit these files to:
- Update text content
- Change images (in `public/assets/images/`)
- Modify layouts
- Add new sections

### Image Optimization

Replace images in `public/assets/images/` with optimized versions:
- Use WebP format for better compression
- Recommended sizes: 1920px width for hero images
- Use TinyPNG or similar tools to compress

## 📱 Route Structure

Your Next.js routes:
- `/` → Home page
- `/about` → About page
- `/contact` → Contact page
- `/destination` → Destinations listing
- `/gallery` → Photo gallery
- `/faq` → FAQ page

## 🚀 Building for Production

### Build Command
```bash
npm run build
```

This will:
1. Build optimized production bundle
2. Generate sitemap.xml
3. Generate robots.txt
4. Optimize images and assets

### Test Production Build Locally
```bash
npm run build
npm start
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy

**Environment Variables to add on Vercel:**
- `SITE_URL` = `https://your-domain.com`
- `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`

### Option 2: Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

### Option 3: Self-Hosted (VPS/Dedicated Server)

```bash
# On your server
git clone your-repo
cd chokhiyatra-nextjs
npm install --production
npm run build
npm start

# Or use PM2
pm2 start npm --name "chokhiyatra" -- start
```

## 🔍 SEO Checklist After Deployment

- [ ] Submit sitemap to Google Search Console: `https://your-domain.com/sitemap.xml`
- [ ] Verify site ownership in Google Search Console
- [ ] Check robots.txt: `https://your-domain.com/robots.txt`
- [ ] Test Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Set up Google Analytics (optional)
- [ ] Add schema.org structured data testing

## 📊 Performance Optimization Tips

1. **Images**: Already optimized with next/image
2. **Scripts**: Loaded with optimal strategy
3. **CSS**: Consider removing unused Bootstrap styles
4. **Fonts**: Add font preloading if using custom fonts
5. **Analytics**: Use Next.js built-in analytics

## 🐛 Common Issues

### Issue: npm install fails with SSL error

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Issue: Images not loading

**Solution:**
- Check image paths start with `/assets/...`
- Ensure images exist in `public/assets/images/`

### Issue: Scripts not working

**Solution:**
- Check browser console for errors
- Ensure all JS files are in `public/assets/js/`
- Scripts load after page mount (client-side)

### Issue: Build fails

**Solution:**
```bash
rm -rf .next node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

## 📝 Next Steps

1. **Install dependencies** and run dev server
2. **Test all pages** to ensure they load correctly
3. **Update content** with your actual business information
4. **Optimize images** in the public/assets folder
5. **Test forms** on contact page
6. **Add analytics** tracking code
7. **Deploy** to production
8. **Submit sitemap** to search engines

## 📞 Need Help?

If you encounter any issues:
1. Check the main README.md
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Check the browser console for errors

---

**Happy Coding! 🚀**