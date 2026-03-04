'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'İhtiyaç Analizi',
    description: 'Projenizin kapsamını, hedef kitlenizi ve ihtiyaçlarınızı birlikte belirliyoruz.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Tasarım',
    description: 'Markanıza uygun, modern ve kullanıcı dostu arayüz tasarımı oluşturuyoruz.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Geliştirme',
    description: 'Son teknolojilerle hızlı, güvenli ve ölçeklenebilir yazılım geliştiriyoruz.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Yayına Alma',
    description: 'Projenizi test edip canlıya alıyor, eğitim ve destek sağlıyoruz.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Nasıl <span className="gradient-text">Çalışırız?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fikir aşamasından yayına almaya kadar dört basit adım
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden md:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent-purple/30 via-accent-blue/30 to-accent-purple/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="text-center relative">
                  {/* Step circle */}
                  <motion.div
                    className="relative mx-auto w-20 h-20 rounded-2xl bg-dark-100 border border-white/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(108, 92, 231, 0.5)' }}
                  >
                    <step.icon size={28} className="text-accent-blue" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">{step.number}</span>
                    </div>
                  </motion.div>

                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
