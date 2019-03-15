import styled from 'styled-components'
import Header from '../header.component'

export default styled(Header)`
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
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
    margin-top: 7px;
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
    & > nav {
      margin-left: 0;
      display: none;
      &.open {
        margin-bottom: 1em;
        width: 100vw;
        background-color: white;
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
      left: 80px;
      top: 0.25em;
      width: 40px;
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
