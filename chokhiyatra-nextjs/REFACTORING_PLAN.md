# Server Components Refactoring Plan

## Goal
Convert all Sanity data-fetching components from Client Components (useEffect) to Server Components for better SEO and performance.

## Benefits
1. **SEO**: Data is rendered server-side, visible to search engines
2. **Performance**: Faster initial page load
3. **Progressive Rendering**: Use Suspense for lazy loading below-the-fold content

## Structure
```
Component (Server) -> Fetches Data -> Passes to Client Component (if interactivity needed)
```

## Components to Refactor
- [x] HeroSlider -> HeroSlider (Server) + HeroSliderClient
- [ ] TourPackages -> Server Component
- [ ] AdvanceGallery -> Server Component  
- [ ] CounterStats -> Server Component (needs client for counter animation)
- [ ] HotelPartners -> Server Component
- [ ] FlightPartners -> Server Component

## Implementation Pattern

### For Static Content (no interactivity):
```tsx
// TourPackages.tsx (Server Component)
import { getFeaturedTourPackages } from '@/lib/sanity-queries';

export default async function TourPackages() {
  const packages = await getFeaturedTourPackages();
  return <div>... render packages ...</div>
}
```

### For Interactive Content (Swiper, Animations):
```tsx
// HeroSlider.tsx (Server Component - fetches data)
export default async function HeroSlider() {
  const slides = await getHeroSlides();
  return <HeroSliderClient slides={slides} />;
}

// HeroSliderClient.tsx (Client Component - handles Swiper)
'use client';
export default function HeroSliderClient({ slides }) {
  // Swiper initialization
}
```

### Lazy Loading with Suspense
```tsx
<Suspense fallback={<SectionSkeleton />}>
  <CounterStats />
</Suspense>
```

## Priority Sections (Load First)
1. Hero Slider
2. Search Form
3. Advance Gallery

## Lazy Load (Below Fold)
1. Tour Packages
2. Counter Stats
3. Hotel/Flight Partners
4. Testimonials
