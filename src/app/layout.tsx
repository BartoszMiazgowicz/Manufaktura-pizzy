import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntroAnimation from '@/components/IntroAnimation';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manufaktura Pizzy | Autentyczna Pizza Neapolitanska | Zielona Gora',
  description:
    'Najlepsza pizza neapolitanska w Zielonej Gorze. Certyfikat AVPN, piec z Neapolu, pieczenie w 500°C przez 60 sekund. Zamow online lub odwiedz nas!',
  keywords: [
    'pizza neapolitanska',
    'pizzeria zielona gora',
    'manufaktura pizzy',
    'AVPN',
    'pizza na dowoz',
    'wloska pizza',
  ],
  authors: [{ name: 'Manufaktura Pizzy' }],
  openGraph: {
    title: 'Manufaktura Pizzy | Autentyczna Pizza Neapolitanska',
    description:
      'Najlepsza pizza neapolitanska w Zielonej Gorze. Certyfikat AVPN.',
    url: 'https://manufakturapizzy.pl',
    siteName: 'Manufaktura Pizzy',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <IntroAnimation />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
