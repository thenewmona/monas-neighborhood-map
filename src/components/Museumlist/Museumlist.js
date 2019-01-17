// import React from 'react';

// import ReactDOM from 'react-dom';
// import Museummap from './Component/Museummap'


// class Museumlist extends React.Component {
//     render() {//https://reactjs.org/docs/rendering-elements.html
//         return (
// <div id='List'>
//             <h2>Museum List</h2>
//         </div>
//         )
        
// //locationlist  




//     };
// }


// export default Museumlist;

// const toolbar = props =>  (
//     <header>
//  <nav>
//      <div></div>
//      <div><a href="/">Grand Rapids Museums</a></div>
//      <ul>
//          <li><a href="/">Urban Institute Of Contemporary Art</a></li>
//          <li><a href="/">Grand Rapids Public Museum</a></li>
//          <li><a href="/">Meyer May House</a></li>
//          <li><a href="/">Grand Rapids Art Museum</a></li>
//          <li><a href="/">Gerald R. Ford Presidential Museum</a></li>
//          <li><a href="/">Grand Rapids Children's Museum</a></li>
//          <li><a href="/">Roger B Chaffee Planetarium"</a></li>
//          <li><a href="/">Community Archives & Research Center</a></li>
//          <li><a href="/">Old Public Museum</a></li>
//          <li><a href="/">Cook Carousel Pavilion"</a></li>
//          <li><a href="/">Lacks Changing Gallery</a></li>    
//      </ul>
//  </nav>
//     </header>
// );  

import React, { Component } from 'react';
// import './App.css';


class Museumlist extends Component {

	render() {
		return (
                <li aria-label={this.props.museum.title + this.props.museum.formattedAddress} 
                tabIndex="0" className="list-item" onClick={() => this.props.onListClick
                    (this.props.museum)}>{this.props.museum.title}</li>		
		)
	}
}

export default Museumlist;