import { useTranslation } from '@features/client';
import { loginUser } from '@features/server/auth/login';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useLoginWidget = () => {
  const { t } = useTranslation('auth');
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState('');
  const [password, sePassword] = useState('');

  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      const res = await loginUser({
        username: login,
        password,
      });
      if (res === 'not found') {
        toast.error(t('incorrectData'));
      }
    } catch (error) {
      console.error(error);
      toast.error(t('incorrectData'));
    } finally {
      setLoading(false);
    }
  }, [login, password, t]);
  return {
    t,
    login,
    setLogin,
    password,
    sePassword,
    handleLogin,
    loading,
  };
};
