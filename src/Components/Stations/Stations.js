import { Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";


function Stations({ stations, languages}) {
  //hook for translations
  const { t } = useTranslation();
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
              <b>{t("Station Name")}</b>: {station.name}
              <br></br>
              <b>{t("Empty slots")}</b>: {station.empty_slots}
              <br></br>
              <b>{t("Free Bikes")}</b>: {station.free_bikes}
              <br></br>
              <b>{t("Last update")}</b>: {station.timestamp}
              <br></br>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}

export default Stations;
