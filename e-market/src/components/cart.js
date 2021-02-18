import React from "react";

function Cart({ items }) {
  if (items.length == 0) {
    return <h2>Empty Cart</h2>;
  }
  const totalPrice = items.reduce(
    (total, currItem) => total + currItem.price,
    0
  );
  const listOfProducts = items.reduce((list, currItem) => {
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
        {" "}
        <td>{product}</td> <td>{listOfProducts[product].quantity}</td>{" "}
        <td>{listOfProducts[product].price}</td>{" "}
      </tr>
    );
  });
  console.log(productsToShow);
  // let productsToShow = [];
  // for (const product of Object.keys(listOfProducts)) {
  //     productsToShow.push(<tr> <td>{product}</td> <td>{product.quantity}</td> <td>{product.price}</td> </tr>);
  // }
  console.log(productsToShow);
  return (
    <div>
      <table>
        <tr>
          {" "}
          <th>Product Name</th> <th>Quantity</th> <th>Price Of One Product</th>{" "}
        </tr>
        {productsToShow}
      </table>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
}

export default Cart;
