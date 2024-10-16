'use client'
import { ADMIN_LOGIN_TOKEN_KEY, AppRoutesEnum, LanguageEnum } from "@entities/constants";
import { UserContext } from "@entities/context";
import { adminLogin } from "@features/server/auth/adminLogin";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  lang: LanguageEnum;
}

export const UnauthorizedLayout = ({ children, lang }: Props) => {
  const router = useRouter()
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adminToken = window.localStorage.getItem(ADMIN_LOGIN_TOKEN_KEY)
      if (adminToken) {
        adminLogin(adminToken)
      }
    }
    if (user) {
      router.push(`/${lang}${AppRoutesEnum.MAIN}`)
    }
  }, [lang, router, user])

  return children;
}