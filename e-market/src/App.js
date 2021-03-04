import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//pages
import Home from './pages/Home.js';
import Store from './Store.js';
import NotFoundPage from './pages/404.js';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './components/cart.js';
import storeAdmin from './storeaAdmin';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/Store" component={Store} />
				<Route path="/storeAdmin" component={storeAdmin} />
				<Route path="/login" component={LogIn} />
				<Route path="/signup" component={SignUp} />
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
