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
      placeholder={
        settings.difficulty.toString().charAt(0).toUpperCase() +
          settings.difficulty.toString().slice(1) || "Difficulty..."
      }
      options={options}
      onChange={handleOnChange}
    />
  );
};

export default DifficultySelect;
