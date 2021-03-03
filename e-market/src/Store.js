import "./Store.css";
import React from "react";
import PriceFilter from "./components/PriceFilter";
import MarketList from "./components/marketList/marketList";

import Nav from "./components/navBar/Nav";
import CategoryFilter from "./components/categoryFilter";

function Store() {
  const [maxPrice, setMaxPrice] = React.useState(9999);
  const [minPrice, setMinPrice] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [catFilter, setCatFilter] = React.useState("");
  const [items, setItems] = React.useState([]);

  return (
    <main>
      <header>
        <Nav
          search={searchTerm}
          setSearch={setSearchTerm}
          cartLength={items.length}
          items={items}
        />
      </header>
      <div>
        <section className="filters">
          <h2> Filter By</h2>
          <PriceFilter
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </section>
        <section>
          <MarketList
            search={searchTerm}
            maxPrice={maxPrice}
            minPrice={minPrice}
            catFilter={catFilter}
            items={items}
            setItems={setItems}
          />
        </section>
      </div>
    </main>
  );
}

export default Store;
