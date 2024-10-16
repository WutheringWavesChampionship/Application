'use server';
import { AppDataSource } from '../db/data-source';

export const runMigration = async () => {
  const source = await AppDataSource.initialize();
  const result = await source.runMigrations();
  await AppDataSource.destroy();
  return result.length;
};
