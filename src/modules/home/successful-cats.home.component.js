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
          title="foo"
          src="https://www.youtube.com/embed/s-7kyOnywCI?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="cta">
          <p>
            Otras personas nos han ayudado.{' '}
            <Link type="text" to="/gatos-con-suerte">
              Conócelas
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
