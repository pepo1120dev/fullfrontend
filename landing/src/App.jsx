import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Encabezado from "./Encabezado";
import IncendioComponent from "./IncendioComponent";
import TablaIncendioComponent from "./TableIncendioComponent";
import OrganigramaPage from "./pages/OrganigramaPage";
import SitrepPage from "./pages/SitrepPage";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

const incendiosData = [
  {
    imagen: viteLogo,
    titulo: "Activos 1",
    contenido: "Volcan Sincholagua",
  },
  {
    imagen: viteLogo,
    titulo: "Liquidados 0",
    contenido: "",
  },
];
const gruposDeIncendios = [
  [
    {
      provincia: "Pichincha",
      canton: "Quito",
      parroquia: "Pintag",
      sector: "Forestal",
      afectación: "Faldas del Volcán Sincholagua",
      fechaNovedad: "Incendio 1",
      observacion: "Forestal",
    },
    {
      provincia: "Cotopaxi",
      canton: "Latacunga",
      parroquia: "Salasaca",
      sector: "Agrícola",
      afectación: "Cultivos",
      fechaNovedad: "Incendio 2",
      observacion: "Causa desconocida",
    },
  ],
  [
    {
      provincia: "Guayas",
      canton: "Guayaquil",
      parroquia: "Tarqui",
      sector: "Urbano",
      afectación: "Vivienda",
      fechaNovedad: "Incendio 3",
      observacion: "Cortocircuito",
    },
    {
      provincia: "Manabí",
      canton: "Portoviejo",
      parroquia: "Manta",
      sector: "Industrial",
      afectación: "Bodega",
      fechaNovedad: "Incendio 4",
      observacion: "Manipulación de químicos",
    },
  ],
];

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="content-page">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/organigrama"
              element={<OrganigramaPage></OrganigramaPage>}
            />
            <Route path="/sitrep" element={<SitrepPage></SitrepPage>} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
