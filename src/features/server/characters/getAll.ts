'use server'
import { CharacterEntity } from "@entities/db"
import { AppDataSource } from "../db/data-source"

export const getAll = async () => {
  const source = await AppDataSource.connect()
  const manager = source.manager
  const data = await manager.find(CharacterEntity, { order: { id: "ASC", element: 'ASC'} })
  await AppDataSource.close()
  return data
}