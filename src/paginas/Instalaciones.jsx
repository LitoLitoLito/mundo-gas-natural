import datosInstalaciones from "../datos/datosInstalaciones";
import "../estilos/instalaciones.css";

function Instalaciones() {
  return (
    <main className="pagina-instalaciones">
      <section className="presentacion-instalaciones">
        <p className="etiqueta-instalaciones">
          CONOCIMIENTO Y PREVENCIÓN
        </p>

        <h2>Instalaciones y seguridad</h2>

        <p>
          Conocé algunos aspectos importantes sobre
          las instalaciones de gas natural, los artefactos
          y la prevención de riesgos.
        </p>
      </section>

      <section className="seccion-instalaciones">
        <h2>Guía informativa</h2>

        <div className="rejilla-instalaciones">
          {datosInstalaciones.map((elemento) => (
            <article
              className="tarjeta-instalacion"
              key={elemento.id}
            >
              <img
                src={elemento.imagen}
                alt={elemento.textoImagen}
                className="imagen-instalacion"
                loading="lazy"
              />

              <div className="contenido-instalacion">
                <span className="categoria-instalacion">
                  {elemento.categoria}
                </span>

                <h3>{elemento.titulo}</h3>

                <p>{elemento.descripcion}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="aviso-instalaciones">
          Este contenido es informativo. Los trabajos
          sobre instalaciones de gas deben ser realizados
          por profesionales habilitados y conforme a
          la normativa vigente.
        </p>
      </section>
    </main>
  );
}

export default Instalaciones;