'use client';
import { DEFAULT_LANGUAGE, LanguageEnum } from '@entities/constants';
import { createContext } from 'react';

interface LocalizedContextProps<T> {
  translations: T;
  language: LanguageEnum;
}

export const TranslationContext = createContext<LocalizedContextProps<unknown>>(
  {
    translations: {},
    language: DEFAULT_LANGUAGE,
  },
);
