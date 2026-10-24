import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../estilos/contacto.css";

function Contacto() {
  const formulario = useRef();

  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  async function enviarMensaje(evento) {
    evento.preventDefault();

    setEnviando(true);
    setMensaje("");
    setTipoMensaje("");

    try {
      await emailjs.sendForm(
  "service_it37762",
  "template_6ownkhr",
  formulario.current,
  {
    publicKey: "r428JjMGpzSRYd0jc",
  }
      );

      setMensaje("¡Mensaje enviado correctamente!");
      setTipoMensaje("exito");
      formulario.current.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);

      setMensaje(
        "No se pudo enviar el mensaje. " +
        "Revisá la configuración e intentá nuevamente."
      );

      setTipoMensaje("error");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="pagina-contacto">
      <section className="encabezado-contacto">
        <p className="etiqueta-contacto">
          ESTAMOS PARA AYUDARTE
        </p>

        <h2>Contacto</h2>

        <p>
          Completá el formulario para enviarnos
          tu consulta sobre Mundo Gas Natural.
        </p>
      </section>

      <div className="contenido-contacto">
        <section className="formulario-contenedor">
          <h3>Envianos un mensaje</h3>

          <form
            ref={formulario}
            onSubmit={enviarMensaje}
            className="formulario-contacto"
          >
            <label htmlFor="nombre">Nombre completo</label>

            <input
              type="text"
              id="nombre"
              name="from_name"
              placeholder="Escribí tu nombre"
              required
              minLength={2}
              maxLength={100}
            />

            <label htmlFor="correo">
              Correo electrónico
            </label>

            <input
              type="email"
              id="correo"
              name="from_email"
              placeholder="tu@correo.com"
              required
              maxLength={150}
            />

            <label htmlFor="asunto">Asunto</label>

            <input
              type="text"
              id="asunto"
              name="subject"
              placeholder="Motivo de la consulta"
              required
              maxLength={150}
            />

            <label htmlFor="mensaje">Mensaje</label>

            <textarea
              id="mensaje"
              name="message"
              placeholder="Escribí tu consulta..."
              rows="5"
              required
              minLength={10}
              maxLength={3000}
            />

            <button type="submit" disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar mensaje"}
            </button>

            {mensaje && (
              <p
                className={`estado-mensaje ${tipoMensaje}`}
                role="status"
                aria-live="polite"
              >
                {mensaje}
              </p>
            )}
          </form>
        </section>

        <section className="mapa-contenedor">
          <h3>Encontranos en el mapa</h3>

          <p>
            Mapa de referencia de la ciudad de Salta.
          </p>

          <iframe
            title="Mapa de la ciudad de Salta"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-65.43%2C-24.81%2C-65.39%2C-24.77&layer=mapnik"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href="https://www.openstreetmap.org/#map=14/-24.79/-65.41"
            target="_blank"
            rel="noreferrer"
          >
            Abrir mapa completo
          </a>
        </section>
      </div>
    </main>
  );
}

export default Contacto;