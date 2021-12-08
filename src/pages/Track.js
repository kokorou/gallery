import '../CSS/track.css';
import "mapbox-gl/dist/mapbox-gl.css";
import '../webpack.config';
import React, {useRef, useEffect} from "react";
import SectionTitle from "../components/SectionTitle";
import mapboxgl from '!mapbox-gl';
/* eslint import/no-webpack-loader-syntax: off */
import data from '../data/map-data.geojson';
mapboxgl.accessToken = 'pk.eyJ1Ijoid2VlZWxiIiwiYSI6ImNqdW01YmtmdjJlNHo0NHAzaWh6YmhrZ3QifQ.bFHG_eOZFdQ6eDDC7wvjNg';

function TrackPage() {
    const mapboxElRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapboxElRef.current,
          style: 'mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k',
          center: [138.5, 36.13],
          zoom: 6.0,
        });

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
          <SectionTitle heading="Track" subheading="Places I've visited"/>
          <div ref={mapboxElRef} className="map-container" />
        </div>
    </div>
    );
}

export default TrackPage;
