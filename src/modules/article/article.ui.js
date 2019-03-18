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
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 78px;
  & header > h1 {
    color: #78abe1;
    line-height: 1.25em;
    background-color: white;
    padding: 1em;
    border-radius: 0.25em;
    text-transform: uppercase;
    font-size: 1.5em;
  }
  & img {
    border-radius: 0.25rem;
    margin: 2em 0;
    display: block;
    max-width: 100%;
  }
  & .body {
    padding: 2em;
    background-color: white;
    border-radius: 0.25em;
    color: #666;
    margin: 1em 0;
  }
  p {
    padding: 0.5em 0;
    font-size: 1rem;
    text-align: justify;
  }
  a {
    text-decoration: none;
    color: #78abe1;
    &:hover {
      border-bottom: 1px solid #78abe1;
    }
  }
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5em;
  }
  @media (max-width: 768px) {
    padding: 1em;
    margin-top: 57px;
  }
`
