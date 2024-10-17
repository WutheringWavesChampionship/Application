'use client';
import { ICharacter, UserCharacter } from '@entities/interfaces/character';
import { useTranslation } from '@features/client';
import { getUserCharacters } from '@features/server/characters/userCharacter';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  characters: ICharacter[];
  id?: number;
}

export const useGetUserCharacter = ({ characters, id }: Props) => {
  const { t } = useTranslation('characters');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<UserCharacter>>(
    characters.map((el) => ({ ...el, userData: null })),
  );

  const handleGetData = useCallback(async () => {
    if (!id) {
      return;
    }
    try {
      setLoading(true);
      const characters = await getUserCharacters(id);
      setData(characters);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return { data, t, loading };
};
