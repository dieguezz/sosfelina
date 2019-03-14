import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledLink = styled(RouterLink)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  transition: border-color linear 0.2s, color linear 0.2s, background-color linear 0.2s;
  text-decoration: none;
  ${props =>
    props.type === 'text' &&
    css`
      color: ${props => (props.primary ? '#f2f2f2' : '#131411')};
      border: 2px solid transparent;
      &:hover {
        border-bottom: 2px solid ${props => (props.primary ? '#f2f2f2' : '#131411')};
      }
      padding: 0;
    `}
  ${props =>
    props.type === 'button' &&
    css`
      border: 2px solid
        ${props => (!props.noborder && (props.primary ? '#f2f2f2' : '#131411')) || 'transparent'};
      color: ${props => (props.primary ? '#f2f2f2' : '#131411')};
      padding: 0.7em;
      border-radius: ${props => (props.noborder ? '0' : '.25rem')};
      &:hover {
        background-color: ${props => (props.primary ? '#f2f2f2' : '#131411')};
        border-color: transparent;
        color: ${props => (props.primary ? '#131411' : '#f2f2f2')};
      }
    `};
`

export default function Link({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>
}
