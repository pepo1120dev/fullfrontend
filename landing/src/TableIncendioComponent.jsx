import "./TableIncendioStyle.css";

function TablaIncendioComponent({ gruposDeIncendios }) {
  return (
    <div>
      {gruposDeIncendios.map((grupo, grupoIndex) => (
        <table
          key={grupoIndex}
          className="tb-incendio"
          id={`tabla-${grupoIndex}`}>
          <caption className="tb-incendio-cap">
            <strong>Grupo de Incendios {grupoIndex + 1}</strong>
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
            {grupo.map((incendio, incendioIndex) => (
              <tr key={incendioIndex}>
                <td>{incendioIndex + 1}</td>
                <td>{incendio.provincia}</td>
                <td>{incendio.canton}</td>
                <td>{incendio.parroquia}</td>
                <td>{incendio.sector}</td>
                <td>{incendio.afectación}</td>
                <td>{incendio.fechaNovedad}</td>
                <td>{incendio.observacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default TablaIncendioComponent;
