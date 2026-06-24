import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Bandi — Fair rides for Hyderabad',
  description:
    'Bandi is a Hyderabad-first mobility platform for bikes, autos and cars. Riders get live tracking and locked fares. Drivers keep 100% of ride fare.',
  generator: 'Bandi',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bandi.app'),
  openGraph: {
    title: 'Bandi — Ride fair. Let drivers earn.',
    description:
      'Hyderabad-first bike, auto and car ride platform by ' + siteConfig.companyName,
    images: ['/bandi-app-icon.png'],
  },
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
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-slate-50">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
