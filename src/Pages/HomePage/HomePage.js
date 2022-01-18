import axios from "axios";
import { useState, useEffect } from "react";
import "./HomePage.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function HomePage() {
  //useState for the data - networks and stations
  const [data, setData] = useState([]);

  //initializing the map with leaflet

  //start position of the map - lisbon coordinates
  const position = [38.736946, -9.142685];

  //fetch data from the api -> http://api.citybik.es/v2/ using axios.

  const getGeoData = async () => {
    try {
      const response = await axios("http://api.citybik.es/v2/networks");
      setData(response.data.networks);
      console.log("the data:", response.data.networks[5].name);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    //axios call
    getGeoData();
  }, []);

  return (
    <div>
      <div className="leaflet-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            
          </Marker>
        </MapContainer>
      </div>
      <h1>This is the front page</h1>
      <div id="map"></div>
      {data.map((oneNetwork) => {
        return <div key={oneNetwork.id}>{oneNetwork.location.country}</div>;
      })}
    </div>
  );
}

export default HomePage;
