import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components";
import styles from "./page.module.css";

import { items } from "./data.js";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(({ id, title, image, desc }) => (
        <div className={styles.item} key={id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
            <Button url="#" text="See more" />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt="image"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
