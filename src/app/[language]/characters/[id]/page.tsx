import { AuthorizedLayout } from '@app/layouts/Authorized';
import { LanguageEnum } from '@entities/constants';
import { getCharacter } from '@features/server/characters/character';
import { CharacterPage } from '@pages/Character';
import { notFound } from 'next/navigation';

interface Props {
  params: { language: LanguageEnum; id: number };
}
export default async function Home({ params: { language, id } }: Props) {
  const data = await getCharacter(id);
  if (!data) {
    return notFound();
  }
  return (
    <AuthorizedLayout lang={language}>
      <CharacterPage language={language} data={data} />
    </AuthorizedLayout>
  );
}
