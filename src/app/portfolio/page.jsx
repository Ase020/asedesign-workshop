import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "aseDesign | Our Works",
  description: "Get to know who we are and what we do.",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>

        <Link className={styles.item} href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href="/portfolio/applications">
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
