import classNames from 'classnames';
import styles from './style.module.scss';
import { TelegramLoginButton } from '@shared/ui/TgLoginButton';
import { TG_AUTH_PATH } from '@entities/constants';

interface Props {
  className?: string;
}

export const AuthPage = ({ className }: Props) => {
  const botName = process.env.TG_BOT_NAME as string;
  return (
    <div className={classNames(styles.wrapper, className)}>
      <TelegramLoginButton
        botName={botName}
        redirect={TG_AUTH_PATH}
        displayAvatar={true}
        radius={10}
        size={'large'}
      />
    </div>
  );
};
