console.log("StormOrigin WeatherOptics v1.0 - Copyright StormOrigin 2022")  
  mapboxgl.accessToken = 'pk.eyJ1IjoiY3doaXQ1NjciLCJhIjoiY2w1dGppejBuMnMxajNrbW0zanBiZG82ZSJ9.k2dgaG9FYSu1MJfvWjAbDA';

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/cwhit567/ckwsu0yki1efg15pi0pw74bfl',
center: [153.240, -27.718],
zoom: 6.5,
});

map.setMaxZoom(12);
map.setMinZoom(0);


map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
 
// Limit seach results to Australia.
countries: 'au',
 
mapboxgl: mapboxgl
})
);
    
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
    
    // Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);

/* 
Add an event listener that runs
  when a user clicks on the map element.
*/
map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['radar-sites'] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

/* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
const popup = new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.type}</p>`
  )
  .addTo(map);

});

    // Add fullscreen control to the map.
map.addControl(new mapboxgl.FullscreenControl());

  // get mouse coordinates
map.on('click', (e) => {
document.getElementById('info').innerHTML =
// `e.point` is the x, y coordinates of the `mousemove` event
// relative to the top-left corner of the map.
JSON.stringify(e.point) +
'<br />' +
// `e.lngLat` is the longitude, latitude geographical position of the event.
JSON.stringify(e.lngLat.wrap());
});

let currentDate = new Date();
let year = currentDate.getUTCFullYear();
let month = currentDate.getUTCMonth() + 1;
let day = currentDate.getUTCDate();
let hour = currentDate.getUTCHours();
let minutes = currentDate.getUTCMinutes();

    if (minutes < 60 && minutes >= 55){
        minutes = 55;
    }

    if (minutes < 5 && minutes >= 0){
        minutes = 0;
    }

    if (minutes < 10 && minutes >= 5){
        minutes = 5;
    }

    if (minutes < 15 && minutes >= 10){
        minutes = 10;
    }

    if (minutes < 20 && minutes >= 15){
        minutes = 15;
    }

    if (minutes < 25 && minutes >= 20){
        minutes = 20;
    }

    if (minutes < 30 && minutes >= 25){
        minutes = 25;
    }

    if (minutes < 35 && minutes >= 30){
        minutes = 30;
    }

    if (minutes < 40 && minutes >= 35){
        minutes = 35;
    }

    if (minutes < 45 && minutes >= 40){
        minutes = 40;
    }

    if (minutes < 50 && minutes >= 45){
        minutes = 45;
    }

    if (minutes < 55 && minutes >= 50){
        minutes = 50;
    }

    if (month < 10){
        month = '0' + month;
    }

    if (day < 10){
        day = '0' + day;
    }
    
    if (hour < 10){
        hour = '0' + hour;
    }
    
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes)
console.log(year + " " + month + " " + day + " " + hour + " " + minutes)

    //storm and lightning date
let currentLDate = new Date();
let lyear = currentLDate.getUTCFullYear();
let lmonth = currentLDate.getUTCMonth() + 1;
let lday = currentLDate.getUTCDate();
let lhour = currentLDate.getUTCHours();
let lminutes = currentLDate.getUTCMinutes();

    if (lminutes < 60 && lminutes >= 55){
        lminutes = 50;
    }

    if (lminutes < 5 && lminutes >= 0){
        lminutes = 55;
        lhour = lhour - 1;
    }

    if (lminutes < 10 && lminutes >= 5){
        lminutes = 0;
    }

    if (lminutes < 15 && lminutes >= 10){
        lminutes = 5;
    }

    if (lminutes < 20 && lminutes >= 15){
        lminutes = 10;
    }

    if (lminutes < 25 && lminutes >= 20){
        lminutes = 15;
    }

    if (lminutes < 30 && lminutes >= 25){
        lminutes = 20;
    }

    if (lminutes < 35 && lminutes >= 30){
        lminutes = 25;
    }

    if (lminutes < 40 && lminutes >= 35){
        lminutes = 30;
    }

    if (lminutes < 45 && lminutes >= 40){
        lminutes = 35;
    }

    if (lminutes < 50 && lminutes >= 45){
        lminutes = 40;
    }

    if (lminutes < 55 && lminutes >= 50){
        lminutes = 45;
    }
    
    if (lmonth < 10){
        lmonth = '0' + lmonth;
    }
    
    if (lday < 10){
        lday = '0' + lday;
    }
    
    if (lhour < 10){
        lhour = '0' + lhour;
    }
    
    if (lminutes < 10){
        lminutes = '0' + lminutes;
    }

console.log(lyear);
console.log(lmonth);
console.log(lday);
console.log(lhour);
console.log(lminutes)
console.log(lyear + " " + lmonth + " " + lday + " " + lhour + " " + lminutes)

    // satellite date
let currentSDate = new Date();
let syear = currentSDate.getUTCFullYear();
let smonth = currentSDate.getUTCMonth() + 1;
let sday = currentSDate.getUTCDate();
let shour = currentSDate.getUTCHours();
let sminutes = currentSDate.getUTCMinutes();

    if (sminutes < 60 && sminutes >= 50){
        sminutes = 10;
    }

    if (sminutes < 10 && sminutes >= 0){
        sminutes = 20;
        shour = shour - 1;
    }

    if (sminutes < 20 && sminutes >= 10){
        sminutes = 30;
        shour = shour - 1;
    }

    if (sminutes < 30 && sminutes >= 20){
        sminutes = 40;
        shour = shour - 1;
    }

    if (sminutes < 40 && sminutes >= 30){
        sminutes = 50;
        shour = shour - 1;
    }

    if (sminutes < 50 && sminutes >= 40){
        sminutes = 0;
    }
    
    if (smonth < 10){
        smonth = '0' + smonth;
    }
    
    if (sday < 10){
        sday = '0' + sday;
    }
    
    if (shour < 10){
        shour = '0' + shour;
    }
    
    if (sminutes < 10){
        sminutes = '0' + sminutes;
    }

console.log(syear);
console.log(smonth);
console.log(sday);
console.log(shour);
console.log(sminutes)
console.log(syear + " " + smonth + " " + sday + " " + shour + " " + sminutes)
 
map.on('load', () => {
const layers = map.getStyle().layers;
// Find the index of the first symbol layer in the map style.
let firstSymbolId;
for (const layer of layers) {
if (layer.type === 'symbol') {
firstSymbolId = layer.id;
break;
}
}
 
map.addSource('radar', {
'type': 'image',
'url': `https://zeus.stormyweather.com.au/img/WW2DGrid/66/66_256_${year}${month}${day}_${hour}${minutes}.png`,
coordinates: [
[150.64224, -25.41804], // northwest coordinates
[155.83723, -25.41804], //northeast coordinates
[155.83723, -30.01744], //southeast coordinates
[150.64224, -30.01744], //southwest coordinates
]
});
map.addLayer(
{
'id': 'Radar',
'type': 'raster',
'source': 'radar',
'paint': {
'raster-fade-duration': 0
}
// This is the important part of this example: the addLayer
// method takes 2 arguments: the layer as an object, and a string
// representing another layer's name. If the other layer
// exists in the style already, the new layer will be positioned
// right before that layer in the stack, making it possible to put
// 'overlays' anywhere in the layer stack.
// Insert the layer beneath the first symbol layer.
},
firstSymbolId
);
});

map.on('load', () => {
const layers = map.getStyle().layers;
// Find the index of the first symbol layer in the map style.
let firstSymbolId;
for (const layer of layers) {
if (layer.type === 'symbol') {
firstSymbolId = layer.id;
break;
}
}
 
map.addSource('lightning', {
'type': 'image',
'url': `https://archive.weatherwatch.net.au/data/img/lightning/ww2d/66/66_256_cg_${lyear}${lmonth}${lday}_${lhour}${lminutes}.png`,
coordinates: [
[150.64224, -25.41804], // northwest coordinates
[155.83723, -25.41804], //northeast coordinates
[155.83723, -30.01744], //southeast coordinates
[150.64224, -30.01744], //southwest coordinates
]
});
map.addLayer(
{
'id': 'Lightning',
'type': 'raster',
'source': 'lightning',
'paint': {
'raster-fade-duration': 0
}
// This is the important part of this example: the addLayer
// method takes 2 arguments: the layer as an object, and a string
// representing another layer's name. If the other layer
// exists in the style already, the new layer will be positioned
// right before that layer in the stack, making it possible to put
// 'overlays' anywhere in the layer stack.
// Insert the layer beneath the first symbol layer.
},
firstSymbolId
);
});

map.on('load', () => {
const layers = map.getStyle().layers;
// Find the index of the first symbol layer in the map style.
let firstSymbolId;
for (const layer of layers) {
if (layer.type === 'symbol') {
firstSymbolId = layer.id;
break;
}
}
 
map.addSource('storms', {
'type': 'image',
'url': `https://storms.weatherwatch.net.au/images/66/256_${lyear}${lmonth}${lday}_${lhour}${lminutes}.png`,
coordinates: [
[150.64224, -25.41804], // northwest coordinates
[155.83723, -25.41804], //northeast coordinates
[155.83723, -30.01744], //southeast coordinates
[150.64224, -30.01744], //southwest coordinates
]
});
map.addLayer(
{
'id': 'Storms',
'type': 'raster',
'source': 'storms',
'paint': {
'raster-fade-duration': 0
}
// This is the important part of this example: the addLayer
// method takes 2 arguments: the layer as an object, and a string
// representing another layer's name. If the other layer
// exists in the style already, the new layer will be positioned
// right before that layer in the stack, making it possible to put
// 'overlays' anywhere in the layer stack.
// Insert the layer beneath the first symbol layer.
},
firstSymbolId
);
});

    // radar opacity slider
slider.addEventListener('input', (e) => {
// Adjust the layers opacity. layer here is arbitrary - this could
// be another layer name found in your style or a custom layer
// added on the fly using `addSource`.
map.setPaintProperty(
'Radar',
'raster-opacity',
parseInt(e.target.value, 10) / 100
);
 
// Value indicator
sliderValue.textContent = e.target.value + '%';
});

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
 
// Enumerate ids of the layers.
const toggleableLayerIds = [ 'Radar', 'Storms', 'Lightning'];
 
// Set up the corresponding toggle button for each layer.
for (const id of toggleableLayerIds) {
// Skip layers that already have a button set up.
if (document.getElementById(id)) {
continue;
}
 
// Create a link.
const link = document.createElement('a');
link.id = id;
link.href = '#';
link.textContent = id;
link.className = 'active';
 
// Show or hide layer when the toggle is clicked.
link.onclick = function (e) {
const clickedLayer = this.textContent;
e.preventDefault();
e.stopPropagation();
 
const visibility = map.getLayoutProperty(
clickedLayer,
'visibility'
);
 
// Toggle layer visibility by changing the layout object's visibility property.
if (visibility === 'visible') {
map.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map.setLayoutProperty(
clickedLayer,
'visibility',
'visible'
);
}
};
 
const layers = document.getElementById('menu');
layers.appendChild(link);
}
});