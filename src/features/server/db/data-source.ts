import { UserEntity } from '@entities/db';
import { DataSource } from 'typeorm';
import 'server-only'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  logging: false,
  synchronize: true,
  entities: [UserEntity],
});

