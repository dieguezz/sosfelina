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
        <title>SOS Felina Felinae | Gatos en Adopción</title>
        <meta
          name="Description"
          content="Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de Gestionar Éticamente determinadas Colonias Felinas"
        />
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
