import { useState, useEffect } from "react";
import SelectComponent from "../ui/Select";

import { getCategories } from "../../lib/api";

const CategorySelect = ({ handleOnChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <SelectComponent
      placeholder="Category..."
      options={categories}
      onChange={handleOnChange}
    />
  );
};

export default CategorySelect;
