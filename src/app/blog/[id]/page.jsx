import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  // const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
  const res = await fetch(
    `https://asedesign-workshop.vercel.app/api/posts/${id}`,
    {
      cache: "no-store",
      // next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: `aseDesign | ${post.title}`,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const { title, desc, content, image, username } = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16787103/pexels-photo-16787103/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={image} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
