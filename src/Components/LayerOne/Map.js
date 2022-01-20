import axios from "axios";
import { useState, useEffect } from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Networks from "../Networks/Networks";
import Stations from "../Stations/Stations";

//API Variable
const apiURL = "http://api.citybik.es/v2/networks";

function Map() {
  //Default position of the map - Lisbon coords
  const position = [38.736946, -9.142685];

  //useState for the data - networks and stations
  const [networks, setNetworks] = useState([]);
  const [stations, setStations] = useState([]);

  //variable and function to get the network ID
  const [networkId, setNetworkId] = useState(undefined);

  //variables to display the networks and stations
  const [showNetworks, setShowNetworks] = useState(false);
  const [showStations, setShowStations] = useState(false);

  //function to go back - > change it to a useEffect to re-render to the previous state
  const goBack = () => {
    setShowNetworks(true);
    setShowStations(!stations);
  };

  //hook to render the networks
  useEffect(() => {
    const fetchNetworks = async () => {
      const response = await axios.get(`${apiURL}`);
      const networkData = response.data.networks;
      console.log("networks", networkData);
      setNetworks(networkData);
      setShowNetworks(true);
    };

    fetchNetworks();
  }, []);

  //render the stations of a specific network ID
  useEffect(() => {
    if (!networkId) {
      return;
    } else {
      const fetchStation = async () => {
        const response = await axios.get(`${apiURL}/${networkId}`);
        const stationData = response.data.network.stations;
        console.log("stations", stationData);
        setShowNetworks(false);
        setShowStations(true);
        setStations(stationData);
      };

      fetchStation();
    }
  }, [networkId]);

  return (
    <div>
      <button onClick={() => goBack()} className="back-btn">Back to Networks</button>
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        maxZoom={20}
        className="leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup showCoverageOnHover={true}>
          {showNetworks && (
            <Networks networks={networks} setNetworkId={setNetworkId} />
          )}
          {showStations && <Stations stations={stations} />}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
