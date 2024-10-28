'use client';
import { IWeapon, UserWeapon } from '@entities/interfaces';
import { useTranslation } from '@features/client';
import { getUserWeapons } from '@features/server/weapons/userWeapon';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  data: IWeapon[];
  id?: number;
}

export const useGetUserCharacter = ({ data, id }: Props) => {
  const { t } = useTranslation('characters');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<Array<UserWeapon>>(
    data.map((el) => ({ ...el, userData: null })),
  );

  const handleGetData = useCallback(async () => {
    if (!id) {
      return;
    }
    try {
      setLoading(true);
      const characters = await getUserWeapons(id);
      setUserData(characters);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return { userData, t, loading };
};
