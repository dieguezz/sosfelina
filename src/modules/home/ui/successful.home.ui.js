import styled from 'styled-components'
import SuccessfulCats from '../successful-cats.home.component'

export default styled(SuccessfulCats)`
  padding: 3em;
  & .cta {
    font-size: 1.125rem;
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & iframe {
    width: 100%;
    min-height: 400px;
    margin: 0 auto;
    margin: 2em 0;
    display: block;
  }
  @media (max-width: 768px) {
    & iframe {
      min-height: 250px;
    }
  }
`
