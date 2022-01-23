import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ContactPage from "../../Pages/ContactPage/ContactPage";


function Navbar() {

  //useEffect for the scroll 
  useEffect(() => { 
  let url = window.location.href.split("/");
  let target = url[url.length - 1].toLowerCase();
  let element = document.getElementById(target);
  element && element.scrollIntoView({ behavior: "smooth", block: "start" });
}, []);


//refreshing the page when clicking on the home button in the homepage.
const refreshPage = () => {
  window.location.reload();
}

  return (
    <div className="container">
      {/* this should be a header */}
      <header className="header">
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <label for="nav-toggle" className="nav-toggle-label">
        {/* Hamburguer using span */}
          <span></span>
        </label>
        
        <div className="logo">
        <h1><a href="/" className="my-name" onClick={refreshPage}>WorldBike🚲</a></h1>
        </div>

        <nav className="nav-container">
          <a href="#about">About</a>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;