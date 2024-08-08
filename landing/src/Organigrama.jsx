import React, { useState, useEffect, useRef } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import "./OrganigramaStyle.css";
import axios from "axios";
import { io } from "socket.io-client";

const App = () => {
  const [items, setItems] = useState([]);
  const [orgData, setOrgData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingItems, setLoadingItems] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [previousItemId, setPreviousItemId] = useState(null); // Nuevo estado para la sala anterior
  const socket = useRef(null);
  const [orgChartMessage, setOrgChartMessage] = useState("");

  useEffect(() => {
    socket.current = io("http://192.168.12.21:3000");

    socket.current.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.current.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    // Escuchar el evento de nuevo item de tabla
    socket.current.on("table-item-added", (newItem) => {
      console.log("Received new table item:", newItem);
      setItems((prevItems) => [...prevItems, newItem]);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (selectedItemId) {
      // Dejar la sala anterior si existe
      if (previousItemId) {
        console.log(`Leaving room: ${previousItemId}`);
        socket.current.emit("leave-orgchart", previousItemId);
      }

      // Unirse a la nueva sala
      console.log(`Joining room: ${selectedItemId}`);
      socket.current.emit("join-orgchart", selectedItemId);

      const handleOrgChartUpdated = (updatedOrgChart) => {
        console.log("Received updated org chart:", updatedOrgChart);
        setOrgData(updatedOrgChart);
      };

      socket.current.on("orgchart-updated", handleOrgChartUpdated);

      // Actualizar el estado de la sala anterior
      setPreviousItemId(selectedItemId);

      return () => {
        console.log("Cleaning up listeners for orgchart-updated");
        socket.current.off("orgchart-updated", handleOrgChartUpdated);
      };
    }
  }, [selectedItemId]);

  useEffect(() => {
    axios
      .get(
        "http://192.168.12.21:8080/ServiciosRest/resources/sinnombre/listarPartes"
      )
      .then((response) => {
        setItems(response.data);
        setLoadingItems(false);
      })
      .catch((error) => {
        console.error("Error fetching the items data", error);
        setLoadingItems(false);
      });
  }, []);

  const fetchOrgChart = (id) => {
    setLoading(true);
    setSelectedItemId(id);

    axios
      .get(
        `http://192.168.12.21:8080/ServiciosRest/resources/sinnombre/orgByParte/${id}`
      )
      .then((response) => {
        if (response.data && Object.keys(response.data).length > 0) {
          setOrgData(response.data);
          setOrgChartMessage("");
        } else {
          setOrgData(null);
          setOrgChartMessage("Aún no existe organigrama para esta parte.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the org data", error);
        setLoading(false);
        setOrgChartMessage("Error al cargar el organigrama.");
      });
  };

  const MyNodeComponent = ({ node }) => {
    return (
      <section className="initechNode">
        <p className="node-name">{node.nombreUsuario}</p>
        <p className="node-actor">{node.funcion}</p>
      </section>
    );
  };

  return (
    <div className="App" id="initechOrgChart">
      {loadingItems ? (
        <p>Loading items...</p>
      ) : (
        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>parte</th>
                <th>estacion</th>
                <th>especialidad</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => fetchOrgChart(item.id)}
                  className={selectedItemId === item.id ? "selected-row" : ""}>
                  <td>{item.id}</td>
                  <td>{item.estacion}</td>
                  <td>{item.especialidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {loading ? (
        <p>Loading org chart...</p>
      ) : orgData ? (
        <div className="org-chart-wrapper">
          <OrgChart tree={orgData} NodeComponent={MyNodeComponent} />
        </div>
      ) : (
        <p className="org-chart-message">
          {orgChartMessage || "Seleccione un parte para ver el organigrama"}
        </p>
      )}
    </div>
  );
};

export default App;
