'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '@entities/context';
import { Paper } from '@shared/ui/Paper';
import Link from 'next/link';
import { Button } from '@shared/ui/Button';

interface Props {
  className?: string;
}

export const UserSettings = ({ className }: Props) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <></>;
  }
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Paper className={styles.paper}>
        <Link href={'/characters'}>
          <Button>characters</Button>
        </Link>
        <Link href={'/weapons'}>
          <Button>weapons</Button>
        </Link>
        <Link href={'/'}>
          <Button>main</Button>
        </Link>
      </Paper>
    </div>
  );
};
