import styled from 'styled-components'
import HowToAdopt from './how-to-adopt.component'

export default styled(HowToAdopt)`
  margin-top: 78px;
  padding: 3em;
  header {
    padding-bottom: 3em;
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
    margin-top: 57px;
  }
`
