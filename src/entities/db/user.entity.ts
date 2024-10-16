import { Entity, Column } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { IUserFull } from '@entities/interfaces';

@Entity('users')
export class UserEntity extends BaseEntity implements IUserFull {
  @Column({ unique: true })
  username!: string;

  @Column({ nullable: true })
  password!: string;

  @Column({ nullable: true })
  photo_url?: string;

  @Column()
  auth_date!: Date;

  @Column({ unique: true, nullable: true })
  telegram_id?: string;
}
