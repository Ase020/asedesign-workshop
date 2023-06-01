import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16500135/pexels-photo-16500135/free-photo-of-man-people-woman-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Technical Writing</h1>
          <p className={styles.desc}>
            Enumerating objects: 17, done. Counting objects: 100% (17/17), done.
            Delta compression using up to 12 threads Compressing objects: 100%
            (10/10), done. Writing objects: 100% (10/10), 1.96 KiB | 20.00
            KiB/s, done. Total 10 (delta 3), reused 0 (delta 0), pack-reused 0
            remote: Resolving deltas: 100% (3/3), completed with 3 local
            objects. To github.com:Ase020/asedesign-workshop.git
            f4ba9c0..d558431 main - main
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
