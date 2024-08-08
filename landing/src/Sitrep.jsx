import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import IncendioComponent from "./IncendioComponent";
import TablaIncendioComponent from "./TableIncendioComponent";
import ImgTexto from "./imgTexto";
import viteLogo from "/vite.svg"; // Importa el logo aquí
import "./Sitrep.css";
import { io } from "socket.io-client";

const Sitrep = () => {
  const [sitrepList, setSitrepList] = useState([]);
  const [selectedSitrep, setSelectedSitrep] = useState(null);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const socket = useRef(null); // Referencia al socket
  const previousSitrepId = useRef(null); // Referencia para almacenar el ID de la sala anterior

  useEffect(() => {
    socket.current = io("http://192.168.12.21:3000");

    socket.current.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.current.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    socket.current.on("sitrep-item-added", (newSitrep) => {
      console.log("Received new table item:", newSitrep);
      setSitrepList((prevItems) => [...prevItems, newSitrep]);
    });

    socket.current.on("sitrep-updated", (updatedSitrep) => {
      console.log("Received SITREP update:", updatedSitrep);
      setSelectedSitrep(updatedSitrep);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://192.168.12.21:8080/ServiciosRest/resources/sinnombre/listarSitrep"
      )
      .then((response) => {
        console.log("Lista de SITREPs recibida:", response.data);
        setSitrepList(response.data);
        setLoadingList(false);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de SITREPs:", error);
        setLoadingList(false);
      });
  }, []);

  const loadSitrepDetails = (id) => {
    setLoadingDetails(true);
    axios
      .get(
        `http://192.168.12.21:8080/ServiciosRest/resources/sinnombre/sitrep/${id}`
      )
      .then((response) => {
        console.log("Detalles del SITREP recibidos:", response.data);
        console.log(id);

        // Abandonar la sala anterior si existe
        if (previousSitrepId.current && socket.current) {
          socket.current.emit("leave-sitrep", previousSitrepId.current);
        }

        // Unirse a la nueva sala
        if (socket.current) {
          socket.current.emit("join-sitrep", id);
        }

        previousSitrepId.current = id;

        setSelectedSitrep(response.data);
        setLoadingDetails(false);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del SITREP:", error);
        setLoadingDetails(false);
      });
  };

  const updateSitrep = (updatedSitrep) => {
    if (selectedSitrep && socket.current) {
      socket.current.emit("update-sitrep", selectedSitrep.id, updatedSitrep);
    }
  };

  if (loadingList) {
    return <p>Cargando lista de SITREPs...</p>;
  }

  return (
    <div>
      <h1>Seleccione un SITREP</h1>
      <ul>
        {sitrepList.map((sitrep) => (
          <li key={sitrep.id} onClick={() => loadSitrepDetails(sitrep.id)}>
            {sitrep.ordenSitrep}
          </li>
        ))}
      </ul>

      {loadingDetails && <p>Cargando detalles del SITREP...</p>}

      {selectedSitrep && (
        <div>
          <div className="stp-encabezado">
            <h1>Direccion de Operaciones</h1>
            <h2>Unidad Comando de Incidentes</h2>
            <h3>{selectedSitrep.form01[0].text}</h3>{" "}
            {/* Ajusta según tus datos */}
            <h4>Este Informe cubre el periodo desde las HORA a las HORA</h4>
            <h4>El proximo SITREP sera emitido si se da actividad relevante</h4>
          </div>
          <article>
            <ol className="custom-list">
              <li className="custom-list-item">
                <h2>Información de relevancia y puntos importantes</h2>
                <ul>
                  {selectedSitrep.form01.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h2>Situación Meteorológica actual</h2>
                {selectedSitrep.form02.map((item, index) => (
                  <span key={index}>
                    {item.text}
                    {". "}
                  </span>
                ))}
              </li>
              <li>
                <h2>Incendios forestales</h2>
                <section className="content-page-incendios">
                  {selectedSitrep.form03.map((incendio, index) => (
                    <IncendioComponent key={index} {...incendio} />
                  ))}
                </section>
                <section>
                  {selectedSitrep.form03.map((incendio, index) => (
                    <TablaIncendioComponent
                      key={index}
                      gruposDeIncendios={
                        Array.isArray(incendio.tabla) ? incendio.tabla : []
                      }
                    />
                  ))}
                </section>
              </li>
              <li>
                <h2>Afectaciones</h2>
                <div className="stp-aft">
                  {selectedSitrep.form04.map((item, index) => (
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
                  {selectedSitrep.form05grafic.map((item, index) => (
                    <ImgTexto
                      key={index}
                      imageSrc={item.imageSrc}
                      text={item.text}
                    />
                  ))}
                </div>
                <p>titulo</p>
                <ol>
                  {selectedSitrep.form05.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ol>
              </li>
              <li>
                <h2>Recursos en la Escena</h2>
                <div className="stf-recesc">
                  {selectedSitrep.form06.map((item, index) => (
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
      )}
    </div>
  );
};

export default Sitrep;
