import styles from './styles.module.scss';

interface Props {
  radius?: number;
  size?: 'medium' | 'large' | 'small';
  redirect: string;
  botName: string;
  displayAvatar?: boolean;
}

const Button = ({
  botName,
  redirect,
  radius = 10,
  size = 'medium',
  displayAvatar,
}: Props) => {
  return (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{
        __html: `<script async 
          src="https://telegram.org/js/telegram-widget.js?22" 
          data-telegram-login="${botName}"
           data-userpic="${displayAvatar}" 
           data-radius="${radius}" 
           data-size="${size}" 
           data-auth-url="${redirect}"
           data-request-access="write"></script>`,
      }}
    />
  );
};

export default Button