// https: //developers.google.com/maps/documentation/javascript/tutorial
// https: //www.youtube.com/watch?v=ywdxLNjhBYw&t=204s
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
state = {
  races:[]
} 

  componentDidMount(){
    this.getRaces()//calls the foursquare API
    // this.renderMap()
  }
//this is to load the script
  renderMap = () => {
    scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyC3cO2soS7YZyFHhQMyg9CYJxKafhTCRVI&callback=initMap')
window.initMap = this.initMap //this is to make the map visible 

  }
//foursquares API for right now, hopefully change to Athlinks API 
  getRaces = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id:"HIRKFSR3XS50SWWU5FBG4DI4LN5PWI0OKKPWW4UDP13ZPHSN",
      client_secret:"RE4NWN115A1JETCAKMHQTZZ4VOLCMTK2LZNZUPN5K1PEEKOX",
      query: "outdoors",
      near:"Michigan",
      v:"201849548"
    }
      axios.get(endPoint + new URLSearchParams(parameters))
      .then(response =>{
        this.setState({
          races:response.data.response.groups[0].items
        },this.renderMap())
        console.log(response.data.response.groups[0].items)
      })
      .catch(error => {
        console.log("ERROR!!!!" + error)
      })
   
  }

//initializing the map
   initMap = () => {
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 42.9134, lng: -85.7053 },//my city wyoming, mi
    zoom: 8
  })
this.state.races.map(ocrRaces => {//looping over the races inside of the state 

//setting the markers 
let marker = new window.google.maps.Marker({
  position:{ lat: ocrRaces.venue.location.lat, lng:ocrRaces.venue.location.lng },//my city wyoming, mi,
  map: map,
  title: ocrRaces.venue.name
});
});

  
}
  


  render() {
    return (
      <main>      
      <div id = "map"></div>
      </main>
     )
    }
     }   

     /*</script >
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>*/

    function scriptLoader(url){
      let index =window.document.getElementsByTagName("script")[0]
      let script = window.document.createElement("script")
      script.src = url
      script.async = true
      script.defer = true
      index.parentNode.insertBefore(script, index)//this is being used instead of using appendChild
    }
        
    
    export default App;