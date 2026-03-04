import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';

const heading = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
});

const body = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MHT Bilişim | İşletmenizi Dijitale Taşıyoruz',
    template: '%s | MHT Bilişim',
  },
  description:
    'MHT Bilişim — İşletmeler için profesyonel web sitesi tasarımı, site modernleştirme ve SaaS ürün geliştirme hizmetleri. Hızlı, modern ve etkili çözümler.',
  keywords: [
    'web sitesi tasarımı',
    'web geliştirme',
    'SaaS geliştirme',
    'site modernleştirme',
    'İstanbul web tasarım',
    'kurumsal web sitesi',
    'MHT Bilişim',
  ],
  authors: [{ name: 'MHT Bilişim' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'MHT Bilişim',
    title: 'MHT Bilişim | İşletmenizi Dijitale Taşıyoruz',
    description:
      'İşletmeler için profesyonel web sitesi tasarımı, site modernleştirme ve SaaS ürün geliştirme hizmetleri.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MHT Bilişim | İşletmenizi Dijitale Taşıyoruz',
    description:
      'İşletmeler için profesyonel web sitesi tasarımı, site modernleştirme ve SaaS ürün geliştirme hizmetleri.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${heading.variable} ${body.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased bg-dark text-gray-200 min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
