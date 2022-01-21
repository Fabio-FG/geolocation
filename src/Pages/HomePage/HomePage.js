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
        <p>This World Bike app was built using React and Leaflet JS a tool that allows us to render an openstreet map. Leaflet JS uses materials such as Markers and Clusters.<br>
        </br>The networks are displayed worldwide and cluster together according to the zoom level.</p>
      </section>
    </div>
  );
}

export default HomePage;
