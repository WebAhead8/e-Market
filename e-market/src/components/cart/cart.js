import React from 'react';

function removeOneProduct(listOfProducts, product) {
	listOfProducts[product].quantity--;
	let items = JSON.parse(localStorage.getItem('selectedItems'));
	let removedItem = items.find((item) => {
		return item.name === product;
	});
	items.splice(items.indexOf(removedItem), 1);
	localStorage.setItem('selectedItems', JSON.stringify(items));
	if (listOfProducts[product].quantity == 0) {
		delete listOfProducts[product];
	}
	window.location.reload();
}

function removeAllProducts(items) {
	localStorage.removeItem('selectedItems');
	items = null;
	window.location.reload();
}

function Cart({ items }) {
	if (!items || items.length == 0) {
		return <h2>Empty Cart</h2>;
	}
	const totalPrice = items.reduce((total, currItem) => total + currItem.price, 0);
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
		const price = listOfProducts[product].price;
		const quantity = listOfProducts[product].quantity;
		return (
			<tr>
				<td>{product}</td>
				<td>{price}</td>
				<td>{quantity}</td>
				<td>{price * quantity}</td>
				<td>
					<button onClick={() => removeOneProduct(listOfProducts, product)}>❌</button>
				</td>
			</tr>
		);
	});

	return (
		<fieldset>
			<legend>Cart</legend>
			<table>
				<tr>
					<th>Product Name</th>
					<th>Price Of One Product</th>
					<th>Quantity</th>
					<th>Price of Quantity</th>
					<th>Remove one quantity</th>
				</tr>
				{productsToShow}
			</table>
			<h2>Total Price: {totalPrice}</h2>
			<button onClick={() => removeAllProducts(items)}> Clear The Cart </button>
		</fieldset>
	);
}

export default Cart;
