import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=travel"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
      </div>

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
