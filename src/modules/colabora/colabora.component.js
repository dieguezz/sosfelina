import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import Link from '../Link/link.component'
import Bg from '../../../public/assets/colabora-hero.jpg'
import Donate from '../donate/donate.component'

export default function Colabora({ className }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Colabora</title>
        <meta
          name="Description"
          content="Colabora con nosotros para ayudar a los gatitos de la calle a tener una vida mejor"
        />
        <meta property="og:title" content="SOS Felina Felinae | Colabora" />
        <meta
          property="og:description"
          content="Colabora con nosotros para ayudar a los gatitos de la calle a tener una vida mejor"
        />
        <link rel="canonical" href="https://sosfelinafelinae.es/colabora" />
        <meta property="og:image" content={`https://sosfelinafelinae.es${Bg}`} />
        <meta property="og:image:secure_url" content={`https://sosfelinafelinae.es${Bg}`} />
        <meta property="og:image:alt" content="SOS Felina Felinae | Asociación protectora felina" />
        <meta property="og:image:width" content="1200" />
        <meta property="<:height" content="600" />
      </Helmet>
      <header className="head">
        <div>
          <h1>Colabora, muchos gatos necesitan tu ayuda</h1>
          <p>
            Si quieres comprometerte con la causa, estas son las formas en que nos puedes ayudar.
          </p>
          <Link type="button" primary="true" to="contacto">
            Contáctanos
          </Link>
        </div>
      </header>
      <div className="flex">
        <section>
          <header>
            <h1>Haz un donativo</h1>
          </header>
          <p>Puedes realizar un donativo de diferentes formas:</p>
          <ul>
            <li>
              Donar cualquier cantidad a través de PayPal <Donate />
            </li>
            <li>
              Donar 1€ al mes a través de Teaming
              <a
                className="link"
                href="https://www.teaming.net/sosfelinafelinae"
                target="_blank"
                rel="noopener noreferrer">
                Donar
              </a>
            </li>
            <li>Un ingreso en nuestro número de cuenta: BBVA ES49 0182 0954 66 02 0166 0061</li>
            <li>
              Cualquier contribución material, puedes ver nuestra lista de deseos en Amazon
              <a
                className="link"
                href="https://www.amazon.es/hz/wishlist/ls/5HRC5ZSY0E64?&amp;sort=default"
                target="_blank"
                rel="noopener noreferrer">
                Ver lista
              </a>
            </li>
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
          <Link primary="true" type="button" to="/apadrina">
            Apadrina
          </Link>
        </section>
        <section>
          <header>
            <h1>Adopta un gato</h1>
          </header>
          <p>
            Si estás pensando en adoptar un gato, en esta web publicamos a diario los gatitos que
            vamos acogiendo y que necesitan tu ayuda. Ponte en contacto con nosotros y sobre todo,
            no compres.
          </p>
          <Link primary="true" type="button" to="/adopta">
            Adopta
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
            Esta plataforma es muy usada on line diariamente para comprar en miles de tiendas de
            renombre como El Corte Inglés, Aliexpress, Fnac y muchísimas más. A ti te cuesta igual,
            y una parte de lo pagado la empresa lo dona a nuestra asociación.Consulta el{' '}
            <a
              className="link"
              href="https://www.helpfreely.org/es/shops/"
              target="_blank"
              rel="noopener noreferrer">
              listado de tiendas
            </a>
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
        <Link type="button" primary="true" to="contacto">
          Contáctanos
        </Link>
      </section>
    </div>
  )
}
