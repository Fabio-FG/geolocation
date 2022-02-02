import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
/* import { useState } from "react"; */

function Navbar({ languages }) {
  //refreshing the page when clicking on the home button in the homepage.
  const refreshPage = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();

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
          <a href="#about">{t("About")}</a>
          <Link to="/contacts">{t("Contacts")}</Link>

          <div className="language-wrapper">
            {
              languages.map(({ code, name, codename, country_code }) => {
                return (
                  
                  <ul className="dropdown-content">
                    <li className="langs">
                      <button
                        onClick={() => {
                          i18next.changeLanguage(code);
                        }}
                        className="language-btn"
                      >
                        {codename}
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
