
'use client'
interface Props {
  radius?: number;
  size?: 'medium' | 'large' | 'small';
  redirect: string;
  botName: string;
  displayAvatar?: boolean;
  origin: string;
}

export const TelegramLoginButton = ({
  botName,
  redirect,
  radius = 10,
  size = 'medium',
  displayAvatar = false,
  origin,
}: Props) => {
  const searchParams = new URLSearchParams()
  searchParams.set('origin', origin)
  searchParams.set('return_to', origin + redirect)
  searchParams.set('size', size)
  searchParams.set('userpic', displayAvatar.toString())
  searchParams.set('radius', radius.toString())

  return (
    <iframe
      id={'telegram-login-WutheringWavesChampionship_bot'}
      src={`https://oauth.telegram.org/embed/${botName}?${searchParams.toString()}`}
      width={238}
      height={40}
      style={{overflow: 'hidden', colorScheme: 'dark light', border: 'none', height: 40, width: 238}}
    />

  );
}