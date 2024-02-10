import React from "react";
import styles from "./themeToggle.module.css"
import Image from "next/image";

const ThemeToggle = () => {
    return(
        <div className={styles.container}>
            <Image src="/moon.png" width={14} height={14}></Image>
            <div className={styles.ball}></div>
            <Image src="/sun.png" width={14} height={14}></Image>
        </div>
    )
}

export default ThemeToggle;