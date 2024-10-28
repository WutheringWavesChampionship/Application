import { AuthorizedLayout } from '@app/layouts/Authorized';
import { LanguageEnum } from '@entities/constants';
import { UserSettings } from '@pages/Settings';

interface Props {
  params: { language: LanguageEnum };
}
export default async function Home({ params: { language } }: Props) {
  return (
    <AuthorizedLayout lang={language}>
      <UserSettings />
    </AuthorizedLayout>
  );
}
