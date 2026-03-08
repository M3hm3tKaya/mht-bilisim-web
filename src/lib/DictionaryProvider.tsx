'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Dictionary } from './dictionaries';
import type { Locale } from './i18n';

interface DictionaryContextType {
  dict: Dictionary;
  locale: Locale;
}

const DictionaryContext = createContext<DictionaryContextType | null>(null);

export function DictionaryProvider({
  dictionary,
  locale,
  children,
}: {
  dictionary: Dictionary;
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={{ dict: dictionary, locale }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
}
