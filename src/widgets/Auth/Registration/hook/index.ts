'use client';
import { registrationUser } from '@features/server/auth/registration';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useRegistrationWidget = () => {
  const [login, setLogin] = useState('');
  const [password, sePassword] = useState('');
  const [passwordConfirm, sePasswordConfirm] = useState('');
  const registration = useCallback(async () => {
    const res = await registrationUser({
      auth_date: new Date(),
      username: login,
      password,
    });
    if (res === 'conflict') {
      toast.error('user with this login already exist');
    }
  }, [login, password]);
  return {
    login,
    setLogin,
    password,
    sePassword,
    passwordConfirm,
    sePasswordConfirm,
    registration,
  };
};
