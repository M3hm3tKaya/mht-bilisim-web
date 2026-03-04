import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center font-heading font-bold text-white text-sm">
                M
              </div>
              <span className="font-heading font-bold text-lg text-white">
                MHT <span className="gradient-text">Bilişim</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              İşletmenizi dijitale taşıyan güvenilir yazılım ortağınız. Hızlı, modern ve etkili çözümler.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Sayfalar</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">İletişim</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/905535872263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-whatsapp transition-colors"
              >
                <MessageCircle size={16} />
                +90 553 587 22 63
              </a>
              <p className="text-gray-400 text-sm">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} MHT Bilişim. Tüm hakları saklıdır.
          </p>
          <a
            href="https://wa.me/905535872263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-accent-purple transition-colors"
          >
            MHT Bilişim ile tasarlandı
          </a>
        </div>
      </div>
    </footer>
  );
}
