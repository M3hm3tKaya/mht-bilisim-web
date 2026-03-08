import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import CTASection from '@/components/CTASection';
import ServicesPageContent from '@/components/ServicesPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
    openGraph: {
      title: dict.metadata.services.ogTitle,
      description: dict.metadata.services.ogDescription,
    },
  };
}

export default function HizmetlerPage() {
  return (
    <>
      <ServicesPageContent />
      <CTASection />
    </>
  );
}
