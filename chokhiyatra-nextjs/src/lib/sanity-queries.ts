import { sanityClient } from './sanity';

// Hero Slider
export async function getHeroSlides() {
  const data = await sanityClient.fetch(
    `*[_type == "heroSlider"][0]{ slides[]{ _key, image, alt } }`,
    {},
    { next: { revalidate: 60 } } // Revalidate every 60 seconds
  );
  return data?.slides || [];
}

// Tour Packages
export async function getFeaturedTourPackages() {
  const data = await sanityClient.fetch(
    `*[_type == "tourPackage" && featured == true] | order(_createdAt desc)[0...3]{
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
    {},
    { next: { revalidate: 60 } }
  );
  return data || [];
}

// Advance Gallery
export async function getAdvanceGalleryImages() {
  const data = await sanityClient.fetch(
    `*[_type == "advanceGallery"][0]{ images[]{ _key, asset, alt } }`,
    {},
    { next: { revalidate: 60 } }
  );
  return data?.images || [];
}

// Counter Stats
export async function getCounterStats() {
  const data = await sanityClient.fetch(
    `*[_type == "counterStats"][0]{ stats[]{ _key, number, label } }`,
    {},
    { next: { revalidate: 60 } }
  );
  return data?.stats || [];
}

// Hotel Partners (Brands)
export async function getHotelPartners() {
  const data = await sanityClient.fetch(
    `*[_type == "brand"] | order(order asc){
      _id,
      name,
      logo,
      hoverLogo,
      order
    }`,
    {},
    { next: { revalidate: 300 } } // Revalidate every 5 minutes
  );
  return data || [];
}

// Flight Partners
export async function getFlightPartners() {
  const data = await sanityClient.fetch(
    `*[_type == "flightPartner" && featured == true] | order(order asc){
      _id,
      name,
      logo,
      webCheckinUrl,
      order
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data || [];
}

// Services
export async function getServices() {
  const data = await sanityClient.fetch(
    `*[_type == "service"] | order(order asc){
      _id,
      title,
      description,
      features,
      image,
      order,
      imagePosition
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data || [];
}

// Testimonials
export async function getTestimonials() {
  const data = await sanityClient.fetch(
    `*[_type == "testimonial" && featured == true]{
      _id,
      name,
      designation,
      company,
      testimonial,
      rating,
      logo
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data || [];
}

// Gallery
export async function getGalleryImages() {
  const data = await sanityClient.fetch(
    `*[_type == "gallery"][0]{ images[]{ _key, asset, alt, caption } }`,
    {},
    { next: { revalidate: 60 } }
  );
  return data?.images || [];
}

// Destinations (for search dropdown)
export async function getDestinations() {
  const data = await sanityClient.fetch(
    `*[_type == "destination" && featured == true] | order(sortOrder asc, name asc){
      _id,
      name,
      country,
      region,
      slug
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data || [];
}

// Popular Destinations (for homepage slider)
export async function getPopularDestinations() {
  const data = await sanityClient.fetch(
    `*[_type == "destination" && featured == true] | order(sortOrder asc)[0...6]{
      _id,
      name,
      country,
      region,
      image,
      slug,
      listingCount,
      destinationNumber
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data || [];
}
