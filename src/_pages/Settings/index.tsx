'use client'
import classNames from 'classnames';
import styles from './style.module.scss';
import { UserCharacters } from '@widgets/UserCharacters';
import { useContext } from 'react';
import { UserContext } from '@entities/context';

interface Props {
  className?: string;
}

export const UserSettings = ({ className }: Props) => {
  const { user } = useContext(UserContext)
  if (!user) {
    return <></>
  }
  return (
    <div className={classNames(styles.wrapper, className)}>
      <UserCharacters id={user.id} />
    </div>
  );
}