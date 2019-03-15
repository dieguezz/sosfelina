import React from 'react'
import Helmet from 'react-helmet'

export default function Contacto({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Contacto</title>
        <meta
          name="Description"
          content="Contacta con nosotros. Te informaremos de todo lo necesario para empezar a ayudar."
        />
      </Helmet>

      <h1>Contacta con nosotros</h1>
      <div className="flex">
        <div className="block">
          <h2>Teléfonos:</h2>
          <ul>
            <li>
              <a href="tel:647665310">647 665 310</a> (Ana)
            </li>
            <li>
              <a href="tel:626978712">626 978 712</a> (Sonia)
            </li>
          </ul>
          <h2>Email:</h2>
          <a href="mailto:sosfelinaaranjuez@gmail.com">sosfelinaaranjuez@gmail.com</a>
          <ul />
        </div>
      </div>
    </div>
  )
}
