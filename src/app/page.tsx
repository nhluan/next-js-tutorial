import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          <li>
            <Link href="/facebook">Facebook</Link>
          </li>
          <li>
            <Link href="youtube">Youtube</Link>
          </li>
          <li>
            <Link href="tiktok">Tiktok</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
