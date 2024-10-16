'use server';
import { CharacterEntity, UserCharacterEntity } from '@entities/db';
import { AppDataSource, initializeDb } from '../db/data-source';

interface Props {
  userId: number;
  characterId: number;
}

export const getUserCharacter = async ({ userId, characterId }: Props) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserCharacterEntity);
  const entity = await repository.findOneBy({
    userId,
    characterId,
  });
  return entity ? { ...entity } : null;
};

export const getUserCharacters = async (userId: number) => {
  await initializeDb();
  const userCharactersRepository =
    AppDataSource.getRepository(UserCharacterEntity);
  const charactersRepository = AppDataSource.getRepository(CharacterEntity);
  const characters = await charactersRepository.find({
    order: { element: 'ASC', id: 'ASC' },
  });
  const userCharacters = characters.map(async (el) => {
    const userData = await userCharactersRepository.findOneBy({
      userId,
      characterId: el.id,
    });
    if (userData) {
      const { constants, critValue, level, updatedAt, id } = userData;
      return {
        ...el,
        userData: { constants, critValue, level, updatedAt, id },
      };
    } else {
      return { ...el, userData: null };
    }
  });
  const result = await Promise.all(userCharacters);
  return result;
};

export const createUserCharacter = async ({ userId, characterId }: Props) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserCharacterEntity);
  const entity = repository.create({
    userId,
    characterId,
  });
  await repository.save(entity);
  return { ...entity };
};

interface UpdateProps {
  id: number;
  constants: number;
  level: number;
  critValue?: number;
}

export const updateUserCharacter = async ({
  constants,
  critValue,
  level,
  id,
}: UpdateProps) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserCharacterEntity);
  const entity = await repository.update(
    { id },
    { constants, critValue, level },
  );
  return { ...entity };
};

export const deleteUserCharacter = async (id: number) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserCharacterEntity);
  const entity = await repository.delete({ id });
  return { ...entity };
};
