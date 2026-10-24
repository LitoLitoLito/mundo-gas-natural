import "../estilos/piePagina.css";

function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="contenedor-pie">
        <div className="informacion-pie">
          <h3>Mundo Gas Natural</h3>
          <p>
            Información sobre instalaciones,
            artefactos y seguridad.
          </p>
        </div>

        <div className="derechos-pie">
          <p>
            © 2026 Mundo Gas Natural.
            Proyecto académico de Programación Web II.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;