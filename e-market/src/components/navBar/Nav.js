import './Nav.css';
import cart from './onlineShop.png';

const Nav = (props) => {
	const handleChange = (event) => {
		props.setSearch(event.target.value);
	};
	return (
		<nav>
			<h1 className="icon">e-Market</h1>
			<div className="container">
				<ul>
					<li className="cart">
						<img src={cart} className="imageNav" />
						<span>{props.cartLength}</span>
					</li>
				</ul>
				<ul>
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a href="/logout">LogOut</a>
					</li>
					<li>
						<label>
							search:
							<input type="text" name="search" value={props.search} onChange={handleChange} />
						</label>
					</li>
					<li>
						<a href="/store">Store </a>
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
