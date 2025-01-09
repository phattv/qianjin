import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/icon.svg"
          alt="logo"
          width={200}
          height={200}
          priority
        />
        <h1 className={styles.title}>前进 QiánJìn</h1>
      </main>
    </div>
  );
}
