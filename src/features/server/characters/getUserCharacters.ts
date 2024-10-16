'use server';
import { CharacterEntity, UserCharacterEntity } from '@entities/db';
import { AppDataSource } from '../db/data-source';

export const getUserCharacters = async (userId: number) => {
  const source = await AppDataSource.initialize();
  const manager = source.manager;
  const characters = await manager.find(CharacterEntity, {
    order: { element: 'ASC', id: 'ASC' },
  });
  const userCharacters = characters.map(async (el) => {
    const userData = await manager.findOneBy(UserCharacterEntity, {
      id: userId,
    });
    if (userData) {
      const { constants, critValue, level, updatedAt } = userData;
      return { ...el, userData: { constants, critValue, level, updatedAt } };
    } else {
      return { ...el, userData: null };
    }
  });
  const result = await Promise.all(userCharacters);
  await AppDataSource.destroy();
  return result;
};
