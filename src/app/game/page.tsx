import InputGrid from "./grid";
import GridNames from "./gridNames";
import styles from "./page.module.css";

const Game = () => {
  return (
    <div>
      <div className={styles.allColumns}>
        <GridNames />
        <InputGrid />
        <InputGrid />
      </div>
    </div>
  );
};

export default Game;
