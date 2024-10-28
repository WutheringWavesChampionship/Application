'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import Link from 'next/link';
import { LanguageEnum } from '@entities/constants';
import { logout } from '@features/server/auth/logout';
import { Paper } from '@shared/ui/Paper';
import { Button } from '@shared/ui/Button';

interface Props {
  className?: string;
  language: LanguageEnum;
}

export const MainPage = ({ className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Paper className={styles.paper}>
        <Link href={'settings'}>
          <Button>settings</Button>
        </Link>
        <Button onClick={() => logout()}>logout</Button>
      </Paper>
    </div>
  );
};
