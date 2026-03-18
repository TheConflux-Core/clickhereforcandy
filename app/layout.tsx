import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/data/constants';
import { categories } from '@/lib/data/categories';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Your Guide to the Best Candy & Sweets`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Your Guide to the Best Candy & Sweets`,
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Your Guide to the Best Candy & Sweets`,
    description: SITE_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = categories.map(cat => ({
    label: cat.title,
    path: `/${cat.slug}`
  }));

  return (
    <html lang="en">
      <body className="antialiased">
        <Header navItems={navItems} />
        <main className="pt-20">
          {children}
        </main>
        <Footer navItems={navItems} />
      </body>
    </html>
  );
}
