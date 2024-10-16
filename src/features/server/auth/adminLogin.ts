'use server';
import { cookies } from 'next/headers';
import { tgAuthorize } from '../tgAuth';
import { generateToken } from './generateToken';
import { USER_TOKEN_COOKIE_NAME } from '@entities/constants';

export const adminLogin = async (adminToken: string) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const acceptedToken = process.env.ADMIN_TOKEN;
  if (!secretKey || !acceptedToken) {
    return;
  }
  if (adminToken === acceptedToken) {
    try {
      const user = await tgAuthorize({
        id: 'admin',
        auth_date: new Date().getTime() / 1000,
        first_name: 'admin',
      });
      if (user) {
        const token = await generateToken({
          auth_date: user.auth_date,
          id: user.id,
          first_name: user.username,
          username: user.username,
        });
        if (!token) {
          return;
        }
        cookies().set(USER_TOKEN_COOKIE_NAME, token);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
