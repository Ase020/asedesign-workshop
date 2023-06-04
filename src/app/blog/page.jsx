import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
    // next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map(({ _id, title, desc, image }) => (
        <Link href={`blog/${_id}`} className={styles.container} key={_id}>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
