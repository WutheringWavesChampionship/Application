'use client';
import classNames from 'classnames';
import { useTab } from '../hook';
import styles from './Tab.module.scss';

interface Props {
  className?: string;
  labels: Array<string | JSX.Element>;
  tabs: Array<string | JSX.Element>;
  selected?: number;
  disabled?: Array<boolean>;
  onChange?: (val: number) => void | Promise<void>;
}

export const Tab = ({
  className,
  labels,
  tabs,
  selected,
  disabled = [],
  onChange,
}: Props) => {
  const { active, setActive } = useTab({ selected, onChange });
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.labels}>
        {labels.map((el, index) => {
          return (
            <button
              className={classNames(styles.label, {
                [styles.active]: active === index,
              })}
              disabled={disabled[index]}
              key={`tab-label-${index}`}
              onClick={() => {
                setActive(index);
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
      <div className={styles.tabs}>{tabs[active]}</div>
    </div>
  );
};
