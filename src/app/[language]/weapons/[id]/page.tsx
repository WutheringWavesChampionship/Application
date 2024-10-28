import { AuthorizedLayout } from '@app/layouts/Authorized';
import { LanguageEnum } from '@entities/constants';
import { getWeapon } from '@features/server/weapons/weapon';
import { WeaponPage } from '@pages/Weapon';
import { notFound } from 'next/navigation';

interface Props {
  params: { language: LanguageEnum; id: number };
}
export default async function Home({ params: { language, id } }: Props) {
  const data = await getWeapon(id);
  if (!data) {
    return notFound();
  }
  return (
    <AuthorizedLayout lang={language}>
      <WeaponPage language={language} data={data} />
    </AuthorizedLayout>
  );
}
