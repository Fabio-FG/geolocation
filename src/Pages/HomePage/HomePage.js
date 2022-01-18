import "./HomePage.css";
import Networks from "../../Components/LayerOne/Networks";
import Stations from "../../Components/LayerTwo/Stations";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



function HomePage() {
  //Portugal coordinates for the default view
  const position = [38.736946, -9.142685];
  return (
    <div>
    <h1 className="title">Bike App</h1>
    <MapContainer center={position} zoom={7} scrollWheelZoom={true} className="leaflet-container">
      <Networks />
      <Stations />
    </MapContainer>
    </div>
  );
}

export default HomePage;
