import {
  ACCEPTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  LOCALE_COOKIE_NAME,
} from '@entities/constants';
import { NextRequest } from 'next/server';

export const getClientLocale = (request: NextRequest) => {
  const userLanguage = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (userLanguage) {
    return userLanguage;
  }
  const browserLanguagesList = request.headers
    .get('Accept-Language')
    ?.split(',');
  if (browserLanguagesList) {
    browserLanguagesList.forEach((browserLang) => {
      const existedLanguage = ACCEPTED_LANGUAGES.find(
        (el) =>
          el.toLowerCase() === browserLang.toLowerCase() ||
          browserLang.toLowerCase().startsWith(el.toLowerCase()),
      );
      if (existedLanguage) {
        return existedLanguage;
      }
    });
  }
  return DEFAULT_LANGUAGE;
};
