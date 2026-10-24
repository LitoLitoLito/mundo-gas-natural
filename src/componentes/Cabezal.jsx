import { Link } from "react-router-dom";
import "../estilos/cabezal.css";

function Cabezal() {
  return (
    <header className="cabezal">
      <div className="contenedor-cabezal">
        <Link className="marca" to="/">
          <span className="icono-gas">♨</span>

          <div>
            <h1>Mundo Gas Natural</h1>
            <p>Instalaciones, artefactos y seguridad</p>
          </div>
        </Link>

        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/instalaciones">Instalaciones</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Cabezal;