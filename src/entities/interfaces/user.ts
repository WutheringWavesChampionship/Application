export interface JWTPayload {
  id: string;
  auth_date: Date;
  first_name?: string;
  username?: string;
}