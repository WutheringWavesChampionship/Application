'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useRegistrationWidget } from './hook';
import { PasswordField, TextField } from '@shared/ui/input';
import { Button } from '@shared/ui/Button';

interface Props {
  className?: string;
}

export const RegistrationWidget = ({ className }: Props) => {
  const {
    login,
    password,
    passwordConfirm,
    registration,
    sePassword,
    sePasswordConfirm,
    setLogin,
    t,
    loading,
  } = useRegistrationWidget();
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
      <PasswordField
        label={t('passwordConfirm')}
        placeholder={t('enterPassword')}
        value={passwordConfirm}
        onChange={(ev) => sePasswordConfirm(ev.target.value)}
      />
      <Button
        loading={loading}
        className={styles.submit}
        disabled={
          password !== passwordConfirm ||
          login.length < 4 ||
          password.length < 8
        }
        size="large"
        onClick={registration}
      >
        {t('registration')}
      </Button>
    </div>
  );
};
