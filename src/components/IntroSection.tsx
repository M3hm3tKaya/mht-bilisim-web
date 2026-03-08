'use client';

import AnimatedSection from './AnimatedSection';
import { useDictionary } from '@/lib/DictionaryProvider';

export default function IntroSection() {
  const { dict } = useDictionary();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-heading">
            <span className="gradient-text font-semibold">{dict.intro.brand}</span>
            {dict.intro.text}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
