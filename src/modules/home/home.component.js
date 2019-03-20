import React, { useEffect } from 'react'
import Adopt from './ui/adopt.home.ui'
import Colaborate from './ui/colaborate.home.ui'
import SuccessfulCats from './ui/successful.home.ui'
import WhoWeAre from './ui/whoWeAre.home.ui'
import Helmet from 'react-helmet'

export default function Home({ className }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Asociación protectora felina</title>
        <meta
          name="Description"
          content="Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de Gestionar Éticamente determinadas Colonias Felinas"
        />
        <meta
          property="og:description"
          content="Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de Gestionar Éticamente determinadas Colonias Felinas"
        />
        <meta property="og:title" content="SOS Felina Felinae | Gatos en Adopción" />
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
      <Adopt />
      <Colaborate />
      <p className="inspirational">Devuelve un poco al mundo ayudando a quien más te necesita</p>
      <WhoWeAre />
      <div className="dark-divider" />
      <SuccessfulCats />
    </div>
  )
}
