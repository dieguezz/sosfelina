import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Logo from '../../../public/assets/logo.png'

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  font-weight: bold;
`

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
      <img src={Logo} alt="SOS Felina Felinae" />
      <StyledMenu>
        <div className="hamburguer" onClick={() => toggleMenu(!isOpen)}>
          Menu
        </div>
        <div className="title">SOS Felina Felinae</div>
      </StyledMenu>
      <nav className={isOpen ? 'open' : ''}>
        <NavLink onClick={() => toggleMenu(false)} exact activeClassName="active" to="/">
          Inicio
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} activeClassName="active" to="/adopta">
          Adopta
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} exact activeClassName="active" to="/colabora">
          Colabora
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} exact activeClassName="active" to="/nosotros">
          Nosotros
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} exact activeClassName="active" to="/contacto">
          Contacto
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} activeClassName="active" to="/blog">
          Blog
        </NavLink>
      </nav>
      <p>
        <a className="phone" href="tel:911111111">
          <small>Llámanos:</small> 911111111
        </a>
        <a className="phone" href="tel:666666666">
          <small>Whatsapp:</small> 666666666
        </a>
      </p>
    </header>
  )
}
