import type { Metadata } from 'next';
import ContactCard from '@/components/ContactCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'MHT Bilişim ile iletişime geçin. WhatsApp üzerinden projeniz hakkında ücretsiz danışmanlık alın.',
  openGraph: {
    title: 'İletişim | MHT Bilişim',
    description:
      'MHT Bilişim ile iletişime geçin. WhatsApp üzerinden projeniz hakkında ücretsiz danışmanlık alın.',
  },
};

export default function IletisimPage() {
  return (
    <>
      {/* Page header spacing */}
      <div className="pt-16" />
      <ContactCard />
      <CTASection />
    </>
  );
}
