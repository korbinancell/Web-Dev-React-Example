import React, { Component } from 'react';
import MercGenerator from './merc-generator';
import MercCard from './merc-card';
import logo from '../images/logo.svg';

import '../style/app.css';

class App extends Component {
	state = {
		mercArray: [],
	};

	setMercArray = newArray => this.setState({ mercArray: newArray });

	render() {
		return (
			<div className="app">
				<header className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
					<h1 className="app-title">Welcome to React</h1>
				</header>

				<div className="app_merc">
					<MercGenerator setMercArray={this.setMercArray} />

					<div className="app_merc-list">
						{this.state.mercArray.map(merc => <MercCard key={merc.id} {...merc} />)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
