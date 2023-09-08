import InputGrid from "./grid";
import GridNames from "./gridNames";
import styles from "./page.module.css";

const Game = () => {
  return (
    <div>
      <div className={styles.allColumns}>
        <GridNames />
        <InputGrid type={"desc"} />
        <InputGrid type={"asc"} />
        <InputGrid type={"normal"} />
        <InputGrid type={"sec"} />

        <div className={styles.lastRow}>Super total</div>
        <div className={styles.lastRowScore}>0</div>
      </div>
      <button>calculate total</button>
    </div>
  );
};

export default Game;
