import styled from 'styled-components'
import Contacto from './contacto.component'

export default styled(Contacto)`
  padding: 3em;
  margin-top: 78px;
  color: #666;
  & .flex {
    justify-content: space-between;
  }

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

  span {
    padding: 0 1em;
  }

  @media (max-width: 768px) {
    margin-top: 57px;
    padding: 1em;
    img {
      width: 122px;
    }
  }
`
