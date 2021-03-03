import "./Store.css";
import React from "react";
import PriceFilter from "./components/PriceFilter";
import MarketListAdmin from "./components/marketListAdmin/marketListAdmin";
import Nav from "./components/navBar/Nav";
import CategoryFilter from "./components/categoryFilter";
import AddProduct from "./components/addPro";

function Store() {
  const [maxPrice, setMaxPrice] = React.useState(100);
  const [minPrice, setMinPrice] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [catFilter, setCatFilter] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [productData, setproductData] = React.useState({});

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
          <h2> add and delete</h2>
          <AddProduct
            productData={productData}
            setproductData={setproductData}
          />
          <PriceFilter
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </section>
        <section>
          <MarketListAdmin
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
