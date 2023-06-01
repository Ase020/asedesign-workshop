import Image from "next/image";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Technical Writing</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16787103/pexels-photo-16787103/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Felix Ase</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16787103/pexels-photo-16787103/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit
          eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit
          eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit
          eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
