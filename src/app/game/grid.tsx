"use client";
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
  }, [num, totalNums, bonus, total]);

  return (
    <div className={styles.gridWrapper}>
      <input
        className={styles.cell}
        id="oneContent"
        type="number"
        min="0"
        max="5"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, one: parseInt(e.target.value) })
        }
      />
      <input
        className={styles.cell}
        id="twoContent"
        type="number"
        min="0"
        max="10"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, two: parseInt(e.target.value) })
        }
      />
      <input
        className={styles.cell}
        id="threeContent"
        type="number"
        min="0"
        max="15"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, three: parseInt(e.target.value) })
        }
      />
      <input
        className={styles.cell}
        id="fourContent"
        type="number"
        min="0"
        max="20"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, four: parseInt(e.target.value) })
        }
      />
      <input
        className={styles.cell}
        id="fiveContent"
        type="number"
        min="0"
        max="25"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, five: parseInt(e.target.value) })
        }
      />

      <input
        className={styles.cell}
        id="sixContent"
        type="number"
        min="0"
        max="30"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, six: parseInt(e.target.value) })
        }
      />
      <div className={styles.cell} id="totalResult">
        <p>{totalNums}</p>
      </div>
      <div className={styles.cell}>
        <p>{bonus}</p>
      </div>
      <input
        className={styles.cell}
        id="plusContent"
        type="number"
        min="0"
        max="30"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 && parseInt(e.target.value) > num.less
            ? setNum({ ...num, plus: parseInt(e.target.value) })
            : setNum({ ...num, plus: 0 })
        }
      />
      <input
        className={styles.cell}
        id="lessContent"
        type="number"
        min="0"
        max="30"
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, less: parseInt(e.target.value) })
        }
      />
      <select
        className={styles.cell}
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
      <select
        className={styles.cell}
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
      <select
        className={styles.cell}
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
      <select
        className={styles.cell}
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
      <select
        className={styles.cell}
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
      <select
        className={styles.cell}
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
      <div className={styles.cell} id="totalResult">
        <p>{total}</p>
      </div>
    </div>
  );
};

export default InputGrid;
