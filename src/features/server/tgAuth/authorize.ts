import { TgResponseQuery } from '@entities/interfaces/';
import { AppDataSource } from '../db/data-source';
import { UserEntity } from '@entities/db';
import 'reflect-metadata';

export const tgAuthorize = async ({
  auth_date,
  first_name,
  id,
  photo_url,
  username,
}: Omit<TgResponseQuery, 'hash'>) => {
  const repository = AppDataSource.getRepository(UserEntity);
  const existed = await repository.findOneBy({ telegram_id: id });
  if (existed) {
    return existed;
  } else {
    const user = new UserEntity();
    user.telegram_id = id;
    user.auth_date = new Date(Number(auth_date) * 1000);
    user.photo_url = photo_url || undefined;
    user.username = username || first_name;
    const savedUser = await repository.save(user);
    return savedUser;
  }
};
