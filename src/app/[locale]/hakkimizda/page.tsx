import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import TechStack from '@/components/TechStack';
import CTASection from '@/components/CTASection';
import AnimatedSection from '@/components/AnimatedSection';
import ValuesSection from '@/components/ValuesSection';
import AboutContent from '@/components/AboutContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
    openGraph: {
      title: dict.metadata.about.ogTitle,
      description: dict.metadata.about.ogDescription,
    },
  };
}

export default function HakkimizdaPage() {
  return (
    <>
      <AboutContent />
      <ValuesSection />
      <TechStack />
      <CTASection />
    </>
  );
}
