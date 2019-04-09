import React from 'react'
import Helmet from 'react-helmet'
import Link from '../Link/link.component'
import YouTube from 'react-youtube'

export default function Stories({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Casos de éxito</title>
        <link rel="canonical" href="https://sosfelinafelinae.es/casos-de-exito" />
        <meta
          name="Description"
          content="Historias de las personas que han colaborado con nosotros. Adoptando, acogiendo, o contribuyenndo de algunna manera. Gracias a todos."
        />
        <meta
          name="description"
          content="Historias de las personas que han colaborado con nosotros. Adoptando, acogiendo, o contribuyenndo de algunna manera. Gracias a todos."
        />
        <meta property="og:title" content="SOS Felina Felinae | Casos de éxito" />
        <meta
          property="og:description"
          content="Historias de las personas que han colaborado con nosotros. Adoptando, acogiendo, o contribuyenndo de algunna manera. Gracias a todos."
        />
        <meta property="og:video" content="https://www.youtube.com/embed/mAquBQhiHtU?rel=0" />
      </Helmet>
      <header>
        <h1>Casos de éxito</h1>
        <p>Estas son algunas de las historias que hemos ayudado a escribir</p>
      </header>
      <div className="video">
        <h2>Eva y Carlos</h2>
        <YouTube
          videoId="mAquBQhiHtU" // defaults -> null
          id="eva-y-carlos" // defaults -> null
        />
      </div>
      <div className="video">
        <h2>Maribel</h2>
        <YouTube
          videoId="BhSEpyAgKPo" // defaults -> null
          id="maribel" // defaults -> null
        />
      </div>
      <div className="video">
        <h2>Palmira</h2>
        <YouTube
          videoId="d8nNqMyKDVc" // defaults -> null
          id="palmira" // defaults -> null
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
