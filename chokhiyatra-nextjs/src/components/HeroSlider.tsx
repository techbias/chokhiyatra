import React from 'react';
import { getHeroSlides } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity';
import HeroSliderClient from './HeroSliderClient';

export default async function HeroSlider() {
  const slides = await getHeroSlides();

  // Transform slides with image URLs
  const slidesWithUrls = slides.map((slide: any) => ({
    _key: slide._key,
    imageUrl: slide.image?.asset?._ref
      ? urlFor(slide.image).width(1920).height(700).url()
      : '/assets/images/banner/banner-two-bg.jpg',
    alt: slide.alt || 'Banner',
  }));

  // If no slides, use default
  if (slidesWithUrls.length === 0) {
    slidesWithUrls.push({
      _key: 'default',
      imageUrl: '/assets/images/banner/banner-two-bg.jpg',
      alt: 'Default Banner',
    });
  }

  return <HeroSliderClient slides={slidesWithUrls} />;
}
