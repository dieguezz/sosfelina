import styled from 'styled-components'
import Colabora from './colabora.component'
import Bg from '../../../public/assets/colabora-hero.jpg'
export default styled(Colabora)`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 78px;
  color: #888;
  & .head {
    position: relative;
    padding: 0 3em;
    margin-top: 1em;
    color: #78abe1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 600px;
    background-image: url(${Bg});
    background-position: 80% 50%;
    background-size: cover;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: white;
    width: 100vw;
    transform: translateX(-50%);
    margin-left: 50%;
    div {
      padding-left: 3em;
    }
    * {
      z-index: 1;
    }
    border-radius: 0.25em;
    p {
      font-size: 1.125rem;
      padding: 1em 0;
    }
    h1,
    p {
      max-width: 60%;
    }
  }

  & p {
    padding: 1em 0;
    font-size: 1.125rem;
    line-height: 1.75em;
  }

  & header:not(.head) h1 {
    font-size: 2rem;
  }

  & ul {
    margin: 1em;
    border-radius: 0.25em;
    li {
      padding: 1em;
      text-transform: uppercase;
      font-size: 0.85rem;
      font-weight: bold;
      background-color: white;
      &:nth-child(even) {
        background-color: #f8f8f8;
      }
      &:before {
        content: '- ';
      }
    }
  }
  .flex {
    flex-direction: column;
  }
  & section {
    flex: 1 1;
    margin: 1em 0;
    padding: 1em 0;
    background-color: #f8f8f8;
    padding: 3em;
    &:last-child ul {
      margin-bottom: 2em;
    }
  }

  & section .link {
    text-decoration: none;
    color: black;
    border-bottom: 2px solid black;
    padding: 0;
  }
  @media (max-width: 768px) {
    margin-top: 57px;
    ul {
      margin: 0;
    }
    .head  {
      padding-top: 1em;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
      }
      h1 {
        max-width: 100%;
        margin-bottom: 1em;
      }
      p {
        display: none;
      }
    }
  }
`
