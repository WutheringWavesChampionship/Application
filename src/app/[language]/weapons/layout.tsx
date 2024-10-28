import type { Metadata } from 'next';
import { AppDataSource } from '@features/server/db/data-source';
import { LanguageEnum } from '@entities/constants';
import { TranslationsLoaderProvider } from '@app/providers/Translation';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props {
  params: { language: LanguageEnum };
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
  params: { language },
}: Readonly<Props>) {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return (
    <TranslationsLoaderProvider
      language={language}
      namespaces={['weapons', 'stats']}
    >
      {children}
    </TranslationsLoaderProvider>
  );
}
