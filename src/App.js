import React, { Component } from 'react'
import './App.css'
import Mapcontent from './components/Mapcontent'



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
      v:"201849548"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          museums: response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error => {
        alert(`Sorry, for the incovience`)
        console.log("apologize for the inconvience the following error has occured " + error)
      })

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


    // Display Dynamic Markers
    this.state.museums.map(grMuseums => {
      var contentString = `${grMuseums.venue.name}`
      

      // Create A Marker
      var marker = new window.google.maps.Marker({        
        position: {lat: grMuseums.venue.location.lat , lng: grMuseums.venue.location.lng},
        map: map,
        title: grMuseums.venue.name,
       
      })

      //extending the marker bounds 
      // let markLoc = new window.google.maps.LatLng(marker.postion.lat(), marker.postion.lng());
      // bounds.extend(markLoc)

      // marker eventlistener
      marker.addListener('click', function() {

        // Change the content
        infowindow.setContent(contentString)

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
       <div clasname = 'museumMap' id="map"></div>
            
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
