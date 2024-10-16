import classNames from 'classnames';
import { type DetailedHTMLProps, type TextareaHTMLAttributes } from 'react';
import { ErrorAndLabelSkeleton } from '../..';
import styles from './style.module.scss';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  wrapperClassName?: string;
  inputClassName?: string;
  className?: undefined;
  label?: string;
  error?: string;
  leftItem?: JSX.Element;
  rightItem?: JSX.Element;
}

export const StyledTextAria = ({
  wrapperClassName,
  inputClassName,
  error,
  label,
  leftItem,
  rightItem,
  ...props
}: Props) => {
  return (
    <ErrorAndLabelSkeleton
      error={error}
      label={label}
      wrapperClassName={wrapperClassName}
    >
      {leftItem}
      <textarea
        {...props}
        className={classNames(styles.input, inputClassName, {
          [styles.error]: !!error,
        })}
      />
      {rightItem}
    </ErrorAndLabelSkeleton>
  );
};
