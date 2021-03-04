import './Nav.css';
import cart from './onlineShop.png';
import Cart from '../cart/cart';

import React from 'react';
import Popup from 'reactjs-popup';

const Nav = (props) => {
	const handleChange = (event) => {
		props.setSearch(event.target.value);
	};
	const logOut = () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('selectedItems');
		window.location.href = '/';
	};
	return (
		<nav>
			<h1 className="icon">e-Market</h1>
			<div className="container">
				<Popup
					trigger={
						<ul>
							<li className="cart">
								<img src={cart} className="imageNav" />
								<span>{props.cartLength}</span>
							</li>
						</ul>
					}
					modal
					nested
				>
					{(close) => (
						<div className="modal">
							<button className="close" onClick={close}>
								&times;
							</button>
							<Cart items={props.items} />
						</div>
					)}
				</Popup>
				<ul>
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a style={{ cursor: 'pointter' }} onClick={logOut}>
							LogOut
						</a>
					</li>
					<li>
						<label>
							search:
							<input type="text" name="search" value={props.search} onChange={handleChange} />
						</label>
					</li>
					<li>
						<a href="/conectUs">Conect US</a>
					</li>
					<li>
						<a href="/cart">Cart </a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
