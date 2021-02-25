import React from "react";
import { marketListData } from "../../utils/marketListData";
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

  const [filterData, setFilterData] = React.useState([]);

  React.useEffect(() => {
    marketListData().then((data) => {
      setSearchResult(data);
      setFilterData(data);
    });
  }, []);

  React.useEffect(() => {
    const result = searchResult.filter((item) =>
      item.name.toLowerCase().startsWith(search)
    );
    setFilterData(result);
  }, [search]);
  return (
    <ul className="grid">
      {filterData
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
