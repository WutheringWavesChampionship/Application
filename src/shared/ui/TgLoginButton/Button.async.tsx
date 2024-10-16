import dynamic from 'next/dynamic';

export const TelegramLoginButton = dynamic(() => import('./Button'), {
  ssr: true,
});
