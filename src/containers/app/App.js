import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import HomePage from './../../components/Index/Index';

import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

module.exports = App;
