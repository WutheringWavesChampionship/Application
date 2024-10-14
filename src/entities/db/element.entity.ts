import {
  Entity,
  Column,
} from 'typeorm';
import { BaseEntity } from './baseEntity';
import { ElementEnum } from '@entities/constants';

@Entity('elements')
export class ElementEntity extends BaseEntity {
  @Column({ enum: ElementEnum, type: 'enum' })
  name!: ElementEnum;
}
