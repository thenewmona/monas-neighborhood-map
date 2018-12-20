import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

class App extends Component {
  state = {
    museums: []
  }

  componentDidMount() {
    this.getMuseums()//calls the foursquare API
    // this.renderMap()
  }

  renderMap = () => {
    scriptloader("https://maps.googleapis.com/maps/api/js?key=AIzaSyC3cO2soS7YZyFHhQMyg9CYJxKafhTCRVI&callback=initMap")
    window.initMap = this.initMap
  }

  getMuseums = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id:"HIRKFSR3XS50SWWU5FBG4DI4LN5PWI0OKKPWW4UDP13ZPHSN",
      client_secret:"RE4NWN115A1JETCAKMHQTZZ4VOLCMTK2LZNZUPN5K1PEEKOX",
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

  }
//initializing the map
  initMap = () => {

    //create the map centering it on my house 
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 42.9134, lng: -85.7053 },//my home wyoming, mi
      zoom: 8
    })

    // Create An InfoWindow
    let infowindow = new window.google.maps.InfoWindow()

    // Display Dynamic Markers
    this.state.museums.map(grMuseums => {

      let contentString = `${grMuseums.venue.name}`

      // setting the markers
      let marker = new window.google.maps.Marker({
        position: {lat: grMuseums.venue.location.lat , lng: grMuseums.venue.location.lng},
        map: map,
        // title:grMuseums.venue.name
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

function scriptloader(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
