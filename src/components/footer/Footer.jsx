import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  let now = new Date();
  const year = now.getFullYear();

  return (
    <footer className={styles.container}>
      <div>©{year} aseDesign. All rights reserved.</div>
      <div className={styles.socials}>
        <Image
          src="/1.png"
          width={22}
          height={22}
          className={styles.icon}
          alt="facebook"
        />
        <Image
          src="/2.png"
          width={22}
          height={22}
          className={styles.icon}
          alt="instagram"
        />
        <Image
          src="/3.png"
          width={22}
          height={22}
          className={styles.icon}
          alt="twitter"
        />
        <Image
          src="/4.png"
          width={22}
          height={22}
          className={styles.icon}
          alt="youtube"
        />
      </div>
    </footer>
  );
};

export default Footer;
