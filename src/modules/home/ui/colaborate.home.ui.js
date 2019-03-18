import styled from 'styled-components'
import Colaborate from '../colaborate.component'

export default styled(Colaborate)`
  padding: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  & h1 {
    z-index: 1;
  }

  & > p {
    z-index: 1;
    margin-bottom: 1em;
    font-size: 1.75rem;
    max-width: calc(100% - 270px);
    border-radius: 0.25rem;
    text-align: center;
    color: #78abe1;
  }

  @media (max-width: 768px) {
    & > p {
      max-width: unset;
    }
  }
`
