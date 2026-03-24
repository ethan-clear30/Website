import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://clear30.org'),
  title: {
    default: 'Clear30 - The Weed Break App',
    template: '%s - Clear30',
  },
  description:
    'Improve your relationship with cannabis. Take a 30-day break to reset and get clarity on your use.',
  openGraph: {
    type: 'website',
    siteName: 'Clear30',
    title: 'Clear30 - The Weed Break App',
    description:
      'Improve your relationship with cannabis. Take a 30-day break to reset and get clarity on your use.',
    url: 'https://clear30.org',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clear30 - The Weed Break App',
    description:
      'Improve your relationship with cannabis. Take a 30-day break to reset and get clarity on your use.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://clear30.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
