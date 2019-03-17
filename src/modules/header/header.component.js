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

      <NavLink onClick={() => toggleMenu(false)} exact activeClassName="active" to="/">
        <img src={Logo} alt="SOS Felina Felinae" />
      </NavLink>
      <StyledMenu>
        <div className="hamburguer" onClick={() => toggleMenu(!isOpen)}>
          Menu
        </div>
        <div className="title">SOS Felina Felinae</div>
      </StyledMenu>
      <nav className={isOpen ? 'open' : ''}>

        <NavLink onClick={() => toggleMenu(false)} activeClassName="active" to="/adopta">
          Adopta
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} exact activeClassName="active" to="/colabora">
          Colabora
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} exact activeClassName="active" to="/contacto">
          Contacto
        </NavLink>
        <NavLink onClick={() => toggleMenu(false)} activeClassName="active" to="/blog">
          Blog
        </NavLink>
      </nav>

    </header>
  )
}
