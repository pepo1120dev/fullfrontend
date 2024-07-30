import IncendioComponent from "./IncendioComponent";
import TablaIncendioComponent from "./TableIncendioComponent";
import ImgTexto from "./imgTexto";
import viteLogo from "/vite.svg";
import "./Sitrep.css";

const data = [
  { imageSrc: viteLogo, text: "Imagen 1" },
  { imageSrc: viteLogo, text: "Imagen 2" },
  { imageSrc: viteLogo, text: "Imagen 3" },
  { imageSrc: viteLogo, text: "Imagen 4" },
  { imageSrc: viteLogo, text: "Imagen 5" },
  { imageSrc: viteLogo, text: "Imagen 6" },
  { imageSrc: viteLogo, text: "Imagen 7" },
  { imageSrc: viteLogo, text: "Imagen 8" },
  { imageSrc: viteLogo, text: "Imagen 9" },
  { imageSrc: viteLogo, text: "Imagen 10" },
  { imageSrc: viteLogo, text: "Imagen 11" },
];

const data2 = [
  { imageSrc: viteLogo, text: "Evaluación del Incendio" },
  { imageSrc: viteLogo, text: "Conformación de Cuadrillas" },
  { imageSrc: viteLogo, text: "Control y liquidación" },
];

const data3 = [
  { imageSrc: viteLogo, text: "Imagen 1" },
  { imageSrc: viteLogo, text: "Imagen 2" },
  { imageSrc: viteLogo, text: "Imagen 3" },
  { imageSrc: viteLogo, text: "Imagen 4" },
  { imageSrc: viteLogo, text: "Imagen 5" },
  { imageSrc: viteLogo, text: "Imagen 6" },
  { imageSrc: viteLogo, text: "Imagen 7" },
  { imageSrc: viteLogo, text: "Imagen 8" },
  { imageSrc: viteLogo, text: "Imagen 9" },
  { imageSrc: viteLogo, text: "Imagen 10" },
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
  [
    {
      provincia: "Azuay",
      canton: "Cuenca",
      parroquia: "Yanuncay",
      sector: "Natural",
      afectación: "Páramo",
      fechaNovedad: "Incendio 5",
      observacion: "Causa natural",
    },
    {
      provincia: "Loja",
      canton: "Loja",
      parroquia: "Catamayo",
      sector: "Forestal",
      afectación: "Bosque",
      fechaNovedad: "Incendio 6",
      observacion: "Incendio intencional",
    },
  ],
];

const incendiosData = [
  {
    imagen: viteLogo,
    titulo: "Activos 1",
    contenido: "Volcan Sincholagua",
  },
  {
    imagen: viteLogo,
    titulo: "Contolados 0",
    contenido: "",
  },
  {
    imagen: viteLogo,
    titulo: "Liquidados 0",
    contenido: "",
  },
];

function Sitrep() {
  return (
    <div>
      <div className="stp-encabezado">
        <h1>Direccion de Operaciones</h1>
        <h2>Unidad Comando de Incidentes</h2>
        <h3>SITREP No 01 - Incendio Forestal</h3>
        <h4>Este Informe cubre el periodo desde las HORA a las HORA</h4>
        <h4>El proximo SITREP sera emitido si se da actividad relevante</h4>
      </div>
      <article>
        <ol classname="custom-list">
          <li class="custom-list-item">
            <h2>Información de relevancia y puntos importantes</h2>
            <ul>
              <li>loremp</li>
              <li>loremp</li>
              <li>loremp</li>
            </ul>
          </li>
          <li>
            <h2>Situación Meteorológica actual</h2>
            <p>...</p>
          </li>
          <li>
            <h2>Incendios forestales</h2>
            <section className="content-page-incendios">
              {incendiosData.map((incendio, index) => (
                <IncendioComponent key={index} {...incendio} />
              ))}
            </section>
            <section>
              <TablaIncendioComponent gruposDeIncendios={gruposDeIncendios} />
            </section>
          </li>
          <li>
            <h2>Afectaciones</h2>
            <div className="stp-aft">
              {data.map((item, index) => (
                <ImgTexto
                  key={index}
                  imageSrc={item.imageSrc}
                  text={item.text}
                />
              ))}
            </div>
          </li>
          <li>
            <h2>Acciones de Respuesta</h2>
            <div className="stf-accrsp">
              {data2.map((item, index) => (
                <ImgTexto
                  key={index}
                  imageSrc={item.imageSrc}
                  text={item.text}
                />
              ))}
            </div>
            <p>titulo</p>
            <ol>
              <li>texto</li>
              <li>texto</li>
              <li>texto</li>
            </ol>
          </li>
          <li>
            <h2>Recursos en la Escena</h2>
            <div className="stf-recesc">
              {data3.map((item, index) => (
                <ImgTexto
                  key={index}
                  imageSrc={item.imageSrc}
                  text={item.text}
                />
              ))}
            </div>
          </li>
        </ol>
      </article>
    </div>
  );
}

export default Sitrep;
