import { UnauthorizedLayout } from '@app/layouts/Unauthorized';
import { LanguageEnum } from '@entities/constants';
import { AuthPage } from '@pages/Auth';

type Props = Readonly<{
  params: { language: LanguageEnum };
}>;

const Page = async ({ params: { language } }: Props) => {
  return (
    <UnauthorizedLayout lang={language} >
      <AuthPage />
    </UnauthorizedLayout>
  );
}

export default Page