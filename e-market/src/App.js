import "./App.css";
import React from "react";
import PriceFilter from "./components/PriceFilter";
import MarketList from "./components/marketList/marketList";
import Cart from "./components/cart";
import Nav from "./components/navBar/Nav";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [maxPrice, setMaxPrice] = React.useState(100);
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
          />
        </section>
        <section>
<<<<<<< HEAD
        <Cart
         items = {items}
        />
=======
          <Cart items={items} />
>>>>>>> main
        </section>
      </div>
    </main>
  );
}

export default App;
