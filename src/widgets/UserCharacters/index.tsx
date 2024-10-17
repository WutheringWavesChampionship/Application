'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useGetUserCharacter } from './hook';
import { Character } from '@shared/ui/Character';
import Link from 'next/link';
import { Paper } from '@shared/ui/Paper';
import { ICharacter } from '@entities/interfaces';

interface Props {
  className?: string;
  id: number;
  characters: ICharacter[];
}

export const UserCharacters = ({ className, id, characters }: Props) => {
  const { data, t, loading } = useGetUserCharacter({ id, characters });
  return (
    <Paper className={classNames(styles.wrapper, className)} loading={loading}>
      {data.map((el) => (
        <Link
          key={`character-${el.id}`}
          href={`characters/${el.id}`}
          className={styles.link}
        >
          <Character
            className={styles.character}
            additionalInfo={
              el.userData
                ? {
                    constants: el.userData.constants,
                    level: el.userData.level,
                    critValue: el.userData.critValue || 0,
                  }
                : undefined
            }
            name={t(el.localeName)}
            {...el}
          />
        </Link>
      ))}
    </Paper>
  );
};
