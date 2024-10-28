'use client';
import classNames from 'classnames';
import styles from './style.module.scss';
import { IWeapon } from '@entities/interfaces';
import { useCharacterWidget } from './hook';
import { Paper } from '@shared/ui/Paper';
import { Button } from '@shared/ui/Button';
import { TextField } from '@shared/ui/input';
import { TextContent } from '@shared/ui/TextContent';
import { Weapon } from '@shared/ui/Weapon';

interface Props {
  className?: string;
  data: IWeapon;
}

export const WeaponWidget = ({ className, data }: Props) => {
  const {
    t,
    loading,
    userData,
    createNew,
    saveChanges,
    changeLevel,
    actionsLoading,
    changeConstants,
    deleteCharacter,
    router,
  } = useCharacterWidget(data.id);
  return (
    <Paper className={classNames(styles.wrapper, className)} loading={loading}>
      <Weapon className={styles.character} {...data} name={t(data.name)} />

      <Button className={styles.back} variant="secondary" onClick={router.back}>
        back
      </Button>

      {userData ? (
        <div className={styles.userData}>
          <div className={styles.constants}>
            <Button
              disabled={userData.constants === 0}
              onClick={() => changeConstants(-1)}
              className={styles.button}
            >
              -
            </Button>
            <TextContent fontWeight="semibold" size={24}>
              {userData.constants}
            </TextContent>
            <Button
              disabled={userData.constants === 6}
              onClick={() => changeConstants(1)}
              className={styles.button}
            >
              +
            </Button>
          </div>
          <label>
            <TextField
              label={'level'}
              value={userData.level}
              onChange={(ev) => changeLevel(ev.target.value)}
            />
          </label>

          <div className={styles.actions}>
            <Button
              loading={actionsLoading}
              className={styles.submit}
              onClick={() => saveChanges(userData)}
            >
              save
            </Button>
            <Button
              loading={actionsLoading}
              variant="danger"
              onClick={() => deleteCharacter(userData.id)}
            >
              delete
            </Button>
          </div>
        </div>
      ) : (
        <Button
          loading={actionsLoading}
          className={styles.submit}
          onClick={createNew}
        >
          add new
        </Button>
      )}
    </Paper>
  );
};
