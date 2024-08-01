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
  const socket = useRef(null);

  useEffect(() => {
    // Cargar la lista de items usando REST
    axios
      .get("http://localhost:3000/items")
      .then((response) => {
        setItems(response.data);
        setLoadingItems(false);
      })
      .catch((error) => {
        console.error("Error fetching the items data", error);
        setLoadingItems(false);
      });
  }, []);

  useEffect(() => {
    // Conectar a Socket.IO
    socket.current = io("http://localhost:3000");

    return () => {
      // Desconectar el socket cuando el componente se desmonta
      socket.current.disconnect();
    };
  }, []);

  const fetchOrgChart = (id) => {
    setLoading(true);
    setSelectedItemId(id);

    // Obtener el organigrama específico usando REST
    axios
      .get(`http://localhost:8080/orguser/${id}`)
      .then((response) => {
        setOrgData(response.data);
        setLoading(false);

        // Unirse a la sala del organigrama específico
        socket.current.emit("join-orgchart", id);

        // Escuchar actualizaciones del organigrama
        socket.current.on("orgchart-updated", (updatedOrgChart) => {
          if (id === selectedItemId) {
            setOrgData(updatedOrgChart);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching the org data", error);
        setLoading(false);
      });
  };

  const MyNodeComponent = ({ node }) => {
    return (
      <section className="initechNode">
        <p className="node-name">{node.entidad}</p>
        <p className="node-actor">{node.funcion}</p>
      </section>
    );
  };

  return (
    <div className="App" id="initechOrgChart">
      {loadingItems ? (
        <p>Loading items...</p>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                onClick={() => fetchOrgChart(item.id)}
                className={selectedItemId === item.id ? "selected-row" : ""}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {loading ? (
        <p>Loading org chart...</p>
      ) : orgData ? (
        <div className="org-chart-wrapper">
          <OrgChart tree={orgData} NodeComponent={MyNodeComponent} />
        </div>
      ) : (
        <p>Select an item to view the organizational chart</p>
      )}
    </div>
  );
};

export default App;
