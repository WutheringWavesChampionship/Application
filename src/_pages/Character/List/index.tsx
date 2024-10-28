'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { UserCharacters } from '@widgets/UserCharacters';
import { useContext } from 'react';
import { UserContext } from '@entities/context';
import { ICharacter } from '@entities/interfaces';

interface Props {
  className?: string;
  characters: ICharacter[];
}

export const UserCharactersPage = ({ className, characters }: Props) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <></>;
  }
  return (
    <div className={classNames(styles.wrapper, className)}>
      <UserCharacters characters={characters} id={user.id} />
    </div>
  );
};
