// https: //developers.google.com/maps/documentation/javascript/tutorial
// https: //www.youtube.com/watch?v=ywdxLNjhBYw&t=204s
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.renderMap()
  }
//this is to load the script
  renderMap = () => {
    scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyC3cO2soS7YZyFHhQMyg9CYJxKafhTCRVI&callback=initMap')
window.initMap = this.initMap //this is to make the map visible 

  }

//initializing the map
   initMap = () => {
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 42.9134, lng: -85.7053 },//my city wyoming, mi
    zoom: 8
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