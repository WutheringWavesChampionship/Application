'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useRegistrationWidget } from './hook';
import { PasswordField, TextField } from '@shared/ui/input';

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
  } = useRegistrationWidget();
  return (
    <div className={classNames(styles.wrapper, className)}>
      <TextField
        label="login"
        value={login}
        onChange={(ev) => setLogin(ev.target.value)}
      />
      <PasswordField
        label="password"
        value={password}
        onChange={(ev) => sePassword(ev.target.value)}
      />
      <PasswordField
        label="confirm"
        value={passwordConfirm}
        onChange={(ev) => sePasswordConfirm(ev.target.value)}
      />
      <button
        disabled={
          password !== passwordConfirm ||
          login.length < 4 ||
          password.length < 8
        }
        onClick={registration}
      >
        registration
      </button>
    </div>
  );
};
