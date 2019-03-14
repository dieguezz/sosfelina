import styled from 'styled-components'
import Social from './social.component'

export default styled(Social)`
  & a p {
    display: none;
  }

  & a {
    padding: 0.25em;
  }

  & {
    position: absolute;
    top: 2em;
    right: -3.5em;
    margin: auto;
  }
  @media (max-width: 890px) {
    & ul {
      display: flex;
    }
    position: absolute;
    top: -98px;
    right: 125px;
    margin: auto;
    margin: auto;
    z-index: 9;
    transform: scale(0.5);
  }
`
