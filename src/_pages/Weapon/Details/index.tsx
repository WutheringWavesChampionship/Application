'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { LanguageEnum } from '@entities/constants';
import { IWeapon } from '@entities/interfaces';
import { WeaponWidget } from '@widgets/Weapon';

interface Props {
  className?: string;
  language: LanguageEnum;
  data: IWeapon;
}

export const WeaponPage = ({ className, data }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <WeaponWidget data={data} />
    </div>
  );
};
