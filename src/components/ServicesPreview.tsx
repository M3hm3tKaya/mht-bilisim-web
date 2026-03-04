'use client';

import { motion } from 'framer-motion';
import { Globe, RefreshCw, Layers } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Globe,
    title: 'Web Sitesi Tasarımı',
    description: 'İşletmeniz için hızlı, modern ve mobil uyumlu web siteleri tasarlıyoruz. 48 saat içinde yayında.',
    href: '/hizmetler#web-tasarim',
    gradient: 'from-purple-500/10 to-blue-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: RefreshCw,
    title: 'Site Modernleştirme',
    description: 'Eski ve yavaş sitenizi modern teknolojilerle baştan tasarlıyoruz. Performans ve görünüm garantili.',
    href: '/hizmetler#modernlestirme',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Layers,
    title: 'SaaS Geliştirme',
    description: 'Fikrinizi ölçeklenebilir bir SaaS ürüne dönüştürüyoruz. MVP\'den büyümeye kadar yanınızdayız.',
    href: '/hizmetler#saas',
    gradient: 'from-cyan-500/10 to-emerald-500/10',
    iconColor: 'text-cyan-400',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Neler <span className="gradient-text">Yapıyoruz?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            İşletmelerin dijitaldeki varlığını güçlendiren üç temel hizmetimiz
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.15}>
              <Link href={service.href}>
                <motion.div
                  className="group relative gradient-border p-8 h-full cursor-pointer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                      <service.icon size={24} className={service.iconColor} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
                      Detaylı Bilgi
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
