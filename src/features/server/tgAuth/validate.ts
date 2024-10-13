import { TgResponseQuery } from "@entities/interfaces";
import { createHash, createHmac } from "crypto";

export const validateAuth = async ({auth_date, first_name, hash, id, photo_url, username}: TgResponseQuery) =>{
  const data_check_string = `auth_date=${auth_date}\nfirst_name=${first_name}\nid=${id}\nphoto_url=${photo_url}\nusername=${username}`;
  const tgBotToken = process.env.TG_BOT_TOKEN
  if (!tgBotToken) {
    return null;
  }
  const secret_key = createHash('sha256').update(tgBotToken).digest();
  const hmac = createHmac('sha256', secret_key)
    .update(data_check_string)
    .digest('hex');
  if (hmac === hash) {
    return true;
  } else {
    return false;
  }
}