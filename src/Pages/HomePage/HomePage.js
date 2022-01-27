import "./HomePage.css";
import Map from "../../Components/Map/Map";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Suspense } from "react";

//i18
const translationEn = { welcome: "Pedal with World Bike" };
const translationPt = { welcome: "Pedala com o World Bike"};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: { translation: translationEn},
      pt: { translation: translationPt },
    },
    lng: "pt", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function HomePage() {

  //import translation state
  const { t } = useTranslation();



  return (
    <Suspense fallback="Loading...">
      <div>
      <select name="Language" onChange={""}>
      <option value="en">EN</option>
      <option value="pt">PT</option>
      </select>
        <div className="second-header">
          <section className="text-container">
            <h1 className="title">{t("Pedal with World Bike")}</h1>

            <p className="text">
              Search for Cycling networks and stations all over the world in a
              few clicks.
            </p>
          </section>
        </div>
        <Map />
        <section id="about">
          <h3>How to use World Bike</h3>
          <p>
            Using World Bike is simple and straightforward. Just pick the
            country by scrolling through the map and check the available
            networks and bike stations. If you want to check other locations
            just click on the "back to network" button on the top right side and
            scroll to your new designated spot.
          </p>

          <h3>About World Bike</h3>
          <p>
            This World Bike app was built using React and Leaflet JS a tool that
            renders an openstreet map and enables map element manipulation .
            Leaflet JS uses materials such as Markers and Clusters. The networks
            are displayed worldwide and cluster together according to the zoom
            level. For more information read the documentation at{" "}
            <a
              href="https://react-leaflet.js.org/docs/start-introduction/"
              alt="react-leaflet-doc"
              className="doc-link"
            >
              Leaflet-React
            </a>
            .
          </p>
          <br></br>
        </section>
      </div>
    </Suspense>
  );
}

export default HomePage;
