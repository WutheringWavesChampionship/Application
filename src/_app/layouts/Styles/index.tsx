import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import styles from './styles.module.scss';
import '../../styles/index.scss';
import Image from 'next/image';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 400 500 600 700 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 400 500 600 700 900',
});

interface Props {
  children: React.ReactNode;
}

export const StylesLayout = ({ children }: Props) => {
  return (
    <body
      className={classNames(geistSans.style, geistMono.style, styles.wrapper)}
    >
      <ToastContainer />
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          width={1024}
          height={980}
          src={'/background/shores.jpg'}
          alt="background"
        />
      </div>
      <main className={styles.main}>{children}</main>
    </body>
  );
};
