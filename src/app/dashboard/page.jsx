"use client";

import useSWR from "swr";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };

  //   getData();
  // }, []);

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/loader.svg"
          width={50}
          height={50}
          alt="loader"
          className="object-contain"
        />
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    return router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.data?.user.name,
        }),
      });

      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {}
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/loader.svg"
                width={50}
                height={50}
                alt="loader"
                className="object-contain"
              />
            </div>
          ) : (
            data?.map(({ _id, image, title }) => (
              <div className={styles.post} key={_id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={image}
                    alt={title}
                    className={styles.postImage}
                    width={200}
                    height={100}
                  />
                </div>

                <h2 className={styles.postTitle}>{title}</h2>

                <span
                  className={styles.delete}
                  onClick={() => handleDelete(_id)}
                >
                  ❌
                </span>
              </div>
            ))
          )}
          <hr className={styles.hr} />
        </div>

        <form className={styles.newPost} onSubmit={handleSubmit}>
          <h1 className={styles.newPostTitle}>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input type="text" placeholder="Image Url" className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder="Article"
            rows="10"
            cols="30"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
