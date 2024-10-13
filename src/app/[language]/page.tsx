'use client'
import { useContext } from "react";
import styles from "./page.module.scss";
import { UserContext } from "@entities/context";
import { AuthorizedLayout } from "@app/layouts/Authorized";
import { LanguageEnum } from "@entities/constants";

interface Props {
  params: { language: LanguageEnum };
}
export default function Home({ params: { language } }: Props) {
  const { user } = useContext(UserContext);
  return (
    <AuthorizedLayout lang={language}>
      <div className={styles.wrapper}>
        main page
        {user?.id}
      </div>
    </AuthorizedLayout>
  );
}
