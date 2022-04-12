import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import portugalFlag from "./images/pt.svg"
import unitedKingdomFlag from "./images/gb.svg"



function App() {
  

  const languages = [
    {
      code: "pt",
      name: "Portuguese",
      codename: "PT",
      country_code: "pt",
      country_flag: `${portugalFlag}`
    },

    {
      code: "en",
      name: "English",
      codename: "EN",
      country_code: "gb",
      country_flag: `${unitedKingdomFlag}`
    },
  ];

  return (
    <div>
      <Navbar languages={languages}/>
      
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
