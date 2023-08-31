import styles from "./page.module.css";

const GridNames = () => {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.cell}>
        <p>4 Collonnes</p>
      </div>
      <div className={styles.cell}>
        <p>1</p>
      </div>
      <div className={styles.cell}>
        <p id="twoName">2</p>
      </div>
      <div className={styles.cell}>
        <p>3</p>
      </div>
      <div className={styles.cell}>
        <p>4</p>
      </div>
      <div className={styles.cell}>
        <p>5</p>
      </div>
      <div className={styles.cell}>
        <p>6</p>
      </div>
      <div className={styles.cell} id="totalName">
        <p>total</p>
      </div>
      <div className={styles.cell}>
        <p>bonus</p>
      </div>
      <div className={styles.cell}>
        <p>+</p>
      </div>
      <div className={styles.cell}>
        <p>-</p>
      </div>
      <div className={styles.cell}>
        <p>Petite suite</p>
      </div>
      <div className={styles.cell}>
        <p>Grande suite</p>
      </div>
      <div className={styles.cell}>
        <p>Brelan</p>
      </div>
      <div className={styles.cell}>
        <p>Full</p>
      </div>
      <div className={styles.cell}>
        <p>Carré</p>
      </div>
      <div className={styles.cell}>
        <p>Yam</p>
      </div>
      <div className={styles.cell} id="totalName">
        <p>total</p>
      </div>
    </div>
  );
};

export default GridNames;
