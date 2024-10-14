'use server'
import { JWTPayload } from '@entities/interfaces';
import jwt from 'jsonwebtoken';


export const generateToken = async (props: JWTPayload)=>{
  const secretKey = process.env.JWT_SECRET_KEY
  if (!secretKey) {
    return null
  }
  return jwt.sign(props, secretKey, { expiresIn: '24h' });
}