import axios from "axios";
import { useState, useEffect } from "react";
import "./HomePage.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function HomePage() {
  //useState for the data - networks and stations
  const [data, setData] = useState([]);

  //useState for the networks
  const [network, setNetwork] = useState([]); 




  //start position of the map - lisbon coordinates
  const position = [38.736946, -9.142685];



  //fetch data from the api -> http://api.citybik.es/v2/ using axios.

  const getGeoData = async () => {
    try {
      const response = await axios("http://api.citybik.es/v2/networks")
      setData(response.data.networks);
      console.log("the data:", response.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    //axios call
    getGeoData();
  }, []);


  //make a request to the api for the network id and stations

  const getStations = async (network_id) => {
      try {
          const response = await axios(`http://api.citybik.es/v2/networks/${network_id}`)
          setNetwork(response.data);
          console.log("the networks:", response.data)
      } catch (error) {
          console.log("error", error);
      }
  }

useEffect(() => { 
    getStations();
}, [])



  return (
    <div>
    <h1>Geolocation Bike App</h1>
      <div>
        <MapContainer center={position} zoom={7} scrollWheelZoom={true} className="leaflet-container">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((network) => {
            
            return (
                //Marker positions are dynamic and according to the data location of latitude and longitude.
              <Marker
                key={network.id}
                position={[
                  network.location.latitude,
                  network.location.longitude,
                ]}
              >
                    
                <Popup position={[
                    //Popup position has to have the same position of the market.
                  network.location.latitude,
                  network.location.longitude,
                ]}>

                
                    <div>
                    {/* Message when the popup is clicked */}
                        <h3>{network.name}</h3>
                    </div>

                </Popup>
              </Marker>
            );
          })}

         
        </MapContainer>
      </div>
      <div>
      <MapContainer center={position} zoom={7} scrollWheelZoom={true} className="leaflet-container">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />



          {data.map((network) => {
            
            return (
                //Marker positions are dynamic and according to the data location of latitude and longitude.
              <Marker
                key={network.id}
                position={[
                  network.location.latitude,
                  network.location.longitude,
                ]}
              >
                    
                <Popup position={[
                    //Popup position has to have the same position of the market.
                  network.location.latitude,
                  network.location.longitude,
                ]}>

                
                    <div>
                    {/* Message when the popup is clicked */}
                        <h3>{network.name}</h3>
                    </div>

                </Popup>
              </Marker>
            );
          })}
              <Marker position={[41.14961, -8.61099]}></Marker>

         
        </MapContainer>
      </div>
      
     
      {/* {data.map((oneNetwork) => {
        return <div key={oneNetwork.id}>{oneNetwork.location.country}</div>;
      })} */}
    </div>
  );
}

export default HomePage;
