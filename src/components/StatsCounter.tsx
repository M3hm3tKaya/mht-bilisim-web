'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Clock, Smartphone, HeadphonesIcon, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useDictionary } from '@/lib/DictionaryProvider';

const statIcons = [Clock, Smartphone, HeadphonesIcon, Zap];
const statValues = [48, 100, 7, 95];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { dict } = useDictionary();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {dict.stats.title} <span className="gradient-text">{dict.stats.titleHighlight}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {dict.stats.items.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="gradient-border p-4 md:p-6 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 md:mb-4 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                    <Icon size={20} className="text-accent-blue" />
                  </div>
                  <div className="font-heading text-2xl md:text-4xl font-bold gradient-text mb-2">
                    <Counter target={statValues[index]} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
