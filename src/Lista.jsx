import React, { useEffect, useState } from 'react';
import './Lista.css';

const Lista = () => {
  const [ciudades, setCiudades] = useState(["", "Montevideo", "Maldonado", "Paysandu", "Canelones", "Fray Bentos", "Salto"]);
  const [centros, setCentros] = useState(["Centro 1", "Centro 2", "Centro 3", "Centro 4"]);
  const [centroActual, setCentroActual] = useState("");
  const [ciudadSelecta, setCiudadSelecta] = useState("");
  const [centroSelecto, setCentroSelecto] = useState("");
  const [mostrarCentros, setMostrarCentros] = useState(false);
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleSelectCiudad = (e) => {
    const selectedCity = e.target.value;
    setCiudadSelecta(selectedCity);
    setMostrarCard(false);
    setCentroSelecto(""); // Limpiar la selección del centro cuando cambia la ciudad
  }

  const handleCentro = (e) => {
    const selectedCenter = e.target.value;
    setCentroSelecto(selectedCenter);
    setCentroActual(selectedCenter);
    setMostrarCard(true);
  }

  useEffect(() => {
    if (ciudadSelecta && ciudadSelecta !== "") {
      setMostrarCentros(ciudadSelecta !== "Montevideo");
      setCentroActual(ciudadSelecta === "Montevideo" ? "Central Montevideo" : "");
    } else {
      setMostrarCentros(false);
      setCentroActual(""); // Dejar centroActual vacío si no hay ciudad seleccionada
    }
  }, [ciudadSelecta]);

  return (
    <div className="divDevuelto">
      <h1>Lista de Centros</h1>
      <label htmlFor="ciudades" className="seleccion labels">Selecciona una ciudad:</label>
      <select
        id="ciudades"
        value={ciudadSelecta}
        onChange={handleSelectCiudad}
      >
        {ciudades.map((ciudad) => (
          <option key={ciudad} value={ciudad}>
            {ciudad}
          </option>
        ))}
      </select>

      {mostrarCentros && (
        <div>
          <label htmlFor="centros" className="seleccion labels">Selecciona un centro:</label>
          <select
            id="centros"
            value={centroSelecto}
            onChange={handleCentro}
          >
            <option value="">Seleccionar</option>
            {centros.map((centro) => (
              <option key={centro} value={centro}>
                {centro}
              </option>
            ))}
          </select>
        </div>
      )}

      {ciudadSelecta && ciudadSelecta !== "" && ( // Agregamos una condición para mostrar la tarjeta
        <div className="tarjeta full-withradius border">
          <h2>UCU</h2>
          <p>{centroActual}</p>
        </div>
      )}
    </div>
  );
};

export default Lista;
