import React from 'react'

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="first">
        <p>Nuestros patrocinadores</p>
      </div>
      <div className="last">
        <small>
          <b itemprop="legalName">© SOS Felina Felinae 2019</b>
        </small>
      </div>
    </footer>
  )
}
