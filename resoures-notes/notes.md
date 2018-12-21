1/29/2018 finally starting P7 Got my react-app started Udacity | Neighborhood Map [1] - Intro and Creating our React App

Udacity | Neighborhood Map [2] - Add Google Maps to React App Without Any External Components

12/2/2018

set up my google maps api and got a key

12/3/2018

Google Maps Platform Overview

Adding a Google Map with a Marker to Your Website

Created my map.html, but getting a failed to compile error message

Failed to compile ./src/App.js Module not found: Can't resolve './components/map.html' in 'C:\Users\thene\Google Drive\GWG phase 2\GWGprojects\myneighborhood-maps\src' This error occurred during the build time and cannot be dismissed.

Gonna try and get a map going outside of this project, just to get the map to render, than i will copy and paste into this project

##Slack notes thenewmona {FEND}Michigan [Today at 7:44 AM] good morning everyone working on P7, and of course having issues right out of the gate Don't think I have ever seen this one before in the Slack or forums

I am trying to build my map I actually started in my project following Brad Traversy's video, but since he is not doing in REACT, I decided to just start totally separate, learn how to do it, and them copy it in my project

All I have is an HTML file as you can see in my screenshot, but somewhere it is pulling my swDB.js file , or at least that is what the console is showing.

I have no idea where this coming from. I did a hard cache reload, thinking it is cached from my restaurant app Anyone have this issue before or seen this issue before

https://snag.gy/D9aTCW.jpg (543 kB)

Thanks

8 replies Asmaa [7 minutes ago] did you try window.google.map.Map

Asmaa [6 minutes ago] like this const map = new window.google.maps.Map(document.getElementById("map")

Asmaa [5 minutes ago] also do you have your height like this height: 100vh;

Also sent to the channel thenewmona {FEND}Michigan [4 minutes ago] @Asmaa actually I am just following a tutorial right now, and it is just a plain HTML file, I have no JS , no folders, or anything I can not for the life of me figure out where this JS error's are coming from.

thenewmona {FEND}Michigan [3 minutes ago] But where is the swDB.js file coming from in the very first line That is what I am trying to figure out

thenewmona {FEND}Michigan [< 1 minute ago] and of course it is now time for me to get ready and go to work. Thanks for looking @Asmaa I will be back at tonight again Gonna get this map working tonight Have a great day

Asmaa [< 1 minute ago] oh i was looking at the typeerror the undefined map that all you got to do is add window in front of google.maps.Map,

12/3/2018 Finally figured out how to get rid of the service worker issue had to unregister the SW, and clear my local storage I have a map, with an icon and infoWindow thanks to Brad Traversy

12/5/2018

finishing up vanilla version of my map

12/6/2018

Getting the mockup of the map completed learned how to customize the icons got my first custom icon , here are the notes when I am ready to do the CSS

<img alt="" src="https://img.icons8.com/material-rounded/2x/street-view.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 64px; height: 64px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">

getting all the map location information
, then off to the info window

12/9/2018

needing to organize my markers researching marker clustering

12/12/2018

Trying to figure out how to put this all together now 
Got my markup done, it's working ok, now trying to figure out how to compile it in React
Tried to put all the cordinates into App.js, and had over 175 errors 
installed google-maps-react - reactDom and reactRouter 

can not do a branch checkout to get back to the master branch 
Had issues last night, when I was trying to show dan my project because I could not see the map api branch 
but now I can push/pull/checkout 

thene@DESKTOP-KGLOT7J MINGW64 ~/Google Drive/GWG phase 2/GWGprojects/myneighborhood-maps (map-api)
$ git push --set-upstream https://github.com/thenewmona/myNeighborhood-Maps.git map-api
error: src refspec map-api does not match any.
error: failed to push some refs to 'https://github.com/thenewmona/myNeighborhood-Maps.git'

thene@DESKTOP-KGLOT7J MINGW64 ~/Google Drive/GWG phase 2/GWGprojects/myneighborhood-maps (map-api)
$ git push git push --set-upstream https://github.com/thenewmona/myNeighborhood-Maps.git
fatal: Invalid refspec 'https://github.com/thenewmona/myNeighborhood-Maps.git'

thene@DESKTOP-KGLOT7J MINGW64 ~/Google Drive/GWG phase 2/GWGprojects/myneighborhood-maps (map-api)
$ git push git push --set-upstream https://github.com/thenewmona/myNeighborhood-Maps.git
fatal: Invalid refspec 'https://github.com/thenewmona/myNeighborhood-Maps.git'

thene@DESKTOP-KGLOT7J MINGW64 ~/Google Drive/GWG phase 2/GWGprojects/myneighborhood-maps (map-api)
$ git checkout master
fatal: unable to read tree de3f64d50b21375eef6e5ad1e3312c2190b9df81

https://stackoverflow.com/questions/20870895/how-to-diagnose-and-fix-git-fatal-unable-to-read-tree?lq=1
just going to start over from scratch, this project is foobared 

12/13/2018 
recreating project - to many issues to troubleshoot 
starting fresh again 
new project name is monas-neighborhood-map
following [Elharony walkthrough](https://www.youtube.com/watch?v=ywdxLNjhBYw&t=204s) 

12/14/2018 

worked with Dan on the project 
There were to many errors in the project so recreated the project, and put it on the c drive and took it out of Google drive 
Recloned the project hope to get rid of the GIT errors 

12/15/2018
activated my extension and starting on the REACT lesson per Dan's suggestions 

12/17/2018

added foursquares API
have the markers for GR museums showing up 
Sent in a request for Athlinks API access 
tomorrow infoWindow

12/18/2018

Created infoWindow branch having some issues and did not want to mess up my master whick is working perfect
need to clean up some of my comments 
I am still error free 
12/18/2018

getting a info window not defined error message

./src/App.js
  Line 72:  'infoWindow' is not defined  no-undef
  Line 74:  'infoWindow' is not defined  no-undef

12/19/2018

This is getting really frustrating, had this thing working at work, but I am now still getting infoWindow not defined at home 
This is driving me crazy 

## Notes from drunkenkismet 

changed Lat on map and added notes for Mona

@drunkenkismet
drunkenkismet committed an hour ago
commit 6605df5119314ccce71a6ccfff7c3f68fac7157d
     
17  src/App.js
@@ -55,13 +55,26 @@ class App extends Component {
  initMap = () => {
    //create the map centering it on my house
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 42.9134, lng: -85.7053 }, //my home wyoming, mi
      zoom: 8
      center: { lat: 42.96, lng: -85.7053 }, //my home wyoming, mi
      zoom: 13
    });

    //InfoWindow
    const infoWindow = new window.google.maps.InfoWindow();

    // you'll want access to these later, outside these methods, when you create your sidebar
    // reference them outside this method as:
    /*
      const { map, infoWindow } = this.state;
      infoWindow.open(map, marker); // for example
    */

    // you should also create a `bounds` object and store it in state.
    // the Google docs explain the usefulness of the Bounds constructor --
    // for each marker you create, you can basically use LatLngBounds to ensure the
    // markers all stay visible within the viewport (bounds will extends or contract based on where
    // each new marker appears on the map).

    this.setState({
      map,
      infoWindow

[How to write your first React.js component](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc)

[How To Use The React Context API](https://medium.com/flatiron-labs/how-to-use-the-react-context-api-70a76d3974d5)
