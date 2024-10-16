import { AuthorizedLayout } from "@app/layouts/Authorized";
import { LanguageEnum } from "@entities/constants";
import { MainPage } from "@pages/Main";

interface Props {
  params: { language: LanguageEnum };
}
export default function Home({ params: { language } }: Props) {
  return (
    <AuthorizedLayout lang={language}>
      <MainPage language={language} />
    </AuthorizedLayout>
  );
}
