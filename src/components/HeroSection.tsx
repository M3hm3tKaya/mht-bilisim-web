'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useDictionary } from '@/lib/DictionaryProvider';

export default function HeroSection() {
  const { dict, locale } = useDictionary();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements — hidden on mobile via CSS for performance */}
      <div className="absolute inset-0">
        {/* Gradient orbs — heavy blur, desktop only */}
        <div
          className="hero-orb absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px]"
        />
        <div
          className="hero-orb absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-blue/15 rounded-full blur-[120px]"
        />

        {/* Grid pattern — desktop only */}
        <div className="absolute inset-0 grid-bg opacity-50" />

        {/* Floating geometric shapes — desktop only */}
        <motion.div
          className="hero-shape absolute top-[20%] right-[15%] w-20 h-20 border border-accent-purple/20 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="hero-shape absolute bottom-[30%] left-[10%] w-14 h-14 border border-accent-blue/20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            <span className="text-xs text-gray-300 font-medium">{dict.hero.badge}</span>
          </div>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {dict.hero.title1}{' '}
          <span className="gradient-text">{dict.hero.titleHighlight}</span>
          <br />
          {dict.hero.title2}
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://wa.me/905535872263"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-accent-purple/20"
          >
            {dict.hero.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href={`/${locale}/hizmetler`}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/5 transition-all"
          >
            {dict.hero.servicesLink}
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
