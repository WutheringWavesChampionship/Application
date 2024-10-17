'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useGetUserCharacter } from './hook';
import { Character } from '@shared/ui/Character';
import Link from 'next/link';

interface Props {
  className?: string;
  id: number;
}

export const UserCharacters = ({ className, id }: Props) => {
  const { data, t } = useGetUserCharacter(id);
  return (
    <div className={classNames(styles.wrapper, className)}>
      {data.map((el) => (
        <Link
          key={`character-${el.id}`}
          href={`characters/${el.id}`}
          className={styles.link}
        >
          <Character
            className={styles.character}
            additionalInfo={{
              constants: el.userData?.constants || 'n/a',
              level: el.userData?.level || 0,
              critValue: el.userData?.critValue || 0,
            }}
            name={t(el.localeName)}
            {...el}
          />
        </Link>
      ))}
    </div>
  );
};
