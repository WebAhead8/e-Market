import React from "react";
import { addProducts } from "../utils/userApi";

function AddProduct({ productData, setproductData }) {
  const add = (event) => {
    event.preventDefault();
    addProducts(productData);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <fieldset>
      <legend>AddProduct</legend>
      <form onSubmit={add}>
        <label>
          Name
          <input
            type="text"
            value={productData.name}
            onChange={(event) =>
              setproductData({ ...productData, name: event.target.value })
            }
          />
        </label>

        <label>
          description
          <input
            type="text"
            value={productData.description}
            onChange={(event) =>
              setproductData({
                ...productData,
                description: event.target.value,
              })
            }
          />
        </label>

        <label>
          imag
          <input
            type="text"
            value={productData.imag}
            onChange={(event) =>
              setproductData({ ...productData, imag: event.target.value })
            }
          />
        </label>

        <label>
          Price
          <input
            type="text"
            value={productData.Price}
            onChange={(event) =>
              setproductData({ ...productData, Price: event.target.value })
            }
          />
        </label>

        <label>
          category
          <input
            type="text"
            value={productData.category}
            onChange={(event) =>
              setproductData({ ...productData, category: event.target.value })
            }
          />
        </label>
        <button type="submit">Add The Product</button>
      </form>
    </fieldset>
  );
}
export default AddProduct;
