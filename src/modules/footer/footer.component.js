import React from 'react'

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <p>Nuestros patrocinadores</p>
      <small>
        Desarrollado con <i>&hearts;</i> por{' '}
        <a href="https://etereo.io" target="_blank" rel="noopener noreferrer">
          etéreo
        </a>
        .
      </small>
      <div className="last">
        <small>
          <b itemprop="legalName">© SOS Felina Felinae 2019</b>
        </small>
      </div>
    </footer>
  )
}
