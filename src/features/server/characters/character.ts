'use server';
import { CharacterEntity } from '@entities/db';
import { AppDataSource, initializeDb } from '../db/data-source';

export const getCharacter = async (id: number) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(CharacterEntity);
  const character = await repository.findOneBy({
    id,
  });
  if (character) {
    return { ...character };
  }
  return character;
};

export const getAllCharacters = async () => {
  await initializeDb();
  const repository = AppDataSource.getRepository(CharacterEntity);
  const characters = await repository.find({
    order: { element: 'ASC', id: 'ASC' },
  });

  return characters.map((el) => ({ ...el }));
};
