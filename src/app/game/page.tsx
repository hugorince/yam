import InputGrid from "./grid";
import GridNames from "./gridNames";
import styles from "./page.module.css";

const Game = () => {
  return (
    <div>
      <div className={styles.allColumns}>
        <GridNames />
        <InputGrid sec={false} />
        <InputGrid sec={true} />
      </div>
    </div>
  );
};

export default Game;
