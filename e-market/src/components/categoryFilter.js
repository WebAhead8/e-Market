import React from "react";
import data from "../data"

const categories = [
    "Milk products",
    "Meat",
    "Drinks",
    "Vegetables",
    "Fruits",
    "Candies",
    "Bread",
    "Nuts",
    "Cleaning products",
    "Staple food"
];

function CategoryFilter({ catFilter, setCatFilter }) {
    return (
        <fieldset>
            <legend>Category</legend>
            {categories.map(cat => (
                <label htmlFor={cat} key={cat}>
                    {cat}
                    <input
                        type="radio"
                        name="categories"
                        id={cat}
                        value={cat}
                        checked={cat === catFilter}
                        onChange={e => setCatFilter(e.target.value)}
                    />
                </label>
            ))}
        </fieldset>
    );
}

export default CategoryFilter;
