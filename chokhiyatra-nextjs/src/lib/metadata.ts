import { Metadata } from 'next';

export const siteConfig = {
  name: 'ChokhiYatra',
  title: 'ChokhiYatra - Time to Wing It',
  description: 'Discover amazing travel destinations and create unforgettable memories with ChokhiYatra. Your trusted partner for exceptional travel experiences.',
  url: 'https://chokhiyatra.com',
  ogImage: '/assets/images/og-image.jpg',
  keywords: [
    'travel',
    'tourism',
    'vacation',
    'destinations',
    'tours',
    'travel packages',
    'adventure',
    'holiday',
    'travel agency',
    'ChokhiYatra'
  ],
  author: 'ChokhiYatra',
  twitterHandle: '@chokhiyatra',
};

export function createMetadata({
  title,
  description,
  image,
  noIndex = false,
  keywords,
  url,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  url?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const pageKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: pageUrl,
    },
    verification: {
      google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}