import { Routes, Route } from "react-router-dom";
import Cabezal from "./componentes/Cabezal";
import PiePagina from "./componentes/PiePagina";

import Contacto from "./paginas/Contacto";
import Inicio from "./paginas/Inicio";
import Instalaciones from "./paginas/Instalaciones";

import "./estilos/general.css";

function App() {
  return (
    <div className="aplicacion">
      <Cabezal />

      <div className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route
            path="/instalaciones"
            element={<Instalaciones />}
          />

          <Route
            path="/contacto"
            element={<Contacto />}
          />
        </Routes>
      </div>

      <PiePagina />
    </div>
  );
}

export default App;