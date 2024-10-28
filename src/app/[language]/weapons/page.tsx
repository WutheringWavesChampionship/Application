import { AuthorizedLayout } from '@app/layouts/Authorized';
import { LanguageEnum } from '@entities/constants';
import { getAllWeapons } from '@features/server/weapons/weapon';
import { UserWeaponsPage } from '@pages/Weapon';

interface Props {
  params: { language: LanguageEnum };
}
export default async function Home({ params: { language } }: Props) {
  const data = await getAllWeapons();
  return (
    <AuthorizedLayout lang={language}>
      <UserWeaponsPage data={data} />
    </AuthorizedLayout>
  );
}
