"use client";
import InputGrid from "./grid";
import GridNames from "./gridNames";
import styles from "./page.module.css";

const Game = () => {
  return (
    <div>
      {/* <h1>4 colonnes</h1> */}
      <div className={styles.allColumns}>
        <GridNames />
        <InputGrid />
        <InputGrid />
      </div>
    </div>
  );
};

export default Game;
