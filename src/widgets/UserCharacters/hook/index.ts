'use client';
import { UserCharacter } from '@entities/interfaces/character';
import { useTranslation } from '@features/client';
import { getUserCharacters } from '@features/server/characters/userCharacter';
import { useCallback, useEffect, useState } from 'react';

export const useGetUserCharacter = (id: number) => {
  const { t } = useTranslation('characters');
  const [data, setData] = useState<Array<UserCharacter>>([]);

  const handleGetData = useCallback(async () => {
    const characters = await getUserCharacters(id);
    console.log(characters);
    setData(characters);
  }, [id]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return { data, t };
};
