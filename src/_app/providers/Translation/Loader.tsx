import { LanguageEnum } from '@entities/constants';
import { TranslationsProvider } from './Translations';
import { getDictionary } from '@features/server/localization';

interface Props {
  namespaces: Array<string>;
  children: React.ReactNode;
  language: LanguageEnum;
}

export const TranslationsLoaderProvider = async ({
  namespaces,
  children,
  language,
}: Props) => {
  const uniqueNsSet = new Set(['common', ...namespaces]);
  const translations: Record<string, unknown> = {};
  uniqueNsSet.forEach(async (ns) => {
    translations[ns] = await getDictionary({ language, ns });
  });

  return (
    <TranslationsProvider translations={translations} language={language}>
      {children}
    </TranslationsProvider>
  );
};
