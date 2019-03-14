import styled from 'styled-components'
import Header from '../header.component'

export default styled(Header)`
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  // border-bottom: 4px solid #131411;
  & > div {
    display: none;
  }
  & .phone {
    text-decoration: none;
    font-weight: bold;
    color: #666;
    font-style: italic;
    small {
      font-weight: normal;
    }
    &:not(:last-child) {
      margin-left: 1em;
    }
  }
  & > img {
    position: absolute;
    right: 2em;
    top: 1em;
    border: 4px solid #131411;
    background-color: white;
    padding: 1em;
    width: 70px;
  }

  & > nav {
    display: flex;
    align-items: center;
    align-self: flex-end;
    z-index: 9;
  }

  & > nav > a {
    padding: 0.7em;
    text-decoration: none;
    color: #666;
    text-transform: uppercase;
    transition: color linear 0.2s, background-clolor linear 0.2s;
  }

  & > nav > a:hover,
  & > nav > a.active {
    color: white;
    background-color: #131411;
  }
  & .title {
    display: none;
  }
  @media (max-width: 890px) {
    position: fixed;
    top: 0;
    left: 0;
    align-items: flex-start;
    width: 100vw;
    background-color: #f2f2f2;
    flex-direction: column;
    & > div {
      display: inherit;
    }
    & .title {
      display: block;
      padding-right: 1em;
      font-size: 1.25em;
    }
    & > nav {
      display: none;
      &.open {
        margin-bottom: 1em;
        width: 100%;
        flex-direction: column;
        display: flex;
        align-self: flex-start;
        & a {
          align-self: flex-start;
          width: 100%;
        }
      }
    }
    img {
      display: none;
    }
    & .hamburguer {
      display: block;
      padding: 1em;
      background-color: black;
      color: white;
    }
    nav + p {
      margin-top: 0.5em;
      display: flex;
    }
  }
`
