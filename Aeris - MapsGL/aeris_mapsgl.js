console.log("StormOrigin WeatherOptics v1 - Copyright StormOrigin 2022")  

window.addEventListener('load', () => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uaS1zaGFsZXYiLCJhIjoiY2thaDEzdGwyMDN1ejJzdGl5Z3Nhems1ZCJ9.C36_Th7LAixAB1t6WHodMw';
    const map = new mapboxgl.Map({
        container: document.getElementById('map'),
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [136.07246957457588, -25.46258407540878],
        zoom: 4
    });
    
    const account = new aerisweather.mapsgl.Account('wgE96YE3scTQLKjnqiMsv', 'tlyy22v5uBRBcm8lWeP0Y6ZISPLDVKGWXTJH9kYb');

    const controller = new aerisweather.mapsgl.MapboxMapController(map, { account });

    controller.on('load', () => {
        controller.addWeatherLayer('radar');
    });
});