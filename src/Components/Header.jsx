import React, { PureComponent } from 'react';
import logo from './../todologo.png';

class Header extends PureComponent {
	render() {
		return (
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">ToDo App</h1>
		  </header>
		);
	}
}

export default Header