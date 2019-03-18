import styled from 'styled-components'
import Header from '../header.component'

export default styled(Header)`
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: fixed;
  width: 100vw;
  background-color: white;
  top: 0;
  padding: 1em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
    left: 1em;
    top: 0.25em;
    width: 60px;
    position: absolute;
  }

  & > nav {
    display: flex;
    align-items: center;
    align-self: flex-end;
    z-index: 9;
    margin-left: 69px;
    margin-top: 2px;
  }

  & > nav > a {
    padding: 0.7em;
    text-decoration: none;
    color: #666;
    font-weight: bold;
    text-transform: uppercase;
    transition: color linear 0.2s, background-clolor linear 0.2s;
    border-radius: 0.25em;
    margin: 0 0.2em;
    border: 1px solid transparent;
  }

  & > nav > a:hover,
  & > nav > a.active {
    color: #78abe1;
    border: 1px solid #78abe1;
    font-weight: bold;
  }
  & .title {
    display: none;
  }
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    align-items: flex-start;
    padding: 0;
    width: 100vw;
    flex-direction: column;

    & > div {
      display: inherit;
    }
    & > nav {
      margin-left: 0;
      display: none;
      &.open {
        margin-bottom: 1em;
        width: 100vw;
        height: 100vh;
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
      margin: 0.55em;
      border-radius: 0.25em;
      padding: 0.5em;
      background-color: white;
      color: #000000;
      text-transform: uppercase;
      font-weight: bold;
      border: 2px solid black;
    }
    nav + p {
      margin-top: 0.5em;
      display: flex;
    }
    & nav a {
      border-radius: 0;
      margin: 0;
    }
  }
`
