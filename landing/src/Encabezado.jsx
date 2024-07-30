import reactLogo from "./assets/images/logo.png";
import "./EncabezadoStyle.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function Encabezado() {
  return (
    <div className="encabezado-container">
      <img src={reactLogo} className="encabezado-img"></img>
      <Router>
        <NavBar NavBar />
        <Routes>
          <Route path="home" element={<Home></Home>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Encabezado;
