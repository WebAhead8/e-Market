import React from "react";
import market from "./data";

function marketList(props) {
  return (
    <main>
      <section></section>
      <h2>supermarket </h2>
      <ul>
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
    </main>
  );
}
export default marketList;
