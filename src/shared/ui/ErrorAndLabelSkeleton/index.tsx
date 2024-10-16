import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  wrapperClassName?: string;
  borderClassName?: string;
  label?: string;
  error?: string | false;
  hideBorder?: boolean;
  disabled?: boolean;
  children:
    | JSX.Element
    | Array<JSX.Element | false | undefined | null | string>;
}

export const ErrorAndLabelSkeleton = ({
  wrapperClassName,
  borderClassName,
  error,
  label,
  children,
  disabled = false,
  hideBorder = false,
}: Props) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        { [styles.disabled]: !!disabled },
        wrapperClassName,
      )}
    >
      {label && (
        <p className={classNames(styles.label, { [styles.error]: !!error })}>
          {label}
        </p>
      )}
      <div
        className={classNames(styles.border, borderClassName, {
          [styles.error]: !!error,
          [styles.hideBorder]: hideBorder,
        })}
      >
        {children}
      </div>
      {error && (
        <p className={classNames(styles.error, styles.label, styles.errorText)}>
          {error}
        </p>
      )}
    </div>
  );
};
