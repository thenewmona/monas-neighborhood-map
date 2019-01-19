import React, { Component } from 'react';
import listMuseums from './listMuseums';
import Museumlist from './Museumlist';


export default class MapBar extends Component {	
	showHide=()=>{
			const mapBar = document.getElementById('mapBar');
			mapBar.classList.toggle('hide');
	}
	// search box on Mapbar 
render() {
	return (
		<div className='searchBox'>
		<input type={'search'} id={'search'} placeholder={'Filter Museums'}/>
		<listMuseums />
		</div>
	);
}
}
// Hamburger button
// 	render(){
// 		return(
// 			<div className='header'>
// 				<h2 className='GRmuseums'>Museums</h2>	
// 			<div className='menu'
// 				onClick={this.showHide}
// 				tabIndex='1'
// 				onKeyPress={this.showHide}>☰</div>
// 			</div>
// 		)
// 	}
// }


