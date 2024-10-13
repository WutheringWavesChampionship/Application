'use server'
import jwt from 'jsonwebtoken';


interface Props {
  id: string;
  auth_date: Date;
  first_name?: string;
  username?: string;
}

export const generateToken = (props: Props)=>{
  const secretKey = process.env.JWT_SECRET_KEY
  if (!secretKey) {
    return null
  }
  return jwt.sign(props, secretKey, { expiresIn: '24h' });
}