import type { Metadata } from 'next';
import TechStack from '@/components/TechStack';
import CTASection from '@/components/CTASection';
import AnimatedSection from '@/components/AnimatedSection';
import ValuesSection from '@/components/ValuesSection';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'MHT Bilişim — Teknoloji odaklı, çözüm üretmeye yönelik bir yazılım ekibi. Hikayemiz, misyonumuz ve değerlerimiz.',
  openGraph: {
    title: 'Hakkımızda | MHT Bilişim',
    description:
      'MHT Bilişim — Teknoloji odaklı, çözüm üretmeye yönelik bir yazılım ekibi.',
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="gradient-text">Hakkımızda</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Teknolojiyi kullanarak işletmelerin büyümesine yardımcı olan bir yazılım ekibiyiz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Biz <span className="gradient-text">Kimiz?</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  MHT Bilişim, işletmelerin dijital dünyada güçlü bir varlık göstermesini sağlamak amacıyla kurulmuş bir yazılım şirketidir. Küçük esnaftan büyük kurumlara kadar her ölçekteki işletmeye modern, hızlı ve etkili dijital çözümler sunuyoruz.
                </p>
                <p>
                  Teknoloji odaklı yaklaşımımız ve çözüm üretme tutkumuzla, müşterilerimizin ihtiyaçlarını en doğru şekilde anlayıp, beklentilerinin ötesinde projeler ortaya koyuyoruz. Her projede kalite, hız ve müşteri memnuniyetini ön planda tutuyoruz.
                </p>
                <p>
                  Amacımız sadece web sitesi yapmak değil — işletmenizin dijital dönüşüm yolculuğunda güvenilir bir ortak olmaktır.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="gradient-border p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">48</div>
                    <p className="text-gray-500 text-sm">Saat Teslim</p>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">%100</div>
                    <p className="text-gray-500 text-sm">Mobil Uyum</p>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">7/24</div>
                    <p className="text-gray-500 text-sm">Destek</p>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">95+</div>
                    <p className="text-gray-500 text-sm">Performans</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ValuesSection />
      <TechStack />
      <CTASection />
    </>
  );
}
