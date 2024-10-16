'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '@entities/context';
import Link from 'next/link';
import { LanguageEnum } from '@entities/constants';
import { logout } from '@features/server/auth/logout';

interface Props {
  className?: string;
  language: LanguageEnum;
}

export const MainPage = ({ className, language }: Props) => {
  const { user } = useContext(UserContext);
  return (
    <div className={classNames(styles.wrapper, className)}>
      <p>{user?.id}</p>
      <p>main page</p>
      <Link href={`/${language}/settings`}>settings</Link>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};
