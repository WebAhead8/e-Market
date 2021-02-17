import React from "react";
// import market from "./data";

function PriceFilter({ maxPrice, setMaxPrice, minPrice, setMinPrice }) {
  return (
    <div>
      <section>
        <h1>super markt</h1>
        <h2>Filter</h2>
        <form>
          <label>max Price</label>
          <input
            type="range"
            min="1"
            max="100"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
          <label>min</label>
          <input
            type="range"
            min="1"
            max="100"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
          />
        </form>
      </section>
    </div>
  );
}
export default PriceFilter;
