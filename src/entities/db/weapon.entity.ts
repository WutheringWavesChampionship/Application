import { Entity, Column } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { IWeapon, RarityEnum, STATS_TYPES } from '@entities/interfaces';
import { WEAPON_TYPES } from '@entities/interfaces/weapon';

@Entity('weapons')
export class WeaponEntity extends BaseEntity implements IWeapon {
  @Column({ unique: true })
  name!: string;
  @Column({
    enum: [
      STATS_TYPES.ATTACK,
      STATS_TYPES.CRIT_CHANCE,
      STATS_TYPES.CRIT_DAMAGE,
      STATS_TYPES.ENERGY_REGENERATION,
      STATS_TYPES.DEFENSE,
    ],
    type: 'enum',
  })
  mainStat!: STATS_TYPES;

  @Column({ type: 'decimal' })
  statValue!: number;

  @Column({ type: 'int' })
  baseAttack!: number;

  @Column()
  imagePath!: string;

  @Column({
    enum: [
      WEAPON_TYPES.BROAD_BLADE,
      WEAPON_TYPES.GAUNTLETS,
      WEAPON_TYPES.PISTOLS,
      WEAPON_TYPES.RECTIFIER,
      WEAPON_TYPES.SWORD,
    ],
    type: 'enum',
  })
  type!: WEAPON_TYPES;

  @Column({
    enum: [RarityEnum.EPIC, RarityEnum.LEGENDARY, RarityEnum.COMMON],
    type: 'enum',
    default: RarityEnum.EPIC,
  })
  rarity!: RarityEnum;
}
