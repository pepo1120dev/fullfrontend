import "./IncendioStyle.css"; // Asegúrate de que la ruta sea correcta

function IncendioComponent({ imagen, titulo, contenido }) {
  return (
    <div className="ic-card">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}

export default IncendioComponent;
