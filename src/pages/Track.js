import '../CSS/track.css';
import "mapbox-gl/dist/mapbox-gl.css";
import '../webpack.config';
import React, {useRef, useEffect} from "react";
import mapboxgl from '!mapbox-gl';
/* eslint import/no-webpack-loader-syntax: off */
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
