import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const barlow = Barlow({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

export const metadata = {
  title: 'Option Excavating — Earthworks & Underground Utilities | Western Canada',
  description: 'Earthworks, underground utilities, and civil infrastructure for municipalities, oil & gas, and First Nations communities across Western Canada. Based in Spruce Grove, Alberta.',
  keywords: 'excavating, earthworks, underground utilities, pipeline, HDPE, water sewer, Alberta, Spruce Grove, First Nations, oil gas',
  openGraph: {
    title: 'Option Excavating — Built for Western Canada',
    description: 'Earthworks, underground utilities, and civil infrastructure delivered safely and on spec.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </body>
    </html>
  );
}
