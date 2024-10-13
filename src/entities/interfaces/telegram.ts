export interface TgResponseQuery {
  id: string;
  first_name?: string | null;
  username?: string | null;
  photo_url?: string | null;
  auth_date: number;
  hash: string;
}