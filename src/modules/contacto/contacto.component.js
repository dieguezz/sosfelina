import React from 'react'
import Helmet from 'react-helmet'
import Logo from '../../../public/assets/logo.png'

export default function Contacto({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Contacto</title>
        <link rel="canonical" href="https://sosfelinafelinae.es/contacto" />
        <meta
          name="Description"
          content="Contacta con nosotros. Te informaremos de todo lo necesario para empezar a ayudar. Estamos en Madrid y en Aranjuez"
        />
        <meta
          name="description"
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
          <section>
            <h2>Teléfonos:</h2>
            <ul>
              <li>
                <a itemProp="telephone" href="tel:647665310">
                  647 665 310
                </a>{' '}
                (Ana)
              </li>
              <li>
                <a itemProp="telephone" href="tel:626978712">
                  626 978 712
                </a>{' '}
                (Sonia)
              </li>
            </ul>
          </section>
          <section>
            <h2>Email:</h2>
            <a itemProp="email" href="mailto:sosfelinaaranjuez@gmail.com">
              sosfelinaaranjuez@gmail.com
            </a>
          </section>
          <section itemScope itemType="http://schema.org/LocalBusiness">
            <h2>Dirección:</h2>
            <h3 itemProp="name">SOS Felina Felinae</h3>
            <ul>
              <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="streetAddress">Calle Santiago Rusiñol, 1</span>
                <span itemProp="addressLocality">Aranjuez, Madrid</span>
                <span itemProp="postalCode">28300</span>
                <span itemProp="addressCountry">España</span>
              </li>
            </ul>
          </section>
        </div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
