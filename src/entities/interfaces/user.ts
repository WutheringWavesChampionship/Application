export interface JWTPayload {
  id: number;
  auth_date: Date;
  first_name?: string;
  username?: string;
}

export interface IUserFull {
  username: string;
  password: string;
  photo_url?: string;
  auth_date: Date;
  telegram_id?: string;
}
