import { siteConfig } from './metadata';

export interface StructuredDataProps {
  type: 'organization' | 'website' | 'breadcrumb' | 'article' | 'localBusiness';
  data?: any;
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/images/logo/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      // Add your actual address details
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      // Add your social media URLs
      'https://facebook.com/chokhiyatra',
      'https://twitter.com/chokhiyatra',
      'https://instagram.com/chokhiyatra',
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateTouristDestinationSchema(destination: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    image: destination.image,
    url: destination.url,
  };
}

export function generateTouristTripSchema(trip: {
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: trip.name,
    description: trip.description,
    offers: {
      '@type': 'Offer',
      price: trip.price,
      priceCurrency: trip.currency,
      availability: 'https://schema.org/InStock',
    },
    itinerary: {
      '@type': 'ItemList',
      name: trip.name,
      description: trip.description,
    },
    image: trip.image,
    duration: trip.duration,
  };
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let schema;

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema();
      break;
    case 'website':
      schema = generateWebsiteSchema();
      break;
    case 'breadcrumb':
      schema = generateBreadcrumbSchema(data);
      break;
    default:
      schema = data;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}