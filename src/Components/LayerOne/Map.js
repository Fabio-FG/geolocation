import axios from "axios";
import { useState, useEffect } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Networks from "../Networks/Networks";
import Stations from "../Stations/Stations";

const apiURL = "http://api.citybik.es/v2/networks";

function Map() {
  //useState for the data - networks and stations
  const [networks, setNetworks] = useState([]);
  const [stations, setStations] = useState([]);
  const [networkId, setNetworkId] = useState(undefined);

  const [showNetworks, setShowNetworks] = useState(false);
  const [showStations, setShowStations] = useState(false);

  //using a hook and axios to make a call to the API.
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

  //network useffect
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
      <div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup showCoverageOnHover={true}>
          {showNetworks && <Networks networks={networks} setNetworkId={setNetworkId} />}
          {showStations && <Stations stations={stations} />}
        </MarkerClusterGroup>
      </div>
    </div>
  );
}

export default Map;
