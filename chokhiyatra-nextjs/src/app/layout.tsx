import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/structured-data';
import '@/app/globals.css';
import '/public/preloader-fix.css';

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/logo/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/images/logo/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-neutral-50">
        {children}
      </body>
    </html>
  );
}