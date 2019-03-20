import React from 'react'
import Helmet from 'react-helmet'
import Logo from '../../../public/assets/logo.png'

export default function Contacto({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Contacto</title>
        <meta
          name="Description"
          content="Contacta con nosotros. Te informaremos de todo lo necesario para empezar a ayudar."
        />
        <meta property="og:title" content="SOS Felina Felinae | Contacto" />
        <meta
          property="og:description"
          content="Contacta con nosotros. Te informaremos de todo lo necesario para empezar a ayudar."
        />
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

      <h1>Contacta con nosotros</h1>
      <div className="flex">
        <div className="block">
          <h2>Teléfonos:</h2>
          <ul>
            <li>
              <a itemprop="telephone" href="tel:647665310">
                647 665 310
              </a>{' '}
              (Ana)
            </li>
            <li>
              <a itemprop="telephone" href="tel:626978712">
                626 978 712
              </a>{' '}
              (Sonia)
            </li>
          </ul>
          <h2>Email:</h2>
          <a itemprop="email" href="mailto:sosfelinaaranjuez@gmail.com">
            sosfelinaaranjuez@gmail.com
          </a>
          <ul />
        </div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
