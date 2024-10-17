'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { ICharacter } from '@entities/interfaces';
import { useCharacterWidget } from './hook';
import { Character } from '@shared/ui/Character';

interface Props {
  className?: string;
  data: ICharacter;
}

export const CharacterWidget = ({ className, data }: Props) => {
  const {
    t,
    userData,
    createNew,
    changeLevel,
    changeCritValue,
    changeConstants,
    saveChanges,
    deleteCharacter,
  } = useCharacterWidget(data.id);
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Character
        className={styles.character}
        name={t(data.localeName)}
        {...data}
      />
      {userData ? (
        <div className={styles.userData}>
          <div className={styles.constants}>
            <button
              disabled={userData.constants === 0}
              onClick={() => changeConstants(-1)}
              className={styles.button}
            >
              -
            </button>
            <p>{userData.constants}</p>
            <button
              disabled={userData.constants === 6}
              onClick={() => changeConstants(1)}
              className={styles.button}
            >
              +
            </button>
          </div>
          <label>
            <p>level</p>
            <input
              type="text"
              value={userData.level}
              onChange={(ev) => changeLevel(ev.target.value)}
            />
          </label>
          <label>
            <p>crit value</p>
            <input
              type="text"
              value={userData.critValue || ''}
              onChange={(ev) => changeCritValue(ev.target.value)}
            />
          </label>
          <button onClick={() => saveChanges(userData)}>save</button>
          <button onClick={() => deleteCharacter(userData.id)}>delete</button>
        </div>
      ) : (
        <button onClick={createNew}>add new</button>
      )}
    </div>
  );
};
