import "./App.css";
import React from "react";
import PriceFilter from "./components/PriceFilter";
import MarketList from "./components/marketList";
import Nav from "./components/navBar/Nav";

function App() {
  const [maxPrice, setMaxPrice] = React.useState(100);
  const [minPrice, setMinPrice] = React.useState(1);

  return (
    <section className="App">
      <Nav />
      <h1>e-Market</h1>
      <h2> Filter By</h2>

      <PriceFilter
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
      />

      <MarketList
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
      />
    </section>
  );
}

export default App;
