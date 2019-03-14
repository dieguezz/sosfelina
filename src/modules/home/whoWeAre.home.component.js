import React from 'react'
import Link from '../Link/link.component'

export default function WhoWeAre({ className }) {
  return (
    <section className={className}>
      <header>
        <h1>Sos Felina Felinae</h1>
      </header>
      <p>
        "Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de
        Gestionar Éticamente determinadas Colonias Felinas. Surge en 2015 por la iniciativa de
        Alimentadores de estas Colonias y se convierte en un grupo de Socios, Voluntarios y
        Colaboradores dedicados a la Protección Felina.""
      </p>
      <Link type="button" to="/nosotros">
        ¡Conócenos!
      </Link>
    </section>
  )
}
