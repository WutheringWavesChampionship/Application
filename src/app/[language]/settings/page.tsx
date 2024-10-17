import { AuthorizedLayout } from '@app/layouts/Authorized';
import { LanguageEnum } from '@entities/constants';
import { getAllCharacters } from '@features/server/characters/character';
import { UserSettings } from '@pages/Settings';

interface Props {
  params: { language: LanguageEnum };
}
export default async function Home({ params: { language } }: Props) {
  const characters = await getAllCharacters();
  return (
    <AuthorizedLayout lang={language}>
      <UserSettings characters={characters} />
    </AuthorizedLayout>
  );
}
