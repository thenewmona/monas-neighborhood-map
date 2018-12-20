// https: //developers.google.com/maps/documentation/javascript/tutorial
// https: //www.youtube.com/watch?v=ywdxLNjhBYw&t=204s
import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import axios from "axios"

class App extends Component {
  n
state = {//Help from Drunkmeister with this on 12/19/2018
  museums:[],
  map:null,
  infoWindow:null,
};


  componentDidMount() {
    this.getMuseums();//calls the foursquare API
    // this.renderMap()
  }

//this is to load the script
  renderMap = () => {

    scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyC3cO2soS7YZyFHhQMyg9CYJxKafhTCRVI&callback=initMap'
    );
    
window.initMap = this.initMap //this is to make the map visible 
  };
//foursquares API for right now, hopefully change to Athlinks API 
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
      .then(response =>{
        this.setState({
          museums:response.data.response.groups[0].items
        },
        this.renderMap()
        );
        console.log(response.data.response.groups[0].items)
      })
      .catch(error => {
        console.log("ERROR!!!!" + error)
      });
  };

//initializing the map
   initMap = () => {
     //create the map centering it on my house 
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 42.96, lng: -85.7053 },//my home wyoming, mi
    zoom: 8
  })

  //InfoWindow
  let InfoWindow = new window.google.maps.infoWindow();

  this.setState({
    map,
    infoWindow
  });

  this.initMarkers(map, infoWindow);
};

initMarkers = (map,infoWindow) => {

  //looping over the museums inside of the state 
this.state.museums.map(grMuseums => {
  let contentString = `${grMuseums.venue.name}`;
  
//setting the markers 
let marker = new window.google.maps.Marker({
  position:{
     lat: grMuseums.venue.location.lat,
      lng:grMuseums.venue.location.lng 
    },//my city wyoming, mi,
  map: map,
  title: grMuseums.venue.name,
  name: grMuseums.venue.name,
  venue: grMuseums.venue,
  draggable: false,
  animation: window.google.maps.Animation.drop,
});

//marker eventlistener

marker.addListener('click',function(){
  // infoWindow content 
  infoWindow.setContenet(contentString);
  //show infoWindow
  infoWindow.open(map, marker);
});
});  
}; 

  render() {
    return (
      <main>      
      <div id = "map"></div>
      </main>
     );
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