import { Entity, Column } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { ElementEnum, ICharacter, RarityEnum } from '@entities/interfaces';
import { WEAPON_TYPES } from '@entities/interfaces/weapon';

@Entity('characters')
export class CharacterEntity extends BaseEntity implements ICharacter {
  @Column({ unique: true })
  localeName!: string;

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
  weaponType!: WEAPON_TYPES;

  @Column({
    enum: [
      ElementEnum.AERO,
      ElementEnum.FUSION,
      ElementEnum.GLACIO,
      ElementEnum.HAVOC,
      ElementEnum.SPECTRO,
      ElementEnum.ELECTRO,
    ],
    type: 'enum',
  })
  element!: ElementEnum;

  @Column({
    enum: [RarityEnum.LEGENDARY, RarityEnum.EPIC],
    type: 'enum',
    default: RarityEnum.EPIC,
  })
  rarity!: RarityEnum;
}
