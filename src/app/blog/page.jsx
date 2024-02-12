import React from "react";
import styles from "./blogPage.module.css";
import Cardlist from "@/components/cardList/Cardlist";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParam }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
