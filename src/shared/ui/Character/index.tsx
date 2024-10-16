import classNames from 'classnames';
import { ElementEnum } from '@entities/constants';
import Image from 'next/image';
import styles from './style.module.scss';
import { UserData } from '@entities/interfaces';

interface Props {
  className?: string;
  localeName: string;
  imagePath: string;
  element: ElementEnum;
  additionalInfo?: Partial<UserData>;
}

export const Character = ({
  className,
  element,
  imagePath,
  localeName,
  additionalInfo,
}: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={classNames(styles.imageWrapper)}>
        <Image
          width={100}
          height={100}
          src={imagePath}
          alt="localeName"
          className={classNames(styles.image, styles[element])}
        />
        {additionalInfo && (
          <div className={styles.additionalInfo}>
            <p>{additionalInfo.level}</p>
            {!!additionalInfo.constants && <p>{additionalInfo.constants}</p>}
          </div>
        )}
      </div>
      <p>{localeName}</p>
    </div>
  );
};
