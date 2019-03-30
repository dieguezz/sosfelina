import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Gallery from '../gallery/gallery.ui'
import Link from '../Link/link.component'
import { getCats } from '../contentful/contentful.service'
import Spinner from '../spinner/spinner.ui'
import Bg from '../../../public/assets/hero-image.jpg'

export default function Adopta({ className }) {
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
        title="SOS Felina Felinae | Adopta un gato"
        link={[{ rel: 'canonical', href: 'https://sosfelinafelinae.es/adopta' }]}
        meta={[
          { property: 'og:title', content: 'SOS Felina Felinae | Adopta un gato' },
          {
            property: 'og:description',
            content: 'Conoce a nuestros gatos y los pasos para adoptar',
          },
          { name: 'Description', content: 'Conoce a nuestros gatos y los pasos para adoptar' },
          { name: 'description', content: 'Conoce a nuestros gatos y los pasos para adoptar' },
          { property: 'og:image', content: `https://sosfelinafelinae.es${Bg}` },
          { property: 'og:image:secure_url', content: `https://sosfelinafelinae.es${Bg}` },
          {
            property: 'og:image:alt',
            content: 'SOS Felina Felinae | Asociación protectora felina',
          },
          { property: 'og:image:width', content: '1200' },
          { property: '<:height', content: '600' },
        ]}
      />

      <header>
        <div>
          <h1>Gatos en adopción</h1>
          <p>Conoce los gatitos que podrían llegar a formar parte de tu familia.</p>
        </div>
      </header>
      <div className="cta">
        <p>Estos pequeñines están esperando un hogar, adoptar es fácil</p>
      </div>
      <div className="inspirational">
        Última actualización: <i>{date}</i>
      </div>
      {cats.length ? (
        <Gallery cats={cats} />
      ) : (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <div className="cta">
        <p>
          Si no puedes <b>adoptar</b>, tienes más formas para
        </p>
        <Link type="button" className="lowercase" to="/colabora" style={{ margin: '1em 0' }}>
          colaborar
        </Link>
      </div>
      <div className="cta">
        <p>Consulta también los</p>
        <Link type="button" primary="true" to="/como-adoptar" style={{ margin: '1em 0' }}>
          pasos para adoptar
        </Link>
      </div>
    </div>
  )
}
