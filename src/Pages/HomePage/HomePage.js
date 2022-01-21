import "./HomePage.css";
import Map from "../../Components/Map/Map";

function HomePage() {
  return (
    <div>
      <div className="second-header">
        <section className="text-container">
          <h1 className="title">Pedal with World Bike</h1>

          <p className="text">
            Search for Cycling networks and stations all over the world in a few
            clicks.
          </p>
        </section>
      </div>
      <Map />
      <section id="about">
      <h3>About World Bike</h3>
        <p>
          This World Bike app was built using React and Leaflet JS a tool that
          allows us to render an openstreet map. Leaflet JS uses materials such
          as Markers and Clusters. The networks are displayed worldwide and
          cluster together according to the zoom level.
          For more information read the documentation at <a href="https://react-leaflet.js.org/docs/start-introduction/" alt="react-leaflet-doc" className="doc-link">Leaflet-React</a>.
        </p>
        <br>
        </br>
        <h3>How to use World Bike</h3>
        <p>Using World Bike is simple and straightforward.Just pick the country by scrolling through the map and check the available networks and bike stations. If you want to check other locations just click on the "back to network" button on the top right side and scroll to your new designated spot.</p>
      </section>

      
    </div>
  );
}

export default HomePage;
