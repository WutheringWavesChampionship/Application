'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useGetUserCharacter } from './hook';
import Link from 'next/link';
import { Paper } from '@shared/ui/Paper';
import { IWeapon } from '@entities/interfaces';
import { Button } from '@shared/ui/Button';
import { Weapon } from '@shared/ui/Weapon';

interface Props {
  className?: string;
  id: number;
  data: IWeapon[];
}

export const UserWeapons = ({ className, id, data }: Props) => {
  const { userData, t, loading } = useGetUserCharacter({ id, data });
  return (
    <Paper className={classNames(styles.wrapper, className)} loading={loading}>
      {userData.map((el) => (
        <Link
          key={`weapon-${el.id}`}
          href={`weapons/${el.id}`}
          className={styles.link}
        >
          <Weapon
            className={styles.character}
            additionalInfo={
              el.userData
                ? {
                    constants: el.userData.constants,
                    level: el.userData.level,
                  }
                : undefined
            }
            {...el}
            name={t(el.name)}
          />
        </Link>
      ))}
      <Link href={'/settings'}>
        <Button className={styles.back}>{'back'}</Button>
      </Link>
    </Paper>
  );
};
