import styled from 'styled-components'
import Contacto from './contacto.component'

export default styled(Contacto)`
  padding: 3em;
  & h1 {
    padding-bottom: 1em;
  }

  & a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 0.5em;
    display: inline-block;
  }

  & p {
    padding: 0.5em 0;
  }

  & .block {
    padding-bottom: 2em;
  }
  @media (max-width: 890px) {
    padding: 1em;
  }
`
