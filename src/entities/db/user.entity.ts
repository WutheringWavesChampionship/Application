import {
  Entity,
  Column,
} from 'typeorm';
import { BaseEntity } from './baseEntity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({unique:  true})
  username!: string;

  @Column({nullable: true})
  password!: string;

  @Column({nullable: true})
  photo_url?: string;

  @Column()
  auth_date!: Date;

  @Column({unique:  true, nullable: true})
  telegram_id?: string;
}
