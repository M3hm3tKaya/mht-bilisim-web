import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import StatsCounter from '@/components/StatsCounter';
import ProcessSteps from '@/components/ProcessSteps';
import CTASection from '@/components/CTASection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Short intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-heading">
              <span className="gradient-text font-semibold">MHT Bilişim</span> olarak, küçük ve orta ölçekli
              işletmelerin dijital dünyada güçlü bir şekilde var olmasını sağlıyoruz.
              Modern tasarım, hızlı teslimat ve sürekli destek ile yanınızdayız.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServicesPreview />
      <StatsCounter />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
