import classNames from 'classnames';
import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';
import { ErrorAndLabelSkeleton } from '../../ErrorAndLabelSkeleton';
import styles from './styles.module.scss';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  wrapperClassName?: string;
  inputClassName?: string;
  className?: undefined;
  label?: string;
  error?: string | false;
  leftItem?: JSX.Element;
  rightItem?: JSX.Element;
  placeholder?: string;
}

export const TextField = ({
  wrapperClassName,
  inputClassName,
  error,
  label,
  leftItem,
  rightItem,
  placeholder,
  disabled,
  ...props
}: Props) => {
  return (
    <ErrorAndLabelSkeleton
      error={error}
      label={label}
      wrapperClassName={wrapperClassName}
      disabled={disabled}
    >
      {leftItem}
      <input
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        className={classNames(styles.input, inputClassName, {
          [styles.error]: !!error,
        })}
      />
      {rightItem}
    </ErrorAndLabelSkeleton>
  );
};
