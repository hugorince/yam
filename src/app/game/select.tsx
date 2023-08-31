import styles from "./page.module.css";

type SelectCustomTypes = {
  name: string;
  value: number;
  setNum: any;
  num: any;
  type: string;
};

const SelectCustom = ({
  name,
  value,
  setNum,
  num,
  type,
}: SelectCustomTypes) => {
  return (
    <select
      className={styles.cell}
      id={name}
      disabled={type === "desc" && num[parseInt(name) - 1] === 0}
      onChange={(e) =>
        parseInt(e.target.value) === value
          ? setNum({ ...num, [name]: parseInt(e.target.value) })
          : setNum({ ...num, [name]: 0 })
      }
    >
      <option value=""></option>
      <option value="X">X</option>
      <option value={value}>{value}</option>
    </select>
  );
};

export default SelectCustom;
