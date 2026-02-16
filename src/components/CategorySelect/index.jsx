import { useEffect } from "react";
import SelectComponent from "../ui/Select";

const categories = [
  { value: "1", label: "Science" },
  { value: "2", label: "Art" },
  { value: "3", label: "History" },
  { value: "4", label: "Geography" },
  { value: "5", label: "Music" },
  { value: "6", label: "Sports" },
];

const CategorySelect = () => {
  useEffect(() => {}, []);

  return <SelectComponent placeholder="Category..." options={categories} />;
};

export default CategorySelect;
