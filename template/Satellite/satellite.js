console.log("StormOrigin WeatherOptics v1.0 - Copyright StormOrigin 2022")	
  mapboxgl.accessToken = 'pk.eyJ1IjoiY3doaXQ1NjciLCJhIjoiY2w1dGppejBuMnMxajNrbW0zanBiZG82ZSJ9.k2dgaG9FYSu1MJfvWjAbDA';
	
	// Set bounds to a specific area.
const bounds = [
[135.00569, -30.83075], // Southwest coordinates
[155.97859, -10.22218], // Northeast coordinates
];

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/cwhit567/cl9c7tg0l003g14qdzmc3nmko',
center: [153.240, -27.718],
minzoom: 3,
maxzoom: 12,
maxBounds: bounds, // Set the map's geographical boundaries.
zoom: 3,
projection: 'mercator', // starting projection
// causes pan & zoom handlers not to be applied, similar to
// .dragging.disable() and other handler .disable() funtions in Leaflet.
interactive: true
});

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

    // Add fullscreen control to the map.
map.addControl(new mapboxgl.FullscreenControl());

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

  // get mouse coordinates
map.on('mousemove', (e) => {
document.getElementById('info').innerHTML =
// `e.point` is the x, y coordinates of the `click` event
// relative to the top-left corner of the map.
JSON.stringify(e.point) +
'<br />' +
// `e.lngLat` is the longitude, latitude geographical position of the event.
JSON.stringify(e.lngLat.wrap());
});

// radar coverage opacity slider
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
const toggleableLayerIds = ['Satellite', 'Radar', 'Storms', 'Lightning'];
 
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