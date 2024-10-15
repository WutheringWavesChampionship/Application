import classNames from 'classnames';
import styles from './style.module.scss';
import { getAll } from '@features/server/characters';
import { Character } from '@shared/ui/Character';

interface Props {
 className?: string;
}

export const UserSettings = async ({ className }: Props) => {
  const characters = await getAll()
  // console.log(characters)
  return (
    <div className={classNames(styles.wrapper, className)}>
      {characters.map((el)=>(
        <Character key={`character-${el.id}`} {...el} />
      ))}
    </div>
  );
}