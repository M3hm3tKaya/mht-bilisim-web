'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useDictionary } from '@/lib/DictionaryProvider';

export default function LanguageSwitcher() {
  const { locale } = useDictionary();
  const pathname = usePathname();

  const otherLocale = locale === 'tr' ? 'en' : 'tr';

  // Replace the current locale prefix with the other locale
  const segments = pathname.split('/');
  segments[1] = otherLocale;
  const newPath = segments.join('/');

  return (
    <Link
      href={newPath}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium text-gray-300 hover:text-white"
    >
      <span className={locale === 'tr' ? 'text-white' : 'text-gray-500'}>TR</span>
      <span className="text-gray-600">/</span>
      <span className={locale === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
    </Link>
  );
}
