console.log("StormOrigin WeatherOptics v1 - Copyright StormOrigin 2022")  

window.addEventListener('load', () => { 
    
  const aeris = new AerisWeather('wgE96YE3scTQLKjnqiMsv', 'tlyy22v5uBRBcm8lWeP0Y6ZISPLDVKGWXTJH9kYb'); 
  const utils = aeris.utils;

  aeris.apps().then((apps) => {
    const app = new apps.InteractiveMapApp(document.getElementById('map'), {
            map: {
                strategy: "mapbox",
                accessToken: "pk.eyJ1Ijoicm9uaS1zaGFsZXYiLCJhIjoiY2thaDEzdGwyMDN1ejJzdGl5Z3Nhems1ZCJ9.C36_Th7LAixAB1t6WHodMw",
                zoom: 4,
                style: 'mapbox://styles/mapbox/dark-v10',
                projection: 'globe',
                center: {
                    lat: -25.4626,
                    lon: 136.0725
                },
                timeline: {
                    from: -86400,
                    to: 0
                }
            },
            panels: {
                layers: {
                    buttons: [{
                            title: "Radar",
                            value: "radar"
                        },{
                            title: "Radar-Derived",
                            value: "radar-global"
                        },{
                            title: "Satellite - Infrared (B/W)",
                            value: "satellite"
                        },{
                            title: "Satellite - GeoColor",
                            value: "satellite-geocolor"
                        },{
                            title: "Satellite - Infrared (Color)",
                            value: "satellite-infrared-color"
                        },{
                            title: "Lightning Strikes - Icons 15m",
                            value: "lightning-strikes-15m-icons"
                        },{
                            title: "Lightning Strikes - Icons 5m",
                            value: "lightning-strikes-5m-icons"
                        },{
                            title: "Lightning Strikes",
                            value: "lightning-strikes"
                        },{
                            title: "Tropical Cyclones",
                            value: "tropical-cyclones"
                        }],
                    enabled: true,
                    toggleable: true,
                    position: {
                        pin: "topleft",
                        translate: {
                            x: 10,
                            y: 10
                        }
                    }
                },
                timeline: {
                    enabled: true,
                    toggleable: true,
                    position: {
                        pin: "bottomright",
                        translate: {
                            x: -10,
                            y: -10
                        }
                    }
                },
                search: {
                    enabled: true,
                    toggleable: true,
                    position: {
                        pin: "topright",
                        translate: {
                            x: -10,
                            y: 60
                        }
                    }
                },
                legends: {
                    enabled: true,
                    toggleable: true,
                    position: {
                        pin: "topright",
                        translate: {
                            x: -10,
                            y: 10
                        }
                    }
                },
                info: {
                    enabled: true,
                    position: {
                        pin: "topleft",
                        translate: {
                            x: 10,
                            y: 10
                        }
                    },
                    metric: true
                }
            }
        });
    
    app.on('ready', () => {
      // configure views for local weather info panel
      app.panels.info.setContentView('localweather', {
                views: [{
                        renderer: "alerts"
                    },{
                        renderer: "place"
                    },{
                        renderer: "obs"
                    },{
                        renderer: "outlook"
                    },{
                        renderer: "forecast"
                    }]
            });
    
      // show info panel for location when map is clicked
      app.map.on('click', (e) => {
        app.showInfoAtCoord(e.data.coord, 'localweather', 'Local Weather');
      });

      // select initial layers
      app.map.addLayers(['radar', 'lightning-strikes']);
      // load in MapsGL sdk and set up relevant layer controls
      aeris.mapsgl(app, {
        version: '1.1.0',
        layers: [{
                        title: "Temperatures",
                        value: "temperatures"
                    },{
                        title: "Wind Particles",
                        value: "wind-particles"
                    },{
                        title: "Wind Direction",
                        value: "wind-dir"
                    },{
                        title: "Dew Point",
                        value: "dew-points"
                    },{
                        title: "Humidity",
                        value: "humidity"
                    },{
                        title: "MSLP Contours",
                        value: "pressure-msl-contour"
                    }]
      }).then(({controller, mapsgl }) => {
        controller.addDataInspectorControl({ event: 'move'});
      });
    });
    
    
  });     
});
