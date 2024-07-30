import React from "react";
import reactLogo from "../assets/images/logo.png";
import "../EncabezadoStyle.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="encabezado-container">
      <img src={reactLogo} className="encabezado-img"></img>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/organigrama">Organigrama</Link>
        </li>
        <li>
          <Link to="/sitrep">SITREP</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
