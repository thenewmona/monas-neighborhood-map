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
{this.props && this.props.museums.map((museum) =>
<li> {museum.venue.name} </li>
)}
</ol >
</div>
        )};
}
        
            
     



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
