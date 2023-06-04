"use client";

import { signIn } from "next-auth/react";
import styles from "./page.module.css";

export const metadata = {
  title: "aseDesign | Log In",
  description: "Home of the best digital services on the Web.",
};

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Log In</button>
      </form>

      <button onClick={() => signIn("google")}>Log in with Google</button>
    </div>
  );
};

export default Login;
