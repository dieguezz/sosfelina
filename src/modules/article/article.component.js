import React, { useState, useEffect } from 'react'
import { getEntry } from '../contentful/contentful.service'
import Helmet from 'react-helmet'

export default function Article({ match, className }) {
  const [{ title, cuerpo, shortText }, setEntry] = useState({})
  useEffect(() => {
    const result = getEntry(setEntry, match.params.id)
    return () => result
  }, [])

  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | {`${title}`}</title>
        <meta name="Description" content={shortText} />
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
      <header>
        <h1>{title}</h1>
      </header>
      {cuerpo}
    </div>
  )
}
