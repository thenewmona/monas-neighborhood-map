import React from 'react';
// import ReactDOM from 'react-dom';
import './../App.css';

// import MapBar from './components/MapBar/MapBar';
export default class Museumlist extends React.Component {
    render() {//https://reactjs.org/docs/rendering-elements.html
        return (
<div className='side-bar'>
<h2>Museum List</h2>

<ol className='listMuseums'>
 <a href="https://www.foursquare.com" target="blank"></a>

 {this.props && this.props.museums.map((museum) =>
     <li id={`museums-${museum.venue.id}`} tabIndex="0"
      role="Menuitem" aria-labelledby={`venue-${museum.venue.id}-name Sidebar-heading`} 
     key={museum.venue.id} 
     onClick={() => this.props.onMuseumClick(museum.venue.id)} 
     className={this.props.selectedVenueId === museum.venue.id ? 'selected' : ''}>
     <label id={`museums-${museum.venue.id}-name`}>{museum.venue.name}</label> 
 </li>
 )}
 </ol >
 </div>

         )};
 }
        
            
     


// export default class Museumlist extends React.Component {
//     render() {//https://reactjs.org/docs/rendering-elements.html

//         // onMuseumClick(museum)

//         return (
// <div className='side-bar'>
// <h2>Museum List</h2>

// <ol className='listMuseums'>
// <a href="https://www.foursquare.com" target="blank"></a>

// {this.props && this.props.museums.map((museum) =>
//     <li id={`museums-${museum.venue.id}`} tabIndex="0"
//      role="Menuitem" aria-labelledby={`venue-${museum.venue.id}-name Sidebar-heading`} 
//     key={museum.venue.id} 
//     onClick={() => this.props.onMuseumClick(museum.venue.id)} 
//     className={this.props.selectedVenueId === museum.venue.id ? 'selected' : ''}>
//     <label id={`museums-${museum.venue.id}-name`}>{museum.venue.name}</label> 
// </li>
// )}
// </ol >
// </div>

//         )};
// }
        
            
     

{/* // const toolbar = props =>  (
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
 */}
