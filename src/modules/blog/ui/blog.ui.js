import styled from 'styled-components'
import Blog from '../blog.component'

export default styled(Blog)`
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  & input {
    width: 320px;
    padding: 0.5em;
    border: 1px solid black;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: 0;
    margin-top: 2em;
    font-size: 1.25em;
  }
  @media (max-width: 768px) {
    padding: 1em;
  }
`
