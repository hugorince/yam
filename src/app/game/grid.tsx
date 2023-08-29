import { useState, useEffect } from "react";
import styles from "./page.module.css";

const InputGrid = () => {
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [num, setNum] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
  });

  useEffect(() => {
    setTotal(
      Object.values(num).reduce((a, v) => {
        return a + v;
      })
    );
    total >= 60 ? setBonus(35) : setBonus(0);
  }, [num, total]);

  return (
    <div className={styles.gridWrapper}>
      <p className={styles.one}>1</p>
      <input
        className={styles.oneContent}
        id="1"
        type="number"
        min="0"
        max="5"
        value={num.one || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, one: parseInt(e.target.value) })
        }
      />
      <p className={styles.two}>2</p>
      <input
        className={styles.twoContent}
        id="2"
        type="number"
        min="0"
        max="10"
        value={num.two || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, two: parseInt(e.target.value) })
        }
      />
      <p className={styles.three}>3</p>
      <input
        className={styles.threeContent}
        id="3"
        type="number"
        min="0"
        max="15"
        value={num.three || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, three: parseInt(e.target.value) })
        }
      />
      <p className={styles.four}>4</p>
      <input
        className={styles.fourContent}
        id="4"
        type="number"
        min="0"
        max="20"
        value={num.four || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, four: parseInt(e.target.value) })
        }
      />
      <p className={styles.five}>5</p>
      <input
        className={styles.fiveContent}
        id="5"
        type="number"
        min="0"
        max="25"
        value={num.five || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, five: parseInt(e.target.value) })
        }
      />
      <p className={styles.six}>6</p>
      <input
        className={styles.sixContent}
        id="6"
        type="number"
        min="0"
        max="30"
        value={num.six || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, six: parseInt(e.target.value) })
        }
      />
      <p className={styles.total}>total</p>
      <p className={styles.totalContent}>{total}</p>
      <p className={styles.bonus}>bonus</p>
      <p className={styles.bonusContent}>{bonus}</p>
    </div>
  );
};

export default InputGrid;
