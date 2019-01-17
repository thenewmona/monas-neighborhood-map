// https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc
import React, { Component } from 'react'
import './App.css';
import MapHeader from './components/Header/MapHeader'
import Mapfooter from './components/footer/Mapfooter'
// import MapBar from './components/MapBar/MapBar'
import MuseumList from './components/Museumlist/Museumlist'
// import ReactDOM from 'react-dom';
 

import axios from 'axios'

class App extends Component {


  state = {//per drunkenkismister 12/18/2018
        museums:[],
  map:null,
  infoWindow:null,
  }

  componentDidMount() {
    this.getMuseums();//calls the foursquare API
  }

  renderMap = () => {
    scriptLoader("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
    window.initMap = this.initMap
  }

  getMuseums = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "HIRKFSR3XS50SWWU5FBG4DI4LN5PWI0OKKPWW4UDP13ZPHSN",
      client_secret: "RE4NWN115A1JETCAKMHQTZZ4VOLCMTK2LZNZUPN5K1PEEKOX",
      query: "museums",
      near:"Grand Rapids",
      location:"",
      v:"201849548"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      let venues = response.data.response.groups[0].items.map(item => item.venue)
      this.setState({
        venues,
         filteredVenueIds : venues.map (item => item.id)//get id from array in state
      }, this.renderMap())
     })
      .catch(error => {
        alert(`Sorry, for the inconvience`)
        console.log("apologize for the inconvience the following error has occured " + error)
      })

  }

  filterMuseums = (query) => {
    let filteredVenueIds;
    if (!query) {
      filteredVenueIds = this.state.venues.map (item => item.id)
    } else {
          filteredVenueIds=this.state.venues.filter (item => {
          return item.name.toLowerCase ().indexOf(query.toLowerCase())  >= 0;
          }) .map(item => item.id);
      }
      this.setState({filteredVenueIds}, this.drawMarkers);
   }

  initMap = () => {

    // Create A Map
   const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 42.96, lng: -85.7053 },//my home wyoming, mi
      zoom: 8
      // url:"https://image.flaticon.com/icons/svg/1243/1243565.svg"
    })

    // Create An InfoWindow
    let infowindow = new window.google.maps.InfoWindow()

    //marker boundaries
    //https://www.webucator.com/how-to/how-use-latlngbounds-google-maps.cfm

    // let bounds = new window.google.maps.LatLngBounds();
//create markers

createMarker = (grMuseuem) => {
  //sets custom marker icon
  var markerIcon = {
  url: 'https://image.flaticon.com/icons/svg/23/23715.svg',
  scaledSize: new window.google.maps.Size(60, 60),
  origin: new window.google.maps.Point(0, 0), // used if icon is a part of sprite, indicates image position in sprite
  anchor: new window.google.maps.Point(20,40) // lets offset the marker image
  };

    // Display Dynamic Markers
    // this.state.museums.map(grMuseums => {
       let contentString = `${grMuseums.venue.name + `<br>` + grMuseums.location.address + `<br>` `<i>info from FourSquare`}`
      // Change the content
      infowindow.setContent(contentString)

      // Create A Marker
      const marker = new window.google.maps.Marker({        
        position: {lat: grMuseums.venue.location.lat , lng: grMuseums.venue.location.lng},
        map: this.map,
        title: grMuseums.venue.name,
        venue: grMuseuem,
        id: grMuseuem.id,        
        animation: window.google.maps.Animation.DROP,
        icon: markerIcon
      })

      //extending the marker bounds 
      // let markLoc = new window.google.maps.LatLng(marker.postion.lat(), marker.postion.lng());
      // bounds.extend(markLoc)

      // marker eventlistener
      marker.addListener('click', function() {

        

        // Open An InfoWindow
        infowindow.open(map, marker)
      })

    //   map.fitBounds(bounds);
		//  map.panTo(bounds.getCenter());
		//  map.setZoom(map.getZoom()-1); 
		//  return marker;
    
    })

    

  }

  render() {
    return (

     
      <main>
          <div className='sideBar'>
       < MapHeader />
       {/* < MapBar />  */}
       <MuseumList/>
       </div>

       <div clasname = 'museumMap' id="map">
       
       </div>       
       < Mapfooter />
      
         
      </main>
    )
  }
}

function scriptLoader(url) {
  let index  = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}



export default App;
