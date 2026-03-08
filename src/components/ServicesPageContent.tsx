'use client';

import AnimatedSection from './AnimatedSection';
import ServiceDetail from './ServiceDetail';
import { useDictionary } from '@/lib/DictionaryProvider';

export default function ServicesPageContent() {
  const { dict } = useDictionary();

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="gradient-text">{dict.servicesPage.pageTitle}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {dict.servicesPage.pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Web Site Tasarımı */}
      <ServiceDetail
        id="web-tasarim"
        iconName="globe"
        title={dict.servicesPage.webDesign.title}
        description={dict.servicesPage.webDesign.description}
        features={dict.servicesPage.webDesign.features}
        process={dict.servicesPage.webDesign.process}
        gradient="from-purple-500/10 to-blue-500/10"
        iconColor="text-purple-400"
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Site Modernleştirme */}
      <ServiceDetail
        id="modernlestirme"
        iconName="refresh"
        title={dict.servicesPage.modernization.title}
        description={dict.servicesPage.modernization.description}
        features={dict.servicesPage.modernization.features}
        process={dict.servicesPage.modernization.process}
        gradient="from-blue-500/10 to-cyan-500/10"
        iconColor="text-blue-400"
        reverse
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* SaaS Geliştirme */}
      <ServiceDetail
        id="saas"
        iconName="layers"
        title={dict.servicesPage.saas.title}
        description={dict.servicesPage.saas.description}
        features={dict.servicesPage.saas.features}
        process={dict.servicesPage.saas.process}
        gradient="from-cyan-500/10 to-emerald-500/10"
        iconColor="text-cyan-400"
      />
    </>
  );
}
