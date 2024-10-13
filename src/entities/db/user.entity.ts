import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column()
  first_name?: string;

  @Column()
  username?: string;

  @Column()
  photo_url?: string;

  @Column()
  auth_date!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
