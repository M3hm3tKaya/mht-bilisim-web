'use client';

import { Target, Zap, Shield, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const values = [
  {
    icon: Zap,
    title: 'Hız',
    description: 'Projelerinizi en kısa sürede, kaliteden ödün vermeden teslim ediyoruz.',
    gradient: 'from-yellow-500/10 to-orange-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Target,
    title: 'Kalite',
    description: 'Her projede en güncel teknolojileri ve en iyi pratikleri uyguluyoruz.',
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Shield,
    title: 'Şeffaf İletişim',
    description: 'Süreç boyunca sizi bilgilendirir, şeffaf ve dürüst bir iletişim sürdürürüz.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Heart,
    title: 'Müşteri Memnuniyeti',
    description: 'Başarımızı müşterilerimizin memnuniyetiyle ölçüyoruz. Her projede en iyisini hedefliyoruz.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconColor: 'text-rose-400',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Değerlerimiz</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Her projemizde bu dört temel değeri rehber ediniyoruz
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <div className="gradient-border p-8 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4`}>
                  <value.icon size={24} className={value.iconColor} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
