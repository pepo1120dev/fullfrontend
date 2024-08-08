import React from "react";
import reactLogo from "../assets/images/logo.png";
import "../EncabezadoStyle.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="encabezado-container">
      <img src={reactLogo} className="encabezado-img" alt="Logo" />
      <ul className="encabezado-list-ul">
        <li className="encabezado-list-li">
          <Link to="/">Inicio</Link>
        </li>
        <li className="encabezado-list-li">
          <Link to="/organigrama">Organigrama</Link>
        </li>
        <li className="encabezado-list-li">
          <Link to="/sitrep">SITREP</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
