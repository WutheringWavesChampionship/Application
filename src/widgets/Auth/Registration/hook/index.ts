'use client';
import { useTranslation } from '@features/client';
import { registrationUser } from '@features/server/auth/registration';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useRegistrationWidget = () => {
  const { t } = useTranslation('auth');
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState('');
  const [password, sePassword] = useState('');
  const [passwordConfirm, sePasswordConfirm] = useState('');
  const registration = useCallback(async () => {
    try {
      setLoading(true);
      const res = await registrationUser({
        auth_date: new Date(),
        username: login,
        password,
      });
      if (res === 'conflict') {
        toast.error(t('alreadyExist'));
      } else {
        toast.success(t('registrationSuccess'));
      }
    } catch (error) {
      toast.error(t('alreadyExist'));
      console.error(error);
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
    passwordConfirm,
    sePasswordConfirm,
    registration,
    loading,
  };
};
