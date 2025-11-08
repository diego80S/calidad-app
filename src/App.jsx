import Normas from "./components/Normas";
import Modelos from "./components/Modelos";
import Estandares from "./components/Estandares";
import Codigo from "./components/Codigo";
import Pruebas from "./components/Pruebas";
import Conclusiones from "./components/Conclusiones";
import Recomendaciones from "./components/Recomendaciones";
import Metrica from "./components/Metrica";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Calidad de Software</h1>

      <nav style={{ textAlign: "center", marginBottom: "30px" }}>
        <a href="#normas">Normas</a> |{" "}
        <a href="#modelos">Modelos</a> |{" "}
        <a href="#estandares">Estándares</a> |{" "}
        <a href="#codigo">Código</a> |{" "}
        <a href="#pruebas">Pruebas</a> |{" "}
        <a href="#conclusiones">Conclusiones</a> |{" "}
        <a href="#recomendaciones">Recomendaciones</a> | {" "}
        <a href="#metrica">Métrica</a> |

      </nav>

      <section id="normas"><Normas /></section>
      <section id="modelos"><Modelos /></section>
      <section id="estandares"><Estandares /></section>
      <section id="codigo"><Codigo /></section>
      <section id="pruebas"><Pruebas /></section>
      <section id="conclusiones"><Conclusiones /></section>
      <section id="recomendaciones"><Recomendaciones /></section>
      <section id="metrica"><Metrica /></section>
    </div>
  );
}

export default App;
