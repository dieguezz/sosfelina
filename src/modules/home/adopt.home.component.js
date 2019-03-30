import React from 'react'
import Link from '../Link/link.component'

export default function Adopt({ className }) {
  return (
    <section className={className}>
      <header>
        <h1>SOS Felina Felinae</h1>
        <p>Conoce a nuestros gatitos en adopción, colabora con nuestra asociación</p>
        <Link primary="true" type="button" to="/adopta">
          Adopta un gato
        </Link>
      </header>
    </section>
  )
}
