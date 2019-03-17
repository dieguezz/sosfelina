import styled from 'styled-components'
import Header from '../header.component'

export default styled(Header)`
  background: #fff;
  left: 0;
  padding: 0;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.15);
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  width: 100%;

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
  & a > img {
    width: 60px;
  }

  & > nav {
    display: flex;
    align-items: center;
    z-index: 9;
  }

  & > nav > a {
    padding: 0.7em;
    text-decoration: none;
    color: #666;
    text-transform: uppercase;
    transition: color ease-in-out 0.35s, font-weight ease-in-out 0.35s;
    border-radius: 0.25em;
    margin: 0 0.2em;
    padding: 25px;
    position: relative;

    &:after {
      background: #78abe1;
      content: '';
      height: 2px;
      left: 0;
      bottom: 0;
      position: absolute;
      transition: width ease-in-out 0.35s;
      width: 0%;
    }
  }

  & > nav > a.active {
    color: #78abe1;
    font-weight: 600;
    border-radius: 0;

    &:after {
      width: 100%;
    }
  }
  & > nav > a:hover {
    color: #78abe1;
    border-radius: 0;

    &:after {
      width: 100%;
    }
  }

  & .title {
    display: none;
  }
  @media (max-width: 992px) {
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
        height: 100vh;
        background-color: #f2f2f2;
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
      background-color: black;
      color: white;
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
