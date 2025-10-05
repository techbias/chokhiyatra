# Sanity CMS Setup Guide

## Prerequisites
- Node.js installed
- Sanity account (sign up at https://www.sanity.io/)

## Step 1: Create Sanity Project

1. Visit https://www.sanity.io/manage
2. Click "Create new project"
3. Choose a project name (e.g., "ChokhiYatra")
4. Note down your **Project ID**

## Step 2: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Sanity credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

## Step 3: Install Sanity Studio

```bash
npm create sanity@latest -- --project <your-project-id> --dataset production
```

Or manually:

```bash
npx @sanity/cli init
```

## Step 4: Deploy Sanity Schemas

1. Navigate to your Sanity studio folder
2. Copy the schemas from `sanity/schemas/` to your studio's `schemas/` folder
3. Import schemas in studio's `sanity.config.ts`:

```typescript
import {schemaTypes} from './schemas'

export default defineConfig({
  // ... other config
  schema: {
    types: schemaTypes,
  },
})
```

4. Deploy:
```bash
npm run dev
```

## Step 5: Add Content

Access your Sanity Studio at `http://localhost:3333` and add:

### 1. Hero Slider
- Add 3-5 slide images

### 2. Advance Gallery
- Add 5 images for the horizontal gallery

### 3. Tour Packages
- Create packages
- Mark 3 as "Featured on Homepage"

### 4. Gallery
- Add 6 images for the main gallery slider

### 5. Counter Stats
- Add 4 statistics (e.g., 145 Travel Tales, 74 Journey Bound, etc.)

### 6. Brands
- Add partner brand logos with hover versions

### 7. Flight Partners
- Add airlines with logos and web check-in URLs
- Mark some as "Show on Homepage"

### 8. Testimonials
- Add client testimonials
- Mark some as "Show on Homepage"

### 9. Services
- Add 3 services
- Set order (1, 2, 3)
- Set image position (left/right for alternating layout)

## Step 6: Test the Integration

1. Ensure `.env.local` has correct Sanity credentials
2. Run Next.js dev server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000` to see Sanity data on homepage

## Content Schema Structure

### Hero Slider
```
{
  slides: [
    { image, alt }
  ]
}
```

### Advance Gallery
```
{
  images: [
    { asset, alt }
  ]
}
```

### Tour Packages
```
{
  title, location, description,
  price, duration, rating, reviews,
  image, featured
}
```

### Gallery
```
{
  images: [
    { asset, alt, caption }
  ]
}
```

### Counter Stats
```
{
  stats: [
    { number, label }
  ]
}
```

### Brands
```
{
  name, logo, hoverLogo, order
}
```

### Flight Partners
```
{
  name, logo, webCheckinUrl,
  featured, order
}
```

### Testimonials
```
{
  name, designation, company,
  testimonial, rating, logo, featured
}
```

### Services
```
{
  title, description, image,
  order, imagePosition (left/right)
}
```

## Troubleshooting

### CORS Issues
Add your domain to Sanity CORS settings:
1. Go to https://www.sanity.io/manage
2. Select your project
3. API > CORS Origins
4. Add `http://localhost:3000` and your production domain

### Images Not Loading
- Ensure images are uploaded to Sanity
- Check NEXT_PUBLIC_SANITY_PROJECT_ID is correct
- Verify image fields have `hotspot: true` option

## Next Steps

Once content is added, the homepage will automatically fetch and display:
- Hero slider images
- Advance gallery
- Featured tour packages
- Gallery images
- Counter statistics
- Brand logos
- Flight partners
- Testimonials
- Services with alternating layout
