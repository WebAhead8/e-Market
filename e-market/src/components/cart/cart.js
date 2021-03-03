import React from "react";
import "./cart.css";

function Cart(props) {
  if (props.items.length == 0) {
    return <h2>Empty Cart</h2>;
  }
  const totalPrice = props.items.reduce(
    (total, currItem) => total + currItem.price,
    0
  );
  const listOfProducts = props.items.reduce((list, currItem) => {
    for (const item of Object.keys(list)) {
      if (item === currItem.name) {
        list[item].quantity++;
        return list;
      }
    }
    list[currItem.name] = { quantity: 1, price: currItem.price };
    return list;
  }, {});

  const productsToShow = Object.keys(listOfProducts).map((product) => {
    return (
      <tr>
        <td>{product}</td>
        <td>{listOfProducts[product].quantity}</td>
        <td>{listOfProducts[product].price}</td>
      </tr>
    );
  });
  return (
    <fieldset>
      <legend>Cart</legend>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price Of One Product</th>
          </tr>
        </thead>
        <tbody>{productsToShow}</tbody>
      </table>
      <h2>Total Price: {totalPrice}</h2>
      <button>buy</button>
    </fieldset>
  );
}

export default Cart;
