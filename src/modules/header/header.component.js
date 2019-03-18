import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Logo from '../../../public/assets/logo.png'

const initialState = false

export default function Header({ className }) {
  const wrapperRef = useRef(null)
  const [isOpen, toggleMenu] = useState(initialState)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = e => {
    if (wrapperRef.current.contains(e.target)) {
      return
    }
    toggleMenu(false)
  }
  return (
    <header className={className} ref={wrapperRef}>
      <img itemprop="logo" src={Logo} alt="SOS Felina Felinae" />
      <div className="menu">
        <div className="hamburguer" onClick={() => toggleMenu(!isOpen)}>
          Menu
        </div>
        <div className="title">SOS Felina Felinae</div>
      </div>
      <nav
        itemscope
        itemtype="http://www.schema.org/SiteNavigationElement"
        className={isOpen ? 'open' : ''}>
        <NavLink
          itemprop="url"
          onClick={() => toggleMenu(false)}
          exact
          activeClassName="active"
          to="/">
          Inicio
        </NavLink>
        <NavLink
          itemprop="url"
          onClick={() => toggleMenu(false)}
          activeClassName="active"
          to="/adopta">
          Adopta
        </NavLink>
        <NavLink
          itemprop="url"
          onClick={() => toggleMenu(false)}
          exact
          activeClassName="active"
          to="/colabora">
          Colabora
        </NavLink>
        <NavLink
          itemprop="url"
          onClick={() => toggleMenu(false)}
          exact
          activeClassName="active"
          to="/contacto">
          Contacto
        </NavLink>
        <NavLink
          itemprop="url"
          onClick={() => toggleMenu(false)}
          activeClassName="active"
          to="/blog">
          Blog
        </NavLink>
      </nav>
    </header>
  )
}
