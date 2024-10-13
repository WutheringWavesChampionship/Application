import { TgResponseQuery } from "@entities/interfaces/";
import { AppDataSource } from "../db/data-source";
import { UserEntity } from "@entities/db";

export const tgAuthorize = async ({auth_date, first_name, id, photo_url, username}: Omit<TgResponseQuery, 'hash'>) =>{
 const dataSource = await AppDataSource.initialize()
  const manager = dataSource.manager
  const existed = await manager.findOneBy(UserEntity, {id})
  if (existed) {
    return existed
  } else {
    const user = new UserEntity()
    user.id = id
    user.auth_date = new Date(Number(auth_date) * 1000);
    user.photo_url = photo_url || undefined
    user.first_name = first_name || undefined
    user.username = username || undefined
    return manager.save(user)
  }
}