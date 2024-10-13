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
  @PrimaryColumn('varchar')
  id!: string;

  @Column({nullable: true})
  first_name?: string;

  @Column({nullable: true})
  username?: string;

  @Column({nullable: true})
  photo_url?: string;

  @Column()
  auth_date!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
