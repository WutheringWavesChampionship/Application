'use server'
import { USER_TOKEN_COOKIE_NAME } from '@entities/constants';
import { JWTPayload } from '@entities/interfaces';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export const getAuthorizedUser = async ()=>{
  const secretKey = process.env.JWT_SECRET_KEY
  if (!secretKey) {
    return 
  }
  const token = cookies().get(USER_TOKEN_COOKIE_NAME)
  if (token) {
    try {
      return jwt.verify(token.value, secretKey) as JWTPayload;
    } catch (error) {
      console.error(error)
      return 
    }
  } else {
    return 
  }
}