"use client";
import InputGrid from "./grid";

import styles from "./page.module.css";

const Game = () => {
  return (
    <div>
      {/* <h1>4 colonnes</h1> */}
      <div className={styles.twoCols}>
        <InputGrid />
      </div>
    </div>
  );
};

export default Game;
