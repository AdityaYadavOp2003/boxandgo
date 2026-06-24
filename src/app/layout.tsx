import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCallBar from '@/components/layout/MobileCallBar';
import ClientOverlays from '@/components/layout/ClientOverlays';
import MotionProvider from '@/components/providers/MotionProvider';
import { generateLocalBusinessSchema } from '@/lib/schema';


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Box & Go Movers - India\'s Trusted Packers & Movers',
    default: 'Box & Go Movers - India\'s Trusted Packers & Movers | Safe & Affordable Moving',
  },
  description:
    'Box & Go Movers – India\'s trusted packers and movers. Safe, affordable & professional household shifting, office relocation, bike transport, and warehousing services across Nagpur, Mumbai, Pune, Hyderabad & Bangalore.',
  keywords: [
    'packers and movers',
    'movers and packers',
    'household shifting',
    'office relocation',
    'bike transport',
    'bike shifting',
    'motorcycle transportation',
    'warehousing',
    'Nagpur movers',
    'Mumbai packers',
    'Pune movers',
    'Hyderabad packers and movers',
    'Bangalore movers',
    'Box and Go Movers',
    'safe moving services India',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://boxandgomovers.in',
    siteName: 'Box & Go Movers',
    title: 'Box & Go Movers - India\'s Trusted Packers & Movers',
    description:
      'Safe, affordable & professional moving services across India. Household shifting, office relocation, bike transport & warehousing.',
    images: [
      {
        url: 'https://boxandgomovers.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Box & Go Movers - Trusted Packers & Movers in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Box & Go Movers - India\'s Trusted Packers & Movers',
    description:
      'Safe, affordable & professional moving services across India.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://boxandgomovers.in'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <MotionProvider>
          <Header />
          <main className="flex-1 w-full min-w-0 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
            {children}
          </main>
          <Footer />
          <ClientOverlays />
          <MobileCallBar />
        </MotionProvider>
      </body>
    </html>
  );
}
