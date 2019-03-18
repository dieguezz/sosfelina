import styled from 'styled-components'
import Nosotros from './nosotros.component'

export default styled(Nosotros)`
  max-width: 1200px;
  margin: 78px auto;
  padding: 3em;
  header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  p {
    color: #666;
    padding: 0.5em 0;
  }
  li {
    padding: 0.5em;
    background-color: #78abe1;
    color: white;
    margin: 0.5em 0;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #78abe1;
    padding: 0.5em 0;
  }
  .inspirational {
    margin: 2em 0;
  }
  @media (max-width: 768px) {
    margin-top: 57px;
  }
`
