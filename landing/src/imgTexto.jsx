import "./imgTextoStyle.css";
import viteLogo from "/vite.svg";
import persona from "./assets/persona.png";
import herido from "./assets/herido.png";
import personacentro from "./assets/personacentro.png";
import filtracion from "./assets/filtracion.png";
import riego from "./assets/riego.png";
import edificio from "./assets/edificio.png";
import carretera from "./assets/carretera.png";
import vaca from "./assets/vaca.png";
import hospital from "./assets/hospital.png";
import castillo from "./assets/castillo.png";
import ambulancia from "./assets/ambulancia.png";
import motobomba from "./assets/motobomba.png";
import camioneta from "./assets/camioneta.png";
import heli from "./assets/heli.png";
import bombero from "./assets/bombero.png";
import pc from "./assets/pc.png";
import dron from "./assets/dron.png";
import moto from "./assets/moto.png";
import mattel from "./assets/mattel.png";
import canica from "./assets/canica.png";

function ImgTexto({ imageSrc, text }) {
  return (
    <div className="It-container">
      <img
        src={
          imageSrc === "persona"
            ? persona
            : imageSrc === "personacentro"
            ? personacentro
            : imageSrc === "herido"
            ? herido
            : imageSrc === "filtracion"
            ? filtracion
            : imageSrc === "riego"
            ? riego
            : imageSrc === "edificio"
            ? edificio
            : imageSrc === "carretera"
            ? carretera
            : imageSrc === "vaca"
            ? vaca
            : imageSrc === "hospital"
            ? hospital
            : imageSrc === "castillo"
            ? castillo
            : imageSrc === "ambulancia"
            ? ambulancia
            : imageSrc === "motobomba"
            ? motobomba
            : imageSrc === "camioneta"
            ? camioneta
            : imageSrc === "heli"
            ? heli
            : imageSrc === "bombero"
            ? bombero
            : imageSrc === "pc"
            ? pc
            : imageSrc === "dron"
            ? dron
            : imageSrc === "moto"
            ? moto
            : imageSrc === "mattel"
            ? mattel
            : imageSrc === "canica"
            ? canica
            : viteLogo
        }
        alt={text}
      />
      <br></br>
      <p>{text}</p>
    </div>
  );
}

export default ImgTexto;
