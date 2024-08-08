import React from "react";
import IncendioComponent from "../IncendioComponent";
import viteLogo from "/vite.svg";
import TablaIncendioComponent from "../TableIncendioComponent";

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

const Home = () => {
  return (
    <div>
      <section className="content-page-incendios">
        {incendiosData.map((incendio, index) => (
          <IncendioComponent key={index} {...incendio} />
        ))}
      </section>
    </div>
  );
};

export default Home;
