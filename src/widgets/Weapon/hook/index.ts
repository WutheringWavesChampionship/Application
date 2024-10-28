import { UserContext } from '@entities/context';
import { UserWeaponType } from '@entities/interfaces';
import { useTranslation } from '@features/client';
import {
  createUserWeapon,
  deleteUserWeapon,
  getUserWeapon,
  updateUserWeapon,
} from '@features/server/weapons/userWeapon';
import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';

export const useCharacterWidget = (weaponId: number) => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { t } = useTranslation('weapons');
  const [userData, setUserData] = useState<UserWeaponType>();
  const [loading, setLoading] = useState(false);
  const [actionsLoading, setActionsLoading] = useState(false);

  const getUserData = useCallback(async () => {
    if (!user?.id) {
      return;
    }
    try {
      setLoading(true);
      const data = await getUserWeapon({ weaponId, userId: user.id });
      setUserData(data || undefined);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [weaponId, user?.id]);

  const createNew = useCallback(async () => {
    if (!user?.id) {
      return;
    }
    try {
      setActionsLoading(true);
      const data = await createUserWeapon({ weaponId, userId: user.id });
      setUserData(data || undefined);
    } catch (error) {
      console.error(error);
    } finally {
      setActionsLoading(false);
    }
  }, [weaponId, user?.id]);

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

  const changeConstants = useCallback((val: 1 | -1) => {
    setUserData((data) => {
      if (data) {
        return { ...data, constants: Number(data.constants) + val };
      }
    });
  }, []);

  const saveChanges = useCallback(
    async (data: UserWeaponType) => {
      try {
        setActionsLoading(true);
        await updateUserWeapon({
          constants: Number(data.constants),
          id: data.id,
          level: Number(data.level),
        });
        router.push('/weapons');
      } catch (error) {
        console.error(error);
      } finally {
        setActionsLoading(false);
      }
    },
    [router],
  );
  const deleteCharacter = useCallback(async (id: number) => {
    await deleteUserWeapon(id);
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
    changeConstants,
    deleteCharacter,
    router,
  };
};
