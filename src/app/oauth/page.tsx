import { USER_TOKEN_COOKIE_NAME } from "@entities/constants";
import { TgResponseQuery } from "@entities/interfaces";
import { generateToken } from "@features/server/auth";
import { tgAuthorize, validateAuth } from "@features/server/tgAuth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = Readonly<{
  searchParams: TgResponseQuery;
}>;

export default async function Oauth({ searchParams }: Props) {
  console.log(searchParams)
  const isValid = await validateAuth(searchParams)
  console.log(isValid)
  if (isValid) {
    const user = await tgAuthorize(searchParams)
    const token = generateToken(user)
    if (!token) {
      redirect('/auth')
    } else {
      cookies().set(USER_TOKEN_COOKIE_NAME, token)
    }
    redirect('/')
  } else {
    redirect('/auth')
  } 
}
