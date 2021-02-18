import "./App.css";
import React from "react";
import PriceFilter from "./components/PriceFilter";
import MarketList from "./components/marketList/marketList";
import Cart from "./components/cart";
import Nav from "./components/navBar/Nav";

function App() {
  const [maxPrice, setMaxPrice] = React.useState(100);
  const [minPrice, setMinPrice] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("all");

  const [items, setItems] = React.useState([]);
  return (
    <main>
      <header>
        <Nav search={searchTerm} setSearch={setSearchTerm} />
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
        </section>
        <section>
          <MarketList
            search={searchTerm}
            setSearch={setSearchTerm}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            items={items}
            setItems={setItems}
          />
        </section>
        <section>
          <Card items={items} />
        </section>
      </div>
    </main>
  );
}

export default App;
