import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site-config';
import { Toaster } from '@/components/ui/toast';

const siteTitle = 'Bandi — Zero commission rides launching August 15';
const siteDescription =
  'Bandi is launching August 15 with zero ride commission, one month free subscription for approved drivers, no surge for riders, direct driver payment, verified bike, auto and cab rides, live tracking and safety tools.';
const siteUrl = siteConfig.siteUrl;
const previewImage = '/bandi-app-icon.png';

export const metadata: Metadata = {
  applicationName: siteConfig.brandName,
  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteDescription,
  generator: 'Bandi',
  metadataBase: new URL(siteUrl),
  keywords: [
    'Bandi',
    'Bandi Mobility',
    'ride booking app',
    'bike taxi app',
    'auto booking app',
    'cab booking app',
    'driver first mobility',
    'August 15 launch',
    'one month free driver subscription',
    'no surge rides',
    'zero commission rides',
    'direct driver payment',
    'verified drivers',
    'live ride tracking',
    'ride safety app',
    'India mobility app',
  ],
  authors: [{ name: siteConfig.companyName, url: siteUrl }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  category: 'transportation',
  alternates: {
    canonical: '/',
    languages: {
      en: '/?lang=en',
      hi: '/?lang=hi',
      te: '/?lang=te',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: siteConfig.brandName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: previewImage,
        width: 1024,
        height: 1024,
        alt: `${siteConfig.brandName} app icon`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [previewImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(siteConfig.iosAppId
    ? {
        appleWebApp: {
          capable: true,
          title: siteConfig.brandName,
          statusBarStyle: 'default' as const,
        },
        itunes: {
          appId: siteConfig.iosAppId,
        },
      }
    : {}),
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteConfig.companyName,
        alternateName: siteConfig.brandName,
        url: siteUrl,
        logo: `${siteUrl}/bandi-logo.png`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: siteConfig.address,
        sameAs: [siteConfig.iosAppUrl, siteConfig.androidAppUrl].filter(
          Boolean,
        ),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: siteConfig.brandName,
        url: siteUrl,
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: ['en', 'hi', 'te'],
      },
      {
        '@type': 'MobileApplication',
        name: siteConfig.brandName,
        applicationCategory: 'TravelApplication',
        operatingSystem: 'iOS, Android',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="en" className="bg-slate-50">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Toaster />
      </body>
    </html>
  );
}
