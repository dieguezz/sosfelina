import styled from 'styled-components'
import Footer from './footer.component'

export default styled(Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #131411;
  color: white;
  border-radius: 0.25em;
  margin: 1em 0;

  & .last > * {
    padding: 0 1em;
  }

  & i {
    color: red;
    font-style: normal;
    font-size: 1rem;
  }

  & a {
    color: white;
  }
`
