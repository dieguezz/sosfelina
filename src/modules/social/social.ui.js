import styled from 'styled-components'
import Social from './social.component'

export default styled(Social)`
  position: fixed;
  top: 1em;
  right: 1em;
  margin: auto;
  z-index: 9;
  & a p {
    display: none;
  }

  & a {
    padding: 0.25em;
    text-decoration: none;
    color: black;
  }

  & ul {
    display: flex;
    align-items: center;
    li:first-child {
      background-color: #ed0719;
      color: white;
      display: block;
      padding: 0.5em;
      border-radius: 0.25em;
      margin-top: -3px;
    }
  }
  & img {
    width: 20px;
    padding: 0.5em;
    background-color: white;
    border-radius: 0.25em;
  }

  @media (max-width: 992px) {
    right: 1em;
    top: 0.5em;
    position: fixed;
    z-index: 9;
    ul li:first-child {
      display: none;
    }
  }
`
