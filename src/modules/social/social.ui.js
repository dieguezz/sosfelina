import styled from 'styled-components'
import Social from './social.component'

export default styled(Social)`
  & a p {
    display: none;
  }

  & a {
    padding: 0.25em;
  }
  position: absolute;
  top: 1.25em;
  right: 1em;
  margin: auto;

  & ul {
    display: flex;
  }
  & img {
    width: 20px;
    padding: 0.5em;
    background-color: white;
    border-radius: 0.25em;
  }

  @media (max-width: 890px) {
    right: 0.5em;
    top: 0.5em;
    position: fixed;
    z-index: 9;
  }
`
