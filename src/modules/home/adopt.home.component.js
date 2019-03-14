import React from 'react'
import AdoptCat from './assets/cat-header.jpg'
import Link from '../Link/link.component'

export default function Adopt({ className }) {
  return (
    <section className={className}>
      <header>
        <h1>Conoce a los gatos que necesitan tu ayuda</h1>
        <p />
        <Link primary="true" type="button" to="/adopta">
          Adopta
        </Link>
      </header>
      <div className="cta">
        <img src={AdoptCat} alt="Adopta un gato" />
      </div>
    </section>
  )
}
