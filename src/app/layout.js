import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { SITE } from '@/data/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingQuote from '@/components/FloatingQuote';

const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#001b47',
};

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Option Excavating Inc. | Civil Construction & Underground Utilities | Western Canada',
    template: '%s | Option Excavating Inc.',
  },
  description: SITE.blurb,
  keywords: [
    'excavating',
    'civil construction',
    'underground utilities',
    'water main',
    'sanitary sewer',
    'storm sewer',
    'horizontal directional drilling',
    'HDD',
    'Spruce Grove',
    'Edmonton',
    'Parkland County',
    'Western Canada',
  ],
  icons: { icon: '/media/2026/03/favicon-03.png' },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Option Excavating Inc. | Built for Western Canada',
    description: 'Civil construction and underground infrastructure delivered safely, accurately, and on schedule across Western Canada.',
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    locale: 'en_CA',
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Option Excavating civil construction site' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Option Excavating Inc. | Built for Western Canada',
    description: 'Civil construction and underground infrastructure across Western Canada.',
    images: [SITE.ogImage],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: SITE.name,
  description: SITE.blurb,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}${SITE.ogImage}`,
  address: {
    '@type': 'PostalAddress',
    postOfficeBoxNumber: 'PO Box 5208',
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postal,
    addressCountry: SITE.address.country,
  },
  areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
  sameAs: [SITE.social.youtube, SITE.social.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingQuote />
      </body>
    </html>
  );
}
