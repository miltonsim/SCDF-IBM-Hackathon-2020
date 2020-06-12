import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as aedData from "../data/aedLocation.json";
const Maps = (props) => {
  const [viewport, setViewPort] = useState({
    latitude: 1.340863,
    longitude: 103.8303918,
    zoom: 11,
    width: "100vw",
    height: "100vh",
  });

  const arr = [];

  useEffect(() => {
    const geoData = aedData.features;
    let randomAedPos = geoData[Math.floor(Math.random() * geoData.length)];
    for (let i = 0; i < 100; i++) {
      arr.push(randomAedPos);
    }
    console.log("after all", arr);
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(view) => {
          setViewPort(view);
        }}
        mapStyle="mapbox://styles/qtxbryan/ckbcehlci0yt01is4202useay"
      >
        {arr.map((marker) => {
          console.log(marker);

          return (
            <Marker
              key={marker.properties.Name}
              latitude={marker.geometry.coordinates[1]}
              longitude={marker.geometry.coordinates[0]}
            >
              <div>AED</div>
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
};

export default Maps;
