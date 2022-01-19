import axios from "axios";
import { useState, useEffect } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./Networks.css";
import MarkerClusterGroup from "react-leaflet-markercluster";

const apiURL = "http://api.citybik.es/v2/networks";

function Networks() {
  //useState for the data - networks and stations
  const [data, setData] = useState([]);

  const [stations, setStations] = useState([]);

  //using a hook and axios to make a call to the API.
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}`);
      const networkData = response.data.networks;
      console.log("networks", networkData);
      setData(networkData);
    };

    fetchData();
  }, []);

  const secondLayer = (network_id) => {
    console.log("trying", network_id);

    setStations(network_id);
    console.log("stations of", stations);

    /* const fetchStation = async () => {
        const response = await axios.get(`${apiURL}/${network_id}`)
        const stationData = response.data;
        console.log("stations", stationData);
      } */

    /* fetchStation(); */
  };

  return (
    <div>
      <div>
        <TileLayer
        
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup showCoverageOnHover={true}>
          {data &&
            data.map((network) => {
              return (
                //Marker positions are dynamic and according to the data location of latitude and longitude.

                <Marker
                  key={network.id}
                  position={[
                    network.location.latitude,
                    network.location.longitude,
                  ]}
                >
                  <Popup
                    position={[
                      //Popup position has to have the same position of the market.
                      network.location.latitude,
                      network.location.longitude,
                    ]}
                  >
                    <div>
                      {/* Message when the popup is clicked */}
                      <h3>{network.name}</h3>
                    </div>

                    <button onClick={() => secondLayer(network.id)}>
                      Stations
                    </button>
                  </Popup>
                </Marker>
              );
            })}
        </MarkerClusterGroup>
      </div>
    </div>
  );
}

export default Networks;
