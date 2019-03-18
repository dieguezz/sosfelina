import styled from 'styled-components'
import ArticleItem from '../article-item.blog.component'

export default styled(ArticleItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 2em 0;
  max-width: 1200px;
  background-color: white;
  padding: 2em;
  border-radius: 0.25rem;
  width: 100%;
  & h1 {
    font-size: 1.5em;
    text-transform: uppercase;
  }
  & p {
    line-height: 1.2rem;
    color: #666;
    padding: 1.5em 0;
  }
`
