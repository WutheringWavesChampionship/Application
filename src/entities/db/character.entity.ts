import {
  Entity,
  Column,
} from 'typeorm';
import { BaseEntity } from './baseEntity';
import { ElementEnum } from '@entities/constants';

@Entity('characters')
export class CharacterEntity extends BaseEntity {

  @Column({unique: true})
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
    ], type: 'enum'
  })
  element!: ElementEnum;
}
