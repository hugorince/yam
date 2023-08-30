import { useState, useEffect } from "react";
import styles from "./page.module.css";

const InputGrid = () => {
  const [totalNums, setTotalNums] = useState(0);
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [num, setNum] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    plus: 0,
    less: 0,
    small: 0,
    large: 0,
    brelan: 0,
    full: 0,
    square: 0,
    yam: 0,
  });

  useEffect(() => {
    setTotalNums(num.one + num.two + num.three + num.four + num.five + num.six);
    totalNums >= 60 ? setBonus(35) : setBonus(0);
    setTotal(Object.values(num).reduce((a, c) => a + c) + bonus);
    // console.log(num, total);
  }, [num, totalNums, bonus, total]);

  return (
    <div className={styles.gridWrapper}>
      <p className={styles.cell}>1</p>
      <input
        className={styles.cell}
        id="oneContent"
        type="number"
        min="0"
        max="5"
        value={num.one || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, one: parseInt(e.target.value) })
        }
      />
      <p className={styles.cell} id="twoName">
        2
      </p>
      <input
        className={styles.cell}
        id="twoContent"
        type="number"
        min="0"
        max="10"
        value={num.two || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, two: parseInt(e.target.value) })
        }
      />
      <p className={styles.cell}>3</p>
      <input
        className={styles.cell}
        id="threeContent"
        type="number"
        min="0"
        max="15"
        value={num.three || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, three: parseInt(e.target.value) })
        }
      />
      <p className={styles.cell}>4</p>
      <input
        className={styles.cell}
        id="fourContent"
        type="number"
        min="0"
        max="20"
        value={num.four || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, four: parseInt(e.target.value) })
        }
      />
      <p className={styles.cell}>5</p>
      <input
        className={styles.cell}
        id="fiveContent"
        type="number"
        min="0"
        max="25"
        value={num.five || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, five: parseInt(e.target.value) })
        }
      />
      <p className={styles.cell}>6</p>
      <input
        className={styles.cell}
        id="sixContent"
        type="number"
        min="0"
        max="30"
        value={num.six || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, six: parseInt(e.target.value) })
        }
      />
      <p className={styles.cell}>total</p>
      <p className={styles.cell}>{totalNums}</p>
      <p className={styles.cell}>bonus</p>
      <p className={styles.cell}>{bonus}</p>
      <p className={styles.cell}>+</p>
      <input
        className={styles.cell}
        id="plusContent"
        type="number"
        min="0"
        max="30"
        value={num.plus || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 && parseInt(e.target.value) > num.less
            ? setNum({ ...num, plus: parseInt(e.target.value) })
            : setNum({ ...num, plus: 0 })
        }
      />
      <p className={styles.cell}>-</p>
      <input
        className={styles.cell}
        id="lessContent"
        type="number"
        min="0"
        max="30"
        value={num.less || 0}
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, less: parseInt(e.target.value) })
        }
      />
      <p className={styles.cell}>Petite suite</p>
      <select
        name=""
        id="selectSmall"
        onChange={(e) =>
          parseInt(e.target.value) === 20
            ? setNum({ ...num, small: parseInt(e.target.value) })
            : setNum({ ...num, small: 0 })
        }
      >
        <option value=""></option>
        <option value="X">X</option>
        <option value="20">20</option>
      </select>
      <p className={styles.cell}>Grande suite</p>
      <select
        name=""
        id="selectLarge"
        onChange={(e) =>
          parseInt(e.target.value) === 30
            ? setNum({ ...num, large: parseInt(e.target.value) })
            : setNum({ ...num, large: 0 })
        }
      >
        <option value=""></option>
        <option value="X">X</option>
        <option value="30">30</option>
      </select>
      <p className={styles.cell}>Brelan</p>
      <select
        name=""
        id="selectBrelan"
        onChange={(e) =>
          parseInt(e.target.value) === 20
            ? setNum({ ...num, brelan: parseInt(e.target.value) })
            : setNum({ ...num, brelan: 0 })
        }
      >
        <option value=""></option>
        <option value="X">X</option>
        <option value="20">20</option>
      </select>
      <p className={styles.cell}>Full</p>
      <select
        name=""
        id="selectFull"
        onChange={(e) =>
          parseInt(e.target.value) === 30
            ? setNum({ ...num, full: parseInt(e.target.value) })
            : setNum({ ...num, full: 0 })
        }
      >
        <option value=""></option>
        <option value="X">X</option>
        <option value="30">30</option>
      </select>
      <p className={styles.cell}>Carré</p>
      <select
        name=""
        id="selectSquare"
        onChange={(e) =>
          parseInt(e.target.value) === 40
            ? setNum({ ...num, square: parseInt(e.target.value) })
            : setNum({ ...num, square: 0 })
        }
      >
        <option value=""></option>
        <option value="X">X</option>
        <option value="40">40</option>
      </select>
      <p className={styles.cell}>Yam</p>
      <select
        name=""
        id="selectYam"
        onChange={(e) =>
          parseInt(e.target.value) === 50
            ? setNum({ ...num, yam: parseInt(e.target.value) })
            : setNum({ ...num, yam: 0 })
        }
      >
        <option value=""></option>
        <option value="X">X</option>
        <option value="50">50</option>
      </select>
      <p className={styles.cell}>total</p>
      <p className={styles.cell}>{total}</p>
    </div>
  );
};

export default InputGrid;
