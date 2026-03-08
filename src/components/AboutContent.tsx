'use client';

import AnimatedSection from './AnimatedSection';
import { useDictionary } from '@/lib/DictionaryProvider';

export default function AboutContent() {
  const { dict } = useDictionary();

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="gradient-text">{dict.about.pageTitle}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {dict.about.pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                {dict.about.whoTitle} <span className="gradient-text">{dict.about.whoHighlight}</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                {dict.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="gradient-border p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">48</div>
                    <p className="text-gray-500 text-sm">{dict.about.statsDelivery}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">%100</div>
                    <p className="text-gray-500 text-sm">{dict.about.statsMobile}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">7/24</div>
                    <p className="text-gray-500 text-sm">{dict.about.statsSupport}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">95+</div>
                    <p className="text-gray-500 text-sm">{dict.about.statsPerformance}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
