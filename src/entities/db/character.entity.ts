import { Entity, Column } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { ElementEnum, RarityEnum } from '@entities/constants';
import { ICharacter } from '@entities/interfaces/character';

@Entity('characters')
export class CharacterEntity extends BaseEntity implements ICharacter {
  @Column({ unique: true })
  localeName!: string;

  @Column()
  imagePath!: string;

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
    enum: [RarityEnum.COMMON, RarityEnum.LEGENDARY],
    type: 'enum',
    default: RarityEnum.COMMON,
  })
  rarity!: RarityEnum;
}
