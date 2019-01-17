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

12/20/2018

[React Bounds Element Queries in React](https://www.npmjs.com/package/react-bounds)

[Create Google Maps with markers for places](https://blog.dnnsharp.com/1001/30-create-google-maps-with-markers-for-places)

[google reference for marker boundaries](https://developers.google.com/maps/documentation/javascript/reference/map?fbclid=IwAR1gmPJXyxTRZFlxR5osZUYEFM9xxFIvFsa5LlKOGg6whXSmnYk-LkIGqzo#Map.getBounds)
getBounds	
getBounds()
Parameters:  None
Return Value:  LatLngBounds
Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is null or undefined.

[error reporting ](https://stackoverflow.com/questions/9860823/js-loading-script-error)

Set up bounds, 
getting the following error message 

  73 |      })
  74 | 
  75 |      //extending the marker bounds 
> 76 |      let markLoc = new window.google.maps.LatLng(marker.postion.lat(), marker.postion.lng());
     | ^  77 |      bounds.extend(markLoc)
  78 | 
  79 |      // marker eventlistener
View compiled
App._this.initMap
C:/source/monas-neighborhood-map/src/App.js:64
  61 | 
  62 | 
  63 |    // Display Dynamic Markers
> 64 |    this.state.museums.map(grMuseums => {
     | ^  65 |      var contentString = `${grMuseums.venue.name}`
  66 | 
  67 |      // Create A Marker

  ## Console error 

  Uncaught (in promise) TypeError: Cannot read property 'lat' of undefined
    at App.js:76
    at Array.map (<anonymous>)
    at App._this.initMap (App.js:64)
    at js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap:123
    at js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap:123
localhost/:1 Access to fetch at 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

[Error: No 'Access-Control-Allow-Origin' header is present on the requested resource ](https://community.powerbi.com/t5/Developer/Error-No-Access-Control-Allow-Origin-header-is-present-on-the/td-p/350280)


12/21/2018

[Neighborhood App - Part 1: Design and Load Google Map API](https://www.youtube.com/watch?v=CCv8JrGVgYQ&list=PLxNdTlMoqzLIajvLvQR9OwcgxNK0GLpmL&index=13)

12/22/2018
[ReactJS - Build a Responsive Navigation Bar & Side Drawer Tutorial](https://www.youtube.com/watch?v=l6nmysZKHFU)

Trying to get my side bar and hamburger working 
getting the following error message 

Module not found: Can't resolve './components/Toolbar/' in 'C:\source\monas-neighborhood-map\src'

12/23/2018

Still having issues creating my components 
Went through Ryan's walkthrough, and I am not understanding it. 

getting this error this morning 

## Failed to compile
./src/App.js
Module not found: Can't resolve './components/Mapcontent' in 'C:\source\monas-neighborhood-map\src'

[Can’t find the module in React.js](https://www.freecodecamp.org/forum/t/cant-find-the-module-in-react-js/234237)

[Module not found: Can't resolve 'react' #2534](https://github.com/facebook/create-react-app/issues/2534)

## Console error message 
-------------------------------------------------------------

Uncaught Error: Cannot find module './components/Mapcontent'
    at webpackMissingModule (App.css?da7c:45)
    at Module../src/App.js (App.css?da7c:45)
    at __webpack_require__ (bootstrap:782)
    at fn (bootstrap:150)
    at Module../src/index.js (index.css?02e3:45)
    at __webpack_require__ (bootstrap:782)
    at fn (bootstrap:150)
    at Object.0 (serviceWorker.js:135)
    at __webpack_require__ (bootstrap:782)
    at checkDeferredModules (bootstrap:45)
    at Array.webpackJsonpCallback [as push] (bootstrap:32)
    at main.chunk.js:1
webpackMissingModule @ App.css?da7c:45
./src/App.js @ App.css?da7c:45
__webpack_require__ @ bootstrap:782
fn @ bootstrap:150
./src/index.js @ index.css?02e3:45
__webpack_require__ @ bootstrap:782
fn @ bootstrap:150
0 @ serviceWorker.js:135
__webpack_require__ @ bootstrap:782
checkDeferredModules @ bootstrap:45
webpackJsonpCallback @ bootstrap:32
(anonymous) @ main.chunk.js:1
index.js:1452 ./src/App.js
Module not found: Can't resolve './components/Mapcontent' in 'C:\source\monas-neighborhood-map\src'

So much for submitting by Christmas 

12/27/2018

took a few days off to regroup, and did some tutorials 
working on scrimba's react course right now https://scrimba.com/p/p7P5Hd/cQ7natG tyring to get my components to work properly 

Feeling really stupid right now, did not put the full path in for the import I am back to no errors now 
going to bed now

12/28/2018

https://reactjs.org/docs/rendering-elements.html

12/31/2018 

Year is almost done, and I am not seeing and end in sight with this project 
Trying to get through the frustration of this project 

Still working on setting up my components 

Every time I go 

`class Content extends React.Comonent {
  render() {
    return <"/>;
  }
}`

I keep getting an error message 

I am also getting this error message in `Mapcontent.js`

**Expected an assignment or function call and instead saw an expression.**

1/8/2018

Time to knock this thing out 
worked on Brad Traversy's [React JS Crash Course - 2019](https://www.youtube.com/watch?v=sBws8MSXN7A&feature=push-u-sub&attr_tag=zVn0WchU7lSlcy1b%3A6)

learned how to destruct, use `.map` and `bind` 

[JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)

[Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)

1/9/2018 

worked with Julian on Brad's react app and went over the map project 
going to connect with him on friday to work on the map some more

1/11/2018 

got the footer to work with Julian's help , need to do some CSS styling and thinking of moving the footer CSS over to the app.css 
instead of inlining it the way I have it 

1/12/2019
Finished Brad's tutorial 
Wanting to do my header like he did it in the tutorial 

need to get better at the Render Props 
[Render Props](https://reactjs.org/docs/render-props.html)

1/13/2018 
Got my footer working now trying to get my header working 
Need to cut out some of the components, this is just confusing me to much 

Installed fontawesome React, needing to use it later for the markers, hopefully if I can get it to work

[FontAwesome React](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
[landmark icon](https://fontawesome.com/icons/landmark?style=solid)

## getting this error message 

You should not use <Link> outside a <Router>
https://github.com/ReactTraining/react-router/issues/6140

https://github.com/ReactTraining/react-router/issues/3889

Trying to figure out what is going on with my header, tried to do some CSS, but when I go to import app.css, get this error message 

./src/components/Header/MapHeader.js
Module not found: Can't resolve './App.css' in 'C:\source\monas-neighborhood-map\src\components\Header'
[React Lifecycle Methods – A Deep Dive](https://programmingwithmosh.com/javascript/react-lifecycle-methods/?utm_sq=fz112xsqcp&utm_source=Facebook&utm_medium=social&utm_campaign=ProgrammingwithMosh&utm_content=JavaScript
https://programmingwithmosh.com/javascript/react-lifecycle-methods/?utm_sq=fz112xsqcp&utm_source=Facebook&utm_medium=social&utm_campaign=ProgrammingwithMosh&utm_content=JavaScript)

got header at the top, got my hamburger to start my SideBar, or MapBar as I am calling the component 
Still having issue with the CSS file, but I may just do inline CSS and call it a day 

1/14/2019

[VIDEOS on infowindows and markers]( https://www.youtube.com/playlist?list=PLZsyx8KUD6eJ85cckEPTe_Gu6Dk7TwAdu)

1/16/2019

[Udacity bounds and infoWindow](https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597/modules/a2527452-bb9f-431c-bfa7-a20b17992650/lessons/8304370457/concepts/83122494450923)

having issues with the app.css, keep getting this error message 
`./src/components/Museumlist/Museumlist.js
Module not found: Can't resolve '../App.css' in 'C:\source\monas-neighborhood-map\src\components\Museumlist'`