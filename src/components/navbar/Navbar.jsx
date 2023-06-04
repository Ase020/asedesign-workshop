"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import styles from "./navbar.module.css";
import { Theme } from "..";

const links = [
  //   {
  //     id: 1,
  //     title: "Home",
  //     url: "/",
  //   },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        ase<span className={styles.sublogo}>Design</span>.
      </Link>

      <div className={styles.links}>
        <Theme />
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}

        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>

      {/* Hamburger menu */}
      <div className={styles.hamburger}>
        <Image
          src="/menu.svg"
          alt="menu"
          height={30}
          width={30}
          onClick={() => setNavOpen((prev) => !prev)}
        />

        {navOpen && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className={styles.link}
                onClick={() => setNavOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            {session.status === "authenticated" && (
              <button className={styles.logout} onClick={signOut}>
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
