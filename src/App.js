import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts"  element={<ContactPage/>} />
        <Route path="*" component={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
