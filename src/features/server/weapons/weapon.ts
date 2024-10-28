'use server';
import { WeaponEntity } from '@entities/db';
import { AppDataSource, initializeDb } from '../db/data-source';

export const getWeapon = async (id: number) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(WeaponEntity);
  const entity = await repository.findOneBy({
    id,
  });
  if (entity) {
    return { ...entity };
  }
  return entity;
};

export const getAllWeapons = async () => {
  await initializeDb();
  const repository = AppDataSource.getRepository(WeaponEntity);
  const entities = await repository.find({
    order: { type: 'ASC', rarity: 'ASC', baseAttack: 'ASC' },
  });

  return entities.map((el) => ({ ...el }));
};
