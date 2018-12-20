import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

class App extends Component {
<<<<<<< HEAD
  state = {
    museums: []
  }

  componentDidMount() {
    this.getMuseums()//calls the foursquare API
    // this.renderMap()
  }

  renderMap = () => {
    scriptloader("https://maps.googleapis.com/maps/api/js?key=AIzaSyC3cO2soS7YZyFHhQMyg9CYJxKafhTCRVI&callback=initMap")
=======


  state = {//per drunkenkismister 12/18/2018
        museums:[],
  map:null,
  infoWindow:null,
  }

  componentDidMount() {
    this.getMuseums();//calls the foursquare API
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
>>>>>>> 57cf0b1dfaf3262ca63fb9a8790aa923b54b5cb3
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
        console.log("ERROR!! " + error)
      })
<<<<<<< HEAD

  }
//initializing the map
  initMap = () => {

    //create the map centering it on my house 
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 42.9134, lng: -85.7053 },//my home wyoming, mi
=======

  }

  initMap = () => {

    // Create A Map
   const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 42.96, lng: -85.7053 },//my home wyoming, mi
>>>>>>> 57cf0b1dfaf3262ca63fb9a8790aa923b54b5cb3
      zoom: 8
    })

    // Create An InfoWindow
<<<<<<< HEAD
    let infowindow = new window.google.maps.InfoWindow()
=======
   let infowindow = new window.google.maps.InfoWindow()
>>>>>>> 57cf0b1dfaf3262ca63fb9a8790aa923b54b5cb3

    // Display Dynamic Markers
    this.state.museums.map(grMuseums => {

<<<<<<< HEAD
      let contentString = `${grMuseums.venue.name}`

      // setting the markers
      let marker = new window.google.maps.Marker({
        position: {lat: grMuseums.venue.location.lat , lng: grMuseums.venue.location.lng},
        map: map,
        // title:grMuseums.venue.name
=======
      var contentString = `${grMuseums.venue.name}`

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {lat: grMuseums.venue.location.lat , lng: grMuseums.venue.location.lng},
        map: map,
        title: grMuseums.venue.name
>>>>>>> 57cf0b1dfaf3262ca63fb9a8790aa923b54b5cb3
      })

      // Click on A Marker!
      marker.addListener('click', function() {

        // Change the content
        infowindow.setContent(contentString)

        // Open An InfoWindow
        infowindow.open(map, marker)
      })

    })

    

  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

<<<<<<< HEAD
function scriptloader(url) {
=======
function loadScript(url) {
>>>>>>> 57cf0b1dfaf3262ca63fb9a8790aa923b54b5cb3
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
