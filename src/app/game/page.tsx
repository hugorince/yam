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
      </div>
    </div>
  );
};

export default Game;
