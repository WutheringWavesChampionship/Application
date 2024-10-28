'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '@entities/context';
import { IWeapon } from '@entities/interfaces';
import { UserWeapons } from '@widgets/UserWeapons';

interface Props {
  className?: string;
  data: IWeapon[];
}

export const UserWeaponsPage = ({ className, data }: Props) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <></>;
  }
  return (
    <div className={classNames(styles.wrapper, className)}>
      <UserWeapons data={data} id={user.id} />
    </div>
  );
};
