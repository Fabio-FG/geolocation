import { Marker, Popup } from "react-leaflet";

function Stations({ stations }) {
  //safeguard in case there is no available stations

  if (!stations) {
    return <p>Something went wrong!</p>;
  }

  if (stations === 0) {
    return <p>No Stations available</p>;
  }

  return (
    <div>
      {stations.map((station) => {
        return (
          //Marker positions are dynamic and according to the data location of latitude and longitude.

          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
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
              Station Name: {station.name}
              <br></br>
              Empty slots: {station.empty_slots}
              <br></br>
              Free Bikes: {station.free_bikes}
              <br></br>
              Last update: {station.timestamp}
              <br></br>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}

export default Stations;
