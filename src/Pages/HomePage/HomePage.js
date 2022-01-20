import "./HomePage.css";
import Map from "../../Components/LayerOne/Map";


function HomePage() {
  return (
    <div>
      <h1 className="title">Bike App - Geolocation</h1>
      <h5 className="title">Fábio G.</h5>
      <Map />
    </div>
  );
}

export default HomePage;
