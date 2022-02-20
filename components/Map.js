import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ direccion, ubicacion }) => {
  const position = [40.4321073, -3.6538786];
  const styleMap = { width: "100%", height: "50vh" };
  return (
    <MapContainer style={styleMap} center={position} zoom={20}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <strong>{direccion} </strong> <br /> {ubicacion}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
