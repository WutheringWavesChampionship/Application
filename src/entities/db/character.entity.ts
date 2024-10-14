import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './baseEntity';
import { ElementEntity } from './element.entity';

@Entity('characters')
export class CharacterEntity extends BaseEntity {

  @Column()
  localeName!: string;

  @Column()
  imagePath!: string;

  @ManyToOne(() => ElementEntity, (dict) => dict.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'elementId',
  })
  element!: ElementEntity;
  @Column()
  elementId!: number;
}
