console.log("StormOrigin WeatherOptics v1.0 - Copyright StormOrigin 2022")	
mapboxgl.accessToken = 'pk.eyJ1IjoiY3doaXQ1NjciLCJhIjoiY2w1dGppejBuMnMxajNrbW0zanBiZG82ZSJ9.k2dgaG9FYSu1MJfvWjAbDA';

	// Set bounds to a specific area.
const bounds = [
[150.649, -30.013], // Northeast coordinates
[155.836, -25.413], // Southeast coordinates
];

const beforeMap = new mapboxgl.Map({
container: 'before',
style: 'mapbox://styles/cwhit567/cl6yskqen000014klwdb7zhig',
center: [153.240, -27.718],
minzoom: 6.5,
maxzoom: 9.3,
maxBounds: bounds, // Set the map's geographical boundaries.
zoom: 6.5,
});
 
const afterMap = new mapboxgl.Map({
container: 'after',
style: 'mapbox://styles/cwhit567/cl6yskqen000014klwdb7zhig',
center: [153.240, -27.718],
minzoom: 6.5,
maxzoom: 9.3,
maxBounds: bounds, // Set the map's geographical boundaries.
zoom: 6.5,
});
 
// A selector or reference to HTML element
const container = '#comparison-container';
 
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {
// Set this to enable comparing two maps by mouse movement:
// mousemove: true
});