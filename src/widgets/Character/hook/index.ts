import { UserContext } from '@entities/context';
import { UserData } from '@entities/interfaces';
import {
  createUserCharacter,
  deleteUserCharacter,
  getUserCharacter,
  updateUserCharacter,
} from '@features/server/characters/userCharacter';
import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';

export const useCharacterWidget = (characterId: number) => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState<UserData>();

  const getUserData = useCallback(async () => {
    if (!user?.id) {
      return;
    }
    const data = await getUserCharacter({ characterId, userId: user.id });
    setUserData(data || undefined);
  }, [characterId, user?.id]);

  const createNew = useCallback(async () => {
    if (!user?.id) {
      return;
    }
    const data = await createUserCharacter({ characterId, userId: user.id });
    setUserData(data || undefined);
  }, [characterId, user?.id]);

  const changeLevel = useCallback((val: string) => {
    let value: number = 0;
    if (val !== '' && !Number.isNaN(Number(val)) && Number(val) % 1 === 0) {
      value = Number(val);
    }
    setUserData((data) => {
      if (data) {
        return { ...data, level: value };
      }
    });
  }, []);

  const changeCritValue = useCallback((val: string) => {
    let value: number | undefined = undefined;
    if (val !== '' && !Number.isNaN(Number(val)) && Number(val) % 1 === 0) {
      value = Number(val);
    }
    setUserData((data) => {
      if (data) {
        return { ...data, critValue: value };
      }
    });
  }, []);

  const changeConstants = useCallback((val: 1 | -1) => {
    setUserData((data) => {
      if (data) {
        return { ...data, constants: Number(data.constants) + val };
      }
    });
  }, []);

  const saveChanges = useCallback(
    async (data: UserData) => {
      await updateUserCharacter({
        constants: Number(data.constants),
        critValue: data.critValue ? Number(data.critValue) : undefined,
        id: data.id,
        level: Number(data.level),
      });
      router.push('/settings');
    },
    [router],
  );
  const deleteCharacter = useCallback(async (id: number) => {
    await deleteUserCharacter(id);
    setUserData(undefined);
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return {
    userData,
    createNew,
    changeLevel,
    changeCritValue,
    changeConstants,
    saveChanges,
    deleteCharacter,
  };
};
