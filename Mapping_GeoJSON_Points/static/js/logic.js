// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30.1975, -97.6665], 5);

// Coordinates for each point to be used in the line.
let line = [
    //[33.9416, -118.4085],   //LAX
    [37.6213, -122.3790],   //SFO
    //[40.7899, -111.9791],   //SLC
    //[47.4502, -122.3088],   //SEA
    [30.1975, -97.6665],    //AUS
    [43.6777, -79.6248],    //YYZ
    [40.6415, -73.7783]     //JFK
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: "10, 10",
    dashOffset: "0"
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Final code based on Skill Drill
/* Edit your logic.js to create an airline route from SFO to 
John F. Kennedy International Airport (JFK) with two stops, 
Austin-Bergstrom International Airport (AUS) and 
Toronto Pearson International Airport (YYZ). Make the route 
a blue dashed line, with a weight of 4 and opacity of 0.5 on the 
light map.

Hint: You'll need to find the coordinates for some of these airports.

Bonus: Add your city or another city as a stopping point.
 */
