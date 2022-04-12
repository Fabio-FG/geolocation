import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

/* import { useState } from "react"; */

function Navbar({ languages }) {
  //refreshing the page when clicking on the home button in the homepage.
  const refreshPage = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();


  //Location variable - to show certain options if conditions are met.

  const location = useLocation();

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  }

  //useState to display languages
 /*  const [showLanguages, setShowLanguages] = useState(true); */
  //dropdown function

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
          <h1>
            <Link to="/" className="my-name" onClick={refreshPage}>
              WorldBike 🚲
            </Link>
          </h1>
        </div>

        <nav className="nav-container">
          {!isCurrentURL ("/contacts")? <a href="#about">{t("About")}</a> : null}

          {!isCurrentURL ("/")? <Link to="/">{t("Home")}</Link> : null}
          <Link to="/contacts">{t("Contacts")}</Link>

          <div className="language-wrapper">
            {
              languages.map(({ code, name, codename, country_code, country_flag }) => {
                return (
                  
                  <ul className="dropdown-content" key={country_code}>
                    <li className="langs" key={country_code}>
                      <button
                        onClick={() => {
                          i18next.changeLanguage(code);
                        }}
                        className="language-btn"
                        key={country_code}
                      >
                        <img src={country_flag} alt="country-flag" key={country_code} className="country-flag"></img>
                      </button>
                    </li>
                  </ul>
                 
                );
              })}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
