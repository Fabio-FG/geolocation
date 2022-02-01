import "./HomePage.css";
import Map from "../../Components/Map/Map";
import { useTranslation } from "react-i18next";


function HomePage({languages}) {
  
const { t } = useTranslation();

  return (
    
      <div>
        
        <div className="second-header">
          <section className="text-container">
            <h1 className="title">{t("Pedal with World Bike")}</h1>

            <p className="text">
              {t("Search")}
            </p>
          </section>
        </div>
        <Map languages={languages}/>
        <section id="about">
          <h3>{t("How to use World Bike")}</h3>
          <p>
            {t("using-text")}
          </p>

          <h3>{t("About World Bike")}</h3>
          <p>
            {t("about-text")}
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
    
  );
}

export default HomePage;
