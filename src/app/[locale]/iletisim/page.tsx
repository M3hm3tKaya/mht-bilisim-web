import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import ContactCard from '@/components/ContactCard';
import CTASection from '@/components/CTASection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
    openGraph: {
      title: dict.metadata.contact.ogTitle,
      description: dict.metadata.contact.ogDescription,
    },
  };
}

export default function IletisimPage() {
  return (
    <>
      <div className="pt-16" />
      <ContactCard />
      <CTASection />
    </>
  );
}
