import React, { Component } from 'react';


class MapBar extends Component {	
	showHide=()=>{
			const mapBar = document.getElementById('mapBar');
			mapBar.classList.toggle('hide');
	}

	render(){
		return(
			<div className='header'>
				<h2 className='GRmuseums'>Grand Rapids Museums</h2>	
			<div className='menu'
				onClick={this.showHide}
				tabIndex='1'
				onKeyPress={this.showHide}>☰</div>
			</div>
		)
	}
}

export default MapBar;