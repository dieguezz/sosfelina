import React, { useEffect, useState } from 'react'
import { getCat } from '../contentful/contentful.service'
import Link from '../Link/link.component'
import SocialShare from '../social-share/social-share.ui'
import Helmet from 'react-helmet'

function Pics({ srcs, name }) {
  return (srcs && srcs.map((src, index) => <img src={src} alt={name} key={index} />)) || null
}

export default function AdoptItem({ match, className }) {
  const [cat, setCat] = useState({})

  useEffect(() => {
    const result = getCat(setCat, match.params.id)
    return () => result
  }, [])

  const url = `https://sosfelina.z6.web.core.windows.net${match.url}`
  return (
    <div className={className}>
      <Helmet
        title={`SOS Felina Felinae | Adopta ${cat.name ? ` a ${cat.name}` : ' un gato'}`}
        meta={[
          {
            name: 'description',
            content: `Conoce a ${
              cat.name ? `${cat.name}` : ' este gato'
            } y los pasos para adoptarlo, apadrinarlo, o ayudarlo de alguna otra manera.`,
          },
        ]}
      />
      <h1>{cat.name}</h1>
      <p>{cat.text}</p>
      <div className="cta">
        <Link type="button" to="/contacto">
          Adoptar o apadrinar
        </Link>
        <div className="social-share">
          <p>Comparte</p>
          <SocialShare url={url} />
        </div>
      </div>
      <div className="pics">
        <Pics srcs={cat.pictures} name={cat.name} />
      </div>
    </div>
  )
}
