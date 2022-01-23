import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";



function Navbar() {

 
//refreshing the page when clicking on the home button in the homepage.
const refreshPage = () => {
  window.scrollTo(0, 0);
};




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
        <h1><Link to="/" className="my-name" onClick={() => {refreshPage()}}>WorldBike 🚲</Link></h1>
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