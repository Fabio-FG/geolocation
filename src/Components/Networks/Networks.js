import { Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";

function Networks({
  networks,
  setNetworkId,
  setShowStations,
  setShowNetworks,
  languages,
}) {
  //translation hook
  const { t } = useTranslation();

  //safeguard in case there is no available networks
  if (!networks) {
    return <p>Something went wrong</p>;
  }

  if (networks.length === 0) {
    return <p>No networks available.</p>;
  }

  return (
    <div>
      {networks.map((network) => {
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
                <h3>{t("Network")}: {network.name}</h3>
              </div>

              <button
                onClick={() => {
                  setNetworkId(network.id);
                  setShowStations(true);
                  setShowNetworks(false);
                }}
              >
                {t("Check Stations")}
              </button>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}

export default Networks;
