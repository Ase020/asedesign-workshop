"use client";

import { signIn } from "next-auth/react";
import styles from "./page.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => signIn("google")}>Log in with Google</button>
    </div>
  );
};

export default Login;
