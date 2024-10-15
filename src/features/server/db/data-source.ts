import { CharacterEntity, UserEntity } from '@entities/db';
import { DataSource } from 'typeorm';
import * as Migrations from './migrations';
import 'server-only'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  logging: false,
  synchronize: true,
  entities: [UserEntity, CharacterEntity],
  migrations: Object.values(Migrations)
});

