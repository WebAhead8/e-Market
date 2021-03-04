import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from './components/navBar/Nav';

//pages
import Cart from './components/cart.js';
import Home from './pages/Home.js';
import Store from './Store.js';
import NotFoundPage from './pages/404.js';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/store" component={Store} />
				<Route
					path="/cart"
					component={() => <Cart items={JSON.parse(localStorage.getItem('selectedItems'))} />}
				/>
				<Route Component={NotFoundPage} />
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
}
export default App;
