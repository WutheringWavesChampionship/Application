'use client';
import classNames from 'classnames';
import { Loader } from '../Loader';
import styles from './styles.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'danger' | 'white';
  size?: 'small' | 'large' | 'tiny';
  width?: string | number;
  height?: string | number;
  loading?: boolean;
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'small',
  style,
  width,
  height,
  loading = false,
  children,
  onClick,
  type = 'button',
  ...props
}: Props) => {
  return (
    <button
      className={classNames(
        styles.wrapper,
        styles[size],
        styles[variant],
        { [styles.loading]: loading },
        className,
      )}
      style={{ width, height, ...style }}
      onClick={loading ? undefined : onClick}
      type={loading ? 'button' : type}
      {...props}
    >
      <div className={classNames(styles.loader, { [styles.show]: loading })}>
        <Loader size={24} />
      </div>
      {children}
    </button>
  );
};
