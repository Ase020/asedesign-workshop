import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
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
      {data.map(({ id, title, body }) => (
        <Link href="blog/1" className={styles.container} key={id}>
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
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
