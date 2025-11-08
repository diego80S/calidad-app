import { useState } from "react";

function Metrica() {
  const [funcionalidad, setFuncionalidad] = useState(1);
  const [usabilidad, setUsabilidad] = useState(1);
  const [fiabilidad, setFiabilidad] = useState(1);
  const [mantenibilidad, setMantenibilidad] = useState(1);
  const [eficiencia, setEficiencia] = useState(1);

  const resultado = (
    (Number(funcionalidad) + Number(usabilidad) + Number(fiabilidad) + Number(mantenibilidad) + Number(eficiencia)) / 5
  ).toFixed(2);

  return (
    <div>
      <h2>Evaluación Cuantitativa de Calidad (1 a 5)</h2>

      <label>Funcionalidad:</label>
      <input type="number" min="1" max="5" value={funcionalidad} onChange={e => setFuncionalidad(e.target.value)} /> <br />

      <label>Usabilidad:</label>
      <input type="number" min="1" max="5" value={usabilidad} onChange={e => setUsabilidad(e.target.value)} /> <br />

      <label>Fiabilidad:</label>
      <input type="number" min="1" max="5" value={fiabilidad} onChange={e => setFiabilidad(e.target.value)} /> <br />

      <label>Mantenibilidad:</label>
      <input type="number" min="1" max="5" value={mantenibilidad} onChange={e => setMantenibilidad(e.target.value)} /> <br />

      <label>Eficiencia:</label>
      <input type="number" min="1" max="5" value={eficiencia} onChange={e => setEficiencia(e.target.value)} /> <br />

      <h3>Resultado Final: {resultado}</h3>
    </div>
  );
}

export default Metrica;
