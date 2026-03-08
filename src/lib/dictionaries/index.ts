import type { Dictionary } from './tr';
import type { Locale } from '../i18n';
import tr from './tr';
import en from './en';

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] || dictionaries.tr;
}

export type { Dictionary };
