'use server';
import { AppDataSource, initializeDb } from '../db/data-source';
import { UserEntity } from '@entities/db';
import { USER_TOKEN_COOKIE_NAME } from '@entities/constants';
import bcrypt from 'bcrypt';
import { generateToken } from './generateToken';
import { cookies } from 'next/headers';

interface Props {
  username: string;
  password: string;
}

export const loginUser = async ({ username, password }: Props) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserEntity);
  const entity = await repository.findOneBy({ username });
  if (entity && entity.password) {
    const comparePassword = bcrypt.compareSync(password, entity.password);
    if (comparePassword) {
      const token = await generateToken({ ...entity });
      if (token) {
        cookies().set(USER_TOKEN_COOKIE_NAME, token);
        return;
      }
    }
  }
  return 'not found';
};
