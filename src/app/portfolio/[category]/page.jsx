import { Button } from "@/components";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Enumerating objects: 17, done. Counting objects: 100% (17/17), done.
            Delta compression using up to 12 threads Compressing objects: 100%
            (10/10), done. Writing objects: 100% (10/10), 1.96 KiB | 20.00
            KiB/s, done. Total 10 (delta 3), reused 0 (delta 0), pack-reused 0
            remote: Resolving deltas: 100% (3/3), completed with 3 local
            objects. To github.com:Ase020/asedesign-workshop.git
            f4ba9c0..d558431 main - main
          </p>
          <Button url="#" text="See more" />
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Enumerating objects: 17, done. Counting objects: 100% (17/17), done.
            Delta compression using up to 12 threads Compressing objects: 100%
            (10/10), done. Writing objects: 100% (10/10), 1.96 KiB | 20.00
            KiB/s, done. Total 10 (delta 3), reused 0 (delta 0), pack-reused 0
            remote: Resolving deltas: 100% (3/3), completed with 3 local
            objects. To github.com:Ase020/asedesign-workshop.git
            f4ba9c0..d558431 main - main
          </p>
          <Button url="#" text="See more" />
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Enumerating objects: 17, done. Counting objects: 100% (17/17), done.
            Delta compression using up to 12 threads Compressing objects: 100%
            (10/10), done. Writing objects: 100% (10/10), 1.96 KiB | 20.00
            KiB/s, done. Total 10 (delta 3), reused 0 (delta 0), pack-reused 0
            remote: Resolving deltas: 100% (3/3), completed with 3 local
            objects. To github.com:Ase020/asedesign-workshop.git
            f4ba9c0..d558431 main - main
          </p>
          <Button url="#" text="See more" />
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
