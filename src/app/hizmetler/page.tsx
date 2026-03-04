import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import CTASection from '@/components/CTASection';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Web sitesi tasarımı, site modernleştirme ve SaaS ürün geliştirme hizmetlerimiz hakkında detaylı bilgi alın.',
  openGraph: {
    title: 'Hizmetler | MHT Bilişim',
    description:
      'Web sitesi tasarımı, site modernleştirme ve SaaS ürün geliştirme hizmetlerimiz hakkında detaylı bilgi alın.',
  },
};

export default function HizmetlerPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="gradient-text">Hizmetlerimiz</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına özel, modern ve ölçeklenebilir dijital çözümler sunuyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Web Site Tasarımı */}
      <ServiceDetail
        id="web-tasarim"
        iconName="globe"
        title="İşletmeler İçin Web Sitesi Tasarımı"
        description="Küçük ve orta ölçekli işletmeler, dükkanlar, restoranlar, klinikler ve daha fazlası için profesyonel web siteleri tasarlıyoruz. İşletmenizin dijital vitrini olacak modern, hızlı ve mobil uyumlu siteler oluşturuyoruz."
        features={[
          'Tamamen mobil uyumlu (responsive) tasarım',
          'SSL sertifikası ile güvenli bağlantı',
          'WhatsApp entegrasyonu ile anında iletişim',
          'Google Haritalar entegrasyonu',
          'Hız optimizasyonu — 3 saniyenin altında yüklenme',
          'Temel SEO ayarları — Google\'da görünürlük',
          '48 saat içinde teslim',
        ]}
        process={[
          'İhtiyaç ve bilgi toplama — işletmenizi ve hedeflerinizi anlıyoruz',
          'Tasarım oluşturma — markanıza uygun modern arayüz',
          'Onay ve revizyon — geri bildirimlerinizle son şeklini veriyoruz',
          'Yayına alma — siteniz canlıya alınır ve size teslim edilir',
        ]}
        gradient="from-purple-500/10 to-blue-500/10"
        iconColor="text-purple-400"
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Site Modernleştirme */}
      <ServiceDetail
        id="modernlestirme"
        iconName="refresh"
        title="Mevcut Siteleri Modernleştirme"
        description="Eski, yavaş veya mobil uyumsuz web sitenizi günümüz standartlarına kavuşturuyoruz. Performans analizi, modern tasarım ve SEO iyileştirmeleri ile sitenize ikinci baharını yaşatıyoruz."
        features={[
          'Mevcut sitenin detaylı performans analizi',
          'Modern ve güncel tasarıma geçiş',
          'Mevcut içeriğin sorunsuz aktarımı',
          'SEO iyileştirme — arama motoru sıralamanızı yükseltin',
          'Hız ve performans optimizasyonu',
          'Mobil uyumluluk garantisi',
        ]}
        process={[
          'Mevcut sitenin analizi — sorunları ve eksikleri belirliyoruz',
          'Yeni tasarım önerisi — modern, hızlı ve mobil uyumlu',
          'İçerik aktarımı — metin, görsel ve verilerin taşınması',
          'Test ve yayına alma — yeni siteniz sorunsuz şekilde canlıya alınır',
        ]}
        gradient="from-blue-500/10 to-cyan-500/10"
        iconColor="text-blue-400"
        reverse
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* SaaS Geliştirme */}
      <ServiceDetail
        id="saas"
        iconName="layers"
        title="SaaS Ürün Geliştirme"
        description="Fikir aşamasından ürüne kadar tam kapsamlı SaaS geliştirme hizmeti sunuyoruz. MVP geliştirme, ölçekleme, bakım ve destek dahil — fikrinizi hayata geçiriyoruz."
        features={[
          'Next.js, React ve React Native ile modern geliştirme',
          'Firebase ve Supabase ile güçlü backend altyapısı',
          'Bulut tabanlı, ölçeklenebilir mimari',
          'MVP geliştirme — hızlı pazara çıkış',
          'Kullanıcı deneyimi odaklı arayüz tasarımı',
          'Sürekli bakım, güncelleme ve teknik destek',
          'Detaylı dokümantasyon ve eğitim',
        ]}
        process={[
          'Fikir ve kapsam belirleme — ürününüzün vizyonunu netleştiriyoruz',
          'MVP geliştirme — en önemli özellikleri hızla hayata geçiriyoruz',
          'Test ve iterasyon — kullanıcı geri bildirimlerine göre geliştiriyoruz',
          'Ölçekleme ve büyüme — ürününüzü büyümeye hazır hale getiriyoruz',
        ]}
        gradient="from-cyan-500/10 to-emerald-500/10"
        iconColor="text-cyan-400"
      />

      <CTASection />
    </>
  );
}
