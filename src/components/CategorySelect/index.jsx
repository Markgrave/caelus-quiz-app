import { useState, useEffect } from "react";
import SelectComponent from "../ui/Select";

import { getCategories } from "../../lib/api";
import { useQuizStore } from "../../lib/store";

const CategorySelect = ({ handleOnChange }) => {
  const [categories, setCategories] = useState([]);
  const { settings } = useQuizStore();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <SelectComponent
      placeholder={settings.categoryLabel || "Category..."}
      options={categories}
      onChange={handleOnChange}
    />
  );
};

export default CategorySelect;
