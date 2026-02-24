import Select from "react-select";
import styles from "./Select.module.scss";

const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isSelected
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: "var(--space-xl)",
    color: "var(--color-neutral-50)",
    padding: "var(--space-xs)",
    width: "15rem",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: "var(--color-neutral-50)",
    backgroundColor: state.isSelected
      ? "rgba(255, 255, 255, 0.3)"
      : state.isFocused
        ? "rgba(255, 255, 255, 0.2)"
        : "transparent",
    ":active": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "var(--color-neutral-200)",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    background: "var(--gradient)",
    borderRadius: "var(--space-md)",
    borderColor: "rgba(255, 255, 255, 0.2)",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    borderRadius: "var(--space-md)",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "var(--color-neutral-200)",
  }),
};

const SelectComponent = ({ options, placeholder, onChange }) => {
  return (
    <Select
      className={styles.select}
      placeholder={placeholder}
      styles={customStyles}
      options={options}
      onChange={onChange}
    />
  );
};

export default SelectComponent;
