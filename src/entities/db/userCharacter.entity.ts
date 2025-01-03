import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { UserEntity } from './user.entity';
import { CharacterEntity } from './character.entity';
import { UserData } from '@entities/interfaces/character';

@Entity('user_characters')
export class UserCharacterEntity extends BaseEntity implements UserData {
  @ManyToOne(() => UserEntity, (entity) => entity.id)
  @JoinColumn({
    name: 'userId',
  })
  user!: UserEntity;
  @Column()
  userId!: number;

  @ManyToOne(() => CharacterEntity, (entity) => entity.id)
  @JoinColumn({
    name: 'characterId',
  })
  character!: CharacterEntity;
  @Column()
  characterId!: number;

  @Column({ default: 0, type: 'smallint' })
  constants!: number;

  @Column({ default: 1, type: 'smallint' })
  level!: number;

  @Column({ nullable: true, type: 'smallint' })
  critValue?: number;
}
