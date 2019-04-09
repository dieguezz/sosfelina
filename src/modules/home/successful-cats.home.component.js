import React from 'react'
import Link from '../Link/link.component'
import YouTube from 'react-youtube'

export default function SuccessfulCats({ className }) {
  return (
    <section className={className}>
      <header>
        <h1>Historias de personas que nos han ayudado</h1>
      </header>
      <div className="content">
        <YouTube
          videoId="BhSEpyAgKPo" // defaults -> null
          id="gatos-de-exito-video" // defaults -> null
        />
        <div className="cta">
          <p>
            Otras personas nos han ayudado.{' '}
            <Link type="text" to="/casos-de-exito">
              Conócelas
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
