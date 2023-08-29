import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1 className={styles.title}>YAM 4 colonnes</h1>
      <Link href="/game">commencez à jouer</Link>
    </main>
  );
};

export default Home;
