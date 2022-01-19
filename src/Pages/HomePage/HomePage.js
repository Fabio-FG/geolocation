import "./HomePage.css";
import Map from "../../Components/LayerOne/Map";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



function HomePage() {
  //Portugal coordinates for the default view
  const position = [38.736946, -9.142685];
  return (
    <div>
    <h1 className="title">Bike App - Geolocation</h1>
    <h5 className="title">Fábio G.</h5>
    <MapContainer center={position} zoom={7} scrollWheelZoom={true} maxZoom={20} className="leaflet-container" >
      <Map />
      
    </MapContainer>
    </div>
  );
}

export default HomePage;
