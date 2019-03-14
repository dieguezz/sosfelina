import React from 'react'
import Helmet from 'react-helmet'
import Link from '../Link/link.component'

export default function Colabora({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Colabora</title>
        <meta
          name="Description"
          content="Colabora con nosotros para ayudar a los gatitos de la calle a tener una vida mejor"
        />
        <meta
          name="image"
          content="https://sosfelina.z6.web.core.windows.net/static/media/logo.846aa2e2.png"
        />
        <meta itemprop="name" content="SOS Felina Felinae | Gatos en Adopción" />
        <meta
          itemprop="description"
          content="Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de Gestionar Éticamente determinadas Colonias Felinas"
        />
        <meta
          itemprop="image"
          content="https://sosfelina.z6.web.core.windows.net/static/media/logo.846aa2e2.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SOS Felina Felinae | Gatos en Adopción" />
        <meta
          name="twitter:description"
          content="Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de Gestionar Éticamente determinadas Colonias Felinas"
        />
        <meta name="twitter:site" content="@FelinaFelinae" />
        <meta name="twitter:creator" content="@FelinaFelinae" />
        <meta
          name="twitter:image:src"
          content="https://sosfelina.z6.web.core.windows.net/static/media/logo.846aa2e2.png"
        />
        <meta name="og:title" content="SOS Felina Felinae | Gatos en Adopción" />
        <meta
          name="og:description"
          content="Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de Gestionar Éticamente determinadas Colonias Felinas"
        />
        <meta
          name="og:image"
          content="https://sosfelina.z6.web.core.windows.net/static/media/logo.846aa2e2.png"
        />
        <meta name="og:url" content="sosfelinafelinae.org" />
        <meta name="og:site_name" content="SOS Felina Felinae" />
        <meta name="og:locale" content="es_ES" />
        <meta
          name="og:video"
          content="https://www.youtube.com/watch?v=s-7kyOnywCI&list=UUCsR7ARmqW55o2GhumpN-iw&index=4&t=3s"
        />
        <meta name="fb:app_id" content="edit-later" />
        <meta name="og:type" content="website" />
      </Helmet>
      <header className="head">
        <h1>Colabora, muchos gatos necesitan tu ayuda</h1>
        <p>Si quieres comprometerte con la causa, estas son las formas en que nos puedes ayudar.</p>
      </header>
      <div className="flex">
        <section>
          <header>
            <h1>Haz un donativo</h1>
          </header>
          <p>Puedes realizar un donativo de diferentes formas:</p>
          <ul>
            <li>
              Donar 1€ al mes a través de{' '}
              <a
                className="link"
                href="https://www.teaming.net/sosfelinafelinae"
                target="_blank"
                rel="noopener noreferrer">
                Teaming
              </a>
            </li>
            <li>Un ingreso en nuestro número de cuenta: BBVA ES49 0182 0954 66 02 0166 0061</li>
            <li>Cualquier contribución material, puedes ver nuestra lista de deseos en Amazon</li>
          </ul>
        </section>
        <section>
          <header>
            <h1>Apadrina un gato</h1>
          </header>
          <p>
            Si quieres, puedes apadrinar un gatito, contribuyendo con la aportación que puedas para
            su manutención / gastos veterinarios. Podrás venir a visitarlo siempre que quieras y te
            mandaremos actualizaciones periódicas de su estado.
          </p>
          <Link primary="true" type="button" to="/contacto">
            Contacta con nosotros
          </Link>
        </section>
      </div>
      <div className="flex">
        <section className="help-freely">
          <header>
            <h1>Help Freely</h1>
          </header>
          <p>
            Sabes que comprando a través de{' '}
            <a
              className="link"
              href="https://www.helpfreely.org/es/nonprofits/es/sos-felina-felinae-7515/"
              target="_blank"
              rel="noopener noreferrer">
              Help Freely
            </a>{' '}
            nos ayudas?
          </p>
          <p>
            Esta plataforma es muy usada on line diariamente para comprar pienso, billetes de avión,
            reservas hoteleras, objetos para mascotas, etc.
          </p>
          <p>
            A ti te cuesta igual, y una parte de lo pagado a esa empresa va a nuestra asociación.
          </p>
          <p>
            Si quieres saber más, mira este vídeo o{' '}
            <Link type="text" to="/contacto">
              contáctanos
            </Link>
            .
          </p>
        </section>
        <section>
          <header>
            <h1>Casa de acogida</h1>
          </header>
          <p>
            Puedes <b>dar cobijo</b> a nuestros animales y ofrecerles la oportunidad de una vida
            mejor, cuidándolos y preparándolos{' '}
            <b>para finalmente derivar en una Adopción Responsable</b>. Mientras, todos los gastos
            corren por cuenta de la Asociación.
          </p>
          <p>
            Si quieres saber cómo hacerlo,{' '}
            <Link type="text" primary="true" to="/contacto">
              contacta con nosotros
            </Link>
            , es muy sencillo.
          </p>
        </section>
      </div>
      <section>
        <header>
          <h1>Hazte voluntario</h1>
        </header>
        <p>
          En S.O.S. Felina FELINAE no dejamos de crecer!!! Estamos continuamente en búsqueda de
          personas que quieran colaborar de manera voluntaria en nuestro proyecto en función de su
          disponibilidad e intereses. Lo único que pedimos es seriedad y constancia, después todo
          depende de la disponibilidad que tenga cada uno. Las labores en las que puedes participar
          e involucrarte son:
        </p>
        <ul>
          <li>
            Realizar semanalmente y durante todo el año el Método CES (Capturar – Esterilizar –
            Soltar) en colonias felinas.
          </li>
          <li>
            Alimentar colonias felinas y apoyar en su mantenimiento: higiene, accesibilidad, etc.
          </li>
          <li>
            Colaborar en rescates y traslados a veterinarios, casas de acogida, centros de recogida
            de animales, eventos, etc.
          </li>
          <li>Participar en eventos solidarios como mercadillos, charlas, eventos,etc.</li>
          <li>
            Colaborar en los Encuentros para La Adopción: montaje de stands, información, gestión de
            adopciones, etc.
          </li>
          <li>Promover la Difusión en páginas especializadas y redes sociales</li>
          <li>
            Realizar materiales para la difusión o la comunicación de la actividad de la Asociación
            como Fotografías o Videos
          </li>
          <li>Realizar labores puntuales de limpieza de Colonias y conservación de espacios</li>
          <li>Búsqueda de patrocinadores</li>
          <li>
            Apoyar en cualquier actividad o proyecto de la Asociación según las necesidades de las
            Colonias y las negociaciones con los Ayuntamientos
          </li>
        </ul>
      </section>
    </div>
  )
}
