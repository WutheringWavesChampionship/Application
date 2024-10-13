import { UnauthorizedLayout } from '@app/layouts/Unauthorized';
import styles from './style.module.scss';
import { LanguageEnum, TG_AUTH_PATH } from '@entities/constants';
import { TelegramLoginButton } from '@shared/ui/TgLoginButton/Frame';

type Props = Readonly<{
  params: { language: LanguageEnum };
}>;

const Page = async ({ params: { language } }: Props) => {
  const botName = process.env.TG_BOT_NAME as string
  const origin = process.env.ORIGIN as string

  return (
    <UnauthorizedLayout lang={language} >
      <div className={styles.wrapper}>
        <TelegramLoginButton
          origin={origin}
          botName={botName}
          redirect={TG_AUTH_PATH}
          displayAvatar={true}
          radius={10}
          size={'large'}
        />
      </div>
    </UnauthorizedLayout>
  );
}

export default Page