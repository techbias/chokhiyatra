import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const QUERIES = {
  heroSlider: `*[_type == "heroSlider"][0]{
    slides[]{
      image,
      alt
    }
  }`,

  advanceGallery: `*[_type == "advanceGallery"][0]{
    images[]{
      asset,
      alt
    }
  }`,

  tourPackages: `*[_type == "tourPackage" && featured == true] | order(_createdAt desc)[0...3]{
    _id,
    title,
    location,
    description,
    price,
    duration,
    rating,
    reviews,
    image
  }`,

  gallery: `*[_type == "gallery"][0]{
    images[]{
      asset,
      alt,
      caption
    }
  }`,

  counterStats: `*[_type == "counterStats"][0]{
    stats[]{
      number,
      label
    }
  }`,

  brands: `*[_type == "brand"] | order(order asc){
    _id,
    name,
    logo,
    hoverLogo
  }`,

  flightPartners: `*[_type == "flightPartner" && featured == true] | order(order asc){
    _id,
    name,
    logo,
    webCheckinUrl
  }`,

  testimonials: `*[_type == "testimonial" && featured == true]{
    _id,
    name,
    designation,
    company,
    testimonial,
    rating,
    logo
  }`,

  services: `*[_type == "service"] | order(order asc){
    _id,
    title,
    description,
    image,
    order,
    imagePosition
  }`,
};
