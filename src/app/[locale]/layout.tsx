import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import '../globals.css';
/* i18n layout — TR/EN */
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import { DictionaryProvider } from '@/lib/DictionaryProvider';
import { getDictionary } from '@/lib/dictionaries';
import { locales, type Locale } from '@/lib/i18n';

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: {
      default: dict.metadata.home.title,
      template: '%s | MHT Bilişim',
    },
    description: dict.metadata.home.description,
    keywords:
      locale === 'tr'
        ? [
            'web sitesi tasarımı',
            'web geliştirme',
            'SaaS geliştirme',
            'site modernleştirme',
            'İstanbul web tasarım',
            'kurumsal web sitesi',
            'MHT Bilişim',
          ]
        : [
            'website design',
            'web development',
            'SaaS development',
            'site modernization',
            'Istanbul web design',
            'corporate website',
            'MHT Bilişim',
          ],
    authors: [{ name: 'MHT Bilişim' }],
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      siteName: 'MHT Bilişim',
      title: dict.metadata.home.ogTitle,
      description: dict.metadata.home.ogDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.home.ogTitle,
      description: dict.metadata.home.ogDescription,
    },
    alternates: {
      languages: {
        tr: '/tr',
        en: '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${heading.variable} ${body.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased bg-dark text-gray-200 min-h-screen">
        <DictionaryProvider dictionary={dict} locale={locale as Locale}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </DictionaryProvider>
      </body>
    </html>
  );
}
