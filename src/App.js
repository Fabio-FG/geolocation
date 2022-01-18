import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
/* import { Routes } from 'react-router-dom'; */
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
