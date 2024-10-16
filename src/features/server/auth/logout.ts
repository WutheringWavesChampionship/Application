'use server';
import { USER_TOKEN_COOKIE_NAME } from '@entities/constants';
import { cookies } from 'next/headers';

export const logout = () => {
  cookies().delete(USER_TOKEN_COOKIE_NAME);
};
