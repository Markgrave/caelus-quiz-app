import SelectComponent from "../ui/Select";
import { useQuizStore } from "../../lib/store";

const options = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const DifficultySelect = ({ handleOnChange }) => {
  const { settings } = useQuizStore();
  return (
    <SelectComponent
      placeholder="Difficulty..."
      options={options}
      onChange={handleOnChange}
      value={options.find((opt) => opt.value === settings.difficulty) || null}
    />
  );
};

export default DifficultySelect;
