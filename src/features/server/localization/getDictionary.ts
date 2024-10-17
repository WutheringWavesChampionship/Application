import { LanguageEnum } from '@entities/constants';
import 'server-only';

interface Props {
  language: LanguageEnum;
  ns: string;
}

export const getDictionary = async ({ language, ns }: Props) => {
  try {
    const dict = await import(`../../../../public/locales/${language}/${ns}`);
    return dict.default;
  } catch (err) {
    console.error(`"public/locales/${language}/${ns}" load error`);
    console.error(err);
  }
};
