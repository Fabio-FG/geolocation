import { TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

function Networks({networks, setNetworkId}) {


    //if networks doesnt work
    if(!networks){
        return <p>Something went wrong</p>
    }

    if(networks.length === 0 ){
        return <p>No networks available.</p>
    }


    return ( <div>
        
            {networks.map((network) => {
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

                    <button onClick={() => setNetworkId(network.id)}>
                      Stations
                    </button>
                  </Popup>
                </Marker>
              );
            })}
    </div> );
}

export default Networks
