'use client';
import { TranslationContext } from '@entities/context';
import { useCallback, useContext } from 'react';

export const useTranslation = (ns?: string) => {
  const { translations, language } = useContext(TranslationContext);

  const t = useCallback(
    (path: string) => {
      if (!translations) {
        return path;
      }
      const fullTranslations = { ...translations };
      const keys = path.split('.');
      const translation = keys.reduce(
        (currentValue: unknown, key: string) => {
          if (!currentValue || typeof currentValue === 'string') {
            return currentValue;
          } else if (currentValue[key as keyof typeof currentValue]) {
            return currentValue[key as keyof typeof currentValue];
          } else {
            return null;
          }
        },
        (ns && fullTranslations[ns as keyof typeof fullTranslations]) ||
          fullTranslations,
      );
      return typeof translation === 'string' ? translation : path;
    },
    [translations, ns],
  );

  return { t, language };
};
