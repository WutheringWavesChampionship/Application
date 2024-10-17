'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useLoginWidget } from './hook';
import { PasswordField, TextField } from '@shared/ui/input';
import { Button } from '@shared/ui/Button';

interface Props {
  className?: string;
}

export const LoginWidget = ({ className }: Props) => {
  const { t, login, password, sePassword, setLogin, handleLogin, loading } =
    useLoginWidget();
  return (
    <div className={classNames(styles.wrapper, className)}>
      <TextField
        label={t('login')}
        placeholder={t('enterLogin')}
        value={login}
        onChange={(ev) => setLogin(ev.target.value)}
      />
      <PasswordField
        label={t('password')}
        placeholder={t('enterPassword')}
        value={password}
        onChange={(ev) => sePassword(ev.target.value)}
      />
      <Button
        loading={loading}
        className={styles.submit}
        size="large"
        disabled={login.length < 4}
        onClick={handleLogin}
      >
        {t('login')}
      </Button>
    </div>
  );
};
