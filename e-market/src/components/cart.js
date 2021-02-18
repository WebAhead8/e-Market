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
<<<<<<< HEAD
  console.log(productsToShow);
  // let productsToShow = [];
  // for (const product of Object.keys(listOfProducts)) {
  //     productsToShow.push(<tr> <td>{product}</td> <td>{product.quantity}</td> <td>{product.price}</td> </tr>);
  // }
  console.log(productsToShow);
=======

>>>>>>> 8e77c862d3be367965734bef0c2482a71205df2c
  return (
    <div>
      <table>
        <tr>
<<<<<<< HEAD
          {" "}
          <th>Product Name</th> <th>Quantity</th> <th>Price Of One Product</th>{" "}
=======
          <th>Product Name</th> <th>Quantity</th> <th>Price Of One Product</th>
>>>>>>> 8e77c862d3be367965734bef0c2482a71205df2c
        </tr>
        {productsToShow}
      </table>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
}

export default Cart;
