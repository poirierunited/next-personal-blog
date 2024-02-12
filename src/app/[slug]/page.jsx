import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Username</span>
              <span className={styles.date}> - 12.02.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              alias sint deleniti dicta quasi. Temporibus ab dolores reiciendis
              itaque! Ducimus eligendi repellendus aliquam id, vel unde vero eum
              porro velit.
            </p>
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              alias sint deleniti dicta quasi. Temporibus ab dolores reiciendis
              itaque! Ducimus eligendi repellendus aliquam id, vel unde vero eum
              porro velit.
            </p>
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              alias sint deleniti dicta quasi. Temporibus ab dolores reiciendis
              itaque! Ducimus eligendi repellendus aliquam id, vel unde vero eum
              porro velit.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments></Comments>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
