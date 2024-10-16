import classNames from 'classnames';
import styles from './style.module.scss';
import { AuthWidget } from '@widgets/Auth';

interface Props {
  className?: string;
}

export const AuthPage = ({ className }: Props) => {
  const botName = process.env.TG_BOT_NAME as string;
  return (
    <div className={classNames(styles.wrapper, className)}>
      <AuthWidget botName={botName} />
    </div>
  );
};
