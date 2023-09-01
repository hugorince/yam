import styles from "./page.module.css";

type InputCustomTypes = {
  setNum: any;
  num: any;
  value: string;
  type: string;
};

const InputCustom = ({ setNum, num, value, type }: InputCustomTypes) => {
  return (
    <div>
      <input
        className={styles.cell}
        id="oneContent"
        type="number"
        min="0"
        disabled={
          (type === "desc" &&
            value !== "1" &&
            num[parseInt(value) - 1] === "0") ||
          (type === "asc" && value !== "14" && num[parseInt(value) + 1] === "0")
        }
        max={
          value === "1"
            ? "5"
            : value === "2"
            ? "10"
            : value === "3"
            ? "15"
            : value === "4"
            ? "20"
            : value === "5"
            ? "25"
            : value === "6"
            ? "30"
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
