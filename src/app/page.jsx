import Image from "next/image";
import styles from "./page.module.css";
import heroImg from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together the teams from the
          global tech community.
        </p>
        <button className={styles.button}>See our works</button>
      </div>

      <div className={styles.item}>
        <Image src={heroImg} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}
