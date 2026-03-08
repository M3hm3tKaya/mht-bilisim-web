'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useDictionary } from '@/lib/DictionaryProvider';

export default function CTASection() {
  const { dict } = useDictionary();

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20" />
            <div className="absolute inset-0 bg-dark-100/80 backdrop-blur-sm" />

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 bg-accent-purple/10 rounded-full blur-[80px]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-blue/10 rounded-full blur-[80px]"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative z-10 px-8 py-16 md:py-20 text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {dict.cta.title} <span className="gradient-text">{dict.cta.titleHighlight}</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
                {dict.cta.subtitle}
              </p>
              <a
                href="https://wa.me/905535872263"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-semibold rounded-2xl hover:bg-whatsapp/90 transition-all shadow-lg shadow-whatsapp/20"
              >
                <MessageCircle size={20} />
                {dict.cta.button}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
