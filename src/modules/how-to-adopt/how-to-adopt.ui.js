import styled from 'styled-components'
import HowToAdopt from './how-to-adopt.component'

export default styled(HowToAdopt)`
  header {
    padding: 5em 3em;
    background-color: black;
    color: white;
    border-radius: 0.25em;
    margin-top: 1em;
  }
  & p {
    padding: 1em 0;
    font-size: 1.125rem;
    line-height: 1.5em;
  }
  @media (max-width: 768px) {
    padding: 1em;
  }
`
