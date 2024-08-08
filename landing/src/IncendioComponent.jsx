import "./IncendioStyle.css"; // Asegúrate de que la ruta sea correcta
import viteLogo from "/vite.svg";
import fire from "./assets/fire.png";
import mitigado from "./assets/mitigado.png";

function IncendioComponent({ imagen, titulo, contenido }) {
  return (
    <div className="ic-card">
      <div className="ic-card-upper">
        <img
          src={
            imagen == "fire" ? fire : imagen == "mitigado" ? mitigado : viteLogo
          }
          alt={titulo}
          className="ic-card-img"
        />
      </div>
      <div className="ic-card-lower">
        <h2>{titulo}</h2>

        <p>{contenido}</p>
      </div>
    </div>
  );
}

export default IncendioComponent;
