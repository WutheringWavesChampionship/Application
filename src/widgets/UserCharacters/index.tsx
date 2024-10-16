'use client'
import classNames from 'classnames';
import styles from './style.module.scss';
import { useGetUserCharacter } from './hook';
import { Character } from '@shared/ui/Character';

interface Props {
  className?: string;
  id: number;
}

export const UserCharacters = ({ className, id }: Props) => {
  const { data } = useGetUserCharacter(id)
  return (
    <div className={classNames(styles.wrapper, className)}>
      {data.map((el) => (
        <Character key={`character-${el.id}`} additionalInfo={{ constants: el.userData?.constants || 'n/a', level: el.userData?.level || 0 }} {...el} />
      ))}
    </div>
  );
}