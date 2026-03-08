'use client';

import { Target, Zap, Shield, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useDictionary } from '@/lib/DictionaryProvider';

const valueIcons = [Zap, Target, Shield, Heart];
const valueGradients = [
  'from-yellow-500/10 to-orange-500/10',
  'from-purple-500/10 to-pink-500/10',
  'from-blue-500/10 to-cyan-500/10',
  'from-rose-500/10 to-pink-500/10',
];
const valueIconColors = ['text-yellow-400', 'text-purple-400', 'text-blue-400', 'text-rose-400'];

export default function ValuesSection() {
  const { dict } = useDictionary();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">{dict.values.title}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {dict.values.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dict.values.items.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="gradient-border p-8 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${valueGradients[index]} flex items-center justify-center mb-4`}>
                    <Icon size={24} className={valueIconColors[index]} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
