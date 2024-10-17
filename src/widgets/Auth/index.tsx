'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { Tab } from '@shared/ui/Tab';
import { TelegramLoginButton } from '@shared/ui/TgLoginButton';
import { TG_AUTH_PATH } from '@entities/constants';
import { Divider } from '@shared/ui/Divider';
import { LoginWidget } from './Login';
import { RegistrationWidget } from './Registration';
import { useTranslation } from '@features/client';
import { useMemo } from 'react';
import { Paper } from '@shared/ui/Paper';

interface Props {
  className?: string;
  botName: string;
}

export const AuthWidget = ({ className, botName }: Props) => {
  const { t } = useTranslation('common');
  const labels = useMemo(() => {
    return [t('login'), t('registration')];
  }, [t]);
  const Tabs = [
    <LoginWidget key={'login'} />,
    <RegistrationWidget key={'registration'} />,
  ];

  return (
    <Paper className={classNames(styles.wrapper, className)}>
      <TelegramLoginButton
        botName={botName}
        redirect={TG_AUTH_PATH}
        displayAvatar={true}
        radius={10}
        size={'large'}
      />
      <Divider />
      <Tab labels={labels} tabs={Tabs} />
    </Paper>
  );
};
