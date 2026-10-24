import { useEffect, useState } from "react";
import "../estilos/inicio.css";

function Inicio() {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    async function obtenerArticulos() {
      try {
        const direccionApi =
          "https://es.wikipedia.org/w/api.php?" +
          "action=query&generator=search" +
          "&gsrsearch=gas%20natural" +
          "&gsrnamespace=0&gsrlimit=6" +
          "&prop=pageimages%7Cextracts" +
          "&piprop=thumbnail&pithumbsize=500" +
          "&exintro=1&explaintext=1&exsentences=3" +
          "&format=json&origin=*";

        const respuesta = await fetch(direccionApi);

        if (!respuesta.ok) {
          throw new Error("No se pudo consultar la API.");
        }

        const datos = await respuesta.json();

        const listaArticulos = datos.query
          ? Object.values(datos.query.pages)
          : [];

        setArticulos(listaArticulos);
      } catch (error) {
        setMensajeError(
          "No se pudo cargar la información. " +
          "Revisá tu conexión e intentá nuevamente."
        );
      } finally {
        setCargando(false);
      }
    }

    obtenerArticulos();
  }, []);

  return (
    <main className="pagina-inicio">
      <section className="presentacion">
        <p className="etiqueta">ENERGÍA Y PREVENCIÓN</p>

        <h2>Bienvenidos a Mundo Gas Natural</h2>

        <p>
          Conocé el gas natural, sus características,
          sus aplicaciones y la importancia de la
          seguridad en las instalaciones.
        </p>
      </section>

      <section className="seccion-articulos">
        <h2>Información sobre gas natural</h2>

        {cargando && (
          <p className="mensaje">
            Cargando información...
          </p>
        )}

        {mensajeError && (
          <p className="mensaje error">
            {mensajeError}
          </p>
        )}

        {!cargando &&
          !mensajeError &&
          articulos.length === 0 && (
            <p className="mensaje">
              No se encontraron artículos.
            </p>
          )}

        <div className="rejilla-articulos">
          {articulos.map((articulo) => (
            <article
              className="tarjeta-articulo"
              key={articulo.pageid}
            >
              {articulo.thumbnail?.source ? (
                <img
                  className="imagen-articulo"
                  src={articulo.thumbnail.source}
                  alt={articulo.title}
                />
              ) : (
                <div className="imagen-alternativa">
                  Información energética
                </div>
              )}

              <div className="contenido-tarjeta">
                <h3>{articulo.title}</h3>

                <p>
                  {articulo.extract ||
                    "Consultá el artículo para conocer más."}
                </p>

                <a
                  href={
                    "https://es.wikipedia.org/?curid=" +
                    articulo.pageid
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Leer artículo
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="fuente-articulos">
          Fuente informativa: Wikipedia en español.
          Los artículos enlazados pertenecen a sus
          respectivos autores y colaboradores.
        </p>
      </section>
    </main>
  );
}

export default Inicio;