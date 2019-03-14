import styled from 'styled-components'
import Colabora from './colabora.component'

export default styled(Colabora)`
  padding: 3em;
  & .head {
    p {
      font-size: 1.125rem;
      padding: 1em 0;
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
    background-color: white;
    padding: 1em;
    border-radius: 0.25rem;
    li {
      padding: 0.5em 0;
      text-transform: uppercase;
      font-size: 0.85rem;
      font-weight: bold;
      color: #666;
      letter-spacing: 0.15em;
    }
  }

  & section {
    flex: 1 1;
    border: 1px solid black;
    border-radius: 0.25rem;
    margin: 1em;
    padding: 2em;
    &:nth-of-type(even) {
      background-color: black;
      color: white;
    }
  }

  & section .link {
    text-decoration: none;
    color: black;
    border-bottom: 2px solid black;
    padding: 0;
  }
  @media (max-width: 890px) {
    padding: 1em;
    .head  {
      padding-top: 1em;
    }
  }
`
