
import React, { Component } from 'react';
// import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MapHeader extends Component {

	render() {
		return (
			<nav className="header">
				<button onClick={this.props.updateSideBar} aria-label="menu">
					<FontAwesomeIcon icon="bars"/>			
				</button>
				<h1>Grand Rapids Museums</h1>
			</nav>
		)
	}
}

export default MapHeader;