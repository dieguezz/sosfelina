import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Gallery from './ui/gallery.adopta.ui'
import Link from '../Link/link.component'
import { getCats } from '../contentful/contentful.service'

export default function Adopta({ className }) {
  const [cats, setCats] = useState([])

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
        title="SOS Felina Felinae | Adopta un gato"
        meta={[
          { name: 'Description', content: 'Conoce a nuestros gatos y los pasos para adoptar' },
        ]}
      />

      <header>
        <h1>Gatos en adopción</h1>
        <p>
          Conoce los gatitos que podrían llegar a formar parte de tu familia. Conoce cada historia y
          los
        </p>
        <Link type="button" primary="true" to="/como-adoptar" style={{ margin: '1em 0' }}>
          pasos para adoptar
        </Link>
      </header>
      <div className="cta">
        <p>
          Si no puedes <b>adoptar</b>, tienes más formas para
        </p>
        <Link type="button" className="lowercase" to="/colabora" style={{ margin: '1em 0' }}>
          colaborar
        </Link>
      </div>
      <div className="inspirational">
        Última actualización: <i>{date}</i>
      </div>
      <Gallery cats={cats} />
    </div>
  )
}
