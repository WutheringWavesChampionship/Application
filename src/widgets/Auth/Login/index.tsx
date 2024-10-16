'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useLoginWidget } from './hook';
import { PasswordField, TextField } from '@shared/ui/input';

interface Props {
  className?: string;
}

export const LoginWidget = ({ className }: Props) => {
  const { login, password, sePassword, setLogin, handleLogin } =
    useLoginWidget();
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
      <button disabled={login.length < 4} onClick={handleLogin}>
        login
      </button>
    </div>
  );
};
