import "./App.css";
import React from "react";
import PriceFilter from "./components/PriceFilter";
import MarketList from "./components/marketList";
import Nav from "./components/navBar/Nav";

function App() {
  const [maxPrice, setMaxPrice] = React.useState(100);
  const [minPrice, setMinPrice] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("all");

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
          />
        </section>
      </div>
    </main>
  );
}

export default App;
