import { UserContext } from '@entities/context';
import { UserData } from '@entities/interfaces';
import { useTranslation } from '@features/client';
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
  const { t } = useTranslation('characters');
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(false);
  const [actionsLoading, setActionsLoading] = useState(false);

  const getUserData = useCallback(async () => {
    if (!user?.id) {
      return;
    }
    try {
      setLoading(true);
      const data = await getUserCharacter({ characterId, userId: user.id });
      setUserData(data || undefined);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [characterId, user?.id]);

  const createNew = useCallback(async () => {
    if (!user?.id) {
      return;
    }
    try {
      setActionsLoading(true);
      const data = await createUserCharacter({ characterId, userId: user.id });
      setUserData(data || undefined);
    } catch (error) {
      console.error(error);
    } finally {
      setActionsLoading(false);
    }
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
      try {
        setActionsLoading(true);
        await updateUserCharacter({
          constants: Number(data.constants),
          critValue: data.critValue ? Number(data.critValue) : undefined,
          id: data.id,
          level: Number(data.level),
        });
        router.push('/settings');
      } catch (error) {
        console.error(error);
      } finally {
        setActionsLoading(false);
      }
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
    t,
    loading,
    userData,
    createNew,
    saveChanges,
    changeLevel,
    actionsLoading,
    changeCritValue,
    changeConstants,
    deleteCharacter,
  };
};
