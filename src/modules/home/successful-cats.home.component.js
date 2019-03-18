import React from 'react'
import Link from '../Link/link.component'

export default function SuccessfulCats({ className }) {
  return (
    <section className={className}>
      <header>
        <h1>Historias de personas que nos han ayudado</h1>
      </header>
      <div className="content">
        <iframe
          title="gatos-de-exito"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/xKCE2jnP-xQ?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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
