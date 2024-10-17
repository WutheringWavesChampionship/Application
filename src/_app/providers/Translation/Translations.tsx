'use client';
import { LanguageEnum } from '@entities/constants';
import { TranslationContext } from '@entities/context';
import { useMemo } from 'react';

interface Props {
  translations: unknown;
  children: React.ReactNode;
  language: LanguageEnum;
}

export const TranslationsProvider = ({
  children,
  translations,
  language,
}: Props) => {
  const value = useMemo(
    () => ({ translations, language }),
    [language, translations],
  );
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
