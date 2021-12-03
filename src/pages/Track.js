import '../CSS/track.css';
import "mapbox-gl/dist/mapbox-gl.css";
import '../webpack.config';
import React, {useRef, useEffect} from "react";
import mapboxgl from '!mapbox-gl';
/* eslint import/no-webpack-loader-syntax: off */
import data from '../data/map-data.geojson'
mapboxgl.accessToken = 'pk.eyJ1Ijoid2VlZWxiIiwiYSI6ImNqdW01YmtmdjJlNHo0NHAzaWh6YmhrZ3QifQ.bFHG_eOZFdQ6eDDC7wvjNg';

/*
const data = [
	{
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": [-73.9516030004786,40.72557300071668],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.98393399979334,40.75533300052329],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.9882730001973,40.718207001246554],
	},
  {
		"location": "Tian an men",
		"city": "Beijing",
		"state": "Beijing",
		"coordinates": [116.397492, 39.908960],
	},
  {
    "location": "Tian an men",
		"city": "Beijing",
		"state": "Beijing",
		"coordinates": [139.680475, 35.731968],
  }
]
*/


function TrackPage() {
    const mapboxElRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapboxElRef.current,
          style: 'mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k',
          center: [138.5, 36.13],
          zoom: 6.0,
        });

        /*
        data.forEach((location) => {
          console.log(location)
          new mapboxgl.Marker()
                  .setLngLat(location.coordinates)
                  .setPopup(new mapboxgl.Popup({ offset: 30 })
                  .setHTML('<h4>' + location.city + '</h4>' + location.location))
                  .addTo(map);
        });
        */
        map.on('load', function () {
          map.addSource('point_sample', {
              type: 'geojson',
              data: data
          });

          map.addLayer({
              "id": "point_sample",
              "type": "circle",
              "source": "point_sample",
              "layout": {},
              "paint": {
                  'circle-color': "rgba(255, 20, 147, 0.75)",
                  'circle-radius': 5
              }
          });
        });
        map.addControl(new mapboxgl.NavigationControl());
    }, []);

    return (
    <div>
        <div className="container">
          <div className="row yt">
              <div className="title-text">
                <h1 className="text-center col-md-12">
                <i class="fab fa-youtube-square"></i>
                &nbsp; Weeelb Track
                </h1>
            </div>
          </div>
          <div ref={mapboxElRef} className="map-container" />
        </div>
    </div>
    );
}

export default TrackPage;
