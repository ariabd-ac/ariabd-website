import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: -6.980481,
      lng: 109.131814,
    },
    zoom: 19,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <ContainerMap>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBXTmJ1d_onNReAwraSC0YWYv7sIVVwYEk",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-6.980481}
            lng={109.131814}
            text="My Marker"
          />
        </GoogleMapReact>
      </ContainerMap>
    );
  }
}

export default Maps;

// const ContainerMap = styled.div`
//   height: 50vh;
//   width: 100%;

//   @media only screen and (max-width: 550px) {
//     height: 50vh;
//   }
// `;

const ContainerMap = styled.div`
  height: 50vh;
  width: 100%;
  @media only screen and (max-width: 550px) {
    height: 50vh;
  }
`;
// import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

// export class Maps extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: -1.2884,
//           lng: 36.8233,
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBXTmJ1d_onNReAwraSC0YWYv7sIVVwYEk",
// })(Maps);
