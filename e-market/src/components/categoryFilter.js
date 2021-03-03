import React from "react";

const categories = [
  "All",
  "Milk products",
  "Meat",
  "Drinks",
  "Vegetables",
  "Fruits",
  "Candies",
  "Bread",
  "Nuts",
  "Cleaning products",
  "Staple food",
];

function CategoryFilter({ catFilter, setCatFilter }) {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((cat) => (
        <label htmlFor={cat} key={cat}>
          {cat}
          <input
            type="radio"
            name={cat}
            id={cat}
            value={cat}
            checked={cat === catFilter}
            onChange={(e) => setCatFilter(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;
