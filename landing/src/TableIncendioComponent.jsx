import "./TableIncendioStyle.css";

function TablaIncendioComponent({ gruposDeIncendios }) {
  return (
    <div>
      <table className="tb-incendio">
        <caption className="tb-incendio-cap">
          <strong>Lista de Incendios</strong>
        </caption>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Provincia</th>
            <th>Cantón</th>
            <th>Parroquia</th>
            <th>Sector</th>
            <th>Afectación(Ha)</th>
            <th>Fecha de Novedad</th>
            <th>Observacion</th>
          </tr>
        </thead>
        <tbody>
          {gruposDeIncendios.map((incendio, incendioIndex) => (
            <tr key={incendioIndex}>
              <td>{incendioIndex + 1}</td>
              <td>{incendio.provincia}</td>
              <td>{incendio.canton}</td>
              <td>{incendio.parroquia}</td>
              <td>{incendio.sector}</td>
              <td>{incendio.afectacion}</td>
              <td>{incendio.fechaNovedad}</td>
              <td>{incendio.observacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaIncendioComponent;
