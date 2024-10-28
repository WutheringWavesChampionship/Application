'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { LanguageEnum } from '@entities/constants';
import { CharacterWidget } from '@widgets/Character';
import { ICharacter } from '@entities/interfaces';

interface Props {
  className?: string;
  language: LanguageEnum;
  data: ICharacter;
}

export const CharacterPage = ({ className, data }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <CharacterWidget data={data} />
    </div>
  );
};
