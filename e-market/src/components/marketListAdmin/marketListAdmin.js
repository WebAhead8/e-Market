import React from "react";
import { marketListData } from "../../utils/marketListData";
import "../marketList/marketList.css";
import DeleteProduct from "../../components/delpro";

function MarketListAdmin({
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
            <DeleteProduct name={markt.name} />
          </li>
        ))}
    </ul>
  );
}
export default MarketListAdmin;
