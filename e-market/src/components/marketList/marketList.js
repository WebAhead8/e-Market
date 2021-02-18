import React from "react";
import data from "../../data";
import "./marketList.css";

function MarketList({
  maxPrice,
  minPrice,
  items,
  search,
  setItems,
  catFilter,
}) {
  const addItem = (markt) => setItems(items.concat(markt));

  const [searchResult, setSearchResult] = React.useState([]);
  React.useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLowerCase().startsWith(search)
    );
    setSearchResult(result);
  }, [search]);
  return (
    <ul className="grid">
      {searchResult
        .filter((markt) => {
          if (catFilter === "All" || catFilter === "") {
            return markt;
          } else {
            return markt.category === catFilter;
          }
        })
        .filter((markt) => markt.price >= minPrice && markt.price <= maxPrice)
        .map((markt) => (
          <li className="card" key={markt.id}>
            {markt.name}
            <img src={markt.image} className="itemImage" />
            <p>{markt.description}</p>
            <p>₪{markt.price}</p>
            <button onClick={() => addItem(markt)}> add to cart </button>
          </li>
        ))}
    </ul>
  );
}
export default MarketList;
