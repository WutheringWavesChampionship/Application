'use client'
import { useContext } from "react";
import styles from "./page.module.scss";
import { UserContext } from "@entities/context";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.wrapper}>
      main page
      {user?.id}
    </div>
  );
}
