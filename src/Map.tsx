import React from "react";
import { Map as LeafletMap, GeoJSON } from "react-leaflet";
import irishCounties from "./ireland.json";
import northernIrishCounties from "./northernireland.json";

interface MapState {
  lat: Number;
  lng: Number;
  zoom: Number;
}

const ords: any = irishCounties;
const northords: any = northernIrishCounties;

class IrelandMap extends React.Component<any, any> {
  state = {
    zoom: 7,
    initialOrds: [53.3834, -10.458961]
  };

  geoJSONStyle() {
    return {
      weight: 1,
      color: "#000",
      fillOpacity: 0.1
    };
  }

  onEachFeature(feature: any, layer: any) {
    const popupContent = `<Popup></p><pre>County: <br />${feature.properties
      .COUNTY || feature.properties.CountyName}</pre></Popup>`;
    layer.bindPopup(popupContent);
  }

  render() {
    const initialOrds: any = this.state.initialOrds;

    return (
      <LeafletMap
        center={initialOrds}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "calc(100vh)" }}
      >
        <GeoJSON
          data={ords}
          style={this.geoJSONStyle}
          onEachFeature={this.onEachFeature}
        />
        <GeoJSON
          data={northords}
          style={this.geoJSONStyle}
          onEachFeature={this.onEachFeature}
        />
      </LeafletMap>
    );
  }
}

export default IrelandMap;
