import classNames from 'classnames';
import { ElementEnum } from '@entities/constants';
import Image from 'next/image';
import styles from './style.module.scss';

interface Props {
  className?: string;
  localeName: string;
  imagePath: string;
  element: ElementEnum;
}

export const Character = ({ className, element, imagePath, localeName }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.image}>
        <Image width={100} height={100} src={imagePath} alt='localeName' />
      </div>
      <p>{localeName}</p>
    </div>
  );
}