import styles from "./page.module.css";

type InputCustomTypes = {
  setNum: any;
  num: any;
  value: string;
};

const InputCustom = ({ setNum, num, value }: InputCustomTypes) => {
  return (
    <div>
      <input
        className={styles.cell}
        id="oneContent"
        type="number"
        min="0"
        max={
          value === "one"
            ? "5"
            : value === "two"
            ? "10"
            : value === "three"
            ? "15"
            : value === "four"
            ? "20"
            : value === "five"
            ? "25"
            : "30"
        }
        onChange={(e) =>
          parseInt(e.target.value) >= 0 &&
          setNum({ ...num, [value]: parseInt(e.target.value) })
        }
      />
    </div>
  );
};

export default InputCustom;
