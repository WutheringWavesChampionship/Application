'use server';
import { WeaponEntity, UserWeaponEntity } from '@entities/db';
import { AppDataSource, initializeDb } from '../db/data-source';

interface Props {
  userId: number;
  weaponId: number;
}

export const getUserWeapon = async ({ userId, weaponId }: Props) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserWeaponEntity);
  const entity = await repository.findOneBy({
    userId,
    weaponId,
  });
  return entity ? { ...entity } : null;
};

export const getUserWeapons = async (userId: number) => {
  await initializeDb();
  const userCharactersRepository =
    AppDataSource.getRepository(UserWeaponEntity);
  const repository = AppDataSource.getRepository(WeaponEntity);
  const entities = await repository.find({
    order: { type: 'ASC', rarity: 'ASC', baseAttack: 'ASC' },
  });
  const userCharacters = entities.map(async (el) => {
    const userData = await userCharactersRepository.findOneBy({
      userId,
      weaponId: el.id,
    });
    if (userData) {
      const { constants, level, updatedAt, id } = userData;
      return {
        ...el,
        userData: { constants, level, updatedAt, id },
      };
    } else {
      return { ...el, userData: null };
    }
  });
  const result = await Promise.all(userCharacters);
  return result;
};

export const createUserWeapon = async ({ userId, weaponId }: Props) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserWeaponEntity);
  const entity = repository.create({
    userId,
    weaponId,
  });
  await repository.save(entity);
  return { ...entity };
};

interface UpdateProps {
  id: number;
  constants: number;
  level: number;
}

export const updateUserWeapon = async ({
  constants,
  level,
  id,
}: UpdateProps) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserWeaponEntity);
  const entity = await repository.update({ id }, { constants, level });
  return { ...entity };
};

export const deleteUserWeapon = async (id: number) => {
  await initializeDb();
  const repository = AppDataSource.getRepository(UserWeaponEntity);
  const entity = await repository.delete({ id });
  return { ...entity };
};
