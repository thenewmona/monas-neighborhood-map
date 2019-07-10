// This is the container for museum list , the search box , and hamburger
// and all the actions that go with it

import React, { Component } from 'react';
// import listMuseums from './listMuseums';
//  import Museumlist from './Museumlist';


export default class MapBar extends Component {	
	showHide=()=>{
			const mapBar = document.getElementById('mapBar');
			mapBar.classList.toggle('hide');
			
	}
	// Hamburger button
	render(){
		return(
			<div className='hmButton'>				
			<div className='menu'
				onClick={this.showHide}
				tabIndex='1'
				onKeyPress={this.showHide}>☰</div>

				 <div className='searchBox'>
		<input type={'search'} id={'search'} 
	aria-label='Filter location by name' tabIndex='0' 	    
	onChange={this.handleSearch} placeholder={'Filter Museums'}/> 
		</div>
			</div>
			
		)
	}
}		
	


