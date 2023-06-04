"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/loader.svg"
          width={50}
          height={50}
          alt="loader"
          className="object-contain"
        />
      </div>
    );
  }

  if (session.status === "authenticated") {
    return router?.push("/dashboard");
  }

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

      <button
        onClick={() => signIn("google")}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>

      <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button>

      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/signup">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
