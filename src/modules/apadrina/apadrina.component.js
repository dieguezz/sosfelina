import React, { useEffect, useState } from 'react'
import Gallery from '../gallery/gallery.ui'
import Helmet from 'react-helmet'
import { getCats } from '../contentful/contentful.service'
import Link from '../Link/link.component'

export default function Apadrina({ className }) {
  const [cats, setCats] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  useEffect(() => {
    const cats = getCats(setCats)
    return () => cats
  }, [])

  const getDate = date => {
    const day = date.getDate()
    const monthIndex = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${monthIndex}/${year}`
  }
  const date = cats.length ? getDate(cats[0].date) : null
  return (
    <div className={className}>
      <Helmet
        title="SOS Felina Felinae | Apadrina un gato"
        meta={[
          { name: 'Description', content: 'Conoce a nuestros gatos y los pasos para apadrinar' },
          { property: 'og:title', content: 'SOS Felina Felinae | Apadrina un gato' },
          {
            property: 'og:description',
            content: 'Conoce a nuestros gatos y los pasos para apadrinar',
          },
        ]}
      />

      <header>
        <h1>Apadrina un gato</h1>
        <p>
          Puedes apadrinar un gato hasta que sea adoptado. Te informaremos de su estado, podrás
          visitarlo y contribuirás a su bienestar hasta el momento de la acogida.
        </p>
        <Link type="button" primary="true" to="/contacto" style={{ margin: '1em 0' }}>
          contáctanos
        </Link>
      </header>
      <div className="cta">
        <p>Apadrina un gatito con la cantidad que puedas aportar. Desde 1€ al mes</p>
      </div>
      <div className="inspirational">
        Última actualización: <i>{date}</i>
      </div>
      <Gallery cats={cats} />
      <div className="cta">
        <p>
          Todos estos gatitos también están esperando ser <b>adoptados</b>, descubre cómo.
        </p>
        <Link type="button" className="lowercase" to="/adopta" style={{ margin: '1em 0' }}>
          Adopta
        </Link>
      </div>
    </div>
  )
}
