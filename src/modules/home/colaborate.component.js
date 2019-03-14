import React from 'react'
import Link from '../Link/link.component'

export default function Colaborate({ className }) {
  return (
    <section className={className}>
      <p>
        <b>Apadrina</b>, <b>dona</b>, <b>acoge</b>, <b>asóciate</b> o <b>hazte voluntario</b>.
      </p>
      <Link type="button" to="/colabora">
        Colabora con nosotros
      </Link>
    </section>
  )
}
