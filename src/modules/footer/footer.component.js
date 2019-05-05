import React from 'react'
import Donate from '../donate/donate.component'

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="first">
        <Donate />
      </div>
      <div className="last">
        <small>
          <b itemProp="legalName">© SOS Felina Felinae 2019</b>
        </small>
      </div>
    </footer>
  )
}
