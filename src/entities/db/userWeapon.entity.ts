import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { UserEntity } from './user.entity';
import { UserData } from '@entities/interfaces/character';
import { WeaponEntity } from './weapon.entity';

@Entity('user_weapons')
export class UserWeaponEntity extends BaseEntity implements UserData {
  @ManyToOne(() => UserEntity, (entity) => entity.id)
  @JoinColumn({
    name: 'userId',
  })
  user!: UserEntity;
  @Column()
  userId!: number;

  @ManyToOne(() => WeaponEntity, (entity) => entity.id)
  @JoinColumn({
    name: 'weaponId',
  })
  weapon!: WeaponEntity;
  @Column()
  weaponId!: number;

  @Column({ default: 0, type: 'smallint' })
  constants!: number;

  @Column({ default: 1, type: 'smallint' })
  level!: number;
}
