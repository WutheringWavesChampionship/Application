'use client'
import { AppRoutesEnum, LanguageEnum } from "@entities/constants";
import { UserContext } from "@entities/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface Props {
  children: React.ReactNode;
  lang: LanguageEnum;
}

export const AuthorizedLayout = ({ children, lang }: Props) => {
  const router = useRouter()
  const { user } = useContext(UserContext);
  if (!user) {
    router.push(`/${lang}${AppRoutesEnum.AUTH}`)
  } else {
    return children;
  }
}