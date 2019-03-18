import styled from 'styled-components'
import Stories from './stories.component'

export default styled(Stories)`
  max-width: 1200px;
  margin: 78px auto;
  padding: 3em;
  position: relative;
  a {
    margin: 1em 0;
  }
  .flex {
    justify-content: center;
  }
  p {
    color: #888;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #78abe1;
    padding: 0.5em 0;
    margin-top: 2em;
  }
  iframe {
    width: 100%;
    height: auto;
    min-height: 400px;
  }
  .dark-divider {
    margin-top: 4em;
  }
  @media (max-width: 768px) {
    padding: 1em;
    margin-top: 57px;
  }
`
