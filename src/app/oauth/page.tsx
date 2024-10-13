import { SET_TOKEN_PATH, USER_TOKEN_COOKIE_NAME } from "@entities/constants";
import { TgResponseQuery } from "@entities/interfaces";
import { generateToken } from "@features/server/auth";
import { tgAuthorize, validateAuth } from "@features/server/tgAuth";
import { redirect } from "next/navigation";

type Props = Readonly<{
  searchParams: TgResponseQuery;
}>;

export default async function Oauth({ searchParams }: Props) {
  const isValid = await validateAuth(searchParams)
  if (isValid) {
    const user = await tgAuthorize(searchParams)
    const token = await generateToken({ auth_date: user.auth_date, id: user.id, first_name: user.first_name, username: user.username })
    return redirect(SET_TOKEN_PATH + `?${USER_TOKEN_COOKIE_NAME}=${token}`)
  } else {
    redirect('/auth')
  }
}
