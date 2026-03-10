import type { Locale } from '@/lib/i18n';

interface JsonLdProps {
  locale: Locale;
}

export default function JsonLd({ locale }: JsonLdProps) {
  const isEn = locale === 'en';

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MHT Bilişim',
    url: 'https://mhtbilisim.com',
    logo: 'https://mhtbilisim.com/favicon.ico',
    description: isEn
      ? 'Professional website design, site modernization, and SaaS product development services for businesses.'
      : 'İşletmeler için profesyonel web sitesi tasarımı, site modernleştirme ve SaaS ürün geliştirme hizmetleri.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-553-587-22-63',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    sameAs: [
      'https://wa.me/905535872263',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MHT Bilişim',
    url: 'https://mhtbilisim.com',
    inLanguage: locale === 'tr' ? 'tr-TR' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: `https://mhtbilisim.com/${locale}/hizmetler`,
    },
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MHT Bilişim',
    url: 'https://mhtbilisim.com',
    telephone: '+90-553-587-22-63',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressRegion: 'Istanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082,
      longitude: 28.9784,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    serviceType: isEn
      ? ['Website Design', 'Website Modernization', 'SaaS Development']
      : ['Web Sitesi Tasarımı', 'Site Modernleştirme', 'SaaS Geliştirme'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
