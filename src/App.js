import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";



function App() {
  

  const languages = [
    {
      code: "pt",
      name: "Portuguese",
      codename: "PT",
      country_code: "pt",
    },

    {
      code: "en",
      name: "English",
      codename: "EN",
      country_code: "gb",
    },
  ];

  return (
    <div>
      <Navbar languages={languages}/>
      {/* <div
        className="container"
        style={{ marginTop: "8%", marginBottom: "5%" }}
      >
        <div
          className="dropdown"
          style={{
            height: "100px",
          }}
        >
          <ul>
            {languages.map(({ code, name, codename, country_code }) => {
              return (
                <li>
                  <button
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
          {t("welcome-message")}
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<HomePage languages={languages}/>} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="*" component={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
