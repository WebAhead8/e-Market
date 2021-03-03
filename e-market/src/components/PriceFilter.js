import React from "react";
// import market from "./data";

function PriceFilter({ maxPrice, setMaxPrice, minPrice, setMinPrice }) {
  return (
    <fieldset>
      <legend>Price</legend>
      <label>
        min Price
        <input
          type="range"
          min="1"
          max="9999"
          step="1"
          value={minPrice}
          onChange={(event) => setMinPrice(event.target.value)}
        />
        ({minPrice})
      </label>
      <label>
        max Price
        <input
          type="range"
          min="1"
          max="9999"
          step="1"
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        />
        ({maxPrice})
      </label>
    </fieldset>
  );
}
export default PriceFilter;
