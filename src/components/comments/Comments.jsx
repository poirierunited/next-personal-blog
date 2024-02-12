import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment </Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>12.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit incidunt voluptate magni aut numquam architecto ad
            obcaecati. Similique assumenda et reiciendis voluptatibus, pariatur
            exercitationem id nisi, illo, iste placeat vitae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
