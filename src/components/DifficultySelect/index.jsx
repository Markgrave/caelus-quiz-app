import SelectComponent from "../ui/Select";

const options = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const DifficultySelect = ({ handleOnChange }) => {
  return (
    <SelectComponent
      placeholder="Difficulty..."
      options={options}
      onChange={handleOnChange}
    />
  );
};

export default DifficultySelect;
