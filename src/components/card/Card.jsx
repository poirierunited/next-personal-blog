import Image from "next/image";
import styles from "./card.module.css";
import React from "react";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Excepturi, perferendis illo?</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, ipsa dolorem. Odit dolorum facere totam saepe numquam
          ratione quisquam nemo excepturi ipsum adipisci consectetur ducimus a
          eveniet, repellendus delectus in!
        </p>
        <Link href="/" className={styles.link}>
          Reade More
        </Link>
      </div>
    </div>
  );
};

export default Card;
