import styled from 'styled-components'
import Footer from './footer.component'

export default styled(Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: white;
  border-radius: 0.25em;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  & .last > * {
    padding: 0 1em;
  }

  & i {
    color: red;
    font-style: normal;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    .first  {
      display: none;
    }
  }
`
