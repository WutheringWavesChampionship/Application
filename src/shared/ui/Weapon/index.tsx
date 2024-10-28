import classNames from 'classnames';
import Image from 'next/image';
import styles from './style.module.scss';
import { STATS_TYPES, UserData } from '@entities/interfaces';
import { useTranslation } from '@features/client';

interface Props {
  className?: string;
  name: string;
  imagePath: string;
  additionalInfo?: Partial<UserData>;
  mainStat: STATS_TYPES;
  statValue: number;
  baseAttack: number;
  description?: string;
}

export const Weapon = ({
  className,
  imagePath,
  name,
  additionalInfo,
  baseAttack,
  mainStat,
  statValue,
  description,
}: Props) => {
  const { t } = useTranslation('stats');
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div
        className={classNames(styles.imageWrapper)}
        title={`${t('attack')}: ${baseAttack}\n${t(mainStat)}: ${statValue}%\n${description}`}
      >
        <Image
          width={100}
          height={100}
          src={imagePath}
          alt={name}
          className={classNames(styles.image)}
        />
        {additionalInfo && (
          <div className={styles.additionalInfo}>
            <p>{additionalInfo.level}</p>
            {!!additionalInfo.constants && <p>{additionalInfo.constants}</p>}
          </div>
        )}
      </div>
      <p>{name}</p>
    </div>
  );
};
