'use client';

import { Globe, RefreshCw, Layers } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { useDictionary } from '@/lib/DictionaryProvider';

const serviceIcons = [Globe, RefreshCw, Layers];
const serviceHrefs = ['hizmetler#web-tasarim', 'hizmetler#modernlestirme', 'hizmetler#saas'];
const serviceGradients = [
  'from-purple-500/10 to-blue-500/10',
  'from-blue-500/10 to-cyan-500/10',
  'from-cyan-500/10 to-emerald-500/10',
];
const serviceIconColors = ['text-purple-400', 'text-blue-400', 'text-cyan-400'];

export default function ServicesPreview() {
  const { dict, locale } = useDictionary();

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {dict.servicesPreview.title} <span className="gradient-text">{dict.servicesPreview.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {dict.servicesPreview.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.servicesPreview.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link href={`/${locale}/${serviceHrefs[index]}`}>
                  <div className="group relative gradient-border p-8 h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${serviceGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${serviceGradients[index]} flex items-center justify-center mb-6`}>
                        <Icon size={24} className={serviceIconColors[index]} />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
                        {dict.servicesPreview.detailLink}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
