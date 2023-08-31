"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import SelectCustom from "./select";
import InputCustom from "./input";

type InputGridTypes = {
  sec: boolean;
};

const InputGrid = ({ sec }: InputGridTypes) => {
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
    totalNums >= 60 && sec === false
      ? setBonus(35)
      : totalNums >= 60 && sec === true
      ? setBonus(70)
      : setBonus(0);
    setTotal(Object.values(num).reduce((a, c) => a + c) + bonus);
  }, [num, totalNums, bonus, total, sec]);

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.cell}>
        {sec === false ? <p>Normal</p> : <p>Sec</p>}
      </div>
      <InputCustom setNum={setNum} num={num} value={"one"} />
      <InputCustom setNum={setNum} num={num} value={"two"} />
      <InputCustom setNum={setNum} num={num} value={"three"} />
      <InputCustom setNum={setNum} num={num} value={"four"} />
      <InputCustom setNum={setNum} num={num} value={"five"} />
      <InputCustom setNum={setNum} num={num} value={"six"} />
      <div className={styles.cell} id="totalResult">
        <p>{totalNums}</p>
      </div>
      <div className={styles.cell}>
        <p>{bonus}</p>
      </div>
      <InputCustom setNum={setNum} num={num} value={"plus"} />
      <InputCustom setNum={setNum} num={num} value={"less"} />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={sec === false ? 20 : 40}
        name={"small"}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={sec === false ? 30 : 60}
        name={"large"}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={sec === false ? 20 : 40}
        name={"brelan"}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={sec === false ? 30 : 60}
        name={"full"}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={sec === false ? 40 : 80}
        name={"square"}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={sec === false ? 50 : 100}
        name={"yam"}
      />
      <div className={styles.cell} id="totalResult">
        <p>{total}</p>
      </div>
    </div>
  );
};

export default InputGrid;
