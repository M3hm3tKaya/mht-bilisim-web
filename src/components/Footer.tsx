'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useDictionary } from '@/lib/DictionaryProvider';

export default function Footer() {
  const { dict, locale } = useDictionary();
  const prefix = `/${locale}`;

  const footerLinks = [
    { href: prefix, label: dict.nav.home },
    { href: `${prefix}/hizmetler`, label: dict.nav.services },
    { href: `${prefix}/hakkimizda`, label: dict.nav.about },
    { href: `${prefix}/iletisim`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-white/5 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href={prefix} className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center font-heading font-bold text-white text-sm">
                M
              </div>
              <span className="font-heading font-bold text-lg text-white">
                MHT <span className="gradient-text">Bilişim</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {dict.footer.brandDesc}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">{dict.footer.pagesTitle}</h3>
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
            <h3 className="font-heading font-semibold text-white mb-4">{dict.footer.contactTitle}</h3>
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
              <p className="text-gray-400 text-sm">{dict.footer.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <a
            href="https://wa.me/905535872263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-accent-purple transition-colors"
          >
            {dict.footer.designedBy}
          </a>
        </div>
      </div>
    </footer>
  );
}
