import { loginUser } from '@features/server/auth/login';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useLoginWidget = () => {
  const [login, setLogin] = useState('');
  const [password, sePassword] = useState('');

  const handleLogin = useCallback(async () => {
    const res = await loginUser({
      username: login,
      password,
    });
    if (res === 'not found') {
      toast.error('incorrect login or password');
    }
  }, [login, password]);
  return {
    login,
    setLogin,
    password,
    sePassword,
    handleLogin,
  };
};
