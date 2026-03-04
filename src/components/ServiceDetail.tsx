'use client';

import { motion } from 'framer-motion';
import { Globe, RefreshCw, Layers, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const iconMap = {
  globe: Globe,
  refresh: RefreshCw,
  layers: Layers,
};

interface ServiceDetailProps {
  id: string;
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
  features: string[];
  process?: string[];
  gradient: string;
  iconColor: string;
  reverse?: boolean;
}

export default function ServiceDetail({
  id,
  iconName,
  title,
  description,
  features,
  process,
  gradient,
  iconColor,
  reverse = false,
}: ServiceDetailProps) {
  const Icon = iconMap[iconName];

  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
          {/* Content */}
          <AnimatedSection direction={reverse ? 'right' : 'left'} className={reverse ? 'lg:order-2' : ''}>
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}>
              <Icon size={28} className={iconColor} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection direction={reverse ? 'left' : 'right'} className={reverse ? 'lg:order-1' : ''}>
            <div className="relative">
              <div className="gradient-border p-8 md:p-12">
                {process ? (
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold gradient-text">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">{step}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 border border-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <Icon size={48} className={`${iconColor} mx-auto mb-4 opacity-50`} />
                      <p className="text-gray-500 text-sm">Görsel alanı</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl blur-[60px] opacity-20 -z-10`} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
