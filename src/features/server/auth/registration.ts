'use server';
import { IUserFull } from '@entities/interfaces';
import { AppDataSource, initializeDb } from '../db/data-source';
import { UserEntity } from '@entities/db';
import { HASH_ROUNDS, USER_TOKEN_COOKIE_NAME } from '@entities/constants';
import bcrypt from 'bcrypt';
import { generateToken } from './generateToken';
import { cookies } from 'next/headers';

export const registrationUser = async ({
  auth_date,
  username,
  password,
  photo_url,
  telegram_id,
}: IUserFull) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserEntity);
  const conflict = await repository.findOneBy({ username });
  if (conflict) {
    return 'conflict';
  }
  if (!password) {
    return 'conflict';
  }
  const hashPassword = await bcrypt.hash(password, HASH_ROUNDS);
  const character = repository.create({
    auth_date,
    username,
    password: hashPassword,
    photo_url,
    telegram_id,
  });
  await repository.save(character);
  console.log(character);
  const token = await generateToken({ ...character });
  if (token) {
    cookies().set(USER_TOKEN_COOKIE_NAME, token);
  }
};
