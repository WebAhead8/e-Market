import "./App.css";
import React from "react";
import PriceFilter from "./components/PriceFilter";
import MarketList from "./components/marketList/marketList";
import Nav from "./components/navBar/Nav";

function App() {
  const [maxPrice, setMaxPrice] = React.useState(100);
  const [minPrice, setMinPrice] = React.useState(1);
  const [items, setItems] = React.useState([]);
  return (
    <main>
      <header>
        <Nav />
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
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            items = {items}
            setItems = {setItems}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
