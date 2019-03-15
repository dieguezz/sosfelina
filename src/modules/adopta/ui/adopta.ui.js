import styled from 'styled-components'
import Adopta from '../adopta.component'

export default styled(Adopta)`
  & header {
    padding: 5em 3em;
    background-color: black;
    color: white;
    border-radius: 0.25em;
    margin-top: 1em;
  }
  & header p {
    font-size: 1.25rem;
    padding: 1em 0;
  }
  & .cta {
    margin: 2em 0;
    text-align: center;
    font-size: 1.75rem;
    p {
      margin-bottom: 0.5em;
    }
  }

  @media (max-width: 890px) {
    padding: 1px 1em;
  }
`
