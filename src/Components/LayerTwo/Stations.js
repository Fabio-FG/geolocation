import axios from "axios";
import { useState, useEffect } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";


const apiURL = "http://api.citybik.es/v2/networks";

function Stations() {
  //useState for the data - networks and stations

  const [network, setNetwork] = useState([]);
  const { network_id } = useParams();

  //fetch data from the api using axios
  //make a request to the api for the network id and stations


  useEffect(() => {
    const fetchData = async () => {
       const response =  await axios.get(`${apiURL}/${network_id}`)
       const stationData = response.data.networks
       console.log("stations", stationData)
       setNetwork(stationData)
    }

    fetchData(network_id);
}, [])






  /* const getStations = async () => {
    try {
      const response = await axios(
        "http://api.citybik.es/v2/networks/network_id"
      );
      setNetwork(response.data);
      console.log("the networks:", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getStations();
  }, []); */


  return (
    <div>
      <h1 className="title">Geolocation Bike App</h1>
      <div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {network.map((network) => {
          return (
            //Marker positions are dynamic and according to the data location of latitude and longitude.
            <Marker
              key={network.id}
              position={[network.location.latitude, network.location.longitude]}
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

                <button>Stations</button>
              </Popup>
            </Marker>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Stations;
