import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Cardlist from "@/components/cardList/Cardlist";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
