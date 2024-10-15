'use server'
import { AppDataSource } from "../db/data-source"

export const runMigration = async () => {
  const source = await AppDataSource.connect()
  const result = await source.runMigrations();
  await AppDataSource.close()
  return result.length
}