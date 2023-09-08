"use client";

import InputGrid from "./grid";
import GridNames from "./gridNames";
import styles from "./page.module.css";
import { useState } from "react";

const Game = () => {
  const [totalGlobal, setTotalGlobal] = useState({
    desc: 0,
    asc: 0,
    normal: 0,
    sec: 0,
  });

  return (
    <div>
      <div className={styles.allColumns}>
        <GridNames />
        <InputGrid
          type={"desc"}
          setTotalGlobal={setTotalGlobal}
          totalGlobal={totalGlobal}
        />
        <InputGrid
          type={"asc"}
          setTotalGlobal={setTotalGlobal}
          totalGlobal={totalGlobal}
        />
        <InputGrid
          type={"normal"}
          setTotalGlobal={setTotalGlobal}
          totalGlobal={totalGlobal}
        />
        <InputGrid
          type={"sec"}
          setTotalGlobal={setTotalGlobal}
          totalGlobal={totalGlobal}
        />

        <div className={styles.lastRow}>Super total</div>
        <div className={styles.lastRowScore}>
          {totalGlobal.desc +
            totalGlobal.asc +
            totalGlobal.normal +
            totalGlobal.sec}
        </div>
      </div>
    </div>
  );
};

export default Game;
