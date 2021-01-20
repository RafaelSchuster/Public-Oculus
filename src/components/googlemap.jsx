import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../css/map.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <>
      <h1 className="title">Here are some providers in the area</h1>
      {/* // Important! Always set the container height explicitly */}
      <div className="map" style={{ height: "50vh", width: "25%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAQolTcn35gBoMisZIMQTJOkNUu2p-Homw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}

export default SimpleMap;
