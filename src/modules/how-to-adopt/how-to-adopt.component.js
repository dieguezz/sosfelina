import React from 'react'
import Helmet from 'react-helmet'
import Link from '../Link/link.component'

export default function HowToAdopt({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Cómo adoptar</title>
        <link rel="canonical" href="https://sosfelinafelinae.es/como-adoptar" />
        <meta
          name="Description"
          content="Te enseñamos los pasos para adoptar un gato. Queremos darles el mejor hogar posible."
        />
        <meta
          name="description"
          content="Te enseñamos los pasos para adoptar un gato. Queremos darles el mejor hogar posible."
        />
        <meta
          property="og:description"
          content="Te enseñamos los pasos para adoptar un gato. Queremos darles el mejor hogar posible."
        />
        <meta property="og:title" content="SOS Felina Felinae | Cómo adoptar" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/qhgwkj3lu81s/4FzHhePlYHF9CWxs2daloM/7d1969fa583323b97177dd7672cad5f7/SOS-FELINA-Felinae__1___1_.jpg?h=250"
        />
        <meta
          property="og:image:secure_url"
          content="https://images.ctfassets.net/qhgwkj3lu81s/4FzHhePlYHF9CWxs2daloM/7d1969fa583323b97177dd7672cad5f7/SOS-FELINA-Felinae__1___1_.jpg?h=250"
        />
        <meta property="og:image:alt" content="SOS Felina Felinae | Asociación protectora felina" />
        <meta property="og:image:width" content="197" />
        <meta property="<:height" content="250" />
      </Helmet>
      <div>
        <header>
          <h1>Pasos para adoptar</h1>
          <p>En SOS Felina Felinae nos preocupamos por dónde van a vivir nuestros pequeños</p>
        </header>
        <div className="list">
          <ol>
            <li>
              <h2>Entrevista telefónica</h2>
              <p>
                Resolveremos tus dudas y te contaremos las características de la adopción o acogida
              </p>
            </li>
            <li>
              <h2>Visita al gato</h2>
              <p>Podrás venir a ver al gato que has elegido para conocerlo</p>
            </li>
          </ol>
          <ol>
            <li>
              <h2>Formalización de la adopción o acogida</h2>
              <p>
                Una vez te hayas decidido podrás venir a por el gatito y la documentación necesaria
                para la acogida o adopción.
              </p>
            </li>
            <li>
              <h2>Seguimiento</h2>
              <p>
                Estamos a tu disposición a lo largo de la adopción o acogida para darte apoyo y
                seguimiento.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <Link type="button" primary="true" to="contacto">
        Contáctanos
      </Link>
    </div>
  )
}
