import { TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

function Stations({stations}) {
    return ( 
        <div>
            {stations.map((station) => {
              return (
                //Marker positions are dynamic and according to the data location of latitude and longitude.

                <Marker
                  key={station.id}
                  position={[
                    station.latitude,
                    station.longitude,
                  ]}
                >
                  <Popup
                    position={[
                      //Popup position has to have the same position of the market.
                      station.latitude,
                      station.longitude,
                    ]}
                  >
                    <div>
                      {/* Message when the popup is clicked */}
                      <h3>{station.name}</h3>
                    </div>

                    <button onClick={() => {}}>
                      To Do - details
                    </button>
                  </Popup>
                </Marker>
              );
            })}
        </div>
     );
}

export default Stations;