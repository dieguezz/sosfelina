import styled from 'styled-components'
import ArticleItem from '../article-item.blog.component'

export default styled(ArticleItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2em 2em;
  border: 1px solid black;
  margin: 2em 0;
  border-radius: 0.25rem;
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
