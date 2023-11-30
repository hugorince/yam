"use client";
import { useState, useEffect, SetStateAction } from "react";
import styles from "./page.module.css";
import SelectCustom from "./select";
import InputCustom from "./input";

type InputGridTypes = {
  type: string;
  totalGlobal: {
    desc: number;
    asc: number;
    normal: number;
    sec: number;
  };
  setTotalGlobal: React.Dispatch<
    SetStateAction<{
      desc: number;
      asc: number;
      normal: number;
      sec: number;
    }>
  >;
};

const InputGrid = ({ type, totalGlobal, setTotalGlobal }: InputGridTypes) => {
  const [totalNums, setTotalNums] = useState(0);
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [num, setNum] = useState({
    "1": "0" || 0,
    "2": "0" || 0,
    "3": "0" || 0,
    "4": "0" || 0,
    "5": "0" || 0,
    "6": "0" || 0,
    "7": "0" || 0,
    "8": "0" || 0,
    "9": "0" || 0,
    "10": "0" || 0,
    "11": "0" || 0,
    "12": "0" || 0,
    "13": "0" || 0,
    "14": "0" || 0,
  });

  useEffect(() => {
    setTotalNums(
      parseInt(num["1"]) +
        parseInt(num["2"]) +
        parseInt(num["3"]) +
        parseInt(num["4"]) +
        parseInt(num["5"]) +
        parseInt(num["6"])
    );
    totalNums >= 60 && type === "normal"
      ? setBonus(35)
      : totalNums >= 60 && type === "sec"
      ? setBonus(70)
      : setBonus(0);
    const totalTemp = Object.values(num).filter(
      (e) => e !== "FAIL" && e !== "X"
    );
    setTotal(totalTemp.reduce((a, c) => parseInt(a) + parseInt(c)) + bonus);
  }, [num, totalNums, bonus, total, type]);

  useEffect(() => {
    setTotalGlobal({ ...totalGlobal, [type]: total });
  }, [total, type]);

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.cellTitle}>
        <p>{type}</p>
      </div>
      <InputCustom setNum={setNum} num={num} value={"1"} type={type} />
      <InputCustom setNum={setNum} num={num} value={"2"} type={type} />
      <InputCustom setNum={setNum} num={num} value={"3"} type={type} />
      <InputCustom setNum={setNum} num={num} value={"4"} type={type} />
      <InputCustom setNum={setNum} num={num} value={"5"} type={type} />
      <InputCustom setNum={setNum} num={num} value={"6"} type={type} />
      <div className={styles.cell} id="totalResult">
        <p>{totalNums}</p>
      </div>
      <div className={styles.cell}>
        <p>{bonus}</p>
      </div>
      <InputCustom setNum={setNum} num={num} value={"7"} type={type} />
      <InputCustom setNum={setNum} num={num} value={"8"} type={type} />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={type !== "sec" ? 20 : 40}
        name={"9"}
        type={type}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={type !== "sec" ? 30 : 60}
        name={"10"}
        type={type}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={type !== "sec" ? 20 : 40}
        name={"11"}
        type={type}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={type !== "sec" ? 30 : 60}
        name={"12"}
        type={type}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={type !== "sec" ? 40 : 80}
        name={"13"}
        type={type}
      />
      <SelectCustom
        setNum={setNum}
        num={num}
        value={type !== "sec" ? 50 : 100}
        name={"14"}
        type={type}
      />
      <div className={styles.cell} id="totalResult">
        <p>{total}</p>
      </div>
    </div>
  );
};

export default InputGrid;
