import React from "react";
import styles from "./cardlist.module.css"
import Pagination from "../pagination/Pagination";

const Cardlist = () => {
    return(
        <div className={styles.container}>
            <Pagination/>
            CardList
        </div>
    )
}

export default Cardlist;
