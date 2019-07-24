import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { ReactComponent as BlueMarker } from '../../src/assets/images/icons/map_pin.svg';

const markerText = {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    lineHeight: 1.35,
    marginBottom: '12px',
}

const markerIcon = {
    width: '12px',
    height: '19px',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
}

const MarkerComponent = ({ text, icon }) => 
    <div>
        <div style={markerText}>{text}</div>
        <div style={markerIcon}>{icon}</div>
    </div>;

class EventVenueMap extends Component {

    constructor(props) {
        super()
        this.state = {
            venueName: props.venueName,
        }
    }

  static defaultProps = {
    center: {
      lat: 1.319312,
      lng: 103.894696
    },
    zoom: 15,
  };

  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDztUQrKoTPVxcHhNP6J1g6VkutSM6UKCo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={this.state.venueName}
            icon={<BlueMarker />}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default EventVenueMap;
