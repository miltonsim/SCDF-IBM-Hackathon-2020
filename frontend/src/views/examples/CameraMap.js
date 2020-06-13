import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import 'mapbox-gl/dist/mapbox-gl.css';

class CameraMap extends React.Component {

  state = {
    viewport: {
      latitude: 1.340863,
      longitude: 103.8303918,
      zoom: 11,
      width: "100vw",
      height: "100vh",
    },
    coordinate: {
      latitude: 1.25865466476467,
      longitude: 103.818390225510001
    }
  }

  arr = [];

  componentDidMount() {
    console.log("component did mount camera map");

    
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(view) => {
            this.setState({
              viewport: view
            })
          }}
          mapStyle="mapbox://styles/qtxbryan/ckbcehlci0yt01is4202useay"
          style={{ maxWidth: "100%" }}
          children={this.props.children}
        >
          <Marker
            key="test"
            latitude={this.state.coordinate.latitude}
            longitude={this.state.coordinate.longitude}
          >
            <i className="ni ni-camera-compact text-danger"></i>
          </Marker>
        </ReactMapGL>
      </div>
    );
  }

};

export default CameraMap;
