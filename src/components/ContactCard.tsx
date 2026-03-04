'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ContactCard() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Bizimle <span className="gradient-text">İletişime Geçin</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Projeniz hakkında konuşmak için WhatsApp üzerinden bize ulaşın. İlk danışmanlık ücretsizdir.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main WhatsApp CTA */}
          <AnimatedSection>
            <div className="gradient-border p-8 md:p-10 h-full">
              <div className="w-16 h-16 rounded-2xl bg-whatsapp/20 flex items-center justify-center mb-6">
                <MessageCircle size={32} className="text-whatsapp" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-3">
                WhatsApp ile Yazın
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                En hızlı iletişim yolumuz WhatsApp. Projeniz hakkında detaylı bilgi almak, fiyat teklifi istemek veya sadece sohbet etmek için yazın.
              </p>
              <a
                href="https://wa.me/905535872263"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-semibold rounded-2xl hover:bg-whatsapp/90 transition-all shadow-lg shadow-whatsapp/20"
              >
                <MessageCircle size={20} />
                Hemen Yazın
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <div className="mt-8 flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <a
                  href="tel:+905535872263"
                  className="text-sm hover:text-white transition-colors"
                >
                  +90 553 587 22 63
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Info Cards */}
          <div className="space-y-6">
            <AnimatedSection delay={0.15}>
              <motion.div
                className="gradient-border p-6"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Pazartesi – Cumartesi: 09:00 – 20:00
                    </p>
                    <p className="text-gray-500 text-sm">
                      Pazar: Randevu ile
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div
                className="gradient-border p-6"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">
                      Konum
                    </h3>
                    <p className="text-gray-400 text-sm">
                      İstanbul, Türkiye
                    </p>
                    <p className="text-gray-500 text-sm">
                      Uzaktan çalışma ile Türkiye genelinde hizmet
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <div className="gradient-border p-6">
                <h3 className="font-heading font-semibold text-white mb-3">
                  Sıkça Sorulan
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Fiyatlar ne kadar?</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Her proje farklıdır. İhtiyaçlarınıza göre özel fiyat teklifi sunuyoruz.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Teslim süresi ne kadar?</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Basit web siteleri 48 saat içinde, SaaS projeler kapsamına göre planlanır.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
