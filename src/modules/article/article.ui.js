import styled from 'styled-components'
import Article from './article.component'

export default styled(Article)`
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  line-height: 1.65em;
  font-size: 1.25rem;
  & header > h1 {
    margin-bottom: 1em;
  }
  & img {
    border-radius: 0.25rem;
    margin: 2em 0;
    display: block;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    padding: 1em;
  }
`
