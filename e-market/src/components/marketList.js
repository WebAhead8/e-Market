import React from "react";
import market from "../data";

function MarketList({ maxPrice, minPrice }) {
  return (
    <ul className="grid">
      {market
        .filter((markt) => markt.price >= minPrice && markt.price <= maxPrice)
        .map((markt) => (
          <li className="card" key={markt.name}>
            {markt.name}
            <p>{markt.description}</p>
            <p>₪{markt.price}</p>
          </li>
        ))}
    </ul>
  );
}
export default MarketList;
