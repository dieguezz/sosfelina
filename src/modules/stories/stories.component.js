import React from 'react'
import Helmet from 'react-helmet'
import Link from '../Link/link.component'

export default function Stories({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Casos de éxito</title>
        <meta
          name="Description"
          content="Historias de las personas que han colaborado con nosotros. Adoptando, acogiendo, o contribuyenndo de algunna manera. Gracias a todos."
        />
      </Helmet>
      <header>
        <h1>Casos de éxito</h1>
        <p>Estas son algunas de las historias que hemos ayudado a escribir</p>
      </header>
      <div className="video">
        <h2>Eva y Carlos</h2>
        <iframe
          title="Eva y Carlos"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/mAquBQhiHtU?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="video">
        <h2>Maribel</h2>
        <iframe
          title="Maribel"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/xKCE2jnP-xQ?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="video">
        <h2>Ana</h2>
        <iframe
          title="Ana"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/Z-sC6ftVd4Y?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="flex">
        <Link to="/" type="button">
          Ir a la home
        </Link>
      </div>
    </div>
  )
}
