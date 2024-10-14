'use client'
import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '@entities/context';

interface Props {
  className?: string;
}

export const MainPage = ({ className }: Props) => {
  const { user } = useContext(UserContext);
  return (
    <div className={classNames(styles.wrapper, className)}>
      <p>{user?.id}</p>
      <p>main page</p>
    </div>
  );
}