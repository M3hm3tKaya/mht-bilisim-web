import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import StatsCounter from '@/components/StatsCounter';
import ProcessSteps from '@/components/ProcessSteps';
import CTASection from '@/components/CTASection';
import IntroSection from '@/components/IntroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <StatsCounter />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
