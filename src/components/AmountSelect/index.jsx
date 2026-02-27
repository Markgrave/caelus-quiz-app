import SelectComponent from "../ui/Select";
import { useQuizStore } from "../../lib/store";

const options = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
];

const AmountSelect = ({ handleOnChange }) => {
  const { settings } = useQuizStore();
  return (
    <SelectComponent
      placeholder="Amount..."
      options={options}
      onChange={handleOnChange}
      value={options.find((opt) => opt.value === settings.amount) || null}
    />
  );
};

export default AmountSelect;
